#' Read LAS, LAZ or COPC files into the point-cloud form
#'
#' `read_points()` returns the point-cloud form proposed for mesh spec v0.1
#' (`meshspec:form = "points"`): one row per return, every LAS attribute
#' carried under a spec name, and a `source` column pointing at a row of the
#' `sources` table. Nothing is gridded, thinned or reprojected.
#'
#' The form is a named list of two data frames:
#'
#' * `points`: `x`, `y`, `z` (scaled coordinates, float64), `intensity`,
#'   `return_number`, `number_of_returns`, `classification`, `scan_angle`,
#'   `gps_time`, `red`, `green`, `blue` (each only when the file has it), any
#'   other attribute under a snake_case name, then `source` (row of
#'   `sources`) and `id` (the point's position in its file, 1-based). A
#'   column the file does not have is left out, never filled.
#' * `sources`: one row per file: `dsn`, `point_format`, `n`, `scale_x`,
#'   `scale_y`, `scale_z`, `offset_x`, `offset_y`, `offset_z` and `crs`.
#'
#' The list carries the attribute `meshspec` (`version`, `form`, `crs`). The
#' CRS comes from the file's WKT VLR, or else its GeoKey projected (3072) or
#' geographic (2048) code, recorded as `"EPSG:<code>"`; a vertical code
#' (4096) is recorded as `vertical_crs`.
#'
#' @param dsn One or more paths to LAS, LAZ or COPC files.
#' @param filter A LASlib filter string passed to [rlas::read.las()], for
#'   example `"-keep_class 2"`. Ids still count every point in the file, so a
#'   filtered read keeps the ids of a full read.
#' @param select A LASlib select string passed to [rlas::read.las()].
#' @returns A list of class `pointcore_points` with `points` and `sources`.
#' @export
#' @examples
#' f <- system.file("extdata", "example.laz", package = "rlas")
#' p <- read_points(f)
#' p
read_points <- function(dsn, filter = "", select = "*") {
  dsn <- normalizePath(dsn, mustWork = TRUE)
  pts <- vector("list", length(dsn))
  src <- vector("list", length(dsn))
  for (i in seq_along(dsn)) {
    h <- rlas::read.lasheader(dsn[i])
    d <- as.data.frame(rlas::read.las(dsn[i], select = select, filter = filter))
    ## ids count the whole file; a filter keeps them by reading the ids too
    id <- if (nzchar(filter)) filtered_ids(dsn[i], filter, h) else seq_len(nrow(d))
    pts[[i]] <- las_to_points(d, source = i, id = id)
    src[[i]] <- las_source(dsn[i], h)
  }
  points <- do.call(rbind, pts)
  sources <- do.call(rbind, src)
  rownames(points) <- rownames(sources) <- NULL
  crs <- unique(sources$crs)
  if (length(crs) > 1L) warning("files have different CRS; the form records the first")
  structure(list(points = points, sources = sources),
            meshspec = list(version = "0.1", form = "points", crs = crs[1L],
                            vertical_crs = attr(src[[1L]], "vertical_crs")),
            class = "pointcore_points")
}

## LAS names (as rlas gives them) to spec names, in spec order
las_names <- c(X = "x", Y = "y", Z = "z", Intensity = "intensity",
               ReturnNumber = "return_number", NumberOfReturns = "number_of_returns",
               Classification = "classification", ScanAngleRank = "scan_angle",
               ScanAngle = "scan_angle", gpstime = "gps_time",
               R = "red", G = "green", B = "blue")

las_to_points <- function(d, source, id) {
  known <- intersect(names(las_names), names(d))
  out <- d[known]
  names(out) <- las_names[known]
  other <- setdiff(names(d), names(las_names))
  if (length(other)) {
    extra <- d[other]
    names(extra) <- snake_case(other)
    out <- cbind(out, extra)
  }
  out$source <- rep(as.integer(source), nrow(out))
  out$id <- as.double(id)
  out
}

snake_case <- function(x) {
  x <- gsub("([a-z0-9])([A-Z])", "\\1_\\2", x)
  tolower(gsub("[^A-Za-z0-9]+", "_", x))
}

## the file position of each point a filter keeps. LASlib reports no point
## index, so the kept records are matched on (x, y, z, gps_time) against a
## full read; exact duplicate records get the first position
filtered_ids <- function(dsn, filter, h) {
  all <- rlas::read.las(dsn, select = "xyzt")
  kept <- rlas::read.las(dsn, select = "xyzt", filter = filter)
  key <- function(d) paste(d$X, d$Y, d$Z, d$gpstime)
  match(key(kept), key(all))
}

las_source <- function(dsn, h) {
  crs <- las_crs(h)
  out <- data.frame(dsn = dsn,
                    point_format = as.integer(h[["Point Data Format ID"]]),
                    n = as.double(h[["Number of point records"]]),
                    scale_x = h[["X scale factor"]], scale_y = h[["Y scale factor"]],
                    scale_z = h[["Z scale factor"]],
                    offset_x = h[["X offset"]], offset_y = h[["Y offset"]],
                    offset_z = h[["Z offset"]],
                    crs = crs$crs, stringsAsFactors = FALSE)
  attr(out, "vertical_crs") <- crs$vertical
  out
}

las_crs <- function(h) {
  vlr <- h[["Variable Length Records"]]
  crs <- NA_character_
  vertical <- NA_character_
  for (v in vlr) {
    wkt <- v[["WKT OGC COORDINATE SYSTEM"]]
    if (!is.null(wkt) && nzchar(wkt)) crs <- wkt
  }
  for (v in vlr) {
    tags <- v[["tags"]]
    if (is.null(tags)) next
    for (t in tags) {
      if (t$key == 3072L && is.na(crs)) crs <- paste0("EPSG:", t$`value offset`)
      if (t$key == 2048L && is.na(crs)) crs <- paste0("EPSG:", t$`value offset`)
      if (t$key == 4096L) vertical <- paste0("EPSG:", t$`value offset`)
    }
  }
  list(crs = crs, vertical = vertical)
}

#' @export
print.pointcore_points <- function(x, ...) {
  p <- x$points
  m <- attr(x, "meshspec")
  cat(sprintf("<pointcore_points> mesh spec %s point-cloud form, %d returns from %d source(s)\n",
              m$version, nrow(p), nrow(x$sources)))
  cat(sprintf("  crs:     %s\n", if (is.na(m$crs)) "NA" else substr(m$crs, 1, 60)))
  cat(sprintf("  extent:  x %.2f to %.2f, y %.2f to %.2f, z %.2f to %.2f\n",
              min(p$x), max(p$x), min(p$y), max(p$y), min(p$z), max(p$z)))
  if (!is.null(p$classification)) {
    cl <- table(p$classification)
    cat(sprintf("  classes: %s\n", paste(names(cl), cl, sep = " ", collapse = ", ")))
  }
  cat(sprintf("  columns: %s\n", paste(names(p), collapse = ", ")))
  invisible(x)
}
