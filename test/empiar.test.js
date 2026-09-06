import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("empiar");

describe("empiar", () => {
  it("lists EMPIAR entries", async () => {
    const result = await request(src, src.tools.getEntries, {});
    assert.ok(result);
  });

  it("gets a specific EMPIAR entry", async () => {
    const result = await request(src, src.tools.getEntry, { empiarId: "EMPIAR-10028" });
    assert.ok(result);
  });
});
