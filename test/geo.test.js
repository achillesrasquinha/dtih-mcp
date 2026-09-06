import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("geo");

describe("geo", () => {
  it("searches for breast cancer RNA-seq datasets", async () => {
    const result = await request(src, src.tools.search, { query: "breast cancer RNA-seq" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets GEO dataset summary by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "200053801" });
    assert.ok(result.result?.["200053801"]);
  });
});
