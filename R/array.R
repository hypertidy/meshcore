#' Arrays with a keyed dimension, and joining them to models
#'
#' A keyed array is an array plus the name of the dimension(s) that index
#' model cells. For a raster the key is computed from the `x` and `y`
#' dimensions (cell id = row * ncol + col). For a DGGS the key is a
#' coordinate variable of cell ids on the `cells` dimension (the xdggs
#' convention: `cell_ids` with `grid_name`, `level`, `indexing_scheme`
#' attributes).
#'
#' `read_array()` reads a classic raster (e.g. GeoTIFF) or an array from a
#' GDAL multidimensional source (e.g. Zarr) through GDAL, via sf.
#'
#' `join_array()` returns the model's cells in long form, one row per cell
#' and per combination of the array's other dimensions, with a `value`
#' column. The join is by cell id only: no geometry is involved.
#'
#' @param dsn Data source.
#' @param name Array name for multidimensional sources.
#' @param values An R array, fastest-varying dimension first.
#' @param dims Named dimension sizes, in the same order as `dim(values)`.
#' @param key_dim Name(s) of the keyed dimension(s).
#' @param key Cell ids along `key_dim`, or `NULL` when the key is computed.
#' @param coords Named list of coordinate values for the other dimensions.
#' @param x A model.
#' @param a A keyed array.
#' @param ... Unused.
#' @export
keyed_array <- function(values, dims, key_dim, key = NULL, coords = list()) {
  stopifnot(length(dim(values)) == length(dims), all(key_dim %in% names(dims)))
  structure(list(values = values, dims = dims, key_dim = key_dim, key = key,
                 coords = coords), class = "keyed_array")
}

#' @export
print.keyed_array <- function(x, ...) {
  cat(sprintf("<keyed_array> %s; keyed on %s%s\n",
              paste(sprintf("%s=%d", names(x$dims), x$dims), collapse = ", "),
              paste(x$key_dim, collapse = "+"),
              if (is.null(x$key)) " (computed)" else sprintf(" (%d ids)", length(x$key))))
  invisible(x)
}

#' @rdname keyed_array
#' @export
read_array <- function(dsn, name = NULL) {
  md <- if (!is.null(name)) try(sf:::gdal_read_mdim(dsn, name), silent = TRUE)
  if (is.null(md) || inherits(md, "try-error")) {
    g <- sf::gdal_read(dsn, read_data = TRUE)
    v <- attr(g, "data")
    d <- unname(dim(v))
    if (length(d) == 2) d <- c(d, 1)
    dim(v) <- d
    return(keyed_array(v, dims = c(x = d[1], y = d[2], band = d[3]),
                       key_dim = c("x", "y"), coords = list(band = seq_len(d[3]))))
  }
  # GDAL multidim arrays arrive in C order: reverse the dimensions
  sizes <- vapply(md$dimensions, function(d) as.numeric(d$to - d$from + 1), 0)
  v <- md$array_list[[1]]
  attributes(v) <- NULL
  dim(v) <- rev(sizes)
  dims <- rev(sizes)
  info <- jsonlite::fromJSON(sf::gdal_utils("mdiminfo", dsn, quiet = TRUE),
                             simplifyVector = FALSE)
  kvar <- info$arrays[[name]]$attributes$coordinates %||% "cell_ids"
  key_dim <- "cells"
  key <- NULL
  if (kvar %in% names(info$arrays)) {
    kd <- basename(unlist(info$arrays[[kvar]]$dimensions))
    key_dim <- kd
    key <- as.vector(sf:::gdal_read_mdim(dsn, kvar)$array_list[[1]])
  }
  coords <- lapply(md$dimensions, function(d) as.vector(d$values[[1]]))
  coords <- rev(coords)[setdiff(names(dims), key_dim)]
  keyed_array(v, dims = dims, key_dim = key_dim, key = key, coords = coords)
}

#' @rdname keyed_array
#' @export
join_array <- function(x, a, ...) UseMethod("join_array")

#' @export
join_array.GRID <- function(x, a, ...) {
  d <- x$meta$dim
  if (!identical(a$key_dim, c("x", "y")) || any(a$dims[c("x", "y")] != d))
    stop("array x/y dimensions do not match the GRID")
  m <- matrix(a$values, nrow = prod(d))
  long_join(cells(x), seq_len(prod(d)), m, a)
}

#' @export
join_array.CELL <- function(x, a, ...) {
  if (is.null(a$key)) stop("array has no cell id key")
  # move the keyed dimension first
  kd <- match(a$key_dim, names(a$dims))
  v <- aperm(a$values, c(kd, seq_along(a$dims)[-kd]))
  m <- matrix(v, nrow = a$dims[kd])
  long_join(cells(x), match(x$cell, a$key), m, a)
}

#' Join helper for join_array() methods
#'
#' For writing `join_array()` methods in other packages.
#'
#' @param cl The model's `cells()` table.
#' @param idx For each row of `cl`, the position along the array's keyed
#'   dimension (`NA` for none).
#' @param m The array values as a matrix: one row per position along the
#'   keyed dimension, one column per combination of the other dimensions.
#' @param a The keyed array (for its other dimensions and coordinates).
#' @returns `cl` in long form with the other dimensions and `value`.
#' @export
long_join <- function(cl, idx, m, a) {
  other <- setdiff(names(a$dims), a$key_dim)
  if (!length(other)) return(cbind(cl, value = m[idx, 1]))
  grid <- expand.grid(lapply(other, function(o) a$coords[[o]] %||% seq_len(a$dims[[o]])),
                      KEEP.OUT.ATTRS = FALSE)
  names(grid) <- other
  # drop length-1 dimensions (e.g. a single band)
  keepd <- vapply(other, function(o) a$dims[[o]] > 1, TRUE)
  grid <- grid[, keepd, drop = FALSE]
  out <- cl[rep(seq_len(nrow(cl)), ncol(m)), , drop = FALSE]
  if (ncol(grid)) out <- cbind(out, grid[rep(seq_len(ncol(m)), each = nrow(cl)), , drop = FALSE])
  out$value <- as.vector(m[idx, , drop = FALSE])
  rownames(out) <- NULL
  out
}

read_cell_ids <- function(dsn) {
  info <- jsonlite::fromJSON(sf::gdal_utils("mdiminfo", dsn, quiet = TRUE),
                             simplifyVector = FALSE)
  if (!"cell_ids" %in% names(info$arrays)) stop("no cell_ids array in ", dsn)
  ids <- as.vector(sf:::gdal_read_mdim(dsn, "cell_ids")$array_list[[1]])
  list(dsn = dsn, cell_ids = ids, attrs = info$arrays$cell_ids$attributes)
}
