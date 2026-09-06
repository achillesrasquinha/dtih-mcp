import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("uniref");

describe("uniref", () => {
  it("searches for insulin clusters", async () => {
    const result = await request(src, src.tools.search, { query: "insulin" });
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].id);
  });

  it("gets insulin cluster by ID", async () => {
    const result = await request(src, src.tools.getCluster, { clusterId: "UniRef90_P01308" });
    assert.ok(result.id === "UniRef90_P01308");
    assert.ok(result.name);
  });
});
