#' Triangle form (mesh spec v0.1)
#'
#' `tri_form()` normalises the output of a triangulation engine to the
#' triangle form of mesh spec v0.1, so neither engine has to change before
#' meshcore can use it. `tri_mesh()` runs an engine and returns the form in
#' one call.
#'
#' The form is a named list of four data frames:
#'
#' * `vertices`: `x`, `y`, any attribute columns, `origin` (a factor with the
#'   spec dictionary `input`, `crossing`, `steiner`, `grid`, `lattice`) and,
#'   when the engine has stable ids, `id`. Input vertices come first, in input
#'   order (after duplicates are merged).
#' * `triangles`: `v0`, `v1`, `v2` (1-based rows of `vertices`, wound
#'   counter-clockwise in xy), `depth` (constraint crossings from outside,
#'   counting a doubled boundary once per copy) and, when available,
#'   `depth_distinct` (a doubled boundary counted once).
#' * `constraints`: `v0`, `v1` (1-based rows of `vertices`, `v0 < v1`), the
#'   mesh edges lying on input segments, and, when the engine provides them,
#'   `segment` (the lowest input segment covering the edge) and `count` (how
#'   many input segments cover it). laridae calls this table `segments` and
#'   cdtr calls it `S`; `tri_form()` renames both to the spec name (Decision 7).
#' * `report`: one row recording `backend`, `package` (engine version),
#'   `erase`, `refined`, `min_edge_length` and the row counts.
#'
#' Row references are 1-based, as the spec requires in R; they become
#' 0-based only when the form is written to Arrow. The list carries
#' attributes `meshspec` (`version`, `form`, `crs`), `input_map` (the vertex
#' row of each input point, so features can be followed into the mesh) and
#' `unrefined` (the engine's own refinement report, unchanged).
#'
#' @param x For `tri_form()`, the result of [cdtr::cdt_triangulate()] (or
#'   [cdtr::cdt_triangulate_attr()]), of [laridae::lari_triangulate()] or
#'   [laridae::lari_tables()], or a laridae mesh handle. For `tri_mesh()`,
#'   vertex x coordinates.
#' @param erase The erase choice the engine was asked for ("outer", "holes"
#'   or "hull"). Taken from the engine output when it records it (laridae);
#'   cdtr does not, so give it here, or it is recorded as `NA`. For a laridae
#'   mesh handle, the triangles to return.
#' @param crs Carried in the `meshspec` attribute, not interpreted.
#' @param y Vertex y coordinates.
#' @param s0,s1 1-based indices into `x`, `y` of constraint segment ends, or
#'   `NULL`.
#' @param PA Optional numeric matrix of per-vertex attributes (one row per
#'   input vertex, named columns), interpolated onto new vertices.
#' @param engine `"cdtr"` (the default) or `"laridae"`. laridae gives the
#'   constraint-to-input map, and refines where the domain is the convex hull.
#' @param max_area,min_angle Refinement targets, or `NULL` for none.
#' @param ... Passed to the engine.
#' @returns A list of class `meshcore_tri` with `vertices`, `triangles`,
#'   `constraints` and `report`.
#' @export
#' @examples
#' if (requireNamespace("cdtr", quietly = TRUE)) {
#'   ## a square with a square hole
#'   x <- c(0, 1, 1, 0, 0.25, 0.75, 0.75, 0.25)
#'   y <- c(0, 0, 1, 1, 0.25, 0.25, 0.75, 0.75)
#'   s0 <- 1:8; s1 <- c(2, 3, 4, 1, 6, 7, 8, 5)
#'   m <- tri_mesh(x, y, s0, s1, erase = "holes", max_area = 0.01)
#'   m
#'   ## the same from an engine result
#'   tri_form(cdtr::cdt_triangulate(x, y, s0, s1, erase = "holes"), erase = "holes")
#' }
tri_form <- function(x, erase = NULL, crs = NA_character_) {
  if (inherits(x, "meshcore_tri")) return(x)
  if (inherits(x, "laridae_mesh")) {
    erase <- erase %||% "outer"
    tabs <- laridae::lari_tables(x, erase)
    tabs$ids <- attr(x, "ids")
    return(tri_form_laridae(tabs, crs))
  }
  if (is.list(x) && all(c("P", "T", "S", "depth") %in% names(x))) {
    return(tri_form_cdtr(x, erase, crs))
  }
  if (is.list(x) && all(c("vertices", "triangles", "segments") %in% names(x))) {
    if (!is.null(erase) && !is.null(x$report$erase) && !identical(erase, x$report$erase)) {
      warning("`erase` differs from the erase recorded by laridae; using laridae's")
    }
    return(tri_form_laridae(x, crs))
  }
  stop("not a recognised engine result: expected cdtr (P, T, S) or laridae (vertices, triangles, segments) output")
}

