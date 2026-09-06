import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("metabolights");

describe("metabolights", () => {
  it("gets study MTBLS1", async () => {
    const result = await request(src, src.tools.getStudy, { studyId: "MTBLS1" });
    assert.ok(result);
    assert.ok(result.mtblsStudy || result.isaInvestigation);
  });

  it("lists public studies", async () => {
    const result = await request(src, src.tools.listStudies, {});
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.content || result.raw);
  });
});
