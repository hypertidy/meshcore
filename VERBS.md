# meshcore verbs (working names)

All ids are 0-based doubles. Key columns are dot-prefixed (`.cell`, `.vx`,
`.edge`, wkpool style). A model is a list with `meta` (model, grid_name,
level, crs, rung, source, ...) and a class `c("<MODEL>", "meshcore_model")`.

## Per model (S3 generics; a new model writes these)

| verb | returns |
|------|---------|
| `cells(x, ...)` | data.frame `.cell`, `x`, `y` (centre; lon/lat on the sphere), plus model columns |
| `boundaries(x, ...)` | data.frame `.cell`, `.corner` (1..k, counter-clockwise), `.vx` |
| `vertices(x, ...)` | data.frame `.vx`, `x`, `y` |
| `parent(x, n = 1, ...)` | data.frame `.cell`, `.parent`; attr `"model"` = coarser model |
| `children(x, n = 1, ...)` | data.frame `.cell`, `.child`; attr `"model"` = finer model |
| `join_array(x, a, ...)` | `cells(x)` in long form with the array's other dims and `value` |

## Derived (S3 generics with a default method built on `boundaries()`)

| verb | returns |
|------|---------|
| `face_edge(x, ...)` | data.frame `.cell`, `.corner`, `.edge`; attr `"edges"` |
| `edges(x, ...)` | data.frame `.edge`, `.vx0`, `.vx1` (unique undirected) |
| `as_wkpool(x)` | wkpool, one closed path per cell, `.vx` 1..n, lattice key in `.key` |
| `n_cells(x)` | number of cells (default `nrow(cells(x))`) |

## Plain functions (work on any model through the generics)

| verb | returns |
|------|---------|
| `neighbours(x, type = c("edge", "vertex"))` | data.frame `.cell`, `.neighbour` (both directions, sorted); edge type uses `face_edge()` |
| `mesh_counts(x)` | c(cells, vertices, edges) |
| `as_wk(x)` | `wk::wk_polygon`, one per cell |

## Arrays

| function | |
|----------|-|
| `keyed_array(values, dims, key_dim, key = NULL, coords = list())` | R array (fastest dim first), named dim sizes, keyed dimension name(s), cell ids along it (`NULL` when computed, as for GRID x/y) |
| `read_array(dsn, name = NULL)` | GDAL classic raster (keyed on x+y) or multidim array (keyed on the dimension of its `coordinates` variable, default `cell_ids`) |
| `long_join(cl, idx, m, a)` | helper for `join_array()` methods: `cl` = cells table, `idx` = position along the keyed dim per row of `cl`, `m` = values as matrix (keyed dim x other dims) |

## Triangle form (mesh spec v0.1)

| verb | returns |
|------|---------|
| `tri_form(x, erase, crs)` | engine output (cdtr list, laridae tables or handle) as the spec triangle form: `vertices` (x, y, attributes, `origin` factor, `id`), `triangles` (`v0`, `v1`, `v2` 1-based CCW rows, `depth`, `depth_distinct`), `constraints` (`v0 < v1`, `segment`, `count` when the engine has them), one-row `report`; attrs `meshspec`, `input_map`, `unrefined` |
| `tri_mesh(x, y, s0, s1, PA, engine = "cdtr", ...)` | runs cdtr (default) or laridae and returns `tri_form()` of the result |

Unlike the model tables above, triangle form rows are 1-based row
references (spec Decision 2), not 0-based keys. The constraint table is
called `constraints` as in the spec; laridae says `segments` and cdtr `S`, and
`tri_form()` renames both (spec Decision 7).

## Connecting a mesh to its sources

Data are sampled in their own CRS at mesh vertices; no raster is warped.

| verb | returns |
|------|---------|
| `locate(mesh, x, y)` | data.frame `face`, `u`, `v`: the triangle each point is in (x, y) and the weights of its second and third vertex; `NA` outside |
| `sample_at_vertices(mesh, dsn, band, name, method)` | the mesh with a new vertex column read from a GDAL raster at the vertices (transformed into the raster's CRS); source recorded in `attr(, "sources")` |
| `drape_uv(mesh, image, max_px = 0.25)` | the mesh with vertex `u`, `v` (u 0 at xmin, v 0 at row 0) by inverse projection, and per-triangle `uv_err_px`, the largest miss in source pixels of the linear blend at edge midpoints and centroid |
| `pick(mesh, face, u, v, links, rows)` | `meshcore_pick`: the triangle row, its 3 vertex rows, numeric vertex columns blended at the point, the image column and row, and the linked source rows in the face |

## Renderer adapters

| verb | returns |
|------|---------|
| `as_mesh3d(mesh, z, texture, local_origin, exaggeration)` | rgl `mesh3d`, face order = triangle rows, attr `frame` |
| `as_ray_mesh(mesh, z, texture, local_origin, exaggeration)` | rayvertex `ray_mesh` (y up: x, z, -y), face order = triangle rows, attr `frame` |
| `pick_render(mesh, gbuffer, col, row, ray_mesh, lookfrom, lookat)` | `meshcore_pick` for a pixel of `rasterize_scene(debug = "all")`, by inverting its view-space position buffer; no renderer change needed |

`local_origin` (float64) is subtracted before anything reaches a renderer,
because renderers are float32: a UTM northing of 5,250,000 m has a float32
spacing of 0.5 m.

## On the wire, and in the browser

| verb | returns |
|------|---------|
| `write_mesh_arrow(x, dir, ...)` | one Arrow IPC stream per table, `<dir>/<table>.arrows`; row references 0-based, and each table's `meshspec:refs` metadata names the table each reference column points at. Link tables (`face_points`, `face_stats`) go in `...` |
| `read_mesh_arrow(dir)` | the same R form, references back to 1-based |
| `mesh_viewer(dir)` | copies meshview beside `mesh/` and `points/`: hover a face to read its `face_stats` row, vertices and linked returns with their source file and position, picked on the GPU by face id |

meshview's source is in `inst/viewer/src`; `npm run build` in
`inst/viewer` rebuilds `meshview.js` (three.js and Arrow JS bundled, so it
needs no network).

The point-cloud form itself is in
[pointcore](https://github.com/hypertidy/pointcore): `read_points()`,
`read_ept()`, `points_tin()`, `face_points()` and `face_stats()`. See
[docs/points-form-draft.md](docs/points-form-draft.md) and
`inst/scripts/points-demo.R`.
