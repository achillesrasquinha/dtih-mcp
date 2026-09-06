import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("openfda");

describe("openfda", () => {
  it("searches drug labels for aspirin", async () => {
    const result = await request(src, src.tools.searchDrugs, { query: "aspirin", limit: 5 });
    assert.ok(result.results?.length > 0);
  });

  it("searches adverse events for aspirin", async () => {
    const result = await request(src, src.tools.searchEvents, { query: "aspirin", limit: 5 });
    assert.ok(result.results?.length > 0);
  });
});
