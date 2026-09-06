import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("openalex");

describe("openalex", () => {
  it("searches works for CRISPR", async () => {
    const result = await request(src, src.tools.searchWorks, {
      search: "CRISPR",
    });
    assert.ok(result.meta.count > 0);
    assert.ok(result.results.length > 0);
  });
});
