import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("hmdb");

describe("hmdb", () => {
  it("gets metabolite HMDB0000001 (1-Methylhistidine)", async () => {
    const result = await request(src, src.tools.getMetabolite, { id: "HMDB0000001" });
    assert.ok(result);
  });

  it("searches for glucose metabolites", async () => {
    const result = await request(src, src.tools.search, { query: "glucose" });
    assert.ok(result);
  });
});
