#' The verb set
#'
#' The same calls work on every model.
#'
#' * `cells()`: one row per cell: `.cell` id and centre `x`, `y` (longitude
#'   and latitude for HEALPix). xdggs `cell_centers`; OGC API DGGS zones.
#' * `boundaries()`: one row per cell corner, counter-clockwise: `.cell`,
#'   `.corner`, `.vx`. UGRID `face_node_connectivity` in long form.
#' * `vertices()`: one row per unique vertex: `.vx` (its lattice key), `x`,
#'   `y`. UGRID nodes; wkpool's vertex pool.
#' * `edges()`: one row per unique undirected edge: `.edge`, `.vx0`, `.vx1`.
#'   UGRID `edge_node_connectivity`; wkpool segments.
#' * `face_edge()`: one row per cell side: `.cell`, `.corner`, `.edge`.
#'   UGRID `face_edge_connectivity`.
#' * `neighbours()`: pairs of cells sharing an edge (`type = "edge"`) or a
#'   vertex (`type = "vertex"`). UGRID `face_face_connectivity`.
#' * `parent()`, `children()`: the hierarchy. OGC API DGGS parent zones and
#'   sub-zones; xdggs `zoom_to`.
#'
#' `vertices()`, `edges()`, `face_edge()` and `neighbours()` are derived from
#' `boundaries()` by integer keys alone, so they are the same code for every
#' model. Only `cells()` and `boundaries()` (and the hierarchy) are written
#' per model.
#'
#' @param x A model from [GRID()] or [CELL()].
#' @param type `"edge"` or `"vertex"` adjacency.
#' @param ... Unused.
#' @name verbs
NULL

#' @rdname verbs
#' @export
cells <- function(x, ...) UseMethod("cells")

#' @export
cells.GRID <- function(x, ...) {
  m <- x$meta
  id <- grid_ids(x)
  rc <- grid_rc(id, m$dim[1])
  res <- grid_res(m)
  data.frame(.cell = id, col = rc$col, row = rc$row,
             x = m$extent[1] + (rc$col + 0.5) * res[1],
             y = m$extent[4] - (rc$row + 0.5) * res[2])
}

#' @export
cells.CELL <- function(x, ...) {
  m <- x$meta
  if (m$grid_name == "healpix") {
    ll <- hpx_centres(x$cell, m$level)
    return(data.frame(.cell = x$cell, x = ll[, "lon"], y = ll[, "lat"]))
  }
  cl <- hex_centre_lattice(x$cell, m$ncol)
  xy <- hex_lattice_xy(cl$X, cl$Y, m)
  data.frame(.cell = x$cell, x = xy[, "x"], y = xy[, "y"])
}

#' @rdname verbs
#' @export
boundaries <- function(x, ...) UseMethod("boundaries")

#' @export
boundaries.GRID <- function(x, ...) {
  id <- grid_ids(x)
  data.frame(.cell = rep(id, each = 4), .corner = rep(1:4, length(id)),
             .vx = grid_corner_keys(id, x$meta$dim[1]))
}

#' @export
boundaries.CELL <- function(x, ...) {
  m <- x$meta
  if (m$grid_name == "healpix") {
    k <- 4
    vx <- hpx_corner_keys(x$cell, m$level)
  } else {
    k <- 6
    vx <- hex_corner_keys(x$cell, m)
  }
  data.frame(.cell = rep(x$cell, each = k), .corner = rep(seq_len(k), length(x$cell)),
             .vx = vx)
}

#' @rdname verbs
#' @export
vertices <- function(x, ...) UseMethod("vertices")

#' @export
vertices.GRID <- function(x, ...) {
  m <- x$meta
  key <- seq(0, (m$dim[1] + 1) * (m$dim[2] + 1) - 1)
  xy <- grid_key_xy(key, m)
  data.frame(.vx = key, x = xy[, "x"], y = xy[, "y"])
}

#' @export
vertices.CELL <- function(x, ...) {
  m <- x$meta
  key <- sort(unique(boundaries(x)$.vx))
  xy <- if (m$grid_name == "healpix") hpx_key_lonlat(key, 2^m$level) else hex_key_xy(key, m)
  data.frame(.vx = key, x = xy[, 1], y = xy[, 2])
}

#' @rdname verbs
#' @export
face_edge <- function(x, ...) UseMethod("face_edge")

