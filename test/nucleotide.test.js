import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("nucleotide");

describe("nucleotide", () => {
  it("searches for insulin mRNA human sequences", async () => {
    const result = await request(src, src.tools.search, { query: "insulin mRNA human" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets nucleotide summary by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "224589800" });
    assert.ok(result.result?.["224589800"]);
  });
});
