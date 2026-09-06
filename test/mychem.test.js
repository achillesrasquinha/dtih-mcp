import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mychem");

describe("mychem", () => {
  it("searches for aspirin", async () => {
    const result = await request(src, src.tools.search, { query: "aspirin" });
    assert.ok(result.hits?.length > 0);
  });

  it("gets drug annotation by ChEMBL ID", async () => {
    const result = await request(src, src.tools.getDrug, { chemId: "CHEMBL25" });
    assert.ok(result._id || result.chembl);
  });
});
