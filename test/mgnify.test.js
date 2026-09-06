import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mgnify");

describe("mgnify", () => {
  it("searches studies for gut microbiome", async () => {
    const result = await request(src, src.tools.searchStudies, { query: "gut microbiome" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.data[0].attributes.accession);
  });

  it("gets study MGYS00006822 details", async () => {
    const result = await request(src, src.tools.getStudy, { accession: "MGYS00006822" });
    assert.equal(result.data.id, "MGYS00006822");
    assert.ok(result.data.attributes);
  });
});