#' @rdname tri_form
#' @export
tri_mesh <- function(x, y, s0 = NULL, s1 = NULL, PA = NULL,
                     engine = c("cdtr", "laridae"),
                     max_area = NULL, min_angle = NULL,
                     erase = c("outer", "holes", "hull"),
                     crs = NA_character_, ...) {
  engine <- match.arg(engine)
  erase <- match.arg(erase)
  ## with no constraints there is no boundary, so every triangle is kept
  if (length(s0) == 0L) erase <- "hull"
  if (!is.null(PA)) {
    PA <- as.matrix(PA)
    if (is.null(colnames(PA))) colnames(PA) <- paste0("a", seq_len(ncol(PA)))
  }
  if (engine == "cdtr") {
    if (!requireNamespace("cdtr", quietly = TRUE)) stop("engine \"cdtr\" needs the cdtr package")
    r <- cdtr::cdt_triangulate_attr(x, y, s0, s1, PA = PA,
                                    max_area = max_area, min_angle = min_angle,
                                    erase = erase, depth_distinct = TRUE, ...)
  } else {
    if (!requireNamespace("laridae", quietly = TRUE)) stop("engine \"laridae\" needs the laridae package")
    r <- laridae::lari_triangulate(x, y, s0, s1, PA = PA,
                                   max_area = max_area, min_angle = min_angle,
                                   erase = erase, ...)
  }
  out <- tri_form(r, erase = erase, crs = crs)
  out$report$refined <- !is.null(max_area) || !is.null(min_angle)
  out
}

## the spec's origin dictionary (Decision 4)
origin_levels <- c("input", "crossing", "steiner", "grid", "lattice")

tri_form_cdtr <- function(r, erase, crs) {
  P <- r$P
  vertices <- data.frame(x = as.double(P[, 1]), y = as.double(P[, 2]))
  if (!is.null(r$PA) && ncol(r$PA) > 0L) {
    vertices <- cbind(vertices, as.data.frame(r$PA))
  }
  vertices$origin <- factor(as.character(r$origin %||% vertex_origin_fallback(r)),
                            levels = origin_levels)
  triangles <- data.frame(v0 = r$T[, 1], v1 = r$T[, 2], v2 = r$T[, 3],
                          depth = as.integer(r$depth))
  if (!is.null(r$depth_distinct)) triangles$depth_distinct <- as.integer(r$depth_distinct)
  constraints <- data.frame(v0 = pmin(r$S[, 1], r$S[, 2]), v1 = pmax(r$S[, 1], r$S[, 2]))
  report <- data.frame(backend = "cdtr", package = pkg_version("cdtr"),
                       erase = erase %||% NA_character_,
                       refined = nrow(P) > (r$n_input + (r$n_crossing %||% 0L)),
                       min_edge_length = as.double(r$min_edge_length %||% NA_real_),
                       stringsAsFactors = FALSE)
  new_tri(vertices, triangles, constraints, report,
          input_map = as.integer(r$input_map), unrefined = r$unrefined, crs = crs)
}

