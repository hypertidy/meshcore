#' Geometry and wkpool output
#'
#' `as_wk()` returns one polygon per cell (wk `wk_polygon`), built from
#' `boundaries()` and `vertices()`. `as_wkpool()` hands the mesh to wkpool
#' as a pool of the model's vertices and one closed path of segments per
#' cell, with `.vx` renumbered 1..n (the lattice key is kept as `.key`).
#' The pool is already merged: no `merge_coincident()` needed.
#'
#' @param x A model.
#' @export
as_wk <- function(x) {
  b <- boundary_coords(x)
  wk::wk_polygon(wk::xy(b$x, b$y), feature_id = b$.cell)
}

# boundaries() with coordinates. For HEALPix, longitudes are unwrapped to
# within 180 degrees of the cell centre (cells on the antimeridian stay
# whole) and a pole corner takes the centre's longitude.
boundary_coords <- function(x) {
  b <- boundaries(x)
  v <- vertices(x)
  i <- match(b$.vx, v$.vx)
  b$x <- v$x[i]
  b$y <- v$y[i]
  if (identical(x$meta$grid_name, "healpix")) {
    cx <- cells(x)$x[match(b$.cell, x$cell)]
    pole <- abs(b$y) == 90
    b$x[pole] <- cx[pole]
    d <- b$x - cx
    b$x <- b$x - 360 * (d > 180) + 360 * (d < -180)
  }
  b
}

#' @rdname as_wk
#' @export
as_wkpool <- function(x) UseMethod("as_wkpool")

#' @export
as_wkpool.default <- function(x) {
  if (!requireNamespace("wkpool", quietly = TRUE)) stop("needs wkpool")
  b <- boundaries(x)
  v <- vertices(x)
  n <- nrow(b)
  last <- c(b$.cell[-1] != b$.cell[-n], TRUE)
  first <- c(TRUE, last[-n])
  nxt <- seq_len(n) + 1
  nxt[last] <- which(first)
  vx0 <- match(b$.vx, v$.vx)
  vx1 <- vx0[nxt]
  feat <- match(b$.cell, unique(b$.cell))
  pool <- data.frame(.vx = seq_len(nrow(v)), x = v$x, y = v$y, .key = v$.vx)
  paths <- data.frame(.path = seq_along(unique(feat)), .feature = seq_along(unique(feat)),
                      .part = 1L, .ring = 1L)
  wkpool::new_wkpool(pool, vx0 = vx0, vx1 = vx1, feature = feat, path = feat,
                     paths = paths, crs = x$meta$crs)
}