# derived from boundaries(); a model that stores its own edges (UGRID) can
# provide methods for face_edge() and edges() instead
#' @export
face_edge.default <- function(x, ...) {
  b <- boundaries(x)
  n <- nrow(b)
  # the next corner in the same cell, wrapping to the cell's first corner
  last <- c(b$.cell[-1] != b$.cell[-n], TRUE)
  first <- c(TRUE, last[-n])
  nxt <- seq_len(n) + 1
  nxt[last] <- which(first)
  v0 <- b$.vx
  v1 <- b$.vx[nxt]
  # undirected edge key from a dense vertex rank, exact in double precision
  u <- unique(v0)
  r0 <- match(v0, u)
  r1 <- match(v1, u)
  key <- pmin(r0, r1) * (length(u) + 1) + pmax(r0, r1)
  ukey <- unique(key)
  e <- match(key, ukey) - 1
  out <- data.frame(.cell = b$.cell, .corner = b$.corner, .edge = e)
  first_use <- !duplicated(e)
  attr(out, "edges") <- data.frame(.edge = e[first_use], .vx0 = v0[first_use],
                                   .vx1 = v1[first_use])
  out
}

#' @rdname verbs
#' @export
edges <- function(x, ...) UseMethod("edges")

#' @export
edges.default <- function(x, ...) {
  e <- attr(face_edge(x), "edges")
  rownames(e) <- NULL
  e
}

#' @rdname verbs
#' @export
neighbours <- function(x, type = c("edge", "vertex"), ...) {
  type <- match.arg(type)
  if (type == "edge") {
    fe <- face_edge(x)
    g <- fe$.edge
    cell <- fe$.cell
  } else {
    b <- boundaries(x)
    g <- b$.vx
    cell <- b$.cell
  }
  o <- order(g)
  g <- g[o]
  cell <- cell[o]
  n <- length(g)
  a <- b2 <- numeric(0)
  # every pair of cells sharing a group (edge: 2 cells; vertex: up to ~7)
  lag <- 1
  repeat {
    if (lag >= n) break
    same <- g[-seq_len(lag)] == g[seq_len(n - lag)]
    if (!any(same)) break
    i <- which(same)
    a <- c(a, cell[i], cell[i + lag])
    b2 <- c(b2, cell[i + lag], cell[i])
    lag <- lag + 1
  }
  keep <- a != b2
  out <- data.frame(.cell = a[keep], .neighbour = b2[keep])
  out <- out[!duplicated(out), , drop = FALSE]
  out <- out[order(out$.cell, out$.neighbour), , drop = FALSE]
  rownames(out) <- NULL
  out
}

#' @rdname verbs
#' @param n Number of levels to move.
#' @export
parent <- function(x, n = 1, ...) UseMethod("parent")

#' @export
parent.CELL <- function(x, n = 1, ...) {
  m <- x$meta
  if (m$grid_name != "healpix") stop("hexlattice has no hierarchy (aperture 3/4/7 needed: see notes)")
  if (n > m$level) stop("cannot go above level 0")
  p <- x$cell %/% 4^n
  structure(data.frame(.cell = x$cell, .parent = p),
            model = CELL(unique(p), grid_name = "healpix", level = m$level - n))
}

# GRID parent: 2^n x 2^n blocks, extent grows to a whole number of blocks
#' @export
parent.GRID <- function(x, n = 1, ...) {
  m <- x$meta
  f <- 2^n
  res <- grid_res(m)
  pdim <- ceiling(m$dim / f)
  ext <- c(m$extent[1], m$extent[1] + pdim[1] * f * res[1],
           m$extent[4] - pdim[2] * f * res[2], m$extent[4])
  pm <- GRID(dim = pdim, extent = ext, crs = m$crs)
  pm$meta$level <- m$level - n
  id <- grid_ids(x)
  rc <- grid_rc(id, m$dim[1])
  structure(data.frame(.cell = id, .parent = (rc$row %/% f) * pdim[1] + rc$col %/% f),
            model = pm)
}

#' @rdname verbs
#' @export
children <- function(x, n = 1, ...) UseMethod("children")

#' @export
children.CELL <- function(x, n = 1, ...) {
  m <- x$meta
  if (m$grid_name != "healpix") stop("hexlattice has no hierarchy")
  k <- 4^n
  ch <- rep(x$cell * k, each = k) + rep(seq(0, k - 1), length(x$cell))
  structure(data.frame(.cell = rep(x$cell, each = k), .child = ch),
            model = CELL(ch, grid_name = "healpix", level = m$level + n))
}

#' @export
children.GRID <- function(x, n = 1, ...) {
  m <- x$meta
  f <- 2^n
  cm <- GRID(dim = m$dim * f, extent = m$extent, crs = m$crs)
  cm$meta$level <- m$level + n
  id <- grid_ids(cm)
  rc <- grid_rc(id, cm$meta$dim[1])
  out <- data.frame(.cell = (rc$row %/% f) * m$dim[1] + rc$col %/% f, .child = id)
  structure(out[order(out$.cell, out$.child), ], model = cm)
}

#' Counts of cells, vertices and edges
#' @param x A model.
#' @export
mesh_counts <- function(x) {
  c(cells = n_cells(x), vertices = length(unique(boundaries(x)$.vx)),
    edges = nrow(edges(x)))
}
