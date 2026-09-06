import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("biorxiv");

describe("biorxiv", () => {
  it("gets recent preprints from a date range", async () => {
    const result = await request(src, src.tools.getRecent, {
      startDate: "2024-01-01",
      endDate: "2024-01-02",
    });
    assert.ok(result.collection?.length > 0, "expected at least one preprint");
    assert.ok(result.collection[0].title);
    assert.ok(result.collection[0].doi);
  });
});
