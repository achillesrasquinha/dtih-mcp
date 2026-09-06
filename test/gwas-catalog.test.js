import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gwas-catalog");

describe("gwas-catalog", () => {
  it("searches for diabetes studies by trait", async () => {
    const result = await request(src, src.tools.search, { query: "diabetes" });
    assert.ok(result._embedded?.studies?.length > 0);
  });

  it("gets a specific GWAS study by accession", async () => {
    const result = await request(src, src.tools.getStudy, { studyId: "GCST90038633" });
    assert.ok(result.accessionId || result.diseaseTrait);
  });
});
