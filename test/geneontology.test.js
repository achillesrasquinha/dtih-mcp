import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("geneontology");

describe("geneontology", () => {
  it("searches for apoptosis GO terms", async () => {
    const result = await request(src, src.tools.search, { query: "apoptosis" });
    assert.ok(result.docs?.length > 0);
  });

  it("gets GO:0006915 apoptotic process term", async () => {
    const result = await request(src, src.tools.getTerm, { go_id: "GO:0006915" });
    assert.equal(result.label, "apoptotic process");
    assert.ok(result.goid === "GO:0006915");
  });
});
