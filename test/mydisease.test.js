import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mydisease");

describe("mydisease", () => {
  it("searches for alzheimer disease", async () => {
    const result = await request(src, src.tools.search, { query: "alzheimer" });
    assert.ok(result.hits?.length > 0);
  });

  it("gets disease annotation by MONDO ID", async () => {
    const result = await request(src, src.tools.getDisease, { diseaseId: "MONDO:0004975" });
    assert.ok(result._id || result.mondo);
  });
});
