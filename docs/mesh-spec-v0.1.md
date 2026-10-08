# Mesh spec v0.1 (draft)

Drafted 7 October 2026. Working name for the spec: meshspec.

## Conventions

The spec defines three forms, each a set of named tables: PSLG, triangle
mesh and drawable mesh. Most columns already exist in at least one
producer. Where producers disagree, the draft proposes an answer and lists
it under Decisions.

* **Tables.** In R a form is a named list of data frames. On the wire each
  table is an Arrow record batch, so any language can read it.
* **References.** Columns that point at another table hold row positions:
  1-based in R and 0-based in Arrow, converted at serialisation. Stable ids,
  where a producer has them (laridae, trowel), are a separate `id` column.
  (meshcore's own cell ids are 0-based, following xdggs and UGRID; see
  Decision 2.)
* **Coordinates.** The PSLG and triangle forms use `x`, `y` and optional
  `z` as float64. The drawable form uses `position` as float32, optionally
  with `local_origin`, matching scenespec.
* **Attributes.** Any other vertex column is an attribute, not a
  coordinate. Engines interpolate it linearly onto new vertices.
* **Metadata.** Each table carries `meshspec:version` ("0.1"),
  `meshspec:form` (`pslg`, `tri` or `drawable`) and `crs`
  (`authority:code` or PROJJSON, as in scenespec).
* **ASCII only** in names, values and shipped fixtures.

## Form 1: PSLG

The trianglewins guide's `pslg` object, unchanged except for types. Only
`vertices` and `segments` are required, because those are all an engine
reads. The other tables carry provenance, which meshcore needs for labels.
Producer: wkpool `as_pslg()`, once it absorbs `pslg_from_wk()`.

| Table | Column | Type | Meaning |
|---|---|---|---|
| vertices (required) | x, y | float64 | One row per distinct (x, y), exact match unless the producer was asked to snap |
| | z | float64, optional | Carried, never used for placement |
| | any other | numeric | Attribute |
| segments (required) | s0, s1 | int32 | Vertex rows, one row per input segment as the geometry gave it (shared boundaries appear twice) |
| | path | int32, optional | Row in `paths` |
| | edge | int32, optional | Row in `edges` |
| edges | e0, e1 | int32 | Distinct undirected edge, e0 < e1 |
| | count | int32 | Input segments covering it; 2 marks a shared boundary |
| paths | path, feature, part, ring | int32 | One row per ring, linestring or point; silicate's path identity |
| | role | string | `shell`, `hole`, `line` or `point` |
| | n | int32 | Vertex count |
| features | feature | int32 | One row per input feature |
| | any other | any | The layer's own columns |

Rings lose their closing coordinate and gain a closing segment. Ring
orientation is not trusted: the first ring of a polygon part is the shell,
and the rest are holes.

## Form 2: triangle mesh

laridae's `lari_tables()` output, the most complete of the three engines.
cdtr and trowel need the small additions in the last column.

| Table | Column | Type | Meaning | Gaps today |
|---|---|---|---|---|
| vertices | x, y, (z), attributes | float64 | Input vertices first, in PSLG row order, then new ones | cdtr returns a P matrix plus `input_map` |
| | origin | dictionary string | `input`, `crossing` or `steiner` | cdtr has none (crossing and Steiner not told apart) |
| | id | int32, optional | Stable across edits | Only the live handles |
| triangles | v0, v1, v2 | int32 | Vertex rows | trowel returns ids, so the reader maps them |
| | depth | int32 | Constraint crossings from outside (Decision 1) | trowel counts a doubled boundary once |
| constraints | v0, v1 | int32 | Mesh edges lying on input segments | cdtr `S`; trowel `mesh_constraint_edges` |
| | segment | int32 | Lowest input segment row covering the edge | laridae only |
| | count | int32 | Input segments covering the edge | laridae only |
| report | one row | metadata | Backend name and version, `min_edge_length`, unrefined counts, the `erase` choice used | Each engine reports different counts |

The `erase` choice (outer, holes, hull) is a filter on `depth`. The report
records which choice the producer used.

## Form 3: drawable mesh

scenespec's raster `mesh` definition with its default column names, plus
optional z, attributes and a per-triangle table, so the same tables serve
deck.gl, rgl and a JS viewer. A scene that names these tables is valid
scenespec.

