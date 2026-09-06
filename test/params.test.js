import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mapParams } from "../src/lib/http/params.js";

describe("mapParams", () => {
  it("maps required params", () => {
    const tool = { params: { query: { type: "string", required: true } } };
    assert.deepEqual(mapParams(tool, { query: "test" }), { query: "test" });
  });

  it("throws on missing required param", () => {
    const tool = { params: { query: { type: "string", required: true } } };
    assert.throws(() => mapParams(tool, {}), /Missing required param: query/);
  });

  it("applies defaults", () => {
    const tool = { params: { size: { type: "integer", default: 10 } } };
    assert.deepEqual(mapParams(tool, {}), { size: 10 });
  });

  it("overrides defaults with provided values", () => {
    const tool = { params: { size: { type: "integer", default: 10 } } };
    assert.deepEqual(mapParams(tool, { size: 25 }), { size: 25 });
  });

  it("applies mapsTo rename", () => {
    const tool = { params: { query: { type: "string", required: true, mapsTo: "q" } } };
    assert.deepEqual(mapParams(tool, { query: "test" }), { q: "test" });
  });

  it("applies prefix", () => {
    const tool = { params: { gene: { type: "string", required: true, prefix: "hsa:" } } };
    assert.deepEqual(mapParams(tool, { gene: "TP53" }), { gene: "hsa:TP53" });
  });

  it("skips optional params not provided", () => {
    const tool = { params: { query: { type: "string", required: true }, limit: { type: "integer" } } };
    assert.deepEqual(mapParams(tool, { query: "test" }), { query: "test" });
  });

  it("handles empty params schema", () => {
    assert.deepEqual(mapParams({}, {}), {});
    assert.deepEqual(mapParams({ params: {} }, {}), {});
  });
});
