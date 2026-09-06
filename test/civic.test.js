import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("civic");

describe("civic", () => {
  it("searches for BRAF gene", async () => {
    const result = await request(src, src.tools.searchGenes, { symbols: ["BRAF"] });
    assert.ok(result.genes.totalCount >= 1);
    assert.ok(result.genes.nodes[0].name === "BRAF");
  });

  it("gets evidence items for a molecular profile", async () => {
    const result = await request(src, src.tools.getEvidence, { molecularProfileId: 1, first: 3 });
    assert.ok(result.evidenceItems.totalCount > 0);
    assert.ok(result.evidenceItems.nodes.length > 0);
    assert.ok(result.evidenceItems.nodes[0].evidenceType);
  });
});
