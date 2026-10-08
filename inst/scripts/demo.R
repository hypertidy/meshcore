# The first proof: one verb set on a GeoTIFF (GRID) and a HEALPix Zarr (CELL).
#
# Rscript inst/scripts/demo.R   (from the package root, after R CMD INSTALL .)

library(meshcore)

tif <- system.file("extdata", "field.tif", package = "meshcore")
zarr <- system.file("extdata", "field_healpix.zarr", package = "meshcore")

# the same field the data were made from (inst/scripts/make-data.py)
field <- function(lon, lat, t = 0) {
  sin(lon * pi / 180 * 6 + t * 0.5) * cos(lat * pi / 180 * 4) + 0.002 * (lon - 100)
}

models <- list(grid = GRID(tif), healpix = CELL(zarr))
arrays <- list(grid = read_array(tif), healpix = read_array(zarr, "field"))
print(models)
print(arrays)

for (nm in names(models)) {
  x <- models[[nm]]
  cat("\n----", nm, "----\n")
  print(mesh_counts(x))
  print(head(cells(x), 3))
  print(head(boundaries(x), 4))
  print(head(vertices(x), 3))
  print(head(edges(x), 3))
  nb <- neighbours(x)
  cat("edge neighbours per cell:\n"); print(table(table(nb$.cell)))
  p <- parent(x)
  cat("parent model: "); print(attr(p, "model"))
  j <- join_array(x, arrays[[nm]])
  print(head(j, 3))
  t <- if ("time" %in% names(j)) j$time else 0
  err <- max(abs(j$value - field(j$x, j$y, t)))
  cat(sprintf("joined %d values; max |value - field(centre)| = %.2g\n", nrow(j), err))
  stopifnot(err < 1e-5)
}

# figure: both meshes drawn from the same verbs, coloured by the joined array
draw <- function(x, a, main) {
  j <- join_array(x, a)
  if ("time" %in% names(j)) j <- j[j$time == 0, ]
  b <- meshcore:::boundary_coords(x)
  k <- table(b$.cell)[1]
  n <- nrow(b) / k
  # one NA-separated ring per cell
  px <- rbind(matrix(b$x, nrow = k), NA)
  py <- rbind(matrix(b$y, nrow = k), NA)
  pal <- hcl.colors(64, "Viridis")
  z <- j$value[match(unique(b$.cell), j$.cell)]
  col <- pal[cut(z, seq(-1.3, 1.3, length.out = 65), include.lowest = TRUE)]
  plot(NA, xlim = c(100, 180), ylim = c(-50, -5), asp = 1, xlab = "", ylab = "", main = main)
  polygon(as.vector(px), as.vector(py), col = col, border = NA)
  if (n < 5000) polygon(as.vector(px), as.vector(py), border = "#FFFFFF55", lwd = 0.3)
}
out <- if (dir.exists("inst/scripts")) "inst/scripts/demo.png" else "demo.png"
png(out, width = 1400, height = 520, res = 110, type = "cairo")
par(mfrow = c(1, 2), mar = c(2, 2, 2.5, 1))
draw(models$grid, arrays$grid, "GRID: field.tif (160 x 90 cells)")
draw(models$healpix, arrays$healpix, "CELL: field_healpix.zarr (HEALPix level 6, 3,712 cells)")
dev.off()
cat("wrote", out, "\n")
