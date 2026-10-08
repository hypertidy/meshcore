test_that("full sphere satisfies V = 12 N^2 + 2 and E = 24 N^2", {
  for (L in 0:5) {
    N <- 2^L
    k <- mesh_counts(CELL(level = L))
    expect_equal(unname(k), c(12 * N^2, 12 * N^2 + 2, 24 * N^2))
  }
})

test_that("centres, corners and neighbours match healpy at level 2", {
  x <- CELL(level = 2)
  ref <- read.csv(test_path("ref", "healpix_l2_centres.csv"))
  cl <- cells(x)
  expect_lt(max(abs(((cl$x - ref$lon + 180) %% 360) - 180)), 1e-9)
  expect_lt(max(abs(cl$y - ref$lat)), 1e-9)

  rc <- read.csv(test_path("ref", "healpix_l2_corners.csv"))
  b <- boundaries(x)
  v <- vertices(x)
  i <- match(b$.vx, v$.vx)
  lon <- v$x[i] * pi / 180
  lat <- v$y[i] * pi / 180
  xyz <- cbind(cos(lat) * cos(lon), cos(lat) * sin(lon), sin(lat))
  expect_lt(max(abs(xyz - as.matrix(rc[c("X", "Y", "Z")]))), 1e-9)

  rn <- read.csv(test_path("ref", "healpix_l2_neighbours.csv"))
  rn <- rn[order(rn$cell, rn$neighbour), ]
  nb <- neighbours(x, "vertex")
  expect_equal(nb$.cell, rn$cell)
  expect_equal(nb$.neighbour, rn$neighbour)
})

test_that("every cell has 4 edge neighbours on the full sphere", {
  nb <- neighbours(CELL(level = 3))
  expect_true(all(table(nb$.cell) == 4))
})

test_that("nested ids round trip and the hierarchy is consistent", {
  L <- 5
  id <- c(0, 1, 2, 3, 1234, 12 * 4^L - 1)
  f <- hpx_nest2fxy(id, L)
  expect_equal(hpx_fxy2nest(f$face, f$ix, f$iy, L), id)
  x <- CELL(id, level = L)
  p <- parent(x)
  expect_equal(p$.parent, id %/% 4)
  expect_equal(attr(p, "model")$meta$level, L - 1)
  ch <- children(attr(p, "model"))
  expect_true(all(id %in% ch$.child))
})

test_that("a subset's vertices are a subset of the full sphere's keys", {
  full <- vertices(CELL(level = 3))
  sub <- vertices(CELL(c(5, 100, 700), level = 3))
  expect_true(all(sub$.vx %in% full$.vx))
  expect_equal(nrow(sub), 12)
})

test_that("cell boundaries are counter-clockwise", {
  x <- CELL(seq(0, 12 * 4^3 - 1, by = 7), level = 3)
  expect_true(all(signed_area(x) > 0))
})
