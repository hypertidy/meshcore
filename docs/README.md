# meshcore design notes

meshcore (working name) is the home for the big picture of the mesh work in
hypertidy: why it exists, the spec it follows, the models it serves and
what comes next. The package README covers what the code does today; these
notes cover the rest.

| File | What it holds |
|---|---|
| [design.md](design.md) | The landscape survey, the reframing of silicate, and the chosen plan (Option B) |
| [mesh-spec-v0.1.md](mesh-spec-v0.1.md) | Draft spec for three mesh forms (PSLG, triangle, drawable), the six open decisions, the conformance corpus |
| [model-zoo.md](model-zoo.md) | Models, verbs and machinery; the vertex identity ladder; the zoo of models and its priorities |
| [findings.md](findings.md) | What building things found: benchmarks, the keyed join, the MDAL and GDAL multidim bridge, the gaps |
| [roadmap.md](roadmap.md) | Done, now, next, and open decisions |

![Vertex identity ladder: each rung finds a different amount of shared structure](figures/ladder.png)

## Where these came from

These notes are copied from working documents written in October 2026.
The originals are kept and linked from the tracking issue in this repo:

* Survey doc (tabs: survey, mesh spec v0.1, model zoo):
  https://claude.ai/code/artifact/d81af626-1ecf-49fd-b2ec-67ea78ff999c
* Overview page "Meshes and Intermediates" with the figures:
  https://claude.ai/artifact/ER3PGQ886V3Jmzrpy3ywex

When the notes and the originals differ, these notes are newer.

## Names

meshcore, silicate2 and meshspec are working names. Final naming is an open
decision (see [roadmap.md](roadmap.md)).

## Figures

The PNGs in `figures/` are drawn by R scripts from the real packages
(wkpool main, meshcore main, silicate branch `silicate2`, sf with GEOS 3.12
and GDAL 3.8). The scripts are not in this repo yet; `Rscript R/make-all.R`
in the illustrations folder redraws them. The UGRID panels need
`UGRID_TESTDATA` pointing at a sparse clone of MDAL's `tests/data/ugrid`.
