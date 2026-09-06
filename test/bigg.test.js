import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("bigg");

describe("bigg", () => {
  it("lists available metabolic models", async () => {
    const result = await request(src, src.tools.listModels, {});
    assert.ok(result.results_count > 0);
    assert.ok(result.results.length > 0);
    assert.ok(result.results[0].bigg_id);
  });

  it("gets model iJO1366 details", async () => {
    const result = await request(src, src.tools.getModel, { bigg_id: "iJO1366" });
    assert.equal(result.organism, "Escherichia coli str. K-12 substr. MG1655");
    assert.ok(result.reaction_count > 0);
  });

  it("searches for glucose metabolites", async () => {
    const result = await request(src, src.tools.searchMetabolites, { query: "glucose" });
    assert.ok(result.results_count > 0);
    assert.ok(result.results.some((r) => r.name.toLowerCase().includes("glucose")));
  });
});
