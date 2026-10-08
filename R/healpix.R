# HEALPix (nested) on the unit sphere, computed from cell ids.
#
# Every pixel corner lies on the "corner lattice" of its base face: (face,
# cx, cy) with cx, cy in 0..nside. A corner has a global ring index
# i = jrll * nside - cx - cy (0 = north pole, 4 * nside = south pole) and a
# plane longitude index X = jpll * nside + cx - cy. In the equatorial belt
# phi = X * pi / (4 nside); in the polar caps the ring at distance ip from the
# pole has 4 * ip corners and phi = (jpll * ip + X - jpll * nside) * pi / (4 ip).
# Both give an exact integer longitude index q, and the vertex key is
# i * 8 * nside + q. Corners shared between faces get the same key with no
# coordinate comparison. A full sphere has 12 nside^2 + 2 vertices and
# 24 nside^2 edges, which the tests check.

hpx_jrll <- c(2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4)
hpx_jpll <- c(1, 3, 5, 7, 0, 2, 4, 6, 1, 3, 5, 7)

#' HEALPix nested id to face and within-face coordinates
#'
#' @param id Cell ids (0-based, nested).
#' @param level Refinement level, `nside = 2^level`.
#' @param face,ix,iy Base face (0..11) and within-face coordinates.
#' @returns `hpx_nest2fxy()` a list of `face`, `ix`, `iy`; `hpx_fxy2nest()`
#'   cell ids.
#' @export
hpx_nest2fxy <- function(id, level) {
  npface <- 4^level
  face <- id %/% npface
  ipf <- id %% npface
  ix <- iy <- numeric(length(id))
  for (b in seq_len(level) - 1) {
    two <- (ipf %/% 4^b) %% 4
    ix <- ix + (two %% 2) * 2^b
    iy <- iy + (two %/% 2) * 2^b
  }
  list(face = face, ix = ix, iy = iy)
}

#' @rdname hpx_nest2fxy
#' @export
hpx_fxy2nest <- function(face, ix, iy, level) {
  ipf <- numeric(length(face))
  for (b in seq_len(level) - 1) {
    ipf <- ipf + ((ix %/% 2^b) %% 2) * 4^b + ((iy %/% 2^b) %% 2) * 2 * 4^b
  }
  face * 4^level + ipf
}

# ring index and integer longitude index for lattice points (cx, cy may be
# half-integers for pixel centres; keys are only meaningful for corners)
hpx_ring_q <- function(face, cx, cy, nside) {
  f <- face + 1
  i <- hpx_jrll[f] * nside - cx - cy
  X <- hpx_jpll[f] * nside + cx - cy
  ip <- ifelse(i < nside, i, ifelse(i > 3 * nside, 4 * nside - i, NA))
  polar <- !is.na(ip)
  q <- numeric(length(i))
  e <- !polar
  q[e] <- X[e] %% (8 * nside)
  p <- polar & ip > 0
  q[p] <- (hpx_jpll[f][p] * ip[p] + X[p] - hpx_jpll[f][p] * nside) %% (8 * ip[p])
  list(i = i, q = q, ip = ip)
}

# sphere coordinates (lon, lat in degrees) from ring and longitude index
hpx_lonlat <- function(i, q, ip, nside) {
  z <- (2 * nside - i) * 2 / (3 * nside)
  north <- !is.na(ip) & i < nside
  south <- !is.na(ip) & i > 3 * nside
  z[north] <- 1 - ip[north]^2 / (3 * nside^2)
  z[south] <- -(1 - ip[south]^2 / (3 * nside^2))
  phi <- q * pi / (4 * nside)
  pol <- !is.na(ip)
  phi[pol] <- ifelse(ip[pol] > 0, q[pol] * pi / (4 * pmax(ip[pol], 1)), 0)
  lon <- phi * 180 / pi
  lon <- ifelse(lon > 180, lon - 360, lon)
  cbind(lon = lon, lat = asin(pmax(-1, pmin(1, z))) * 180 / pi)
}

hpx_key <- function(rq, nside) rq$i * 8 * nside + rq$q

hpx_key_lonlat <- function(key, nside) {
  i <- key %/% (8 * nside)
  q <- key %% (8 * nside)
  ip <- ifelse(i < nside, i, ifelse(i > 3 * nside, 4 * nside - i, NA))
  hpx_lonlat(i, q, ip, nside)
}

hpx_centres <- function(id, level) {
  nside <- 2^level
  fxy <- hpx_nest2fxy(id, level)
  rq <- hpx_ring_q(fxy$face, fxy$ix + 0.5, fxy$iy + 0.5, nside)
  hpx_lonlat(rq$i, rq$q, rq$ip, nside)
}

# corners in N, W, S, E order (as healpy.boundaries), counter-clockwise
hpx_corner_keys <- function(id, level) {
  nside <- 2^level
  fxy <- hpx_nest2fxy(id, level)
  dx <- c(1, 0, 0, 1)
  dy <- c(1, 1, 0, 0)
  n <- length(id)
  face <- rep(fxy$face, each = 4)
  cx <- rep(fxy$ix, each = 4) + rep(dx, n)
  cy <- rep(fxy$iy, each = 4) + rep(dy, n)
  hpx_key(hpx_ring_q(face, cx, cy, nside), nside)
}
