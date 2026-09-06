import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("dgidb");

describe("dgidb", () => {
  it("searches for EGFR drug-gene interactions", async () => {
    const result = await request(src, src.tools.search, { names: ["EGFR"] });
    assert.ok(result.genes?.nodes?.length > 0);
    assert.ok(result.genes.nodes[0].interactions.length > 0);
  });

  it("gets gene details for BRAF", async () => {
    const result = await request(src, src.tools.getGene, { names: ["BRAF"] });
    assert.ok(result.genes?.nodes?.length > 0);
    assert.ok(result.genes.nodes[0].name === "BRAF");
  });
});