| Table | Column | Type | Meaning |
|---|---|---|---|
| vertices | position | FixedSizeList<float32, 2 or 3> | Position in the form's CRS, with `local_origin` subtracted when set |
| | uv | FixedSizeList<float32, 2>, optional | Texture coordinate into a source grid: u is 0 at xmin and 1 at xmax, v is 0 at row 0 (ymax) |
| | any other | float32 | Per-vertex value, such as elevation |
| indices | index | uint32 | Three per triangle, 0-based vertex rows |
| faces (optional) | any | any | One row per triangle: feature, depth or a face value |

Table metadata: `crs`, optional `local_origin`, and `uv_space`, which is
`grid` (the whole raster) or `tile` (scenespec's per-tile convention).

Conversions are mechanical. To rgl `mesh3d`, `vb` is position plus z with
w = 1, and `it` is index + 1. From a triangle form, position comes from x
and y, index from v0, v1, v2 minus 1, and faces from depth. From a grid,
quadmesh's corner or centre interpretation sets the vertex lattice, and
each quad becomes two triangles.

## Decisions v0.1 must make

Six questions need an answer before cdtr goes to CRAN, because its output
columns become a promise then.

| # | Question | Proposal | Why |
|---|---|---|---|
| 1 | Does `depth` count a doubled boundary once or once per copy? | Per copy in `depth` (cdtr and laridae). Optional `depth_distinct` counted once; change trowel to match | Two of three engines agree; the harness computes both (`depth_k`, `depth_1`) |
| 2 | Index base | 1-based in R, 0-based in Arrow, converted at serialisation | R users index rows; scenespec and GPU APIs use 0-based uint32. meshcore cell and vertex ids are 0-based keys, not row positions |
| 3 | Triangle winding | Counter-clockwise in xy (positive signed area) | Renderers cull by winding; the harness does not measure it yet. UGRID data is often clockwise (see [findings.md](findings.md)) |
| 4 | How `origin` is encoded | Dictionary string: `input`, `crossing`, `steiner`, plus `grid` (and `lattice`) for computed meshes | laridae and trowel already convert their integer codes to these strings |
| 5 | Must engines return the constraint-to-input map? | Optional in v0.1, required in v0.2 | Only laridae has it; it makes labels free |
| 6 | Where does the spec live until it has a name? | Drawable form: scenespec. PSLG and triangle forms: `spec/` in trianglewins next to the corpus. Big picture and cross-links: this folder | Follows allboa decision 0011: a schema lives with its first producer until a second exists |

## Conformance corpus

The corpus reuses the 15 trianglewins cases and the measures in its
`R/measures.R`, written as stated invariants, and adds grid cases for the
drawable form. Each case is a PSLG or a grid descriptor in plain CSV or
JSON, plus what any conforming output must satisfy.

| Cases | Form checked | Invariants |
|---|---|---|
| All 15 trianglewins cases, square to cad_tas | PSLG to triangle | Every input vertex present; every input segment kept as a chain of collinear constraint edges; constrained Delaunay (0 violations); no edge in more than two triangles; depth equals `depth_k` (and `depth_1` when `depth_distinct` is given); linear attribute z = x + 2y reproduced to 1e-9 relative |
| square, nested3, nc | PSLG | Rows and columns match stored expected tables (edges.count, paths.role) |
| Grid corner mesh: 4 x 3 cells, extent 0 to 4, 0 to 3 | Drawable | 20 vertices, 24 triangles, uv corners exactly 0 and 1, counter-clockwise |
| Polar tile: aobcore's `polar_3031.tif` | Drawable | Every triangle within a quarter source pixel of the exact projection, indices in range, a multiple of 3 |
| Lon/lat tile over the pole and antimeridian (allboa decision 0001) | Drawable | Finite positions, no triangle spanning the seam |

Every drawable case must also validate as a scenespec raster `mesh`, which
keeps the two specs from drifting. scenespec's data checker covers vector
tables only today, so it needs a mesh check added.

Candidates to add from the meshcore and UGRID work: HEALPix full sphere
Euler counts (V = 12 N^2 + 2, E = 24 N^2, F = 12 N^2, levels 0 to 5),
HEALPix level 2 against healpy, hexagon counts against wkpool, and the
D-Flow FM netCDF round trip.

## Next

Add the `spec/` folder and corpus to trianglewins on a branch, and a
`tw_conform()` check that reads any engine's output against the triangle
form.
