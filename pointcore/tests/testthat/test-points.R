laz <- function() system.file("extdata", "example.laz", package = "rlas")

test_that("read_points gives the point-cloud form with ids", {
  p <- read_points(laz())
  expect_s3_class(p, "pointcore_points")
  expect_identical(attr(p, "meshspec")$form, "points")
  P <- p$points
  expect_true(all(c("x", "y", "z", "intensity", "classification", "source", "id") %in% names(P)))
  expect_equal(P$id, seq_len(nrow(P)))
  expect_equal(nrow(p$sources), 1L)
})

test_that("a filtered read keeps the ids of a full read", {
  p <- read_points(laz())
  k <- read_points(laz(), filter = "-keep_first")
  expect_lt(nrow(k$points), nrow(p$points))
  expect_equal(k$points$x, p$points$x[k$points$id])
  expect_equal(k$points$gps_time, p$points$gps_time[k$points$id])
})

test_that("a TIN keeps its returns and face_points honours thresholds", {
  skip_if_not_installed("cdtr")
  skip_if_not_installed("geometry")
  p <- read_points(laz())
  tin <- points_tin(p, classes = NULL)
  v <- tin$vertices
  ok <- !is.na(v$input_row)
  expect_equal(v$z[ok], p$points$z[v$input_row[ok]])
  expect_equal(v$x[ok], p$points$x[v$input_row[ok]])
  fp <- face_points(tin, p)
  expect_named(fp, c("face", "point", "u", "v", "dz"))
  expect_true(all(abs(fp$dz) < 1e-6))
  lo <- face_points(tin, p, above = 0, below = 0)
  expect_lte(nrow(lo), nrow(fp))
})
