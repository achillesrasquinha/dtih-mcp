import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("clinvar");

describe("clinvar", () => {
  it("searches for BRCA1 pathogenic variants", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1 pathogenic" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets ClinVar variant summary by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "37722" });
    assert.ok(result.result?.["37722"]);
  });
});
