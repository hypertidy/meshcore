// meshview: a triangle form and its point cloud in the browser, with every
// face picked on the GPU and joined back to the tables it came from.
//
// Reads the folders write_mesh_arrow() writes: <data>/mesh/*.arrows (the
// triangle form, plus face_points and face_stats when present) and
// <data>/points/*.arrows (the point-cloud form). Row references are 0-based
// on the wire, as each table's meshspec:refs says, so no index is shifted
// here.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { tableFromIPC } from 'apache-arrow';

THREE.ColorManagement.enabled = false;

const params = new URLSearchParams(location.search);
const base = (window.MESHVIEW_DATA || params.get('data') || 'data').replace(/\/$/, '');

const $ = (id) => document.getElementById(id);

async function load(path, optional = false) {
  const r = await fetch(path);
  if (!r.ok) {
    if (optional) return null;
    throw new Error('could not read ' + path + ' (' + r.status + ')');
  }
  return tableFromIPC(new Uint8Array(await r.arrayBuffer()));
}

function col(table, name) {
  const c = table && table.getChild(name);
  return c ? c.toArray() : null;
}

function meta(table, key) {
  return table ? table.schema.metadata.get(key) : undefined;
}

// a perceptual ramp (viridis stops), t in 0..1
const RAMP = [[68, 1, 84], [59, 82, 139], [33, 145, 140], [94, 201, 98], [253, 231, 37]];
function ramp(t, out, o) {
  if (!Number.isFinite(t)) { out[o] = 0.36; out[o + 1] = 0.33; out[o + 2] = 0.40; return; }
  t = Math.min(1, Math.max(0, t)) * (RAMP.length - 1);
  const i = Math.min(RAMP.length - 2, Math.floor(t));
  const f = t - i;
  for (let k = 0; k < 3; k++) out[o + k] = (RAMP[i][k] * (1 - f) + RAMP[i + 1][k] * f) / 255;
}

function quantiles(a, lo, hi) {
  const v = Array.from(a).filter(Number.isFinite).sort((p, q) => p - q);
  if (!v.length) return [0, 1];
  return [v[Math.floor(lo * (v.length - 1))], v[Math.floor(hi * (v.length - 1))]];
}

// LAS classification colours (ASPRS codes)
const CLASS_RGB = {
  1: [0.62, 0.62, 0.62], 2: [0.55, 0.40, 0.25], 3: [0.55, 0.75, 0.35], 4: [0.35, 0.65, 0.25],
  5: [0.15, 0.45, 0.15], 6: [0.85, 0.30, 0.25], 7: [0.85, 0.20, 0.75], 9: [0.25, 0.45, 0.85],
};

function fmt(x, d = 3) {
  if (x === null || x === undefined) return '';
  if (typeof x === 'bigint') return x.toString();
  if (typeof x === 'number') {
    if (!Number.isFinite(x)) return 'NA';
    if (Number.isInteger(x)) return String(x);
    return x.toFixed(Math.abs(x) >= 1e5 ? 2 : d);
  }
  return String(x);
}

// tables by file name, from the network or from files the viewer chose
function fromFetch() {
  const where = { vertices: 'mesh', triangles: 'mesh', face_points: 'mesh', face_stats: 'mesh', points: 'points', sources: 'points' };
  return (name, optional) => load(base + '/' + where[name] + '/' + name + '.arrows', optional);
}

function fromFiles(files) {
  const byName = {};
  for (const f of files) byName[f.name.replace(/\.arrows$/, '')] = f;
  return async (name, optional) => {
    const f = byName[name];
    if (!f) {
      if (optional) return null;
      throw new Error('no ' + name + '.arrows among the chosen files');
    }
    return tableFromIPC(new Uint8Array(await f.arrayBuffer()));
  };
}

let started = false;
function pickFiles(files) {
  if (started || !files || !files.length) return;
  started = true;
  $('drop').hidden = true;
  main(fromFiles(Array.from(files))).catch(fail);
}

function fail(e) {
  $('status').textContent = 'Error: ' + e.message;
  console.error(e);
}

