test_that("write_mesh_arrow() and read_mesh_arrow() round trip a triangle form", {
  skip_if_not_installed("nanoarrow", "0.5.0")
  skip_if_not_installed("cdtr")
  m <- tri_mesh(c(0, 1, 1, 0, 0.5), c(0, 0, 1, 1, 0.5),
                PA = cbind(z = c(0, 1, 2, 1, 4)), crs = "EPSG:32755")
  links <- data.frame(face = c(1L, 1L, 2L), point = c(3L, 1L, 2L), dz = c(0.5, 1, 2))
  d <- tempfile("mesharrow")
  write_mesh_arrow(m, d, face_points = links)
  expect_setequal(sub("\\.arrows$", "", list.files(d)),
                  c("vertices", "triangles", "constraints", "report", "face_points"))

  ## references are 0-based on the wire and say where they point
  st <- nanoarrow::read_nanoarrow(file.path(d, "triangles.arrows"))
  meta <- st$get_schema()$metadata
  expect_equal(meta[["meshspec:form"]], "tri")
  expect_equal(meta[["crs"]], "EPSG:32755")
  expect_equal(jsonlite::fromJSON(meta[["meshspec:refs"]])$v0, "vertices")
  expect_equal(as.data.frame(st)$v0, m$triangles$v0 - 1L)

  r <- read_mesh_arrow(d)
  expect_s3_class(r, "meshcore_tri")
  expect_equal(attr(r, "meshspec")$crs, "EPSG:32755")
  expect_identical(r$triangles$v0, m$triangles$v0)
  expect_equal(r$vertices$z, m$vertices$z)
  expect_identical(r$face_points$point, links$point)
  expect_equal(as.character(r$vertices$origin), as.character(m$vertices$origin))
})

test_that("mesh_viewer() copies the viewer beside the tables", {
  skip_if_not_installed("nanoarrow", "0.5.0")
  skip_if_not_installed("cdtr")
  m <- tri_mesh(c(0, 1, 1, 0), c(0, 0, 1, 1), PA = cbind(z = c(0, 1, 2, 1)))
  d <- tempfile("mesharrow")
  write_mesh_arrow(m, file.path(d, "mesh"))
  index <- mesh_viewer(d, open = FALSE)
  expect_true(file.exists(index))
  expect_true(file.exists(file.path(d, "meshview.js")))
  expect_error(mesh_viewer(tempfile()), "no mesh/")
})

test_that("locate() works at UTM-sized coordinates", {
  skip_if_not_installed("geometry")
  skip_if_not_installed("cdtr")
  set.seed(1)
  x <- 533900 + runif(2000, 0, 300)
  y <- 6462300 + runif(2000, 0, 300)
  m <- tri_mesh(x, y)
  loc <- locate(m, 534000.5, 6462400.5)
  expect_false(is.na(loc$face))
})
