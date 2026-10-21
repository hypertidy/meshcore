#' Connect a triangle mesh to its sources
#'
#' Four verbs that keep a mesh joined to the data it came from. None of them
#' warps a raster: data are sampled in their own CRS at mesh vertices.
#'
#' * `locate()`: the triangle each point falls in (in x and y), with the
#'   barycentric weights `u` and `v` of the triangle's second and third
#'   vertex (the first has `1 - u - v`). `NA` outside the mesh.
#' * `sample_at_vertices()`: transforms the vertices into a raster's CRS and
#'   reads one band there, adding the values as a vertex column. The source,
#'   band and method are recorded in the `sources` attribute.
#' * `drape_uv()`: texture coordinates into a georeferenced image by inverse
#'   projection, as vertex columns `u` and `v` (u is 0 at xmin and 1 at xmax,
#'   v is 0 at row 0, the image's top, as the drawable form defines). Each
#'   triangle gets `uv_err_px`: the largest distance, in source pixels,
#'   between the exact image position and the linear blend of its vertices'
#'   uv, at the edge midpoints and the centroid. Large values mean the
#'   image's CRS bends across that triangle and the drape is wrong there.
#' * `pick()`: one face and its weights in, everything joined to it out: the
#'   triangle's row, its three vertex rows, numeric vertex columns blended
#'   at the point, the column and row of every draped image, and (with a
#'   link table) the source rows that fall in the face.
#'
#' @param mesh A triangle form (`meshcore_tri`), for example from
#'   [tri_mesh()]. Its CRS is read from the `meshspec` attribute.
#' @param x,y Coordinates in the mesh CRS.
#' @param dsn A raster any GDAL driver reads (via terra).
#' @param band Band number.
#' @param name Column name for the sampled values.
#' @param method `"bilinear"` or `"simple"` (nearest cell).
#' @param image A georeferenced image (via terra); only its grid is read.
#' @param max_px Faces with `uv_err_px` above this are counted in the
#'   message, to refine or flag.
#' @param face Row of `mesh$triangles`.
#' @param u,v Barycentric weights of the face's second and third vertex.
#' @param links A link table with `face` and `point` columns, such as
#'   pointcore's `face_points()`.
#' @param rows A data frame that `links$point` indexes, such as the points
#'   table of a pointcore form.
#' @returns `locate()`: a data frame `face`, `u`, `v`, one row per point.
#'   `sample_at_vertices()` and `drape_uv()`: the mesh with new columns.
#'   `pick()`: a list of class `meshcore_pick`.
#' @name connect
#' @examples
#' if (requireNamespace("cdtr", quietly = TRUE) && requireNamespace("geometry", quietly = TRUE)) {
#'   m <- tri_mesh(c(0, 1, 1, 0, 0.5), c(0, 0, 1, 1, 0.5), PA = cbind(z = c(0, 1, 2, 1, 4)))
#'   loc <- locate(m, 0.6, 0.4)
#'   pick(m, loc$face, loc$u, loc$v)
#' }
NULL

#' @rdname connect
#' @export
locate <- function(mesh, x, y) {
  if (!requireNamespace("geometry", quietly = TRUE)) stop("locate() needs the geometry package")
  v <- mesh$vertices
  t <- as.matrix(mesh$triangles[c("v0", "v1", "v2")])
  ## tsearch's quadtree fails on large coordinates (UTM northings near
  ## 6.4e6 m): search relative to the mesh's lower left corner
  ox <- min(v$x)
  oy <- min(v$y)
  r <- geometry::tsearch(v$x - ox, v$y - oy, t, as.double(x) - ox, as.double(y) - oy, bary = TRUE)
  out <- data.frame(face = as.integer(r$idx), u = r$p[, 2], v = r$p[, 3])
  ## tsearch can miss points lying exactly on a hull vertex: give them the
  ## first triangle that uses the vertex, with all weight on it
  miss <- which(is.na(out$face))
  if (length(miss)) {
    vx <- match(paste(x[miss], y[miss]), paste(v$x, v$y))
    hit <- !is.na(vx)
    if (any(hit)) {
      i <- miss[hit]
      k <- vx[hit]
      f0 <- match(k, t[, 1]); f1 <- match(k, t[, 2]); f2 <- match(k, t[, 3])
      out$face[i] <- ifelse(!is.na(f0), f0, ifelse(!is.na(f1), f1, f2))
      out$u[i] <- ifelse(is.na(f0) & !is.na(f1), 1, 0)
      out$v[i] <- ifelse(is.na(f0) & is.na(f1), 1, 0)
    }
  }
  out
}

#' @rdname connect
#' @export
sample_at_vertices <- function(mesh, dsn, band = 1L, name = "value",
                               method = c("bilinear", "simple")) {
  method <- match.arg(method)
  if (!requireNamespace("terra", quietly = TRUE)) stop("sample_at_vertices() needs the terra package")
  r <- terra::rast(dsn)[[band]]
  xy <- to_crs(mesh, terra::crs(r))
  val <- terra::extract(r, xy, method = method)
  mesh$vertices[[name]] <- as.double(val[[ncol(val)]])
  mesh <- add_source(mesh, name, list(dsn = dsn, band = band, method = method,
                                      crs = terra::crs(r, proj = TRUE)))
  mesh
}

