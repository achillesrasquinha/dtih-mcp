import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("quickgo");

describe("quickgo", () => {
  it("searches for apoptosis GO terms", async () => {
    const result = await request(src, src.tools.search, { query: "apoptosis" });
    assert.ok(result.numberOfHits > 0);
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].name);
  });

  it("gets GO term GO:0006915 (apoptotic process)", async () => {
    const result = await request(src, src.tools.getTerm, { goId: "GO:0006915" });
    assert.ok(result.numberOfHits >= 1);
    assert.ok(result.results?.[0]?.id === "GO:0006915");
    assert.ok(result.results[0].name === "apoptotic process");
  });
});
