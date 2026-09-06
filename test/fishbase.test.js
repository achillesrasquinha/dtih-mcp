import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("fishbase");

describe("fishbase", () => {
  // NOTE: FishBase ropensci.org API is currently unreachable (as of Sept 2026).
  // These tests will fail until the service is restored.
  it("searches species by genus Salmo", { skip: "FishBase API is unreachable" }, async () => {
    const result = await request(src, src.tools.searchSpecies, { genus: "Salmo" });
    assert.ok(result.data?.length > 0 || result.count > 0 || Array.isArray(result), "expected species results");
  });

  it("lists species by family Salmonidae", { skip: "FishBase API is unreachable" }, async () => {
    const result = await request(src, src.tools.listByFamily, { family: "Salmonidae" });
    assert.ok(result.data?.length > 0 || result.count > 0 || Array.isArray(result), "expected family results");
  });
});