#' @rdname connect
#' @export
drape_uv <- function(mesh, image, max_px = 0.25) {
  if (!requireNamespace("terra", quietly = TRUE)) stop("drape_uv() needs the terra package")
  r <- terra::rast(image)
  g <- image_grid(r)
  uv <- function(xy) cbind((xy[, 1] - g$xmin) / (g$xmax - g$xmin),
                           (g$ymax - xy[, 2]) / (g$ymax - g$ymin))
  vuv <- uv(to_crs(mesh, g$crs))
  mesh$vertices$u <- vuv[, 1]
  mesh$vertices$v <- vuv[, 2]
  ## the error: exact uv at edge midpoints and centroid against the blend
  t <- mesh$triangles
  v <- mesh$vertices
  w <- rbind(c(0.5, 0.5, 0), c(0, 0.5, 0.5), c(0.5, 0, 0.5), c(1, 1, 1) / 3)
  err <- numeric(nrow(t))
  for (k in seq_len(nrow(w))) {
    px <- w[k, 1] * v$x[t$v0] + w[k, 2] * v$x[t$v1] + w[k, 3] * v$x[t$v2]
    py <- w[k, 1] * v$y[t$v0] + w[k, 2] * v$y[t$v1] + w[k, 3] * v$y[t$v2]
    exact <- uv(to_crs(mesh, g$crs, px, py))
    lu <- w[k, 1] * vuv[t$v0, 1] + w[k, 2] * vuv[t$v1, 1] + w[k, 3] * vuv[t$v2, 1]
    lv <- w[k, 1] * vuv[t$v0, 2] + w[k, 2] * vuv[t$v1, 2] + w[k, 3] * vuv[t$v2, 2]
    d <- sqrt(((exact[, 1] - lu) * g$ncol)^2 + ((exact[, 2] - lv) * g$nrow)^2)
    err <- pmax(err, d)
  }
  mesh$triangles$uv_err_px <- err
  mesh <- add_source(mesh, "uv", c(list(dsn = image, uv_space = "image"), g))
  n_bad <- sum(err > max_px)
  if (n_bad > 0L) {
    message(sprintf("%d of %d faces have uv error over %g px (max %.3g)",
                    n_bad, length(err), max_px, max(err)))
  }
  mesh
}

#' @rdname connect
#' @export
pick <- function(mesh, face, u, v, links = NULL, rows = NULL) {
  t <- mesh$triangles[face, , drop = FALSE]
  vid <- c(t$v0, t$v1, t$v2)
  w <- c(1 - u - v, u, v)
  vv <- mesh$vertices[vid, , drop = FALSE]
  num <- names(vv)[vapply(vv, is.numeric, TRUE)]
  num <- setdiff(num, c("id", "input_row"))
  at <- vapply(num, function(nm) sum(w * vv[[nm]]), 0)
  pixels <- NULL
  g <- attr(mesh, "sources")$uv
  if (!is.null(g) && all(c("u", "v") %in% names(vv))) {
    pixels <- data.frame(dsn = g$dsn,
                         col = floor(at[["u"]] * g$ncol) + 1,
                         row = floor(at[["v"]] * g$nrow) + 1)
  }
  found <- NULL
  if (!is.null(links)) {
    l <- links[links$face == face, , drop = FALSE]
    found <- if (is.null(rows)) l else cbind(l, rows[l$point, , drop = FALSE])
    rownames(found) <- NULL
  }
  rownames(vv) <- NULL
  structure(list(face = face, weights = w, triangle = t, vertices = vv,
                 at = at, pixels = pixels, rows = found),
            class = "meshcore_pick")
}

#' @export
print.meshcore_pick <- function(x, ...) {
  cat(sprintf("<meshcore_pick> face %d, weights %s\n", x$face,
              paste(format(x$weights, digits = 3), collapse = ", ")))
  cat("  at the point:\n")
  print(signif(x$at, 10))
  cat("  vertices:\n")
  print(x$vertices)
  if (!is.null(x$pixels)) {
    cat("  pixels:\n")
    print(x$pixels)
  }
  if (!is.null(x$rows)) cat(sprintf("  rows in this face: %d\n", nrow(x$rows)))
  invisible(x)
}

## vertex (or given) coordinates from the mesh CRS to `crs`
to_crs <- function(mesh, crs, x = mesh$vertices$x, y = mesh$vertices$y) {
  from <- attr(mesh, "meshspec")$crs
  xy <- cbind(x, y)
  if (is.null(from) || is.na(from) || !nzchar(crs)) return(xy)
  sf::sf_project(from, crs, xy, keep = TRUE)
}

image_grid <- function(r) {
  e <- as.vector(terra::ext(r))
  list(xmin = e[["xmin"]], xmax = e[["xmax"]], ymin = e[["ymin"]], ymax = e[["ymax"]],
       ncol = terra::ncol(r), nrow = terra::nrow(r), crs = terra::crs(r))
}

add_source <- function(mesh, name, info) {
  s <- attr(mesh, "sources") %||% list()
  s[[name]] <- info
  attr(mesh, "sources") <- s
  mesh
}
