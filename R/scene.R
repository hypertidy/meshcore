#' Write a triangle form as a scenespec scene
#'
#' `write_scene()` writes the drawable form of a triangle mesh (spec Form 3)
#' and a scene that draws it, so any scenespec 0.7 renderer opens the folder
#' as it stands: `scene.json` beside `mesh_vertices.arrows`,
#' `mesh_indices.arrows` and, when `faces` is given, `mesh_faces.arrows`.
#'
#' Positions are float32 with the float64 `local_origin` (x and y)
#' subtracted, as the scene's `view.local_origin` records, so a UTM site keeps
#' sub-millimetre spacing. Height is not shifted. Every other numeric vertex
#' column is written beside `position` as a value a layer can colour by.
#' Indices are 0-based uint32, three per triangle, in the row order of
#' `mesh$triangles`. The face table has one row per triangle in that order:
#' a table with a `face` column (such as pointcore's `face_stats()`) is
#' matched on it, with `NA` for faces it does not list.
#'
#' The view CRS is the mesh's CRS as an `AUTHORITY:CODE` string; a CRS given
#' another way is looked up with sf when it has an EPSG code.
#'
#' @param mesh A triangle form (`meshcore_tri`) with a CRS.
#' @param dir Folder to write; created if needed.
#' @param faces `NULL`, or a data frame of face values: one row per triangle,
#'   or a `face` column of 1-based triangle rows.
#' @param z Name of the vertex column used for height, or `NULL` for a flat
#'   mesh.
#' @param local_origin Numeric length 2 subtracted from x and y, or `NULL`
#'   for the centre of the x, y extent.
#' @param fill_by Name of a face column (looked up first) or vertex column to
#'   colour by, or `NULL` for one fill colour.
#' @param palette,range Palette name and value range for `fill_by`; the range
#'   defaults to that of the column.
#' @param fill RGBA (0 to 255) used when `fill_by` is `NULL`.
#' @param stroke RGBA for triangle edges, or `NULL` for none.
#' @param z_scale Vertical exaggeration recorded in the scene.
#' @param popup Face columns shown for a picked triangle; defaults to every
#'   face column when `faces` is given.
#' @param label Layer label.
#' @returns The path to `scene.json`, invisibly.
#' @export
write_scene <- function(mesh, dir, faces = NULL, z = "z", local_origin = NULL,
                        fill_by = NULL, palette = "terrain", range = NULL,
                        fill = c(180, 170, 150, 255), stroke = NULL,
                        z_scale = 1, popup = NULL, label = "mesh") {
  if (!requireNamespace("nanoarrow", quietly = TRUE)) stop("write_scene() needs the nanoarrow package")
  mesh <- tri_form(mesh)
  v <- mesh$vertices
  tri <- mesh$triangles
  ntri <- nrow(tri)
  crs <- scene_crs(attr(mesh, "meshspec")$crs)
  if (is.null(local_origin)) local_origin <- c(mean(base::range(v$x)), mean(base::range(v$y)))
  o <- as.double(local_origin)[1:2]
  if (!is.null(z) && !z %in% names(v)) stop("no vertex column ", z)

  xyz <- cbind(v$x - o[1], v$y - o[2], if (!is.null(z)) v[[z]])
  skip <- c("x", "y", "input_row")
  vals <- v[setdiff(names(v)[vapply(v, is.numeric, logical(1))], skip)]
  vertices <- c(list(position = float32_list(xyz)), as.list(vals))
  indices <- list(index = typed_array(as.vector(t(as.matrix(tri[c("v0", "v1", "v2")]))) - 1L,
                                       nanoarrow::na_uint32()))
  if (!is.null(faces)) faces <- align_faces(faces, ntri)

  dir.create(dir, recursive = TRUE, showWarnings = FALSE)
  meta <- function(nm) list("meshspec:version" = "0.1", "meshspec:form" = "drawable",
                            "meshspec:table" = nm, "crs" = crs)
  write_batch(vertices, file.path(dir, "mesh_vertices.arrows"), meta("vertices"))
  write_batch(indices, file.path(dir, "mesh_indices.arrows"), meta("indices"))
  ref <- function(nm) list(format = "arrow-ipc-stream", url = paste0(nm, ".arrows"),
                           origin_subtracted = TRUE)
  data <- list(mesh_vertices = ref("mesh_vertices"),
               mesh_indices = list(format = "arrow-ipc-stream", url = "mesh_indices.arrows"))
  m <- list(vertices = "mesh_vertices", indices = "mesh_indices")
  if (!is.null(faces)) {
    write_batch(as.list(faces), file.path(dir, "mesh_faces.arrows"), meta("faces"))
    data$mesh_faces <- list(format = "arrow-ipc-stream", url = "mesh_faces.arrows")
    m$faces <- "mesh_faces"
  }

  layer <- list(id = "mesh", kind = "mesh", label = label, mesh = m)
  if (!is.null(fill_by)) {
    table <- if (!is.null(faces) && fill_by %in% names(faces)) "faces"
             else if (fill_by %in% names(vals)) "vertices"
             else stop("fill_by: no face or vertex column ", fill_by)
    x <- if (table == "faces") faces[[fill_by]] else vals[[fill_by]]
    if (is.null(range)) range <- base::range(x, na.rm = TRUE)
    if (range[1] == range[2]) range <- range + c(-0.5, 0.5)
    layer$fill_by <- list(table = table, column = fill_by,
                          palette = list(name = palette, range = as.double(range)))
  } else {
    layer$fill <- as.integer(fill)
  }
  if (!is.null(stroke)) {
    layer$stroke <- as.integer(stroke)
    layer$stroke_width_px <- 1
  }
  layer$z_scale <- z_scale
  if (is.null(popup) && !is.null(faces)) popup <- names(faces)
  if (length(popup)) layer$popup <- list(columns = I(popup))

  scene <- list(
    version = "0.7",
    view = list(type = "projected", crs = crs,
                extent = c(base::range(v$x), base::range(v$y)),
                local_origin = o),
    data = data,
    layers = list(layer)
  )
  if (!is.null(layer$fill_by)) {
    scene$legends <- list(list(layer = "mesh", title = fill_by,
                               ramp = layer$fill_by$palette[c("name", "range")]))
    names(scene$legends[[1]]$ramp) <- c("palette", "range")
  }
  path <- file.path(dir, "scene.json")
  writeLines(jsonlite::toJSON(scene, auto_unbox = TRUE, digits = NA, pretty = TRUE), path)
  invisible(path)
}

