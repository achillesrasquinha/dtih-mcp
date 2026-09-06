import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("uniparc");

describe("uniparc", () => {
  it("searches for EGFR protein sequences", async () => {
    const result = await request(src, src.tools.search, { query: "P00533" });
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].uniParcId);
  });

  it("gets UniParc entry by UPI identifier", async () => {
    const result = await request(src, src.tools.getEntry, { uparcId: "UPI0000050F30" });
    assert.ok(result.uniParcId === "UPI0000050F30");
    assert.ok(result.sequence?.value || result.uniParcCrossReferences);
  });
});
