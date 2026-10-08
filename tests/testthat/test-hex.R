hex <- function(orientation) {
  # a 6 x 5 lattice minus a few cells
  CELL(setdiff(0:29, c(7, 8, 20)), grid_name = "hexlattice", radius = 1,
       ncol = 6, nrow = 5, orientation = orientation)
}

test_that("hexagons are counter-clockwise in both orientations", {
  expect_true(all(signed_area(hex("flat")) > 0))
  expect_true(all(signed_area(hex("pointy")) > 0))
})

test_that("computed vertices and edges agree with merging coordinates", {
  skip_if_not_installed("wkpool")
  for (o in c("flat", "pointy")) {
    x <- hex(o)
    p <- wkpool::merge_coincident(wkpool::establish_topology(as_wk(x)))
    s <- wkpool::pool_segments(p)
    k <- mesh_counts(x)
    expect_equal(k[["vertices"]], nrow(wkpool::pool_vertices(p)))
    expect_equal(k[["edges"]], nrow(unique(cbind(pmin(s$.vx0, s$.vx1), pmax(s$.vx0, s$.vx1)))))
  }
})

test_that("interior hexagons have 6 neighbours", {
  x <- CELL(0:99, grid_name = "hexlattice", ncol = 10, nrow = 10)
  nb <- neighbours(x)
  expect_equal(max(table(nb$.cell)), 6)
  expect_equal(sum(table(nb$.cell) == 6), 64)
})

test_that("as_wkpool hands over an already-merged pool", {
  skip_if_not_installed("wkpool")
  x <- hex("flat")
  p <- as_wkpool(x)
  expect_equal(nrow(wkpool::pool_vertices(p)), nrow(vertices(x)))
  expect_equal(length(p), nrow(boundaries(x)))
})
