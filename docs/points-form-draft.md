# Draft: the point-cloud form (meshspec form "points")

Drafted 21 October 2026, for discussion; not part of v0.1 until settled.
Follows the v0.1 conventions: named tables, Arrow on the wire, 1-based rows
in R and 0-based in Arrow, `crs` on every table, ASCII only.

| Table | Column | Type | Meaning |
|---|---|---|---|
| points (required) | x, y, z | float64 | Scaled LAS coordinates (X * scale + offset) in the form's CRS |
| | intensity, return_number, number_of_returns, classification, scan_angle, gps_time | LAS types | Carried as read; absent columns are left out, never filled |
| | red, green, blue | uint16, optional | Colour from the sensor or a colorisation step |
| | any other | numeric | Attribute (snake_case of the LAS name) |
| | source | int32 | Row in `sources` |
| | tile | int32, optional | Row in `tiles` (streaming, level of detail) |
| | id | float64 | Position of the point in its file, 1-based; a filtered read keeps the ids of a full read |
| sources | dsn, point_format, n, scale_x/y/z, offset_x/y/z, crs | | One row per file or stream |
| tiles | key, xmin..zmax, n | | One row per COPC node read (not implemented yet) |

Metadata: `meshspec:form = "points"`, `crs`, and `vertical_crs` when the
file declares one, because drone products mix ellipsoidal and geoid heights.

## Links to meshes

* A TIN built from points (pointcore `points_tin()`) is an ordinary triangle
  form with `z` as an attribute and `input_row`, the points row of each
  vertex. Input vertices come first (Decision 8), so the map is free.
  Returns with the same (x, y) merge into one vertex, which keeps the first.
* `face_points` is a link table `face`, `point`, `u`, `v`, `dz`: the triangle
  each return falls in, its weights, and its height above the surface.
  `above` and `below` thresholds keep it to returns near the surface.

## Open

* `tiles` and a COPC reader that fills it.
* Whether `id` should be int64 on the wire (source and file position packed).
* Whether `face_points` belongs in the spec or stays a pointcore table.
