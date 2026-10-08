# Design: landscape survey and reframing

Written 7 October 2026, revised 8 October 2026.

## Summary

silicate's jobs have scattered across newer work, so the reboot is not one
package. It is a written mesh contract plus a small mesh core that the
existing pieces plug into.

silicate's models (SC, PATH, ARC, TRI and the 0 forms) and its generic
verbs are still the abstraction people use. What changes is the machinery
underneath them:

* **wk reads coordinates** from anything handleable. It is machinery under
  the verbs, not a replacement for them: the verbs still define the
  entities.
* **wkpool holds vertex pools and arc-node topology**, on CRAN, with a
  compiled kernel.
* **cdtr, laridae and trowel triangulate.** They already share a vertex,
  segment and triangle contract, and trianglewins checks it.
* **The viewers each build their own drawable meshes.** aobcore's tile
  meshes, ortho-cog-viewer's screen mesh, cog-mesh-viewer and
  quadmesh/anglr all have one, and none of them are shared.

The gap is the layer between them: one spec for the three mesh forms (PSLG
in, triangle mesh out, drawable mesh with position, uv and attributes), and
one R package that builds and converts them, with grid meshes included.

Decided by Michael on 7 October 2026: Option B below, a spec plus a mesh
core (working name meshcore). silicate stays on CRAN as it is; a remake of
its models on the new machinery lives on the `silicate2` branch of
hypertidy/silicate and may fold back in later.

## Landscape

Checked against each repo's main branch on 7 October 2026. Every one of
these except silicate has been active since August 2026.

