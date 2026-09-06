import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ncbi-gene");

describe("ncbi-gene", () => {
  it("searches for BRCA1 gene", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets gene summary for BRCA1 by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "672" });
    assert.ok(result.result?.["672"]);
  });
});