async function main(get) {
  $('status').textContent = 'Reading tables ...';
  const [V, T, FP, FS, P, S] = await Promise.all([
    get('vertices'), get('triangles'), get('face_points', true), get('face_stats', true),
    get('points', true), get('sources', true),
  ]);

  const crs = meta(V, 'crs') || 'unknown CRS';
  const vx = col(V, 'x'), vy = col(V, 'y'), vz = col(V, 'z');
  const inputRow = col(V, 'input_row');
  const t0 = col(T, 'v0'), t1 = col(T, 'v1'), t2 = col(T, 'v2');
  const nf = t0.length;

  // float64 to a float32-safe local frame: renderers work in float32, and a
  // UTM northing near 6.4e6 m has a float32 spacing of 0.5 m
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity, zmin = Infinity, zmax = -Infinity;
  for (let i = 0; i < vx.length; i++) {
    if (vx[i] < xmin) xmin = vx[i]; if (vx[i] > xmax) xmax = vx[i];
    if (vy[i] < ymin) ymin = vy[i]; if (vy[i] > ymax) ymax = vy[i];
    if (vz[i] < zmin) zmin = vz[i]; if (vz[i] > zmax) zmax = vz[i];
  }
  const origin = [(xmin + xmax) / 2, (ymin + ymax) / 2, zmin];

  // non-indexed, so each face can carry its own pick colour
  const pos = new Float32Array(nf * 9);
  const pick = new Uint8Array(nf * 9);
  for (let f = 0; f < nf; f++) {
    const id = f + 1;
    const r = id & 255, g = (id >> 8) & 255, b = (id >> 16) & 255;
    const vs = [t0[f], t1[f], t2[f]];
    for (let k = 0; k < 3; k++) {
      const v = vs[k], o = f * 9 + k * 3;
      pos[o] = vx[v] - origin[0]; pos[o + 1] = vy[v] - origin[1]; pos[o + 2] = vz[v] - origin[2];
      pick[o] = r; pick[o + 1] = g; pick[o + 2] = b;
    }
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geom.computeVertexNormals();
  const display = new Float32Array(nf * 9);
  geom.setAttribute('color', new THREE.BufferAttribute(display, 3));
  const pickGeom = new THREE.BufferGeometry();
  pickGeom.setAttribute('position', geom.getAttribute('position'));
  pickGeom.setAttribute('color', new THREE.BufferAttribute(pick, 3, true));

  // the link table, sorted by face: offsets give each face's returns
  let fpStart = null, fpPoint = null, fpDz = null;
  if (FP) {
    const fface = col(FP, 'face');
    fpPoint = col(FP, 'point');
    fpDz = col(FP, 'dz');
    fpStart = new Int32Array(nf + 1);
    for (let i = 0; i < fface.length; i++) fpStart[fface[i] + 1]++;
    for (let f = 0; f < nf; f++) fpStart[f + 1] += fpStart[f];
  }

  // colour by a face column
  const faceCols = {};
  const fz = new Float64Array(nf);
  for (let f = 0; f < nf; f++) fz[f] = (vz[t0[f]] + vz[t1[f]] + vz[t2[f]]) / 3;
  faceCols['height (z)'] = fz;
  if (FS) {
    for (const field of FS.schema.fields) {
      if (field.name === 'face') continue;
      const a = col(FS, field.name);
      if (a && typeof a[0] !== 'bigint' && typeof a[0] !== 'string') faceCols[field.name] = a;
    }
  }
  const sel = $('colourby');
  for (const k of Object.keys(faceCols)) {
    const o = document.createElement('option');
    o.value = o.textContent = k;
    sel.appendChild(o);
  }
  if (faceCols['dz_max']) sel.value = 'dz_max';
  function recolour() {
    const a = faceCols[sel.value];
    const [lo, hi] = quantiles(a, 0.02, 0.98);
    for (let f = 0; f < nf; f++) {
      const o = f * 9;
      ramp((a[f] - lo) / (hi - lo || 1), display, o);
      display[o + 3] = display[o + 6] = display[o];
      display[o + 4] = display[o + 7] = display[o + 1];
      display[o + 5] = display[o + 8] = display[o + 2];
    }
    geom.getAttribute('color').needsUpdate = true;
    $('legend').textContent = sel.value + ': ' + fmt(lo, 2) + ' to ' + fmt(hi, 2) + ' (2nd to 98th percentile)' +
      (Array.prototype.some.call(a, (x) => !Number.isFinite(x)) ? '; muted: no value' : '');
  }
  sel.addEventListener('change', recolour);
  recolour();

  // scene: z up, as the map is
  const canvas = $('view');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(getComputedStyle(document.body).getPropertyValue('--canvas').trim() || '#20242a');
  const pickScene = new THREE.Scene();
  pickScene.background = new THREE.Color(0, 0, 0);
  const span = Math.max(xmax - xmin, ymax - ymin);
  const camera = new THREE.PerspectiveCamera(45, 1, span / 1000, span * 20);
  camera.up.set(0, 0, 1);
  camera.position.set(0, -span * 0.9, span * 0.7);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, (zmax - zmin) / 2);
  controls.update();

  const world = new THREE.Group();
  const pickWorld = new THREE.Group();
  scene.add(world);
  pickScene.add(pickWorld);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2.2));
  const sun = new THREE.DirectionalLight(0xffffff, 1.2);
  sun.position.set(-1, -1, 2);
  scene.add(sun);

  const mesh = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  world.add(mesh);
  pickWorld.add(new THREE.Mesh(pickGeom, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })));

  // the returns
  let px = null, py = null, pz = null, pclass = null, psource = null, pid = null;
  let cloud = null;
  if (P) {
    px = col(P, 'x'); py = col(P, 'y'); pz = col(P, 'z');
    pclass = col(P, 'classification'); psource = col(P, 'source'); pid = col(P, 'id');
    const n = px.length;
    const pp = new Float32Array(n * 3), pc = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pp[i * 3] = px[i] - origin[0]; pp[i * 3 + 1] = py[i] - origin[1]; pp[i * 3 + 2] = pz[i] - origin[2];
      const c = CLASS_RGB[pclass ? pclass[i] : 1] || [0.9, 0.9, 0.5];
      pc[i * 3] = c[0]; pc[i * 3 + 1] = c[1]; pc[i * 3 + 2] = c[2];
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pp, 3));
    g.setAttribute('color', new THREE.BufferAttribute(pc, 3));
    cloud = new THREE.Points(g, new THREE.PointsMaterial({ size: 2, sizeAttenuation: false, vertexColors: true }));
    cloud.visible = false;
    world.add(cloud);
  }
  const showPts = $('showpoints');
  showPts.disabled = !cloud;
  showPts.addEventListener('change', () => { cloud.visible = showPts.checked; mesh.visible = !$('hidemesh').checked; });
  $('hidemesh').addEventListener('change', () => { mesh.visible = !$('hidemesh').checked; });

  const exag = $('exag');
  exag.addEventListener('input', () => {
    const e = Number(exag.value);
    world.scale.set(1, 1, e);
    pickWorld.scale.set(1, 1, e);
    $('exagval').textContent = e.toFixed(1) + 'x';
  });

  // the picked face: its outline and its returns
  const edge = new THREE.LineLoop(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffd400, depthTest: false }));
  edge.renderOrder = 2;
  world.add(edge);
  const hits = new THREE.Points(new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ size: 5, sizeAttenuation: false, color: 0xffd400, depthTest: false }));
  hits.renderOrder = 3;
  world.add(hits);

  const rt = new THREE.WebGLRenderTarget(1, 1);
  const px1 = new Uint8Array(4);
  function pickAt(cx, cy) {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const dpr = renderer.getPixelRatio();
    camera.setViewOffset(w * dpr, h * dpr, Math.floor(cx * dpr), Math.floor(cy * dpr), 1, 1);
    renderer.setRenderTarget(rt);
    renderer.render(pickScene, camera);
    renderer.readRenderTargetPixels(rt, 0, 0, 1, 1, px1);
    renderer.setRenderTarget(null);
    camera.clearViewOffset();
    const id = px1[0] | (px1[1] << 8) | (px1[2] << 16);
    return id > 0 ? id - 1 : -1;
  }

  let pinned = false;
  let current = -1;
  function show(f) {
    if (f === current) return;
    current = f;
    if (f < 0) {
      edge.visible = hits.visible = false;
      $('info').innerHTML = '<p class="hint">Hover over the surface to read a face. Click to pin it.</p>';
      return;
    }
    edge.geometry.setAttribute('position', new THREE.BufferAttribute(pos.slice(f * 9, f * 9 + 9), 3));
    edge.visible = true;
    let html = '<h2>Face ' + f + '</h2><p class="sub">row ' + f + ' on the wire (0-based), row ' + (f + 1) + ' in R</p>';
    html += '<table>';
    if (FS) {
      for (const field of FS.schema.fields) {
        if (field.name === 'face') continue;
        html += '<tr><th>' + field.name + '</th><td>' + fmt(FS.getChild(field.name).get(f)) + '</td></tr>';
      }
    } else {
      html += '<tr><th>z</th><td>' + fmt(fz[f]) + '</td></tr>';
    }
    html += '</table><h3>Vertices</h3><table class="rows"><tr><th>row</th><th>x</th><th>y</th><th>z</th><th>point</th></tr>';
    for (const v of [t0[f], t1[f], t2[f]]) {
      html += '<tr><td>' + v + '</td><td>' + fmt(vx[v], 2) + '</td><td>' + fmt(vy[v], 2) + '</td><td>' + fmt(vz[v], 2) +
        '</td><td>' + (inputRow ? fmt(inputRow[v]) : '') + '</td></tr>';
    }
    html += '</table>';
    if (fpStart) {
      const a = fpStart[f], b = fpStart[f + 1];
      html += '<h3>Returns in this face: ' + (b - a) + '</h3>';
      if (b > a && px) {
        const hp = new Float32Array((b - a) * 3);
        const order = [];
        for (let i = a; i < b; i++) {
          const p = fpPoint[i], o = (i - a) * 3;
          hp[o] = px[p] - origin[0]; hp[o + 1] = py[p] - origin[1]; hp[o + 2] = pz[p] - origin[2];
          order.push(i);
        }
        hits.geometry.setAttribute('position', new THREE.BufferAttribute(hp, 3));
        hits.visible = true;
        order.sort((i, j) => fpDz[j] - fpDz[i]);
        html += '<p class="sub">Highest above the surface first. Each return names its source file and its position in that file.</p>';
        html += '<table class="rows"><tr><th>point</th><th>class</th><th>dz</th><th>z</th><th>file</th><th>id</th></tr>';
        for (const i of order.slice(0, 12)) {
          const p = fpPoint[i];
          const s = psource ? psource[p] : null;
          const key = S && s !== null ? (S.getChild('key') ? S.getChild('key').get(s) : s) : '';
          html += '<tr><td>' + p + '</td><td>' + (pclass ? pclass[p] : '') + '</td><td>' + fmt(fpDz[i], 2) + '</td><td>' +
            fmt(pz[p], 2) + '</td><td>' + key + '</td><td>' + fmt(pid ? pid[p] : '') + '</td></tr>';
        }
        html += '</table>';
        if (b - a > 12) html += '<p class="sub">and ' + (b - a - 12) + ' more</p>';
        const s0 = psource ? psource[fpPoint[order[0]]] : null;
        if (S && s0 !== null) {
          const dsn = String(S.getChild('dsn').get(s0));
          html += '<p class="sub">Top return comes from <a href="' + dsn + '" target="_blank" rel="noopener">' +
            dsn.split('/').slice(-3).join('/') + '</a></p>';
        }
      } else {
        hits.visible = false;
      }
    }
    $('info').innerHTML = html;
  }

  canvas.addEventListener('pointermove', (e) => {
    if (pinned || e.buttons) return;
    const r = canvas.getBoundingClientRect();
    show(pickAt(e.clientX - r.left, e.clientY - r.top));
  });
  let down = null;
  canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) return;
    const r = canvas.getBoundingClientRect();
    const f = pickAt(e.clientX - r.left, e.clientY - r.top);
    pinned = f >= 0;
    current = -2;
    show(f);
    $('pin').textContent = pinned ? 'Pinned: click empty ground or the background to release' : '';
  });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();
  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });

  const nPts = px ? px.length : 0;
  $('status').textContent = nf.toLocaleString() + ' faces, ' + vx.length.toLocaleString() + ' vertices, ' +
    nPts.toLocaleString() + ' returns. ' + crs + ', local origin ' + origin.map((v) => v.toFixed(1)).join(', ');
  show(-1);
  window.meshview = { pickAt, show, camera, controls, nf };
}

// served over http: read the data folder; opened as a file, or with no data
// beside it: ask for the .arrows files instead
$('files').addEventListener('change', (e) => pickFiles(e.target.files));
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => { e.preventDefault(); pickFiles(e.dataTransfer.files); });
if (location.protocol === 'file:' && !window.MESHVIEW_DATA) {
  $('status').textContent = 'Choose or drop the .arrows files from write_mesh_arrow().';
} else {
  $('drop').hidden = true;
  started = true;
  main(fromFetch()).catch((e) => {
    started = false;
    $('drop').hidden = false;
    fail(e);
  });
}
