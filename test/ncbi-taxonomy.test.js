import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ncbi-taxonomy");

describe("ncbi-taxonomy", () => {
  it("searches for Homo sapiens", async () => {
    const result = await request(src, src.tools.search, { query: "Homo sapiens" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets taxonomy summary for human (taxid 9606)", async () => {
    const result = await request(src, src.tools.getSummary, { id: "9606" });
    assert.ok(result.result?.["9606"]);
  });
});
