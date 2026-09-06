import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("cbioportal");

describe("cbioportal", () => {
  it("lists available cancer studies", async () => {
    const result = await request(src, src.tools.getStudies, { pageSize: 5 });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].studyId);
  });

  it("gets BRCA1 gene info", async () => {
    const result = await request(src, src.tools.getGenes, { geneId: "BRCA1" });
    assert.ok(result.hugoGeneSymbol === "BRCA1");
    assert.ok(result.entrezGeneId === 672);
  });
});
