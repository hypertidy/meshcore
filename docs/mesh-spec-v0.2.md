# Mesh spec v0.2 (draft)

Drafted 25 October 2026. v0.2 is v0.1 plus the changes below; anything not
mentioned here is unchanged from [mesh-spec-v0.1.md](mesh-spec-v0.1.md).
Tables written to this version carry `meshspec:version` "0.2".

## What changes

| # | Change | Why |
|---|---|---|
| 1 | New triangle-form table `edge_sources`: one row per (constraint edge, covering input segment), with direction | Decision 5 made the constraint-to-input map required in v0.2. This is that map in the shape an n-ary overlay needs |
| 2 | `segment` and `count` on `constraints` become derived columns (optional, computed from `edge_sources`) | A single lowest segment and a count cannot say *whose* boundary an edge is, or which way it runs |
| 3 | PSLG `segments.path` is required whenever `edge_sources` is used to label by feature | The labelling below follows segment to path to feature |
| 4 | Annex A: overlay labelling by propagation, the algorithm a consumer runs on `edge_sources` | Gives the table one documented meaning, and a check any engine can be run against |

## The `edge_sources` table

| Column | Type | Meaning |
|---|---|---|
| `edge` | int32 | Row in `constraints` |
| `segment` | int32 | Row in the PSLG `segments` (the input segment as the geometry gave it) |
| `forward` | bool | TRUE when the input segment runs from `v0` to `v1` of the `constraints` row, FALSE when it runs from `v1` to `v0` |

Rules:

