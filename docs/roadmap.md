# Roadmap

State on 11 October 2026. Order agreed by Michael on 10 October: fix
silicate master, settle the six spec questions, then cdtr and laridae to
CRAN. The tracking issue in this repo links the discussions and pull
requests behind each item.

## Done

* Landscape survey, mesh spec v0.1 draft and model zoo
  ([design.md](design.md), [mesh-spec-v0.1.md](mesh-spec-v0.1.md),
  [model-zoo.md](model-zoo.md)). Option B chosen, 7 Oct 2026.
* silicate vs wkpool benchmarks: wkpool's core is fast and linear;
  silicate's `SC()` and `ARC()` are the bottleneck
  ([findings.md](findings.md)).
* wkpool speed-ups merged: #4 (linear cycle and neighbour verbs), #5
  (positional vertex lookup), #6 (`cycles_to_wkb`).
* First proof, this repo: GRID and HEALPix CELL on one verb set, arrays
  joined by keyed dimension, the lattice fast path for hexagons.
* UGRID model and the silicate2 zoo helpers on silicate branch
  `silicate2`; meshcore made `edges()`, `face_edge()`, `as_wkpool()` and
  `n_cells()` generics for it.
* MDAL and GDAL multidim bridge prototype: exact join on 5 UGRID meshes;
  rmdal build fixes (mdsumner/rmdal#1).
* Docs round: READMEs and figures in wkpool #7, meshcore #1, silicate #146,
  rmdal #2; overview page; this folder.
* The six spec v0.1 decisions, settled 11 Oct 2026 (all as proposed; the
  constraint map is optional in v0.1 and, decided 14 Oct, required in v0.2). See
  [mesh-spec-v0.1.md](mesh-spec-v0.1.md).

## Now

* silicate 0.7.2: master fixed locally by Michael and going to CRAN soon
  (11 Oct 2026). GitHub Actions modernised in silicate #147.
* cdtr to CRAN, then laridae, emitting the spec's triangle form.

## Next

From the survey's first moves, not yet started:

1. Turn the trianglewins cases into the conformance corpus, plus grid and
   HEALPix cases; add `tw_conform()`.
2. Settle the PSLG reader in wkpool: merge `pslg_from_wk()` into
   `as_pslg()`.
3. Drawable meshes in meshcore: `grid_mesh()` (from quadmesh),
   `mesh_project()` (aobcore's error-bounded refinement), `mesh_arrow()`;
   then point anglr at it on a branch.

From what the prototypes found (see [findings.md](findings.md)):

4. Point to cell, the next verb.
5. An `orient()` verb, and an antimeridian rule in the spec.
6. 64-bit cell ids.
7. Read meshes through the MDAL bridge in silicate2's UGRID model; replace
   meshcore's use of sf internals with gdalraster multidim.
8. Port SC, PATH, ARC and TRI onto wkpool in silicate2 with the `sc_*`
   names unchanged.
10. FACE (holes), then links between models and layers.
11. TRACK in traipse: tracks, fixes and derived segments on meshcore
    conventions; time spent as a TRACK x GRID link table (a base-R
    sketch matches `trip::rasterize()` on `walrus818` to 4e-13); then
    trip 2.0 as a thin front end on it, off sp. Needs point to cell (5)
    for CELL and UGRID, a time key on arrays, and a segment rule
    (planar, geodesic, rhumb) next to the antimeridian rule (6).

## Open decisions

* Final names: meshcore, silicate2, meshspec.
* Whether and how silicate2 merges back into silicate.
* GRID hierarchy semantics (2 x 2 blocks vs GDAL overviews).
* Where the PSLG and triangle forms of the spec live (trianglewins `spec/`
  is the proposal; this folder holds the big picture).
