import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("orthodb");

describe("orthodb", () => {
  it("searches for BRCA1 orthologous groups", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.status === "ok");
  });

  it("gets orthologous group details", async () => {
    const result = await request(src, src.tools.getGroup, { id: "733642at2759" });
    assert.ok(result.data?.id === "733642at2759");
    assert.ok(result.data?.name);
  });
});
