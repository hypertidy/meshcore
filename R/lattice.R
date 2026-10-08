# GRID and hexlattice: vertex keys computed from cell ids.

# ---- GRID ------------------------------------------------------------------
# cell id = row * ncol + col (0-based, row 0 at the top, GDAL order)
# vertex key = vrow * (ncol + 1) + vcol, vrow 0..nrow, vcol 0..ncol

grid_rc <- function(id, ncol) list(row = id %/% ncol, col = id %% ncol)

grid_res <- function(m) {
  c((m$extent[2] - m$extent[1]) / m$dim[1], (m$extent[4] - m$extent[3]) / m$dim[2])
}

grid_ids <- function(x) seq(0, prod(x$meta$dim) - 1)

# corners counter-clockwise from bottom-left: BL, BR, TR, TL
grid_corner_keys <- function(id, ncol) {
  rc <- grid_rc(id, ncol)
  n <- length(id)
  vr <- rep(rc$row, each = 4) + rep(c(1, 1, 0, 0), n)
  vc <- rep(rc$col, each = 4) + rep(c(0, 1, 1, 0), n)
  vr * (ncol + 1) + vc
}

grid_key_xy <- function(key, m) {
  ncol <- m$dim[1]
  res <- grid_res(m)
  vr <- key %/% (ncol + 1)
  vc <- key %% (ncol + 1)
  cbind(x = m$extent[1] + vc * res[1], y = m$extent[4] - vr * res[2])
}

# ---- hexlattice ------------------------------------------------------------
# Flat-topped hexagons. In lattice units (x in radius / 2, y in
# radius * sqrt(3) / 2) the centre of cell (col, row) is
# (3 col, 2 row + col %% 2) and its corners are at offsets (2, 0), (1, 1),
# (-1, 1), (-2, 0), (-1, -1), (1, -1): counter-clockwise from east. Every
# corner is an integer lattice point, so its key is computed, not found.
# This is the lattice sf::st_make_grid(square = FALSE) uses.

hex_rc <- function(id, ncol) list(row = id %/% ncol, col = id %% ncol)

hex_centre_lattice <- function(id, ncol) {
  rc <- hex_rc(id, ncol)
  list(X = 3 * rc$col, Y = 2 * rc$row + rc$col %% 2)
}

hex_corner_keys <- function(id, m) {
  cl <- hex_centre_lattice(id, m$ncol)
  n <- length(id)
  ox <- c(2, 1, -1, -2, -1, 1)
  oy <- c(0, 1, 1, 0, -1, -1)
  # exchanging x and y reverses winding: keep counter-clockwise
  if (identical(m$orientation, "pointy")) { ox <- rev(ox); oy <- rev(oy) }
  X <- rep(cl$X, each = 6) + rep(ox, n)
  Y <- rep(cl$Y, each = 6) + rep(oy, n)
  (X + 2) * (2 * m$nrow + 3) + (Y + 1)
}

hex_lattice_xy <- function(X, Y, m) {
  if (identical(m$orientation, "pointy")) {
    return(cbind(x = m$origin[1] + Y * m$radius * sqrt(3) / 2,
                 y = m$origin[2] + X * m$radius / 2))
  }
  cbind(x = m$origin[1] + X * m$radius / 2,
        y = m$origin[2] + Y * m$radius * sqrt(3) / 2)
}

hex_key_xy <- function(key, m) {
  ny <- 2 * m$nrow + 3
  hex_lattice_xy(key %/% ny - 2, key %% ny - 1, m)
}
