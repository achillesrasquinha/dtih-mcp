import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("alphafold");

describe("alphafold", () => {
  it("gets prediction for EGFR (P00533)", async () => {
    const result = await request(src, src.tools.getPrediction, { accession: "P00533" });
    assert.ok(Array.isArray(result));
    assert.ok(result[0].uniprotAccession === "P00533");
    assert.ok(result[0].pdbUrl || result[0].cifUrl);
  });
});
