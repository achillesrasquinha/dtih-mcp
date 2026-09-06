import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("worms");

describe("worms", () => {
  it("searches by name for Carcharodon", async () => {
    const result = await request(src, src.tools.searchByName, { name: "Carcharodon" });
    assert.ok(Array.isArray(result), "expected array of AphiaRecords");
    assert.ok(result.length > 0, "expected at least one result");
    assert.ok(result[0].AphiaID, "expected AphiaID field");
  });

  it("gets record by AphiaID 105742 (Carcharodon)", async () => {
    const result = await request(src, src.tools.getRecord, { aphiaId: 105742 });
    assert.equal(result.scientificname, "Carcharodon");
    assert.equal(result.AphiaID, 105742);
  });
});
