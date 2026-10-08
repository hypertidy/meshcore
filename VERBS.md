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
