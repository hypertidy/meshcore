## Drone-style lidar to a draped TIN to a render, and back from a pixel of
## the render to the face, its returns and its ortho pixel.
##
## Stand-in data: lidR's Topography.laz (73,403 returns, EPSG:2949). The DEM
## and "ortho" are made here from the returns themselves (mean ground height
## at 1 m, first-return intensity at 0.25 m) until a real site and its
## orthomosaic are available.
##
## Rscript inst/scripts/points-demo.R [path/to/Topography.laz] [outdir]
library(meshcore)
library(pointcore)

args <- commandArgs(trailingOnly = TRUE)
laz <- if (length(args) >= 1) args[1] else system.file("extdata", "Topography.laz", package = "lidR")
out <- if (length(args) >= 2) args[2] else tempdir()
dir.create(out, showWarnings = FALSE, recursive = TRUE)

## 1. returns as rows, with ids
p <- read_points(laz)
print(p)
P <- p$points

## 2. a ground TIN that keeps each vertex's return, and every return within
##    2 m above the surface joined to its triangle
tin <- points_tin(p, classes = 2L)
fp <- face_points(tin, p, above = 2)
print(tin)
cat(sprintf("face_points: %d returns within 2 m of the surface\n", nrow(fp)))

## 3. stand-in DEM and ortho, then sample and drape (no warping)
e <- terra::ext(floor(min(P$x)), ceiling(max(P$x)), floor(min(P$y)), ceiling(max(P$y)))
crs <- attr(p, "meshspec")$crs
g <- P[P$classification == 2, ]
dem <- terra::rasterize(cbind(g$x, g$y), terra::rast(e, resolution = 1, crs = crs),
                        values = g$z, fun = mean)
dem <- terra::focal(dem, 5, mean, na.policy = "only", na.rm = TRUE)
dem_file <- file.path(out, "dem.tif")
terra::writeRaster(dem, dem_file, overwrite = TRUE)

f1 <- P[P$return_number == 1, ]
it <- terra::rasterize(cbind(f1$x, f1$y), terra::rast(e, resolution = 0.25, crs = crs),
                       values = f1$intensity, fun = max)
it <- terra::focal(it, 3, max, na.policy = "only", na.rm = TRUE)
q <- stats::quantile(terra::values(it), c(0.02, 0.98), na.rm = TRUE)
s01 <- terra::values(terra::clamp((it - q[1]) / (q[2] - q[1]), 0, 1))
pal <- grDevices::colorRamp(c("#1b2a1f", "#4f6b3a", "#a3b36b", "#efe9c9"))
rgb <- terra::rast(it, nlyrs = 3)
terra::values(rgb) <- round(pal(ifelse(is.na(s01), 0, s01)))
ortho_file <- file.path(out, "ortho.tif")
terra::writeRaster(rgb, ortho_file, datatype = "INT1U", overwrite = TRUE)
## the same pixels for the renderers, which read PNG
a <- terra::as.array(rgb) / 255
a[is.na(a)] <- 0
png_file <- file.path(out, "ortho.png")
png::writePNG(a, png_file)

tin <- sample_at_vertices(tin, dem_file, name = "dem")
tin <- drape_uv(tin, ortho_file)
cat(sprintf("TIN z minus DEM: median %.3f m; uv error max %.2g px\n",
            stats::median(tin$vertices$z - tin$vertices$dem, na.rm = TRUE),
            max(tin$triangles$uv_err_px)))

## 4. render with rayvertex, picking from its own G-buffer
o <- c(mean(range(P$x)), mean(range(P$y)), floor(min(P$z)))
rm <- as_ray_mesh(tin, texture = png_file, local_origin = o, exaggeration = 1.5)
cam <- list(lookfrom = c(-220, 260, 300), lookat = c(0, 10, 0))
ra <- list(rm, lookfrom = cam$lookfrom, lookat = cam$lookat, fov = 40,
           width = 800, height = 600, fsaa = 1, plot = FALSE,
           light_info = rayvertex::directional_light(c(-1, 1.2, 0.6), intensity = 1.1))
img <- do.call(rayvertex::rasterize_scene, ra)
gb <- do.call(rayvertex::rasterize_scene, c(ra, debug = "all"))

## the face under pixel (470, 330), joined back to everything
pk <- pick_render(tin, gb, 470, 330, rm, lookfrom = cam$lookfrom, lookat = cam$lookat,
                  links = fp, rows = P)
print(pk)
print(pk$rows[c("point", "dz", "z", "classification", "return_number", "intensity", "gps_time")])

## 5. figure: the render with the picked pixel, and what the pick returned
fig <- file.path(out, "points-demo.png")
grDevices::png(fig, width = 1200, height = 600, type = "cairo")
graphics::layout(matrix(1:2, 1), widths = c(800, 400))
graphics::par(mar = c(0, 0, 0, 0), bg = "white")
graphics::plot(c(1, 800), c(1, 600), type = "n", asp = 1, axes = FALSE, xlab = "", ylab = "")
graphics::rasterImage(pmin(img[, , 1:3], 1)^(1 / 1.8), 1, 1, 800, 600)
graphics::points(470, 600 - 330, pch = 3, cex = 3, lwd = 2, col = "#e8590c")
graphics::plot.new()
lines <- c(sprintf("pixel (470, 330) -> face %d", pk$face),
           sprintf("x %.2f  y %.2f", pk$world[["x"]], pk$world[["y"]]),
           sprintf("z %.2f m (TIN), DEM %.2f m", pk$at[["z"]], pk$at[["dem"]]),
           sprintf("vertices are returns %s", paste(pk$vertices$input_row, collapse = ", ")),
           sprintf("ortho pixel col %d, row %d", pk$pixels$col, pk$pixels$row),
           sprintf("%d returns in this face within 2 m", nrow(pk$rows)),
           sprintf("classes: %s", paste(names(table(pk$rows$classification)),
                                        table(pk$rows$classification), sep = " x", collapse = ", ")))
graphics::text(0.02, seq(0.8, 0.8 - 0.07 * (length(lines) - 1), by = -0.07), lines,
               adj = 0, family = "mono", cex = 1.05)
grDevices::dev.off()
cat("wrote", fig, "\n")
