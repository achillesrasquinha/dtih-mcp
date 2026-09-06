import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("myvariant");

describe("myvariant", () => {
  it("searches for rs7412 variant", async () => {
    const result = await request(src, src.tools.search, { query: "rs7412" });
    assert.ok(result.hits?.length > 0);
  });

  it("gets variant annotation by HGVS ID", async () => {
    const result = await request(src, src.tools.getVariant, { variantId: "chr19:g.45412079C>T" });
    assert.ok(result._id || result.dbsnp);
  });
});
