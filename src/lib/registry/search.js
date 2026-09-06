export function findTools(toolIndex, query, tags) {
  const q = (query || "").toLowerCase();
  const filterTags = (tags || []).map((t) => t.toLowerCase());

  return toolIndex
    .map((entry) => {
      let score = 0;
      const haystack = `${entry.source} ${entry.displayName} ${entry.tool} ${entry.description} ${entry.tags.join(" ")}`.toLowerCase();

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
