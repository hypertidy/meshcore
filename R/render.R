#' Renderer adapters, and picking back from a render
#'
#' `as_mesh3d()` (rgl) and `as_ray_mesh()` (rayvertex, and rayrender through
#' it) turn a triangle form into each renderer's mesh. Both subtract a
#' float64 `local_origin` first, because renderers work in float32: a UTM
#' northing near 5,250,000 m has a float32 spacing of 0.5 m, and a site
#' centred on the origin has a spacing well under a millimetre. The origin
#' and every change of frame are recorded in the `frame` attribute, so a
#' pick can be taken back to map coordinates.
#'
#' Faces keep the row order of `mesh$triangles` in both renderers, so a face
#' index from any pick is a triangle row.
#'
#' `pick_render()` picks from a rayvertex render with no renderer change: it
#' reads the view-space position of a pixel from `rasterize_scene(debug =
#' "all")`, undoes the camera and the frame, and [locate()]s the point in the
#' mesh. It returns the
#' same as [pick()].
#'
#' @param mesh A triangle form with a height column.
#' @param z Name of the vertex column used for height.
#' @param texture Path to a PNG or JPEG holding the same pixels as the image
#'   given to [drape_uv()], or `NULL`.
#' @param local_origin Numeric length 3 subtracted from x, y and z, or
#'   `NULL` for the centre of the x, y extent and a z of 0.
#' @param exaggeration Vertical scale, recorded rather than baked into the
#'   coordinates' meaning.
#' @param material For `as_ray_mesh()`, a [rayvertex::material_list()]; one
#'   with the texture is made when `NULL`.
#' @param ... Passed to [rgl::tmesh3d()] as material.
#' @param gbuffer The list returned by `rayvertex::rasterize_scene(..., debug
#'   = "all")`.
#' @param col,row A pixel of the render, 1-based from the top left of the
#'   image as displayed.
#' @param ray_mesh The `as_ray_mesh()` result that was rendered.
#' @param lookfrom,lookat,camera_up The camera given to `rasterize_scene()`;
#'   its position buffer is in view space.
#' @param links,rows Passed to [pick()].
#' @returns `as_mesh3d()`: an rgl `mesh3d`. `as_ray_mesh()`: a rayvertex
#'   `ray_mesh`. `pick_render()`: a `meshcore_pick`, or `NULL` for a
#'   background pixel.
#' @name render
NULL

#' @rdname render
#' @export
as_mesh3d <- function(mesh, z = "z", texture = NULL, local_origin = NULL, exaggeration = 1, ...) {
  if (!requireNamespace("rgl", quietly = TRUE)) stop("as_mesh3d() needs the rgl package")
  fr <- mesh_frame(mesh, local_origin, exaggeration, axes = "x, y, z")
  v <- mesh$vertices
  o <- fr$local_origin
  vb <- rbind(v$x - o[1], v$y - o[2], (v[[z]] - o[3]) * exaggeration)
  it <- rbind(mesh$triangles$v0, mesh$triangles$v1, mesh$triangles$v2)
  tc <- NULL
  mat <- list(...)
  if (!is.null(texture)) {
    if (!all(c("u", "v") %in% names(v))) stop("texture given but the mesh has no u, v: run drape_uv() first")
    tc <- cbind(v$u, 1 - v$v)
    mat <- utils::modifyList(list(texture = texture, color = "white"), mat)
  }
  out <- rgl::tmesh3d(vb, it, homogeneous = FALSE, texcoords = tc,
                      material = if (length(mat)) mat else NULL)
  attr(out, "frame") <- fr
  out
}

#' @rdname render
#' @export
as_ray_mesh <- function(mesh, z = "z", texture = NULL, local_origin = NULL,
                        exaggeration = 1, material = NULL) {
  if (!requireNamespace("rayvertex", quietly = TRUE)) stop("as_ray_mesh() needs the rayvertex package")
  fr <- mesh_frame(mesh, local_origin, exaggeration, axes = "x, z, -y")
  v <- mesh$vertices
  o <- fr$local_origin
  ## rayvertex is y up: map x east, z up, -y south (as rayshader does)
  verts <- cbind(v$x - o[1], (v[[z]] - o[3]) * exaggeration, -(v$y - o[2]))
  ind <- cbind(mesh$triangles$v0, mesh$triangles$v1, mesh$triangles$v2) - 1L
  tc <- NULL
  tind <- NULL
  if (!is.null(texture)) {
    if (!all(c("u", "v") %in% names(v))) stop("texture given but the mesh has no u, v: run drape_uv() first")
    tc <- cbind(v$u, 1 - v$v)
    tind <- ind
  }
  if (is.null(material)) {
    material <- if (is.null(texture)) rayvertex::material_list(diffuse = "grey80")
    else rayvertex::material_list(diffuse = "white", texture_location = texture)
  }
  out <- rayvertex::construct_mesh(vertices = verts, indices = ind,
                                   texcoords = tc, tex_indices = tind,
                                   material = material)
  attr(out, "frame") <- fr
  out
}

#' @rdname render
#' @export
pick_render <- function(mesh, gbuffer, col, row, ray_mesh, lookfrom, lookat = c(0, 0, 0),
                        camera_up = c(0, 1, 0), links = NULL, rows = NULL) {
  fr <- attr(ray_mesh, "frame")
  ## the buffers are stored before rasterize_scene()'s display reorientation
  ## (transpose, then flip x): undo that for a displayed (col, row)
  i <- nrow(gbuffer$positionx) - col + 1
  pv <- c(gbuffer$positionx[i, row], gbuffer$positiony[i, row], gbuffer$positionz[i, row])
  ## background pixels hold a zero position
  if (!all(is.finite(pv)) || sum(pv^2) == 0) return(NULL)
  ## positions are in view space: undo the look-at transform
  w <- view_to_world(pv, lookfrom, lookat, camera_up)
  x <- w[1] + fr$local_origin[1]
  y <- -w[3] + fr$local_origin[2]
  loc <- locate(mesh, x, y)
  if (is.na(loc$face)) return(NULL)
  out <- pick(mesh, loc$face, loc$u, loc$v, links = links, rows = rows)
  out$world <- c(x = x, y = y, z = w[2] / fr$exaggeration + fr$local_origin[3])
  out
}

## view = R (p - eye), with R's rows the camera's right, up and back axes
view_to_world <- function(pv, eye, at, up) {
  cross <- function(a, b) c(a[2] * b[3] - a[3] * b[2], a[3] * b[1] - a[1] * b[3], a[1] * b[2] - a[2] * b[1])
  unit <- function(a) a / sqrt(sum(a^2))
  f <- unit(at - eye)
  s <- unit(cross(f, up))
  u <- cross(s, f)
  R <- rbind(s, u, -f)
  as.vector(crossprod(R, pv)) + eye
}

mesh_frame <- function(mesh, local_origin, exaggeration, axes) {
  v <- mesh$vertices
  if (is.null(local_origin)) {
    local_origin <- c(mean(range(v$x)), mean(range(v$y)), 0)
  }
  list(local_origin = as.double(local_origin), exaggeration = exaggeration,
       axes = axes, crs = attr(mesh, "meshspec")$crs)
}
