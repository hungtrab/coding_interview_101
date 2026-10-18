export function countChecks(mask = 0) {
  return (mask & 1) + ((mask >> 1) & 1) + ((mask >> 2) & 1);
}

export function summarizeProgress(problems, getMask) {
  const summary = {
    total: problems.length,
    counts: [0, 0, 0, 0],
    stats: Object.fromEntries(["E", "M", "H"].map((diff) => [diff, { total: 0, counts: [0, 0, 0, 0] }])),
    csesTotal: 0,
    csesCounts: [0, 0, 0, 0],
  };
  for (const problem of problems) {
    const count = countChecks(getMask(problem));
    summary.counts[count]++;
    if (summary.stats[problem.diff]) {
      summary.stats[problem.diff].total++;
      summary.stats[problem.diff].counts[count]++;
    }
    if (problem.cses) {
      summary.csesTotal++;
      summary.csesCounts[count]++;
    }
  }
  return summary;
}

export function loadProgress(source, storage) {
  try {
    const saved = JSON.parse(storage.getItem(`${source}-progress-v2`) || "null");
    if (saved?.version === 2 && saved.checks && typeof saved.checks === "object" && !Array.isArray(saved.checks)) {
      return Object.fromEntries(Object.entries(saved.checks).filter(([, mask]) => Number.isInteger(mask) && mask >= 1 && mask <= 7));
    }
  } catch { /* Try the legacy checklist if the new data cannot be read. */ }
  try {
    const legacy = JSON.parse(storage.getItem(`${source}-done`) || "[]");
    return Array.isArray(legacy) ? Object.fromEntries(legacy.map((id) => [id, 1])) : {};
  } catch { return {}; }
}

export function toggleCheck(checks, id, index) {
  if (!Number.isInteger(index) || index < 0 || index > 2) return checks;
  const next = { ...checks };
  const mask = (next[id] || 0) ^ (1 << index);
  if (mask) next[id] = mask;
  else delete next[id];
  return next;
}
