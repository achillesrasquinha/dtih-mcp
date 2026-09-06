import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("dailymed");

describe("dailymed", () => {
  it("searches for aspirin drug labels", async () => {
    const result = await request(src, src.tools.searchDrugs, { name: "aspirin" });
    assert.ok(result.data?.length > 0, "expected at least one result");
    assert.ok(result.data[0].title);
    assert.ok(result.data[0].setid);
  });

  it("gets a specific SPL by set ID", async () => {
    const result = await request(src, src.tools.getSpl, {
      setid: "2777beea-06d7-4ff5-ae4a-ad7a117dfb62",
    });
    assert.ok(result.data?.length > 0, "expected SPL data");
    assert.equal(result.data[0].setid, "2777beea-06d7-4ff5-ae4a-ad7a117dfb62");
  });
});
