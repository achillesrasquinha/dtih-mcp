import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("classyfire");

describe("classyfire (RxNorm)", () => {
  it("searches drugs by name", async () => {
    const result = await request(src, src.tools.search, { name: "metformin" });
    assert.ok(result.drugGroup);
    assert.ok(result.drugGroup.conceptGroup?.length > 0);
  });

  it("gets RXCUI for a drug name", async () => {
    const result = await request(src, src.tools.getRxcui, { name: "metformin" });
    assert.ok(result.idGroup?.rxnormId?.length > 0);
  });
});