## the view CRS as "AUTHORITY:CODE"
scene_crs <- function(crs) {
  if (is.null(crs) || is.na(crs) || !nzchar(crs)) stop("the mesh has no CRS; a scene needs one")
  if (grepl("^[A-Za-z][A-Za-z0-9_]*:[A-Za-z0-9_.-]+$", crs)) return(toupper(crs))
  epsg <- if (requireNamespace("sf", quietly = TRUE)) sf::st_crs(crs)$epsg else NA
  if (is.null(epsg) || is.na(epsg)) stop("cannot write the mesh CRS as AUTHORITY:CODE: ", crs)
  paste0("EPSG:", epsg)
}

## one row per triangle, in triangle order
align_faces <- function(faces, ntri) {
  faces <- as.data.frame(faces)
  if ("face" %in% names(faces)) {
    i <- match(seq_len(ntri), faces$face)
    faces <- faces[i, setdiff(names(faces), "face"), drop = FALSE]
    rownames(faces) <- NULL
  }
  if (nrow(faces) != ntri) stop("faces has ", nrow(faces), " rows for ", ntri, " triangles")
  for (k in names(faces)) if (is.factor(faces[[k]])) faces[[k]] <- as.character(faces[[k]])
  faces
}

## a uint32 or float32 array built from its little-endian bytes, which
## nanoarrow cannot convert to from R vectors without the arrow package
typed_array <- function(x, type) {
  bytes <- if (identical(type$format, "I")) {
    writeBin(as.integer(x), raw(), size = 4L, endian = "little")
  } else {
    writeBin(as.double(x), raw(), size = 4L, endian = "little")
  }
  nanoarrow::nanoarrow_array_modify(
    nanoarrow::nanoarrow_array_init(type),
    list(length = length(x), null_count = 0L,
         buffers = list(NULL, nanoarrow::as_nanoarrow_buffer(bytes)))
  )
}

## FixedSizeList<float32, ncol(m)>, one row of m per element
float32_list <- function(m) {
  child <- typed_array(as.vector(t(m)), nanoarrow::na_float())
  nanoarrow::nanoarrow_array_modify(
    nanoarrow::nanoarrow_array_init(nanoarrow::na_fixed_size_list(nanoarrow::na_float(), ncol(m))),
    list(length = nrow(m), null_count = 0L, children = list(child))
  )
}

## named columns (vectors or nanoarrow arrays) to one IPC stream
write_batch <- function(cols, path, meta) {
  arrays <- lapply(cols, function(x) {
    if (inherits(x, "nanoarrow_array")) x else nanoarrow::as_nanoarrow_array(x)
  })
  schemas <- lapply(arrays, nanoarrow::infer_nanoarrow_schema)
  s <- nanoarrow::na_struct(schemas)
  s <- nanoarrow::nanoarrow_schema_modify(s, list(metadata = meta))
  a <- nanoarrow::nanoarrow_array_modify(
    nanoarrow::nanoarrow_array_init(s),
    list(length = arrays[[1]]$length, null_count = 0L, children = arrays)
  )
  nanoarrow::write_nanoarrow(a, path)
}
