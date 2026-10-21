## a 2 x 2 square split at its centre, z = x + 2y, in a projected CRS
sq <- function() {
  skip_if_not_installed("cdtr")
  skip_if_not_installed("geometry")
  x <- c(0, 2, 2, 0, 1); y <- c(0, 0, 2, 2, 1)
  tri_mesh(x, y, PA = cbind(z = x + 2 * y), crs = "EPSG:32755")
}

test_that("locate gives faces and weights that reproduce the points", {
  m <- sq()
  px <- c(0.3, 1.5, 1.9, 5); py <- c(0.2, 1.2, 0.1, 5)
  loc <- locate(m, px, py)
  expect_named(loc, c("face", "u", "v"))
  expect_true(is.na(loc$face[4]))
  t <- m$triangles; v <- m$vertices
  ok <- 1:3
  f <- loc$face[ok]
  bx <- (1 - loc$u[ok] - loc$v[ok]) * v$x[t$v0[f]] + loc$u[ok] * v$x[t$v1[f]] + loc$v[ok] * v$x[t$v2[f]]
  by <- (1 - loc$u[ok] - loc$v[ok]) * v$y[t$v0[f]] + loc$u[ok] * v$y[t$v1[f]] + loc$v[ok] * v$y[t$v2[f]]
  expect_equal(bx, px[ok]); expect_equal(by, py[ok])
  ## a point exactly on a hull vertex is found
  expect_false(is.na(locate(m, 0, 0)$face))
})

test_that("pick blends vertex columns linearly", {
  m <- sq()
  loc <- locate(m, 0.7, 0.4)
  pk <- pick(m, loc$face, loc$u, loc$v)
  expect_s3_class(pk, "meshcore_pick")
  expect_equal(sum(pk$weights), 1)
  expect_equal(pk$at[["z"]], 0.7 + 2 * 0.4)
  expect_equal(nrow(pk$vertices), 3L)
})

test_that("sample_at_vertices and drape_uv read grids in their own CRS", {
  skip_if_not_installed("terra")
  m <- sq()
  r <- terra::rast(terra::ext(-1, 3, -1, 3), resolution = 0.5, crs = "EPSG:32755")
  xy <- terra::xyFromCell(r, seq_len(terra::ncell(r)))
  terra::values(r) <- xy[, 1] + 2 * xy[, 2]
  f <- tempfile(fileext = ".tif")
  terra::writeRaster(r, f)
  m <- sample_at_vertices(m, f, name = "dem")
  expect_equal(m$vertices$dem, m$vertices$z, tolerance = 1e-6)
  expect_identical(attr(m, "sources")$dem$band, 1L)
  m <- drape_uv(m, f)
  expect_equal(m$vertices$u, (m$vertices$x + 1) / 4)
  expect_equal(m$vertices$v, (3 - m$vertices$y) / 4)
  expect_true(all(m$triangles$uv_err_px < 1e-6))
  ## the same grid in lon/lat bends across a 2 m square only negligibly
  r2 <- terra::project(r, "EPSG:4326")
  f2 <- tempfile(fileext = ".tif")
  terra::writeRaster(r2, f2)
  m2 <- drape_uv(m, f2)
  expect_true(all(m2$triangles$uv_err_px < 0.01))
  pk <- pick(m, 1L, 0.2, 0.3)
  expect_named(pk$pixels, c("dsn", "col", "row"))
})

test_that("renderer adapters keep face order and the frame", {
  m <- sq()
  o <- c(1, 1, 0)
  if (requireNamespace("rgl", quietly = TRUE)) {
    m3 <- as_mesh3d(m, local_origin = o)
    expect_equal(ncol(m3$it), nrow(m$triangles))
    expect_equal(m3$vb[1, ], m$vertices$x - 1)
    expect_equal(attr(m3, "frame")$local_origin, o)
  }
  skip_if_not_installed("rayvertex")
  rm <- as_ray_mesh(m, local_origin = o, exaggeration = 2)
  expect_equal(nrow(rm$shapes[[1]]$indices), nrow(m$triangles))
  expect_equal(attr(rm, "frame")$axes, "x, z, -y")
})

test_that("pick_render inverts the camera of a rayvertex render", {
  skip_if_not_installed("rayvertex")
  m <- sq()
  rm <- as_ray_mesh(m, local_origin = c(1, 1, 0))
  cam <- list(lookfrom = c(-3, 6, 4), lookat = c(0, 1, 0))
  gb <- rayvertex::rasterize_scene(rm, lookfrom = cam$lookfrom, lookat = cam$lookat,
                                   fov = 40, width = 80, height = 60, fsaa = 1,
                                   plot = FALSE, debug = "all")
  pk <- NULL
  for (cl in seq(30, 50, by = 5)) {
    pk <- pick_render(m, gb, cl, 30, rm, lookfrom = cam$lookfrom, lookat = cam$lookat)
    if (!is.null(pk)) break
  }
  expect_s3_class(pk, "meshcore_pick")
  ## the picked point lies on the surface z = x + 2y
  expect_equal(pk$world[["z"]], pk$world[["x"]] + 2 * pk$world[["y"]], tolerance = 1e-6)
})
