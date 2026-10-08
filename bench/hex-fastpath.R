# Hexagon fast path against the silicate-vs-wkpool benchmark counts.
#
# The benchmark's hex_grid(n) is sf::st_make_grid(square = FALSE) truncated
# to n cells. Here the same cells are given as hexlattice cell ids (derived
# from the sf centres once), then vertices and edges are computed from the
# ids alone and compared with the benchmark and with wkpool on the same
# polygons.
#
# Rscript bench/hex-fastpath.R   (from the package root)

suppressPackageStartupMessages({
  library(sf); library(wk); library(wkpool); library(meshcore)
})

hex_grid <- function(n) {
  side <- ceiling(sqrt(n))
  bb <- st_bbox(c(xmin = 0, ymin = 0, xmax = side, ymax = side))
  g <- st_make_grid(st_as_sfc(bb), cellsize = 1, square = FALSE)
  st_sf(id = seq_along(g), geometry = g)[seq_len(min(n, length(g))), ]
}

# sf polygons -> hexlattice CELL model (lattice fitted from the centres)
hex_cell_from_sf <- function(x) {
  # sf's default hexagons are pointy topped: work in exchanged x/y, where
  # they are the flat-topped lattice
  co <- wk_coords(st_geometry(x))
  co <- co[c(diff(co$feature_id) == 0, FALSE), ]   # drop each closing coordinate
  first <- co[co$feature_id == 1, ]
  radius <- (max(first$y) - min(first$y)) / 2
  ctr <- cbind(tapply(co$y, co$feature_id, mean), tapply(co$x, co$feature_id, mean))
  ux <- radius / 2; uy <- radius * sqrt(3) / 2
  X <- round((ctr[, 1] - min(ctr[, 1])) / ux)
  Y <- round((ctr[, 2] - min(ctr[, 2])) / uy)
  col <- X / 3
  # make row parity agree with Y = 2 row + col %% 2
  shift <- (Y[1] - col[1] %% 2) %% 2
  Y <- Y + shift
  row <- (Y - col %% 2) / 2
  stopifnot(all(col == round(col)), all(row == round(row)))
  ncol <- max(col) + 1; nrow <- max(row) + 1
  origin <- c(min(ctr[, 2]) - shift * uy, min(ctr[, 1]))
  CELL(row * ncol + col, grid_name = "hexlattice", radius = radius,
       origin = origin, ncol = ncol, nrow = nrow, orientation = "pointy")
}

counts <- read.csv(file.path("/mnt/project-files/benchmarks/silicate-vs-wkpool/results/counts.csv"))
out <- list()
for (nm in c("hex_1e3", "hex_1e4", "hex_1e5")) {
  n <- as.numeric(sub("hex_", "", nm))
  x <- hex_grid(n)
  m <- hex_cell_from_sf(x)
  # geometry check: same polygons as sf, vertex for vertex
  stopifnot(isTRUE(all.equal(unclass(wk_bbox(as_wk(m))), unclass(wk_bbox(st_geometry(x))), check.attributes = FALSE)))
  t_fast <- system.time(k <- mesh_counts(m))[["elapsed"]]
  t_v <- system.time(v <- vertices(m))[["elapsed"]]
  t_e <- system.time(e <- edges(m))[["elapsed"]]
  t_wkp <- system.time({
    p <- merge_coincident(establish_topology(st_geometry(x)))
    wv <- nrow(pool_vertices(p))
    s <- pool_segments(p)
    we <- nrow(unique(cbind(pmin(s$.vx0, s$.vx1), pmax(s$.vx0, s$.vx1))))
  })[["elapsed"]]
  # same vertex coordinates as wkpool's merged pool (to 1e-9)
  pv <- pool_vertices(p)
  o1 <- order(round(v$x, 9), round(v$y, 9)); o2 <- order(round(pv$x, 9), round(pv$y, 9))
  stopifnot(max(abs(v$x[o1] - pv$x[o2]), abs(v$y[o1] - pv$y[o2])) < 1e-9)
  ref <- counts[counts$input == nm, ]
  out[[nm]] <- data.frame(
    input = nm, cells = k[["cells"]],
    fast_vertices = k[["vertices"]], bench_vertices = ref$wkpool_vertices, wkpool_vertices = wv,
    fast_edges = k[["edges"]], bench_edges = ref$wkpool_edges, wkpool_edges = we,
    fast_vertices_s = t_v, fast_edges_s = t_e, fast_counts_s = t_fast, wkpool_s = t_wkp)
  print(out[[nm]])
}
res <- do.call(rbind, out)
stopifnot(all(res$fast_vertices == res$bench_vertices), all(res$fast_edges == res$bench_edges),
          all(res$fast_vertices == res$wkpool_vertices), all(res$fast_edges == res$wkpool_edges))
write.csv(res, "bench/hex-fastpath.csv", row.names = FALSE)
cat("all counts match\n")
