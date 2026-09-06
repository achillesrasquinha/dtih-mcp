import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("opencitations");

describe("opencitations", () => {
  it("gets citations for a CRISPR paper DOI", async () => {
    const result = await request(src, src.tools.getCitations, {
      doi: "10.1038/nature12373",
    });
    assert.ok(Array.isArray(result), "expected an array of citations");
    assert.ok(result.length > 0, "expected at least one citation");
    assert.ok(result[0].citing);
    assert.ok(result[0].cited);
  });

  it("gets references for a CRISPR paper DOI", async () => {
    const result = await request(src, src.tools.getReferences, {
      doi: "10.1038/nature12373",
    });
    assert.ok(Array.isArray(result), "expected an array of references");
    assert.ok(result.length > 0, "expected at least one reference");
  });
});
