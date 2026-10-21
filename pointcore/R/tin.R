#' A TIN from the point-cloud form, and the returns in each triangle
#'
#' `points_tin()` triangulates the selected returns (ground, class 2, by
#' default) with [meshcore::tri_mesh()], carrying `z` as an attribute, and
#' adds `input_row` to the vertex table: the row of `x$points` each vertex
#' came from. Input vertices come first in the triangle form (spec Decision
#' 8), so the map costs nothing. Returns sharing an (x, y) merge into one
#' vertex, which keeps the first return's row.
#'
#' `face_points()` locates returns in the TIN's triangles (in x and y) and
#' returns the link table `face`, `point`, `u`, `v`, `dz`: the triangle, the
#' row of `x$points`, the barycentric weights of the triangle's second and
#' third vertex, and the height of the return above the TIN surface. The
#' `above` and `below` thresholds keep the table to returns near the surface
#' (for example `above = 2` for ground cover on a vegetated site); returns
#' outside the TIN are dropped.
#'
#' @param x A point-cloud form from [read_points()].
#' @param classes Classifications to triangulate, or `NULL` for every return.
#' @param engine Passed to [meshcore::tri_mesh()].
#' @param ... Passed to [meshcore::tri_mesh()] (for example `max_area`).
#' @param tin A TIN from `points_tin()`.
#' @param above,below Keep returns at most this far above or below the
#'   surface, in z units.
#' @returns `points_tin()`: a `meshcore_tri` triangle form with `z` and
#'   `input_row` on the vertices. `face_points()`: a data frame.
#' @export
#' @examples
#' if (requireNamespace("cdtr", quietly = TRUE) && requireNamespace("geometry", quietly = TRUE)) {
#'   f <- system.file("extdata", "example.laz", package = "rlas")
#'   p <- read_points(f)
#'   tin <- points_tin(p, classes = NULL)
#'   fp <- face_points(tin, p)
#'   head(fp)
#' }
points_tin <- function(x, classes = 2L, engine = "cdtr", ...) {
  p <- x$points
  idx <- if (is.null(classes)) seq_len(nrow(p)) else which(p$classification %in% classes)
  if (length(idx) < 3L) stop("fewer than 3 returns selected")
  m <- meshcore::tri_mesh(p$x[idx], p$y[idx], PA = cbind(z = p$z[idx]),
                          engine = engine, crs = attr(x, "meshspec")$crs, ...)
  vr <- attr(m, "input_map")
  first <- !duplicated(vr)
  input_row <- rep(NA_integer_, nrow(m$vertices))
  input_row[vr[first]] <- idx[first]
  m$vertices$input_row <- input_row
  attr(m, "meshspec")$points_crs <- attr(x, "meshspec")$crs
  m
}

#' @rdname points_tin
#' @export
face_points <- function(tin, x, above = Inf, below = Inf) {
  p <- x$points
  loc <- meshcore::locate(tin, p$x, p$y)
  t <- tin$triangles
  z <- tin$vertices$z
  f <- loc$face
  ok <- !is.na(f)
  zs <- rep(NA_real_, nrow(p))
  zs[ok] <- (1 - loc$u[ok] - loc$v[ok]) * z[t$v0[f[ok]]] +
    loc$u[ok] * z[t$v1[f[ok]]] + loc$v[ok] * z[t$v2[f[ok]]]
  dz <- p$z - zs
  keep <- ok & dz <= above & dz >= -below
  out <- data.frame(face = f[keep], point = which(keep),
                    u = loc$u[keep], v = loc$v[keep], dz = dz[keep])
  o <- order(out$face, out$point)
  out <- out[o, , drop = FALSE]
  rownames(out) <- NULL
  attr(out, "thresholds") <- c(above = above, below = below)
  out
}
