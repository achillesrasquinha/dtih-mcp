import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gpcrdb");

describe("gpcrdb", () => {
  it("gets adrb2_human protein", async () => {
    const result = await request(src, src.tools.getProtein, { entry_name: "adrb2_human" });
    assert.equal(result.entry_name, "adrb2_human");
    assert.ok(result.sequence);
    assert.equal(result.species, "Homo sapiens");
  });

  it("lists top-level receptor families", async () => {
    const result = await request(src, src.tools.listFamilies, { slug: "000" });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].name);
  });
});
