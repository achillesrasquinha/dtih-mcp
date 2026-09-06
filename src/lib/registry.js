import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { parse } from "yaml";

export function loadRegistry(providersDir) {
  const sources = new Map();
  const toolIndex = [];

  for (const file of walkYaml(providersDir)) {
    const raw = readFileSync(file, "utf-8");
    const source = parse(raw);
    if (!source?.name || !source?.tools) continue;

    sources.set(source.name, source);

    for (const [toolName, tool] of Object.entries(source.tools)) {
      toolIndex.push({
        source: source.name,
        displayName: source.displayName || source.name,
        tool: toolName,
        description: tool.description || "",
        tags: [...(source.tags || []), ...(tool.tags || [])],
      });
    }
  }

  return { sources, toolIndex };
}

export function searchTools(toolIndex, query, tags) {
  const q = (query || "").toLowerCase();
  const filterTags = (tags || []).map((t) => t.toLowerCase());

  return toolIndex
    .map((entry) => {
      let score = 0;
      const haystack = `${entry.source} ${entry.tool} ${entry.description} ${entry.tags.join(" ")}`.toLowerCase();

      if (q) {
        for (const word of q.split(/\s+/)) {
          if (haystack.includes(word)) score += 1;
        }
      }

      if (filterTags.length) {
        const entryTags = entry.tags.map((t) => t.toLowerCase());
        for (const t of filterTags) {
          if (entryTags.includes(t)) score += 2;
        }
      }

      return { ...entry, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map(({ score, ...rest }) => rest);
}

function* walkYaml(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) yield* walkYaml(full);
    else if (extname(full) === ".yaml" || extname(full) === ".yml") yield full;
  }
}
