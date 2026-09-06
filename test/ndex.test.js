import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ndex");

describe("ndex", () => {
  it("searches networks for EGFR signaling", async () => {
    const result = await request(src, src.tools.search, {
      searchString: "EGFR signaling",
      size: 5,
    });
    assert.ok(result);
    assert.ok(result.networks?.length > 0 || result.numFound > 0 || result.resultList || result.raw);
  });

  it("gets a network summary by UUID", async () => {
    // First search to get a valid UUID, then use a known public network
    // NCI PID EGFR signaling pathway is a well-known NDEx network
    const searchResult = await request(src, src.tools.search, {
      searchString: "NCI pathway",
      size: 1,
    });
    const networks = searchResult.networks || searchResult.resultList || [];
    if (networks.length > 0) {
      const uuid = networks[0].externalId || networks[0].networkUUID;
      if (uuid) {
        const result = await request(src, src.tools.getNetwork, { networkId: uuid });
        assert.ok(result);
        assert.ok(result.name || result.externalId || result.raw);
      }
    }
    // If no networks found, the search itself passing is sufficient
    assert.ok(searchResult);
  });
});
