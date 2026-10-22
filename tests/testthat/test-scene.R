## a two-triangle form in UTM 55S, built by hand so no engine is needed
square_tri <- function(crs = "EPSG:32755") {
  structure(list(
    vertices = data.frame(x = 500000 + c(0, 10, 10, 0), y = 5250000 + c(0, 0, 10, 10),
                          z = c(1, 2, 3, 4), input_row = 1:4),
    triangles = data.frame(v0 = c(1L, 1L), v1 = c(2L, 3L), v2 = c(3L, 4L))
  ), meshspec = list(version = "0.1", form = "tri", crs = crs), class = "meshcore_tri")
}

test_that("write_scene() writes the drawable form and a scene that names it", {
  skip_if_not_installed("nanoarrow", "0.5.0")
  m <- square_tri()
  d <- tempfile("scene")
  faces <- data.frame(face = c(2L, 1L), n = c(7L, 3L), class = c("b", "a"))
  p <- write_scene(m, d, faces = faces, fill_by = "n", stroke = c(0, 0, 0, 255))
  expect_setequal(list.files(d), c("scene.json", "mesh_vertices.arrows",
                                   "mesh_indices.arrows", "mesh_faces.arrows"))
  s <- jsonlite::fromJSON(p, simplifyVector = FALSE)
  expect_equal(s$version, "0.7")
  expect_equal(s$view$crs, "EPSG:32755")
  expect_equal(unlist(s$view$local_origin), c(500005, 5250005))
  expect_true(s$data$mesh_vertices$origin_subtracted)
  L <- s$layers[[1]]
  expect_equal(L$kind, "mesh")
  expect_equal(L$fill_by$table, "faces")
  expect_equal(unlist(L$fill_by$palette$range), c(3, 7))
  expect_equal(unlist(L$popup$columns), c("n", "class"))
  expect_equal(s$legends[[1]]$ramp$palette, "terrain")

  ## float32 positions with the origin taken off, 0-based uint32 indices
  v <- nanoarrow::read_nanoarrow(file.path(d, "mesh_vertices.arrows"))
  expect_equal(v$get_schema()$children$position$format, "+w:3")
  expect_equal(v$get_schema()$children$position$children[[1]]$format, "f")
  pos <- matrix(unlist(as.data.frame(v)$position), ncol = 3, byrow = TRUE)
  expect_equal(pos[, 1], c(-5, 5, 5, -5))
  expect_equal(pos[, 3], c(1, 2, 3, 4))
  i <- nanoarrow::read_nanoarrow(file.path(d, "mesh_indices.arrows"))
  expect_equal(i$get_schema()$children$index$format, "I")
  expect_equal(as.numeric(as.data.frame(i)$index), c(0, 1, 2, 0, 2, 3))

  ## faces matched on `face` into triangle order
  f <- as.data.frame(nanoarrow::read_nanoarrow(file.path(d, "mesh_faces.arrows")))
  expect_equal(f$n, c(3L, 7L))
  expect_equal(f$class, c("a", "b"))
})

test_that("write_scene() uses one fill without fill_by, and checks its inputs", {
  skip_if_not_installed("nanoarrow", "0.5.0")
  d <- tempfile("scene")
  s <- jsonlite::fromJSON(write_scene(square_tri(), d, z = NULL), simplifyVector = FALSE)
  L <- s$layers[[1]]
  expect_null(L$fill_by)
  expect_equal(unlist(L$fill), c(180, 170, 150, 255))
  expect_null(L$popup)
  expect_null(s$legends)
  expect_false(file.exists(file.path(d, "mesh_faces.arrows")))
  v <- nanoarrow::read_nanoarrow(file.path(d, "mesh_vertices.arrows"))
  expect_equal(v$get_schema()$children$position$format, "+w:2")

  expect_error(write_scene(square_tri(NA_character_), tempfile()), "no CRS")
  expect_error(write_scene(square_tri(), tempfile(), faces = data.frame(n = 1)), "1 rows for 2 triangles")
  expect_error(write_scene(square_tri(), tempfile(), fill_by = "nope"), "no face or vertex column")
  ## a vertex column can colour too
  s <- jsonlite::fromJSON(write_scene(square_tri(), tempfile(), fill_by = "z"), simplifyVector = FALSE)
  expect_equal(s$layers[[1]]$fill_by$table, "vertices")
})
