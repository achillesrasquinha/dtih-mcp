import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("rnacentral");

describe("rnacentral", () => {
  it("searches for BRCA1 non-coding RNA", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1", page_size: 5 });
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].rnacentral_id);
  });

  it("gets a specific RNA entry by URS identifier", async () => {
    const result = await request(src, src.tools.getEntry, { upi: "URS0000301B08" });
    assert.ok(result.rnacentral_id === "URS0000301B08");
    assert.ok(result.sequence);
  });
});
