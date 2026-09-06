import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("massbank");

describe("massbank", () => {
  it("searches records for caffeine", async () => {
    const result = await request(src, src.tools.search, { compound: "caffeine", limit: 10 });
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.records || result.raw);
  });

  it("gets a specific record by accession", async () => {
    // EA000101 is a known public MassBank accession
    const result = await request(src, src.tools.getRecord, { accession: "EA000101" });
    assert.ok(result);
    assert.ok(result.accession || result.compound || result.title || result.raw);
  });
});
