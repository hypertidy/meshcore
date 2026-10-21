#' Write and read mesh forms as Arrow IPC streams
#'
#' `write_mesh_arrow()` writes each table of a form (and any link tables
#' given in `...`) to `<dir>/<table>.arrows`, an Arrow IPC stream that any
#' Arrow reader opens (R, Python, JS, DuckDB). `read_mesh_arrow()` reads the
#' folder back into the same R form.
#'
#' Columns that hold row positions are 0-based on the wire and 1-based in R
#' (spec Conventions), and each table says which they are: the metadata key
#' `meshspec:refs` holds JSON mapping each such column to the table it
#' points at, for example `{"v0":"vertices","v1":"vertices","v2":"vertices"}`.
#' A reader in another language needs nothing else to follow the links.
#' Every table also carries `meshspec:version`, `meshspec:form`,
#' `meshspec:table` and `crs`; the first table carries the rest of the
#' form's metadata (`meshspec:meta`) and its `sources` record
#' (`meshspec:sources`) as JSON.
#'
#' Factors are written as strings: nanoarrow does not yet write dictionary
#' columns to IPC.
#'
#' @param x A form: a named list of data frames with a `meshspec` attribute,
#'   such as a `meshcore_tri` or a pointcore `pointcore_points`.
#' @param dir Folder to write; created if needed.
#' @param ... Further named data frames to write beside the form, such as
#'   link tables (`face_points`) or face summaries (`face_stats`).
#' @param refs Named list adding to or overriding the reference columns:
#'   `list(table = c(column = "target table"))`.
#' @returns `write_mesh_arrow()`: `dir`, invisibly. `read_mesh_arrow()`: a
#'   named list of data frames with the `meshspec` (and `sources`)
#'   attributes, classed `meshcore_tri` for a triangle form.
#' @name mesh_arrow
NULL

## columns that hold row positions, by table, and the table they point at
mesh_refs <- list(
  vertices = c(input_row = "points"),
  triangles = c(v0 = "vertices", v1 = "vertices", v2 = "vertices"),
  constraints = c(v0 = "vertices", v1 = "vertices", segment = "segments"),
  segments = c(s0 = "vertices", s1 = "vertices", path = "paths", edge = "edges"),
  edges = c(e0 = "vertices", e1 = "vertices"),
  points = c(source = "sources"),
  face_points = c(face = "triangles", point = "points"),
  face_stats = c(face = "triangles")
)

#' @rdname mesh_arrow
#' @export
write_mesh_arrow <- function(x, dir, ..., refs = list()) {
  if (!requireNamespace("nanoarrow", quietly = TRUE)) stop("write_mesh_arrow() needs the nanoarrow package")
  extra <- list(...)
  if (length(extra) && (is.null(names(extra)) || any(!nzchar(names(extra))))) {
    stop("tables in ... must be named")
  }
  m <- attr(x, "meshspec")
  if (is.null(m)) stop("x has no meshspec attribute")
  tabs <- c(Filter(is.data.frame, unclass(x)), extra)
  rf <- utils::modifyList(mesh_refs, refs)
  dir.create(dir, recursive = TRUE, showWarnings = FALSE)
  first <- TRUE
  for (nm in names(tabs)) {
    d <- tabs[[nm]]
    r <- rf[[nm]]
    r <- r[names(r) %in% names(d)]
    for (k in names(r)) d[[k]] <- as.integer(d[[k]] - 1L)
    for (k in names(d)) if (is.factor(d[[k]])) d[[k]] <- as.character(d[[k]])
    meta <- list("meshspec:version" = m$version %||% "0.1",
                 "meshspec:form" = m$form,
                 "meshspec:table" = nm,
                 "crs" = if (is.null(m$crs) || is.na(m$crs)) "" else m$crs,
                 "meshspec:refs" = as.character(jsonlite::toJSON(as.list(r), auto_unbox = TRUE)))
    if (first) {
      rest <- m[setdiff(names(m), c("version", "form", "crs"))]
      meta[["meshspec:meta"]] <- as.character(jsonlite::toJSON(rest, auto_unbox = TRUE, digits = NA, null = "null", na = "null"))
      src <- attr(x, "sources")
      if (!is.null(src)) {
        meta[["meshspec:sources"]] <- as.character(jsonlite::toJSON(src, auto_unbox = TRUE, digits = NA))
      }
      first <- FALSE
    }
    s <- nanoarrow::infer_nanoarrow_schema(d)
    s <- nanoarrow::nanoarrow_schema_modify(s, list(metadata = meta))
    nanoarrow::write_nanoarrow(nanoarrow::as_nanoarrow_array_stream(d, schema = s),
                               file.path(dir, paste0(nm, ".arrows")))
  }
  invisible(dir)
}

#' @rdname mesh_arrow
#' @export
read_mesh_arrow <- function(dir) {
  if (!requireNamespace("nanoarrow", quietly = TRUE)) stop("read_mesh_arrow() needs the nanoarrow package")
  files <- list.files(dir, pattern = "\\.arrows$", full.names = TRUE)
  if (!length(files)) stop("no .arrows files in ", dir)
  out <- list()
  m <- NULL
  sources <- NULL
  for (f in files) {
    st <- nanoarrow::read_nanoarrow(f)
    meta <- st$get_schema()$metadata
    d <- as.data.frame(st)
    r <- jsonlite::fromJSON(meta[["meshspec:refs"]] %||% "{}")
    for (k in names(r)) d[[k]] <- d[[k]] + 1L
    nm <- meta[["meshspec:table"]] %||% sub("\\.arrows$", "", basename(f))
    out[[nm]] <- d
    if (!is.null(meta[["meshspec:meta"]])) {
      m <- c(list(version = meta[["meshspec:version"]], form = meta[["meshspec:form"]],
                  crs = if (nzchar(meta[["crs"]])) meta[["crs"]] else NA_character_),
             jsonlite::fromJSON(meta[["meshspec:meta"]]))
      if (!is.null(meta[["meshspec:sources"]])) sources <- jsonlite::fromJSON(meta[["meshspec:sources"]])
    }
  }
  attr(out, "meshspec") <- m
  if (!is.null(sources)) attr(out, "sources") <- sources
  if (identical(m$form, "tri")) class(out) <- "meshcore_tri"
  out
}

#' Open a mesh folder in the browser viewer
#'
#' `mesh_viewer()` copies meshview (a self-contained page using three.js and
#' Arrow JS, both bundled) into `dir`, beside the `mesh/` and `points/`
#' folders written by `write_mesh_arrow()`. Hovering the surface picks a face
#' on the GPU and lists its `face_stats` row, its vertices and the returns
#' `face_points` links to it, each with its source file and position in that
#' file.
#'
#' Browsers do not let a page read files beside it from `file://`, so either
#' serve `dir` (for example `python3 -m http.server` in it, then open
#' `http://localhost:8000`) or open `index.html` and choose the `.arrows`
#' files when it asks.
#'
#' @param dir A folder holding `mesh/` (and optionally `points/`).
#' @param open Open the page with [utils::browseURL()].
#' @returns The path to `index.html`, invisibly.
#' @export
mesh_viewer <- function(dir, open = interactive()) {
  if (!dir.exists(file.path(dir, "mesh"))) stop("no mesh/ folder in ", dir, ": write one with write_mesh_arrow()")
  src <- system.file("viewer", package = "meshcore")
  file.copy(file.path(src, c("index.html", "meshview.js")), dir, overwrite = TRUE)
  index <- file.path(normalizePath(dir), "index.html")
  if (open) utils::browseURL(index)
  invisible(index)
}
