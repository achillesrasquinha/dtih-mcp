import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("biosamples");

describe("biosamples", () => {
  it("searches for human liver samples", async () => {
    const result = await request(src, src.tools.search, { query: "human liver" });
    assert.ok(result._embedded?.samples?.length > 0);
    assert.ok(result._embedded.samples[0].accession);
  });

  it("gets sample by accession SAMD00065372", async () => {
    const result = await request(src, src.tools.getSample, { accession: "SAMD00065372" });
    assert.ok(result.accession === "SAMD00065372");
    assert.ok(result.characteristics);
  });
});
