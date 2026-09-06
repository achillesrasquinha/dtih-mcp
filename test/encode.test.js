import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("encode");

describe("encode", () => {
  it("searches for ChIP-seq experiments", async () => {
    const result = await request(src, src.tools.search, { searchTerm: "ChIP-seq", limit: 3 });
    assert.ok(result["@graph"]?.length > 0);
    assert.ok(result.total > 0);
  });

  it("gets a specific experiment by accession", async () => {
    const result = await request(src, src.tools.getExperiment, { accession: "ENCSR245QRV" });
    assert.ok(result.accession === "ENCSR245QRV");
    assert.ok(result.assay_term_name);
  });
});
