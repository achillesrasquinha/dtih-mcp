import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("rxnorm");

describe("rxnorm", () => {
  it("searches for metformin", async () => {
    const result = await request(src, src.tools.search, { name: "metformin" });
    assert.ok(result, "expected a response");
    assert.ok(result.drugGroup || result.conceptGroup, "expected drugGroup or conceptGroup in response");
  });

  it("gets properties for an RxCUI", async () => {
    const result = await request(src, src.tools.getProperties, { rxcui: "861004" });
    assert.ok(result, "expected a response");
    assert.ok(result.properties, "expected properties in response");
  });

  it("gets all related concepts for metformin", async () => {
    const result = await request(src, src.tools.getAllRelated, { rxcui: "6809" });
    assert.ok(result, "expected a response");
    assert.ok(result.allRelatedGroup, "expected allRelatedGroup in response");
  });
});
