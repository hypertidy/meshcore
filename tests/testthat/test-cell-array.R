test_that("CELL from a HEALPix Zarr joins its array by cell id", {
  zarr <- system.file("extdata", "field_healpix.zarr", package = "meshcore")
  x <- CELL(zarr)
  expect_equal(x$meta$grid_name, "healpix")
  expect_equal(x$meta$level, 6L)
  a <- read_array(zarr, "field")
  expect_equal(a$key_dim, "cells")
  j <- join_array(x, a)
  expect_equal(nrow(j), length(x$cell) * 3)
  expect_lt(max(abs(j$value - field(j$x, j$y, j$time))), 1e-5)
  # a subset of cells, in another order, joins the same values
  y <- CELL(rev(x$cell[1:50]), level = 6)
  jy <- join_array(y, a)
  jj <- j[match(paste(jy$.cell, jy$time), paste(j$.cell, j$time)), ]
  expect_equal(jy$value, jj$value)
})
