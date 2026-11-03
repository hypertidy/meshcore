## mesh spec v0.2: edge_sources on the triangle form

has_edge_sources <- function() {
  requireNamespace("cdtr", quietly = TRUE) &&
    "edge_sources" %in% names(formals(cdtr::cdt_triangulate))
}

## rectangles as CCW rings: one row per rectangle (xmin, ymin, xmax, ymax);
## ring i is feature i
rect_rings <- function(b) {
  x <- y <- s0 <- s1 <- numeric(0)
  for (i in seq_len(nrow(b))) {
    o <- length(x)
    x <- c(x, b[i, 1], b[i, 3], b[i, 3], b[i, 1])
    y <- c(y, b[i, 2], b[i, 2], b[i, 4], b[i, 4])
    s0 <- c(s0, o + 1:4)
    s1 <- c(s1, o + c(2:4, 1))
  }
  list(x = x, y = y, s0 = s0, s1 = s1, feature = rep(seq_len(nrow(b)), each = 4L))
}

## Annex A: winding per feature by propagation over the triangle form, using
## only adjacency, constraint rows and edge_sources
annex_a_winding <- function(m, feature) {
  t <- m$triangles; s <- m$constraints; es <- m$edge_sources
  nt <- nrow(t); nf <- max(feature)
  a <- c(t$v0, t$v1, t$v2)
  b <- c(t$v1, t$v2, t$v0)
  tri <- rep(seq_len(nt), 3L)
  twin <- match(paste(b, a), paste(a, b))
  edge <- match(paste(pmin(a, b), pmax(a, b)), paste(s$v0, s$v1))
  ## winding change crossing side i from its triangle (left of a -> b) to the right
  step <- function(i) {
    d <- numeric(nf)
    k <- edge[i]
    if (is.na(k)) return(d)
    r <- es$edge == k
    left_is_v0 <- a[i] == s$v0[k]
    sgn <- ifelse(es$forward[r] == left_is_v0, -1, 1)
    for (j in seq_along(sgn)) d[feature[es$segment[r][j]]] <- d[feature[es$segment[r][j]]] + sgn[j]
    d
  }
  w <- matrix(NA_real_, nt, nf)
  bad <- 0L
  seen <- rep(FALSE, nt)
  for (start in which(is.na(twin))) {
    t0 <- tri[start]
    if (seen[t0]) next
    w[t0, ] <- -step(start)
    seen[t0] <- TRUE
    queue <- t0
    while (length(queue)) {
      tt <- queue[1]; queue <- queue[-1]
      for (i in which(tri == tt)) {
        if (is.na(twin[i])) {
          if (any(w[tt, ] != -step(i))) bad <- bad + 1L
          next
        }
        u <- tri[twin[i]]
        wu <- w[tt, ] + step(i)
        if (!seen[u]) {
          w[u, ] <- wu
          seen[u] <- TRUE
          queue <- c(queue, u)
        } else if (any(w[u, ] != wu)) {
          bad <- bad + 1L
        }
      }
    }
  }
  attr(w, "inconsistent_edges") <- bad
  w
}

test_that("tri_mesh carries edge_sources from cdtr and follows the spec rules", {
  skip_if_not(has_edge_sources(), "cdtr without edge_sources")
  d <- rect_rings(rbind(c(0, 0, 2, 2), c(1, 1, 3, 3)))
  m <- tri_mesh(d$x, d$y, d$s0, d$s1, max_area = 0.05)
  expect_identical(attr(m, "meshspec")$version, "0.2")
  es <- m$edge_sources
  expect_named(es, c("edge", "segment", "forward"))
  expect_type(es$edge, "integer")
  expect_type(es$forward, "logical")
  ## coverage: every constraint edge and every input segment
  expect_setequal(es$edge, seq_len(nrow(m$constraints)))
  expect_setequal(es$segment, seq_along(d$s0))
  ## order: edge, then segment
  expect_identical(order(es$edge, es$segment), seq_len(nrow(es)))
  ## direction is relative to the stored (v0 < v1) constraints row
  v <- m$vertices; s <- m$constraints
  dv <- cbind(v$x[s$v1[es$edge]] - v$x[s$v0[es$edge]], v$y[s$v1[es$edge]] - v$y[s$v0[es$edge]])
  ov <- cbind(d$x[d$s1[es$segment]] - d$x[d$s0[es$segment]],
              d$y[d$s1[es$segment]] - d$y[d$s0[es$segment]])
  expect_identical(rowSums(dv * ov) > 0, es$forward)
  ## derived columns
  expect_identical(s$count, tabulate(es$edge, nrow(s)))
  expect_identical(s$segment, as.integer(tapply(es$segment, es$edge, min)))
})

