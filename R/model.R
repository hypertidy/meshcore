#' Mesh models
#'
#' `GRID()` is a regular raster: a lattice of `ncol * nrow` square-ish cells
#' over an extent. `CELL()` is a set of cells of a discrete global grid
#' (DGGS) or other cell lattice, identified by integer cell ids.
#'
#' Both are meshes whose tables (cells, vertices, edges, boundaries) are
#' computed on demand from cell ids. Vertex identity is by construction:
#' every vertex has an integer lattice key, so coincident vertices are never
#' found by comparing coordinates. This is recorded as `rung = "lattice"`,
#' a rung above "exact" on the vertex identity ladder (exact float,
#' snapped, noded, exact predicates).
#'
#' Cell ids are 0-based, as in GDAL pixel offsets, HEALPix and xdggs. GRID
#' cell ids run row-major from the top-left cell (GDAL order).
#'
#' @param x For `GRID()`, a raster data source readable by GDAL, or `NULL`
#'   to give `dim` and `extent`. For `CELL()`, a vector of cell ids, a
#'   multidimensional data source (e.g. Zarr) holding a `cell_ids` array with
#'   xdggs attributes, or `NULL` for every cell at `level`.
#' @param dim `c(ncol, nrow)`.
#' @param extent `c(xmin, xmax, ymin, ymax)`.
#' @param crs Carried, not interpreted.
#' @param grid_name `"healpix"` or `"hexlattice"` (a planar flat-topped
#'   hexagon lattice).
#' @param level Refinement level (HEALPix `nside = 2^level`).
#' @param indexing_scheme Only `"nested"` for HEALPix.
#' @param radius,origin,ncol,nrow hexlattice parameters: hexagon
#'   circumradius, the coordinate of lattice cell (0, 0) centre, and the
#'   lattice size in columns and rows (cell id = row * ncol + col).
#' @param orientation hexlattice `"flat"` topped, or `"pointy"` topped (the
#'   flat lattice with x and y exchanged, as sf::st_make_grid() makes by
#'   default; "columns" then run along y).
#' @returns A model object (a list with `meta` and `cell`).
#' @export
GRID <- function(x = NULL, dim = NULL, extent = NULL, crs = NA_character_) {
  source <- NULL
  if (is.character(x)) {
    info <- sf::gdal_read(x, read_data = FALSE)
    gt <- info$geotransform
    if (gt[3] != 0 || gt[5] != 0) stop("rotated geotransforms are not supported")
    dim <- c(info$cols[2], info$rows[2])
    extent <- c(gt[1], gt[1] + dim[1] * gt[2], gt[4] + dim[2] * gt[6], gt[4])
    crs <- info$crs$input %||% NA_character_
    source <- x
  }
  stopifnot(length(dim) == 2, length(extent) == 4,
            extent[2] > extent[1], extent[4] > extent[3])
  meta <- list(model = "GRID", grid_name = "grid", dim = as.numeric(dim),
               extent = as.numeric(extent), crs = crs, level = 0L,
               rung = "lattice", source = source)
  structure(list(meta = meta, cell = NULL), class = c("GRID", "meshcore_model"))
}

#' @rdname GRID
#' @export
CELL <- function(x = NULL, grid_name = c("healpix", "hexlattice"), level = NULL,
                 indexing_scheme = "nested", radius = 1, origin = c(0, 0),
                 ncol = NULL, nrow = NULL, orientation = c("flat", "pointy"),
                 crs = NA_character_) {
  source <- NULL
  if (is.character(x)) {
    src <- read_cell_ids(x)
    x <- src$cell_ids
    grid_name <- src$attrs$grid_name
    level <- src$attrs$level %||% src$attrs$resolution
    indexing_scheme <- src$attrs$indexing_scheme %||% indexing_scheme
    source <- src$dsn
  }
  grid_name <- match.arg(grid_name)
  meta <- list(model = "CELL", grid_name = grid_name, crs = crs,
               rung = "lattice", source = source)
  if (grid_name == "healpix") {
    if (is.null(level)) stop("HEALPix needs `level`")
    if (indexing_scheme != "nested") stop("only nested HEALPix indexing is supported")
    if (level > 24) stop("level > 24 needs 64-bit integer ids (not in this prototype)")
    ncell <- 12 * 4^level
    if (is.null(x)) x <- seq(0, ncell - 1)
    if (any(x < 0 | x >= ncell | x != floor(x))) stop("cell ids out of range for level")
    meta$level <- as.integer(level)
    meta$indexing_scheme <- "nested"
    meta$crs <- if (is.na(crs)) "OGC:CRS84 (sphere)" else crs
  } else {
    if (is.null(ncol) || is.null(nrow)) stop("hexlattice needs `ncol` and `nrow`")
    if (is.null(x)) x <- seq(0, ncol * nrow - 1)
    if (any(x < 0 | x >= ncol * nrow)) stop("cell ids out of range for lattice")
    meta$level <- 0L
    meta$radius <- radius
    meta$origin <- origin
    meta$ncol <- ncol
    meta$nrow <- nrow
    meta$orientation <- match.arg(orientation)
  }
  structure(list(meta = meta, cell = as.numeric(x)),
            class = c("CELL", "meshcore_model"))
}

#' @export
print.meshcore_model <- function(x, ...) {
  m <- x$meta
  cat(sprintf("<%s %s> %s cells, level %s, rung: %s\n", m$model, m$grid_name,
              format(n_cells(x), big.mark = ","), m$level, m$rung))
  if (m$model == "GRID")
    cat(sprintf("  dim: %s x %s  extent: %s\n", m$dim[1], m$dim[2],
                paste(signif(m$extent, 6), collapse = ", ")))
  if (!is.null(m$source)) cat("  source:", m$source, "\n")
  invisible(x)
}

#' Number of cells in a model
#' @param x A model.
#' @export
n_cells <- function(x) UseMethod("n_cells")
#' @export
n_cells.default <- function(x) nrow(cells(x))
#' @export
n_cells.GRID <- function(x) prod(x$meta$dim)
#' @export
n_cells.CELL <- function(x) length(x$cell)

`%||%` <- function(a, b) if (is.null(a)) b else a