* **One row per covering segment.** An edge covered by k input segments has
  k rows, duplicates included: a boundary shared by two polygons has two
  rows, and a ring repeated twice in one feature has two rows from that
  feature. This holds through crossings (an input segment split by another
  covers every piece), through collinear overlap (a short input segment
  lying on a longer one covers only the pieces it spans), and through
  refinement (Steiner splits keep their parent's sources).
* **Coverage.** Every `constraints` row has at least one row in
  `edge_sources`. Every input segment of non-zero length covers at least
  one constraint edge. Zero-length input segments have no rows.
* **Direction is relative to the stored `constraints` row.** The triangle
  form stores constraints with `v0 < v1` (v0.1). A producer or reader that
  swaps an edge's ends flips `forward` for all of that edge's rows, and one
  that reorders `constraints` remaps `edge`.
* **Order.** Rows SHOULD be sorted by `edge`, then `segment`, so a consumer
  can treat `edge` as a CSR index without sorting.
* **References.** `edge` and `segment` are row references: 1-based in R and
  0-based in Arrow (v0.1 Conventions). In Arrow IPC the table's
  `meshspec:refs` is `{"edge":"constraints","segment":"segments"}`.
* **Derived columns.** `constraints.count` is the number of rows per edge;
  `constraints.segment` is the lowest `segment` per edge. Producers MAY keep
  writing them; readers SHOULD prefer `edge_sources` when both are present.

Example: a unit square (segments 1 to 4, counter-clockwise) and a second
square sharing its right side (segments 5 to 8, also counter-clockwise).
The shared side is one constraint edge, vertex rows 2 to 3 (bottom to top),
which is row 3 of the sorted `constraints` after (1, 2) and (1, 4). It has
two sources running opposite ways:

| edge | segment | forward |
|---|---|---|
| 3 | 2 | TRUE |
| 3 | 8 | FALSE |

### UGRID and Zarr

In the UGRID-in-Zarr encoding (trianglewins dev draft), constraints are a
flag on the full edge set. There `edge_sources` is written as three 1-D
arrays on its own dimension (`n_edge_source`), with `edge` indexing the
UGRID edge dimension and `segment` indexing the stored PSLG segments, both
0-based like the rest of UGRID connectivity. `forward` is relative to the
stored `edge_node_connectivity` order.

### GeoArrow triangles

`geoarrow.triangles` carries triangles, not edges, so `edge_sources` travels
beside it as its own Arrow table, with `constraints` written out as `v0`,
`v1` in the serialised vertex numbering (v0.1 Decision 8).

## Producers

| Producer | Status | Notes |
|---|---|---|
| cdtr | Done: `cdt_triangulate(edge_sources = TRUE)` (hypertidy/cdtr#7, development version) | Returns `edge`, `segment`, `forward` against cdtr's `S` rows, 1-based. Built from CDT's `pieceToOriginals`; `forward` from the sign of the dot product of the edge and the input segment |
| meshcore `tri_form()` | To do | Carry cdtr's table through. `tri_form()` sorts `constraints` and orders each row `v0 < v1`, so it must remap `edge` and flip `forward` where it swaps |
| laridae | Gap | `segments` has the lowest `segment` and `count`; CGAL's constraint hierarchy holds every covering constraint (`contexts`). Return all of them with direction, on the exact path too |
| trowel | Derivable | From its segment chains (`mesh_segments()`) in `tri_form()`, no engine change |

## Annex A: overlay labelling by propagation

Given a triangle form with `edge_sources` and the PSLG it came from, this
labels every triangle with the set of input features covering it, under a
chosen fill rule. It uses only triangle adjacency, edge ids and source
lists: no coordinates and no predicates, so it is exact whenever the noding
was exact, on any engine.

### Inputs

* Triangles with adjacency (the neighbour across each side, or none at the
  mesh boundary), wound counter-clockwise (v0.1 Decision 3).
* For each triangle side that lies on a constraint, its `constraints` row.
* `edge_sources`, and for each `segment` its feature (PSLG `segments.path`
  then `paths.feature`).
* A fill rule.

The triangle form must keep every triangle covered by any input: `erase`
"outer" or "hull". Erasing "holes" drops even-depth triangles, which can be
covered by an overlapping input, so labels on such a mesh are not defined.

### Winding

For each feature f and triangle t, `w[t, f]` is the winding number of f's
rings around t. Crossing a constraint edge whose source s belongs to f,
from the left of s to its right, changes `w[f]` by -1; from right to left,
by +1. So stepping from triangle t to its neighbour u across edge e, with t
on the left of e as stored (`v0` to `v1`):

```
for each source s of e, with f = feature(s):
    w[u, f] = w[t, f] - 1   if forward(s)
    w[u, f] = w[t, f] + 1   otherwise
```

and with t on the right of e, the signs swap. Anything outside the mesh has
w = 0 for every feature (with erase "outer" the mesh boundary is the outer
boundary of the union; with "hull" it is the convex hull).

### Algorithm

```
for each connected component of the triangle adjacency graph:
    pick a triangle t with a side e on the mesh boundary
    w[t] = the winding implied by stepping from outside (w = 0) across e
    breadth-first over adjacency, applying the step rule above
```

Cost is linear in triangles plus `edge_sources` rows.

### Fill rules

Feature f covers triangle t when `rule(w[t, f])` is true:

| Rule | Covered when | Notes |
|---|---|---|
| `nonzero` (default) | w != 0 | Needs normalised ring orientation (below). A duplicated part stays covered |
| `evenodd` | w is odd | Orientation-free. A duplicated part cancels (polymer 0.3.0 behaviour) |
| `positive` | w > 0 | Needs normalised ring orientation; a clockwise-only ring covers nothing |

The winding uses segment direction as the PSLG gives it. v0.1 does not
trust input ring orientation (the first ring of a part is the shell), so a
PSLG producer that wants `nonzero` or `positive` to give OGC semantics
orients shells counter-clockwise and holes clockwise when it builds the
PSLG. `evenodd` needs nothing.

### Output

| Table | Column | Type | Meaning |
|---|---|---|---|
| triangles | `set_id` | int32 | Dense id of the triangle's covering set, or missing (null in Arrow) where no feature covers it |
| set_features | `set_id`, `feature` | int32 | Long table: one row per (set, covering feature), sorted by `set_id` |

`set_id` follows the reference convention: 1-based and dense (1 to the
number of sets) in R, 0-based in Arrow. Distinct sets are few compared to
triangles, so a consumer interns them and caches transitions
`(set_id, edge) -> set_id`. Triangles with the same `set_id` are what a
dissolve groups into rings: wkpool `tri_dissolve(x, group)` takes
`triangles$set_id` as `group` directly. The long (triangle, feature) index
is a join of `triangles.set_id` with `set_features`.

### Self-check

Every adjacency not on the breadth-first tree must agree: the winding
already assigned to u must equal the step from t. Every mesh boundary side
must imply w = 0 outside. Producers and consumers report the number of
sides that disagree as `inconsistent_edges` (in the overlay's report row).
A non-zero count means the noding is broken: a missed crossing, a dropped
constraint or a missing source row. This is a conformance check for any
engine's `edge_sources`; cdtr's tests run it (test-edge-sources.R).

## Conformance corpus additions

| Cases | Check |
|---|---|
| All 15 trianglewins cases | `edge_sources` coverage rules hold; `count` and `segment` derived from it equal laridae's; labelling gives `inconsistent_edges == 0` |
| Overlapping buffers (polymer issue 7, seed 1) | Winding differs from `depth` where expected: gaps enclosed by overlapping buffers have depth 2 and winding 0 |
| Duplicated part, hole wound like its shell (trianglewins validity catalogue) | `evenodd` and `nonzero` differ as the fill rule table says |