tri_form_laridae <- function(r, crs) {
  vertices <- r$vertices
  vertices$origin <- factor(as.character(vertices$origin), levels = origin_levels)
  ## keep x, y and attributes first, then origin and id
  tail_cols <- intersect(c("origin", "id"), names(vertices))
  vertices <- vertices[c(setdiff(names(vertices), tail_cols), tail_cols)]
  triangles <- r$triangles
  constraints <- r$segments
  sw <- constraints$v0 > constraints$v1
  if (any(sw)) {
    v0 <- constraints$v0
    constraints$v0[sw] <- constraints$v1[sw]
    constraints$v1[sw] <- v0[sw]
  }
  rep <- r$report
  report <- data.frame(backend = "laridae",
                       package = rep$package %||% pkg_version("laridae"),
                       erase = rep$erase %||% NA_character_,
                       refined = isTRUE(rep$refined) || !is.null(r$unrefined),
                       min_edge_length = as.double(r$min_edge_length %||% rep$min_edge_length %||% NA_real_),
                       stringsAsFactors = FALSE)
  input_map <- NULL
  if (!is.null(r$ids) && !is.null(vertices$id)) input_map <- match(r$ids, vertices$id)
  new_tri(vertices, triangles, constraints, report,
          input_map = input_map, unrefined = r$unrefined %||% rep, crs = crs)
}

new_tri <- function(vertices, triangles, constraints, report, input_map, unrefined, crs) {
  for (v in c("v0", "v1", "v2")) triangles[[v]] <- as.integer(triangles[[v]])
  for (v in c("v0", "v1")) constraints[[v]] <- as.integer(constraints[[v]])
  triangles <- ccw_triangles(vertices$x, vertices$y, triangles)
  o <- order(constraints$v0, constraints$v1)
  constraints <- constraints[o, , drop = FALSE]
  rownames(constraints) <- rownames(triangles) <- rownames(vertices) <- NULL
  report$n_vertices <- nrow(vertices)
  report$n_triangles <- nrow(triangles)
  report$n_constraints <- nrow(constraints)
  structure(list(vertices = vertices, triangles = triangles,
                 constraints = constraints, report = report),
            meshspec = list(version = "0.1", form = "tri", crs = crs),
            input_map = input_map, unrefined = unrefined,
            class = "meshcore_tri")
}

## Decision 3: counter-clockwise in xy. Both engines already wind CCW; this
## is a guard so any other producer passed through here conforms too.
ccw_triangles <- function(x, y, tri) {
  if (nrow(tri) == 0L) return(tri)
  a <- (x[tri$v1] - x[tri$v0]) * (y[tri$v2] - y[tri$v0]) -
    (x[tri$v2] - x[tri$v0]) * (y[tri$v1] - y[tri$v0])
  cw <- a < 0
  if (any(cw)) {
    v1 <- tri$v1
    tri$v1[cw] <- tri$v2[cw]
    tri$v2[cw] <- v1[cw]
  }
  tri
}

vertex_origin_fallback <- function(r) {
  n <- nrow(r$P)
  ni <- r$n_input %||% n
  nc <- r$n_crossing %||% 0L
  rep(c("input", "crossing", "steiner"), c(ni, nc, n - ni - nc))
}

pkg_version <- function(pkg) {
  if (requireNamespace(pkg, quietly = TRUE)) as.character(utils::packageVersion(pkg)) else NA_character_
}

#' @export
print.meshcore_tri <- function(x, ...) {
  r <- x$report
  cat(sprintf("<meshcore_tri> mesh spec %s triangle form from %s %s (erase: %s)\n",
              attr(x, "meshspec")$version, r$backend, r$package, r$erase))
  org <- table(x$vertices$origin)
  org <- org[org > 0]
  cat(sprintf("  vertices:    %d (%s)\n", r$n_vertices,
              paste(names(org), org, sep = " ", collapse = ", ")))
  cat(sprintf("  triangles:   %d\n", r$n_triangles))
  cat(sprintf("  constraints: %d\n", r$n_constraints))
  invisible(x)
}
