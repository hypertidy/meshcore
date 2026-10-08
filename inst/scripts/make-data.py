# Build the proof's example data and the healpy reference used by the tests.
#
# Writes:
#   inst/extdata/field.tif           GeoTIFF, 0.5 degree, lon 100..180, lat -50..-5
#   inst/extdata/field_healpix.zarr  HEALPix level 6 nested, same field, 3 time steps,
#                                    cells covering the same region (xdggs conventions)
#   tests/testthat/ref/healpix_l2_*.csv  healpy centres, corners, neighbours at level 2
#
# Run from the package root: python3 inst/scripts/make-data.py
# Needs numpy, healpy, zarr (>= 2.11 or 3.x) and gdal_translate on PATH.

import os, subprocess, shutil
import numpy as np
import healpy as hp
import zarr

root = os.getcwd()
ext = os.path.join(root, "inst", "extdata")
ref = os.path.join(root, "tests", "testthat", "ref")
os.makedirs(ext, exist_ok=True)
os.makedirs(ref, exist_ok=True)


def field(lon, lat, t=0):
    return (np.sin(np.radians(lon) * 6 + t * 0.5) * np.cos(np.radians(lat) * 4)
            + 0.002 * (lon - 100))


# ---- GeoTIFF ---------------------------------------------------------------
res = 0.5
xmin, xmax, ymin, ymax = 100.0, 180.0, -50.0, -5.0
nc, nr = int((xmax - xmin) / res), int((ymax - ymin) / res)
xc = xmin + res * (np.arange(nc) + 0.5)
yc = ymax - res * (np.arange(nr) + 0.5)
lon, lat = np.meshgrid(xc, yc)
v = field(lon, lat)
asc = os.path.join(ext, "field.asc")
with open(asc, "w") as f:
    f.write(f"ncols {nc}\nnrows {nr}\nxllcorner {xmin}\nyllcorner {ymin}\n"
            f"cellsize {res}\nNODATA_value -9999\n")
    np.savetxt(f, v, fmt="%.6f")
tif = os.path.join(ext, "field.tif")
subprocess.run(["gdal_translate", "-q", "-of", "GTiff", "-a_srs", "OGC:CRS84",
                "-ot", "Float32", "-co", "COMPRESS=DEFLATE", asc, tif], check=True)
os.remove(asc)

# ---- HEALPix Zarr ----------------------------------------------------------
level = 6
nside = 2 ** level
ids = np.arange(12 * nside ** 2)
clon, clat = hp.pix2ang(nside, ids, nest=True, lonlat=True)
keep = (clon >= xmin) & (clon <= xmax) & (clat >= ymin) & (clat <= ymax)
ids = ids[keep]
clon, clat = clon[keep], clat[keep]
vals = np.stack([field(clon, clat, t) for t in range(3)]).astype("float32")

zp = os.path.join(ext, "field_healpix.zarr")
shutil.rmtree(zp, ignore_errors=True)
g = zarr.open_group(zp, mode="w", zarr_format=2)
a = g.create_array("cell_ids", shape=ids.shape, dtype="uint64")
a[:] = ids.astype("uint64")
a.attrs.update({"_ARRAY_DIMENSIONS": ["cells"], "grid_name": "healpix",
                "level": level, "indexing_scheme": "nested",
                "ellipsoid": "sphere"})
t = g.create_array("time", shape=(3,), dtype="int32")
t[:] = np.arange(3, dtype="int32")
t.attrs.update({"_ARRAY_DIMENSIONS": ["time"], "units": "days since 2026-01-01"})
f = g.create_array("field", shape=vals.shape, dtype="float32", chunks=(1, vals.shape[1]))
f[:] = vals
f.attrs.update({"_ARRAY_DIMENSIONS": ["time", "cells"], "coordinates": "cell_ids"})
zarr.consolidate_metadata(zp)

# ---- healpy reference, level 2 full sphere ---------------------------------
L = 2
ns = 2 ** L
pix = np.arange(12 * ns ** 2)
lo, la = hp.pix2ang(ns, pix, nest=True, lonlat=True)
np.savetxt(os.path.join(ref, "healpix_l2_centres.csv"),
           np.column_stack([pix, lo, la]), delimiter=",",
           header="cell,lon,lat", comments="", fmt=["%d", "%.12f", "%.12f"])
b = hp.boundaries(ns, pix, step=1, nest=True)  # (npix, 3, 4), order N, W, S, E
rows = []
for p in pix:
    for k in range(4):
        rows.append([p, k + 1, *b[p, :, k]])
np.savetxt(os.path.join(ref, "healpix_l2_corners.csv"), np.array(rows),
           delimiter=",", header="cell,corner,X,Y,Z", comments="",
           fmt=["%d", "%d", "%.12f", "%.12f", "%.12f"])
nb = hp.get_all_neighbours(ns, pix, nest=True)  # (8, npix), -1 for missing
rows = [[p, int(n)] for p in pix for n in nb[:, p] if n >= 0]
np.savetxt(os.path.join(ref, "healpix_l2_neighbours.csv"), np.array(rows),
           delimiter=",", header="cell,neighbour", comments="", fmt="%d")
print("cells in zarr:", ids.size)