| Package | Status | What it is | Data model | Overlap with silicate |
|---|---|---|---|---|
| [silicate](https://github.com/hypertidy/silicate) | CRAN 0.7.1 | Common forms for hierarchical data, generic `sc_*` verbs | SC, SC0, PATH, PATH0, ARC, TRI, TRI0: relational tables (object, vertex, edge or path or triangle) | The original |
| [anglr](https://github.com/hypertidy/anglr) | Off CRAN; cdtr backend merged 2 Oct 2026 | Meshes and rgl 3D for spatial data | silicate models plus DEL, DEL0, QUAD; `as.mesh3d()` | Main consumer |
| [wkpool](https://github.com/hypertidy/wkpool) | CRAN | Vertex-pool topology for anything wk reads | Segments are atomic; vertices in a pool; `.feature` and `.path` provenance; arcs, nodes, cycles | Machinery for SC, PATH and ARC, plus `as_pslg()` |
| [gdalraster](https://github.com/firelab/gdalraster) | CRAN | GDAL bindings | `GDALRaster`, `GDALVector` with Arrow streams, `g_*` WKB ops | I/O; constrained Delaunay with GDAL 3.12 or later |
| [cdtr](https://github.com/hypertidy/cdtr) | GitHub; first in line for CRAN | One-shot CDT with refinement (artem-ogre/CDT) | Vertices + segments in; P, T, S, depth out | TRI and DEL engine, permissive licence |
| [laridae](https://github.com/hypertidy/laridae) | GitHub | Live CGAL mesh handle, sizing fields | Same contract; vertex origin, segment-to-input map | Same |
| [trowel](https://github.com/hypertidy/trowel) | GitHub | Live spade (Rust) mesh handle | Same contract | Same |
| [decido](https://github.com/hypertidy/decido) | CRAN 0.4.1 | Earcut binding | Triangle index triplets | Engine under silicate TRI |
| [trianglewins](https://github.com/mdsumner/trianglewins) | GitHub (harness) | Conformance harness, survey, roadmap, wk guide | Measures from vertex and triangle tables | Its pslg is silicate PATH plus SC, rebuilt |
| [quadmesh](https://github.com/hypertidy/quadmesh), [textures](https://github.com/hypertidy/textures) | CRAN | Grids as quad or triangle meshes | rgl mesh3d; corner and centre | The grid half of silicate's mesh story, never joined to it |
| [allboa](https://github.com/allboa) aobcore, aobview, scenespec | Early (scenespec 0.6) | mapview reboot: scenes in any CRS on deck.gl | GeoArrow vectors; tiled COG plans with pre-projected meshes (Arrow vertex table with `position`, `uv`, plus index table) | Builds drawable meshes in R |
| [ortho-cog-viewer](https://github.com/mdsumner/ortho-cog-viewer) | Live site (TypeScript) | GPU reprojection of COGs to any CRS | Display-space mesh; uv by inverse projection | Same drawable-mesh idea, in the browser |
| [rangefinder](https://github.com/hypertidy/rangefinder) | Live site (JS) | Static explorer for STAC, COG, VRT, Zarr, Icechunk | Typed arrays on an output grid | Contrast case: warp, not drape |
| [cog-mesh-viewer](https://github.com/mdsumner/cog-mesh-viewer) | Python prototype | DEM mesh with draped imagery | Unit-square mesh, uv into the source | Same drape idea, in Python |

Two things stand out. The triangulation stack and allboa each wrote a
contract (trianglewins roadmap step 1, and scenespec) without referring to
each other. And three places propose to own the wk-to-PSLG reader: wkpool's
`as_pslg()`, the trianglewins guide, and the trianglewins roadmap's plan to
move it into cdtr.

## silicate's ideas, sorted

| silicate idea | Where the machinery lives now | Status |
|---|---|---|
| Universal converter: `sc_*` generics with methods per format | wk's handler protocol reads the coordinates | Machinery only: the verbs still define the entities (see [model-zoo.md](model-zoo.md)) |
| Vertex de-duplication, segments as the atomic unit (SC, SC0) | wkpool `establish_topology()`, `merge_coincident()`, `pool_segments()` | Covered |
| Paths with feature identity (PATH) | wkpool `.feature` and `.path`; trianglewins pslg `paths` | Covered, twice |
| Arc-node topology (ARC) | wkpool `find_arcs()`, `find_nodes()`, cycles, quotient graph | Covered, better |
| Triangulation as a model (TRI, DEL) | cdtr, laridae, trowel, decido, RTriangle, judged by trianglewins | Partly: engines agree, but the contract is unwritten |
| Feature provenance through meshing (triangle to object) | silicate TRI's object link; trianglewins `tri_label()`; laridae's segment-to-input map | Partly: done in R at about 1.4 s per 179k triangles, not returned by engines |
| Grids as meshes (corner vs centre, quad vs triangle) | quadmesh, textures, aobcore tile lattices, ortho-cog-viewer | Unclaimed: four implementations, no shared form. meshcore now holds GRID and CELL |
| A drawable mesh: positions in a view CRS, uv, attributes, indices | scenespec raster `mesh`; anglr `mesh3d`; cog-mesh-viewer | Unclaimed in R; scenespec has the only written schema |

The lesson from silicate's history is in its README: the model definitions
"have changed many times". So the forms are written down as a versioned
spec with a conformance corpus first ([mesh-spec-v0.1.md](mesh-spec-v0.1.md)),
the way scenespec and the trianglewins roadmap already do.

## Three options

| Option | What it is | Gains | Costs |
|---|---|---|---|
| A. One package | silicate 1.0 rewritten on wk and wkpool | One name, a known brand | Repeats a moving model inside one package; breaks users or drags old Imports; duplicates wkpool |
| **B. Spec plus a small family (chosen)** | A spec for three forms with a corpus; wkpool owns geometry to PSLG; engines emit the triangle form; a new mesh core builds grid and drawable meshes; anglr and aobcore consume | Each piece stays narrow; R and JS read the same Arrow tables; trianglewins becomes conformance | One more repo and package; naming |
| C. No new package | Write the forms into scenespec and trianglewins, spread the code into wkpool, cdtr and aobcore | Fewest packages | Grid-mesh logic locked inside a viewer; anglr has nothing lean to depend on; two specs drift |

Geometry reaches the spec through wkpool, and grids go straight to the mesh
core. The engines and the mesh core both read and write the spec's forms,
and every viewer reads the drawable form.

## What B means for each package

* **silicate**: unchanged on CRAN. Its models and verbs are kept and
  remade on the new machinery on the `silicate2` branch, which is additive
  so it can merge back. Whether the names converge is open.
* **wkpool**: the single home of the geometry-to-PSLG reader. The
  trianglewins `pslg_from_wk()` merges into `as_pslg()` rather than moving
  into cdtr (this reverses trianglewins roadmap step 6).
* **cdtr, laridae, trowel, decido**: emit the spec's triangle form. Depth
  multiplicity is decided in spec v0.1, before cdtr goes to CRAN.
* **meshcore**: computed-vertex models (GRID, CELL) and the shared verb
  set; then triangle labels, grid meshes (quadmesh's corner and centre
  logic plus aobcore's tile lattice), projecting a mesh with error-bounded
  refinement, and writing the drawable form to Arrow and rgl mesh3d.
  Imports stay lean.
* **anglr**: the rgl front end over the mesh core.
* **aobcore**: keeps its planner but emits the spec's drawable form, so
  scenespec's raster `mesh` and the spec are one schema.
* **gdalraster**: the I/O layer (Arrow streams, warps, multidim,
  `g_delaunay_triangulation()` as a GEOS baseline in the harness).
* **rmdal**: MDAL topology for model meshes, one reader among several
  (see [findings.md](findings.md)).
* **ortho-cog-viewer, rangefinder, cog-mesh-viewer**: read the drawable
  form when it comes from R, and stay free to build their own on the GPU.

## First concrete moves (from the survey)

1. Draft mesh spec v0.1 (done as a draft: [mesh-spec-v0.1.md](mesh-spec-v0.1.md)).
2. Turn the trianglewins cases into the conformance corpus, plus grid cases.
3. Settle the reader in wkpool: merge `pslg_from_wk()` into `as_pslg()`.
4. Spike meshcore with `grid_mesh()`, `mesh_project()` and `mesh_arrow()`,
   then point anglr at it on a branch.

What actually happened first was different and is recorded in
[roadmap.md](roadmap.md): benchmarks, then the GRID and CELL proof, UGRID,
and the MDAL bridge. Moves 2 to 4 are still open.
