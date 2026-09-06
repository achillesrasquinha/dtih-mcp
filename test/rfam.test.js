import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("rfam");

describe("rfam", () => {
  it("searches for riboswitch RNA families", async () => {
    const result = await request(src, src.tools.search, { query: "riboswitch" });
    assert.ok(result.families?.length > 0);
    assert.ok(result.families[0].acc);
  });

  it("gets SAM riboswitch family details", async () => {
    const result = await request(src, src.tools.getFamily, { accession: "RF00162" });
    assert.ok(result.rfam?.acc === "RF00162");
    assert.ok(result.rfam?.description);
  });
});
