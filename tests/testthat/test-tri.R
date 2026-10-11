## a square with a square hole
sq_x <- c(0, 1, 1, 0, 0.25, 0.75, 0.75, 0.25)
sq_y <- c(0, 0, 1, 1, 0.25, 0.25, 0.75, 0.75)
sq_s0 <- 1:8
sq_s1 <- c(2, 3, 4, 1, 6, 7, 8, 5)

engines <- function() {
  c("cdtr", "laridae")[c(requireNamespace("cdtr", quietly = TRUE),
                         requireNamespace("laridae", quietly = TRUE))]
}

expect_tri_form <- function(m, n_input) {
  expect_s3_class(m, "meshcore_tri")
  expect_named(m, c("vertices", "triangles", "constraints", "report"))
  expect_identical(attr(m, "meshspec")$form, "tri")
  v <- m$vertices; t <- m$triangles; s <- m$constraints
  expect_true(all(c("x", "y", "origin") %in% names(v)))
  expect_true(all(c("v0", "v1", "v2", "depth") %in% names(t)))
  expect_true(all(c("v0", "v1") %in% names(s)))
  ## Decision 2: 1-based rows
  idx <- c(t$v0, t$v1, t$v2, s$v0, s$v1)
  expect_type(t$v0, "integer")
  expect_true(min(idx) >= 1L && max(idx) <= nrow(v))
  ## Decision 3: counter-clockwise
  a <- (v$x[t$v1] - v$x[t$v0]) * (v$y[t$v2] - v$y[t$v0]) -
    (v$x[t$v2] - v$x[t$v0]) * (v$y[t$v1] - v$y[t$v0])
  expect_true(all(a > 0))
  ## Decision 4: origin dictionary, input first
  expect_s3_class(v$origin, "factor")
  expect_identical(levels(v$origin), c("input", "crossing", "steiner", "grid", "lattice"))
  expect_false(is.unsorted(as.integer(v$origin)))
  expect_equal(sum(v$origin == "input"), n_input)
  expect_true(all(s$v0 < s$v1))
  expect_equal(nrow(m$report), 1L)
  expect_equal(m$report$n_triangles, nrow(t))
}

test_that("tri_mesh gives the spec triangle form from each engine", {
  skip_if(length(engines()) == 0L, "no triangulation engine installed")
  for (e in engines()) {
    m <- tri_mesh(sq_x, sq_y, sq_s0, sq_s1, PA = cbind(z = sq_x + 2 * sq_y),
                  engine = e, erase = "holes", max_area = 0.01, min_angle = 20)
    expect_tri_form(m, 8L)
    expect_identical(m$report$backend, e)
    expect_identical(m$report$erase, "holes")
    expect_true(m$report$refined)
    expect_true(any(m$vertices$origin == "steiner"))
    ## the hole is erased, so every triangle is at odd depth
    expect_true(all(m$triangles$depth %% 2L == 1L))
    ## attributes are carried onto Steiner vertices linearly
    v <- m$vertices
    expect_equal(v$z, v$x + 2 * v$y, tolerance = 1e-9)
    ## every input segment is on the constraint table
    expect_true(all(attr(m, "input_map") == 1:8))
  }
})

test_that("both engines give the same constrained triangulation", {
  skip_if_not_installed("cdtr")
  skip_if_not_installed("laridae")
  set.seed(1)
  x <- c(sq_x[1:4], runif(40, 0.05, 0.95))
  y <- c(sq_y[1:4], runif(40, 0.05, 0.95))
  key <- function(m) {
    v <- m$vertices; t <- m$triangles
    k <- paste(v$x, v$y)
    tk <- apply(cbind(k[t$v0], k[t$v1], k[t$v2]), 1, function(z) paste(sort(z), collapse = "|"))
    sort(tk)
  }
  a <- tri_mesh(x, y, 1:4, c(2:4, 1), engine = "cdtr")
  b <- tri_mesh(x, y, 1:4, c(2:4, 1), engine = "laridae")
  expect_identical(key(a), key(b))
  expect_identical(a$triangles$depth[order(key(a))], b$triangles$depth[order(key(b))])
})

test_that("depth counts a doubled boundary per copy, depth_distinct once", {
  skip_if(length(engines()) == 0L, "no triangulation engine installed")
  ## two unit squares sharing the edge x = 1, each given as its own ring
  x <- c(0, 1, 1, 0, 1, 2, 2, 1)
  y <- c(0, 0, 1, 1, 0, 0, 1, 1)
  for (e in engines()) {
    m <- tri_mesh(x, y, 1:8, c(2, 3, 4, 1, 6, 7, 8, 5), engine = e, erase = "hull")
    expect_true("depth_distinct" %in% names(m$triangles))
    expect_true(all(m$triangles$depth_distinct <= m$triangles$depth))
    ## duplicate input points are merged; the map says where each went
    expect_equal(sum(m$vertices$origin == "input"), 6L)
    im <- attr(m, "input_map")
    expect_equal(m$vertices$x[im], x)
    expect_equal(m$vertices$y[im], y)
    shared <- m$constraints$count
    if (!is.null(shared)) expect_equal(max(shared), 2L)
  }
})

test_that("crossing constraints give crossing vertices", {
  skip_if(length(engines()) == 0L, "no triangulation engine installed")
  x <- c(0, 1, 0, 1); y <- c(0, 1, 1, 0)
  for (e in engines()) {
    m <- tri_mesh(x, y, c(1, 3), c(2, 4), engine = e, erase = "hull")
    expect_tri_form(m, 4L)
    expect_equal(sum(m$vertices$origin == "crossing"), 1L)
    expect_identical(m$report$erase, "hull")
  }
})

test_that("tri_form takes raw engine output and a laridae handle", {
  skip_if_not_installed("cdtr")
  r <- cdtr::cdt_triangulate(sq_x, sq_y, sq_s0, sq_s1, erase = "holes")
  m <- tri_form(r, erase = "holes")
  expect_tri_form(m, 8L)
  expect_identical(tri_form(m), m)
  expect_true(is.na(tri_form(r)$report$erase))
  skip_if_not_installed("laridae")
  h <- laridae::lari_new(sq_x, sq_y, sq_s0, sq_s1)
  mh <- tri_form(h, erase = "holes")
  expect_tri_form(mh, 8L)
  expect_identical(mh$report$erase, "holes")
  expect_identical(nrow(mh$triangles), nrow(m$triangles))
  expect_error(tri_form(list(a = 1)), "not a recognised")
})

test_that("tri_form winds clockwise input counter-clockwise", {
  tri <- data.frame(v0 = 1L, v1 = 3L, v2 = 2L)
  out <- ccw_triangles(c(0, 1, 0), c(0, 0, 1), tri)
  expect_identical(unlist(out), c(v0 = 1L, v1 = 2L, v2 = 3L))
})
