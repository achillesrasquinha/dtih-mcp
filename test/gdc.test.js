import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gdc");

describe("gdc", () => {
  it("searches for cancer cases", async () => {
    const result = await request(src, src.tools.searchCases, { size: 3 });
    assert.ok(result.data?.hits?.length > 0);
    assert.ok(result.data.hits[0].case_id);
  });

  it("lists cancer research projects", async () => {
    const result = await request(src, src.tools.searchProjects, { size: 3 });
    assert.ok(result.data?.hits?.length > 0);
    assert.ok(result.data.hits[0].project_id);
  });

  it("searches for genes", async () => {
    const result = await request(src, src.tools.searchGenes, { size: 3 });
    assert.ok(result.data?.hits?.length > 0);
    assert.ok(result.data.hits[0].gene_id);
  });
});
