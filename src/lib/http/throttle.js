const buckets = new Map();

export async function throttle(sourceName, rps) {
  if (!rps) return;
  if (!buckets.has(sourceName)) buckets.set(sourceName, { last: 0 });
  const bucket = buckets.get(sourceName);
  const now = Date.now();
  const interval = 1000 / rps;
  const wait = interval - (now - bucket.last);
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  bucket.last = Date.now();
}
