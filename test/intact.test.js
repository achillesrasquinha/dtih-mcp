import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("intact");

describe("intact", () => {
  it("searches for TP53 interactions", async () => {
    const result = await request(src, src.tools.search, { query: "P04637" });
    assert.ok(result.content?.length > 0);
    assert.ok(result.content[0].moleculeA || result.content[0].moleculeB);
  });

  it("finds interactor details for TP53", async () => {
    const result = await request(src, src.tools.findInteractor, { query: "TP53" });
    assert.ok(result.content?.length > 0);
    assert.ok(result.content[0].interactorName);
  });
});
