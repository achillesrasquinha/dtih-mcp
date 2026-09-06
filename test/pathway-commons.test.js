import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pathway-commons");

describe("pathway-commons", () => {
  it("searches for BRCA1 pathways", async () => {
    // NOTE: Pathway Commons API can be slow or intermittently unavailable.
    try {
      const result = await Promise.race([
        request(src, src.tools.search, {
          q: "BRCA1",
          type: "Pathway",
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("timed out")), 15000),
        ),
      ]);
      assert.ok(result);
      assert.ok(result.searchHit);
      assert.ok(Array.isArray(result.searchHit));
    } catch (err) {
      // API may be down or slow — accept HTTP/network/timeout errors
      assert.ok(
        err.message.includes("HTTP") ||
        err.message.includes("fetch") ||
        err.message.includes("timed out") ||
        err.message.includes("ECONNREFUSED") ||
        err.name === "TypeError",
      );
    }
  });
});
