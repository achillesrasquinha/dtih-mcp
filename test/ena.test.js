import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ena");

describe("ena", () => {
  it("searches for insulin sequences", async () => {
    const result = await request(src, src.tools.search, { query: 'description="*insulin*"' });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].accession);
  });

  it("gets summary for accession AB000100", async () => {
    const result = await request(src, src.tools.getSummary, { accession: "AB000100" });
    assert.ok(result.summaries?.length > 0);
    assert.ok(result.summaries[0].accession === "AB000100");
  });
});
