test_that("GRID tables have closed-form sizes", {
  x <- GRID(dim = c(7, 5), extent = c(0, 7, 0, 5))
  expect_equal(unname(mesh_counts(x)), c(35, 8 * 6, 7 * 6 + 5 * 8))
  expect_equal(nrow(vertices(x)), 48)
  expect_true(all(signed_area(x) > 0))
  expect_equal(cells(x)$x[1:2], c(0.5, 1.5))
  expect_equal(cells(x)$y[1], 4.5)
})

test_that("GRID neighbours are rook (edge) and queen (vertex)", {
  x <- GRID(dim = c(4, 3), extent = c(0, 4, 0, 3))
  e <- neighbours(x)
  expect_equal(sort(e$.neighbour[e$.cell == 5]), c(1, 4, 6, 9))
  v <- neighbours(x, "vertex")
  expect_equal(sort(v$.neighbour[v$.cell == 5]), c(0, 1, 2, 4, 6, 8, 9, 10))
})

test_that("GRID hierarchy is 2 x 2 blocks", {
  x <- GRID(dim = c(5, 3), extent = c(0, 5, 0, 3))
  p <- parent(x)
  pm <- attr(p, "model")
  expect_equal(pm$meta$dim, c(3, 2))
  expect_equal(p$.parent[p$.cell %in% c(0, 1, 5, 6)], c(0, 0, 0, 0))
  expect_equal(p$.parent[p$.cell == 14], 5)
  ch <- children(pm)
  expect_equal(nrow(ch), 4 * 6)
})

test_that("GRID from a GeoTIFF joins its array by computed key", {
  tif <- system.file("extdata", "field.tif", package = "meshcore")
  x <- GRID(tif)
  expect_equal(x$meta$dim, c(160, 90))
  j <- join_array(x, read_array(tif))
  expect_equal(nrow(j), 14400)
  expect_lt(max(abs(j$value - field(j$x, j$y))), 1e-5)
})
