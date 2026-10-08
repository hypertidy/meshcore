signed_area <- function(x) {
  b <- meshcore:::boundary_coords(x)
  s <- split(b, b$.cell)
  vapply(s, function(d) {
    n <- nrow(d); j <- c(2:n, 1)
    sum(d$x * d$y[j] - d$x[j] * d$y) / 2
  }, 0)
}
field <- function(lon, lat, t = 0) {
  sin(lon * pi / 180 * 6 + t * 0.5) * cos(lat * pi / 180 * 4) + 0.002 * (lon - 100)
}
