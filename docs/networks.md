# Networks: where street graphs fit

Position piece, 7 November 2026.

meshcore is written for meshes, where two vertices at the same place are
the same vertex. Street networks break that assumption in useful ways.
This note says what the mesh work already gives a network, what it does
not, and what to do next. It does not propose a routing engine: shortest
paths, centrality and flows are solved well by
[dodgr](https://github.com/UrbanAnalyst/dodgr) and igraph, and stay there.

## The short version

* The model zoo lists GRAPH (directed, weighted edge) as "Later". Nothing
  else in the spec, verbs or roadmap speaks to networks yet.
* The machinery a network model needs is mostly built: wkpool's arc-node
  topology, the vertex identity ladder, and the v0.2 `edge_sources` table.
* silicate's SC is already a street-network interchange in the wild:
  `osmdata::osmdata_sc()` produces it and `dodgr::weight_streetnet()`
  consumes it, including for time-based routing.
* A LIST (Tasmania) street graph is already built on wkpool and routed
  with dodgr (see below). GRAPH should be written so that table conforms
  as it stands.

## Work already under way

* [tas-transport-web](https://source.coop/mdsumner/tas-transport-web): a
  statewide GeoParquet and PMTiles copy of theLIST Transport Segments, one
  row per `TRANSEG_ID`, in dated snapshots behind `latest.json`. Built by
  `R/10_transport_web.R` in hypertidy/thelist-opendata (see
  thelist-opendata#2). Its topology: "`node0` / `node1` come from exact
  coordinate identity of segment endpoints in the source coordinates
  (wkpool `merge_coincident`, tolerance 0), so connectivity is integer
  equality." LIST's own node table has no link to segments, so its ids are
  not used.
* [city.infra](https://mdsumner.github.io/city.infra/): a segment mapper
  that groups segments by street and cross street (`Argyle [Federal,
  Burnett]`), saved by `TRANSEG_ID`, and a Hobart access run: 53,478
  segments become 102,108 directed edges for one dodgr shortest-path run,
  joined to gtfsrouter transit. Its
  [UA stack notes](https://mdsumner.github.io/city.infra/docs/01-ua-stack.html)
  name silicate (`osmdata_sc`) and wkpool (`establish_topology()`,
  `find_neighbours()`, `find_shared_edges()`) as the bridge to dodgr and
  m4ra, and list two asks: a LIST adapter for dodgr and a "bring your own
  graph" entry point for m4ra.

Three things follow. The identity is the exact rung on projected source
coordinates. The `node0`/`node1` columns are already a minimal GRAPH edge
table. The street groupings map many segments to one feature, the same
shape as `edge_sources`.

## What the mesh work already gives a network

| Piece | Where | What it gives a network |
|---|---|---|
| SC: vertices, undirected `edge`, `object_link_edge` with `native_` direction | silicate (CRAN) | A directed-edge view per feature; already read by dodgr via osmdata |
| Arc-node topology | wkpool `find_nodes()`, `find_arcs()`, `vertex_degree()`, `quotient` | Graph contraction: nodes have degree other than 2, arcs are the contracted edges; linear time ([findings.md](findings.md)) |
| Shared edges | wkpool `find_shared_edges()`, `find_neighbours()` | Edge identity across features |
| Identity ladder | [model-zoo.md](model-zoo.md) | Each model records how its vertices were matched |
| `edge_sources` | [mesh-spec-v0.2.md](mesh-spec-v0.2.md); cdtr, laridae, meshcore | Every derived edge maps back to the input segments that cover it, with direction |
| UGRID 1D | silicate branch `silicate2`, `read_ugrid()` | Reads a 1D network (Deltares dflow1d) as nodes and edges; branch geometry not yet read |
| A dodgr bridge sketch | silicate `R/spatial-builder.R`, commented `to_dodgr.SC()` | SC to dodgr edges, then contraction (dodgr issue 78) |

silicate issue #60 (ARC model and graph contraction) is the open thread.

## What it does not cover

1. **Declared vertex identity.** OSM node ids say which vertices are the
   same; geometry does not. The ladder has a "declared" rung only for
   binding array dimensions. LIST shows the other case: ids exist but do
   not link, so exact matching in the source CRS is the honest rung.
2. **Grade separation.** A bridge crosses a road without a junction. The
   noded rung would join them. A network model must record whether noding
   was applied, or apply it with a layer key.
3. **Direction and weights.** SC edges and wkpool's quotient graph are
   undirected. GRAPH needs directed edges (one-way, reverse pairs) and
   weight columns per profile. That is a table shape, not an algorithm.
4. **Contraction provenance.** dodgr's contracted graph keeps an
   `edge_map` from new edges to old, the same shape as `edge_sources`
   (derived edge, source segment, forward). One table could serve LIST
   rejoins, street groupings, noding and contraction.
5. **Intersections as clusters.** "Segments joined near an intersection"
   treats several vertices as one junction: a tolerance rung applied to
   junctions only. That is a table from vertices to junction ids.
6. **Turns.** Turn restrictions and penalties relate edges to edges (a
   line-graph dual). The zoo treats DUAL as a verb; the line graph is not
   listed.
7. **Snapping points to the network.** Point to cell (roadmap 4) has a
   network twin: point to nearest edge with a fraction along it, as in the
   Hobart run's 250 m address step.
8. **Segment rule.** Lengths in long/lat need the planar, geodesic or rhumb
   rule that TRACK already asks for (roadmap 11).

## The R landscape, briefly

| Package | Strength | What it means here |
|---|---|---|
| dodgr | Fast directed weighted routing, contraction, flows, time-based routing on SC | Already reads SC. Keep that working; do not compete on routing |
| osmdata | `osmdata_sc()` returns SC with OSM ids kept | The declared-identity case; test data |
| sfnetworks | sf plus tidygraph; subdivision, smoothing | Geometry first; noding is a user choice with known pitfalls |
| igraph, tidygraph | General graph algorithms | A conversion target, not a dependency. igraph exports `vertices()` and `edges()`, so meshcore verbs are not re-exported by silicate2 |

The open niche is not routing. It is a well-specified, engine-neutral
network table form with stated identity and provenance.

## Recommendations, in order

All of these are on the hypertidy side; nothing is proposed to dodgr,
osmdata or sfnetworks yet.

1. **Treat tas-transport-web as the reference network.** Write GRAPH so its
   `node0`/`node1` table conforms with no change, and record its rung as
   exact, tolerance 0, source CRS.
2. **Pin both routes into dodgr in silicate2 tests**: a small LIST extract
   and a small saved `osmdata_sc()` extract. The second protects the
   workflow silicate already powers; the first is the dodgr LIST adapter,
   built and tested here first.
3. **Write GRAPH as a zoo model on paper**: vertices; a directed `edge`
   table (from, to, edge, forward, weight columns); `edge_sources` back to
   source segments; an optional junction table for intersection clusters.
4. **Extend the identity ladder notes**: OSM ids as declared, LIST as ids
   that do not link, grade separation as the reason not to node.
5. **ARC to GRAPH in silicate2 on wkpool**: `find_nodes()` and
   `find_arcs()` give contraction; `as_dodgr()` and `as_igraph()` routes in
   `zoo_routes()`; close silicate #60.
6. **A sandbox comparison on Hobart**: LIST via GRAPH against OSM via
   osmdata and dodgr, comparing node, edge and contracted counts and a few
   path lengths. It also checks the 54 multi-part segments and the 839
   length mismatches flagged in tas-transport-web.
7. **Later**: point-to-edge snapping, a line-graph DUAL for turns, and the
   geodesic segment rule shared with TRACK.