test_that("the spec's two-square example gives the documented rows", {
  skip_if_not(has_edge_sources(), "cdtr without edge_sources")
  x <- c(0, 1, 1, 0, 1, 2, 2, 1)
  y <- c(0, 0, 1, 1, 0, 0, 1, 1)
  m <- tri_mesh(x, y, 1:8, c(2, 3, 4, 1, 6, 7, 8, 5))
  expect_identical(unname(unlist(m$constraints[3, c("v0", "v1")])), c(2L, 3L))
  es <- m$edge_sources
  expect_identical(es[es$edge == 3L, c("segment", "forward")],
                   data.frame(segment = c(2L, 8L), forward = c(TRUE, FALSE),
                              row.names = which(es$edge == 3L)))
})

test_that("tri_form remaps edges and flips direction for engine rows it swaps", {
  ## an engine-shaped result whose constraint rows are unsorted and reversed
  r <- list(P = cbind(c(0, 1, 0), c(0, 0, 1)), T = rbind(c(1, 2, 3)),
            S = rbind(c(3, 1), c(2, 1), c(2, 3)), depth = 1L,
            n_input = 3L, n_crossing = 0L, input_map = 1:3,
            edge_sources = data.frame(edge = c(1L, 2L, 3L), segment = c(3L, 1L, 2L),
                                      forward = c(TRUE, FALSE, TRUE)))
  m <- tri_form(r)
  ## sorted constraints: (1, 2) was row 2 reversed, (1, 3) row 1 reversed, (2, 3) row 3
  expect_identical(m$constraints$v0, c(1L, 1L, 2L))
  expect_identical(m$constraints$v1, c(2L, 3L, 3L))
  expect_identical(m$edge_sources$edge, 1:3)
  expect_identical(m$edge_sources$segment, c(1L, 3L, 2L))
  expect_identical(m$edge_sources$forward, c(TRUE, FALSE, TRUE))
})

test_that("Annex A labelling from edge_sources gives the overlap count, not depth", {
  skip_if_not(has_edge_sources(), "cdtr without edge_sources")
  ## four overlapping bars around an uncovered gap [1, 2] x [1, 2]
  b <- rbind(c(0, 0, 3, 1), c(0, 2, 3, 3), c(0, 0, 1, 3), c(2, 0, 3, 3))
  d <- rect_rings(b)
  for (erase in c("outer", "hull")) {
    m <- tri_mesh(d$x, d$y, d$s0, d$s1, erase = erase, max_area = 0.05)
    w <- annex_a_winding(m, d$feature)
    expect_identical(attr(w, "inconsistent_edges"), 0L)
    v <- m$vertices; t <- m$triangles
    cx <- (v$x[t$v0] + v$x[t$v1] + v$x[t$v2]) / 3
    cy <- (v$y[t$v0] + v$y[t$v1] + v$y[t$v2]) / 3
    inside <- outer(cx, b[, 1], ">") & outer(cx, b[, 3], "<") &
      outer(cy, b[, 2], ">") & outer(cy, b[, 4], "<")
    ## nonzero: feature f covers t when w != 0
    expect_identical(unname(w != 0), unname(inside))
    gap <- cx > 1 & cx < 2 & cy > 1 & cy < 2
    expect_true(all(rowSums(w[gap, , drop = FALSE] != 0) == 0))
    expect_true(all(t$depth[gap] > 0))
  }
})
