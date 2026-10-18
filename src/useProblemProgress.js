import { useEffect, useMemo, useState } from "react";
import { loadProgress, toggleCheck } from "./progress";

export default function useProblemProgress(source) {
  const [checks, setChecks] = useState(() => {
    try { return loadProgress(source, localStorage); }
    catch { return {}; }
  });

  useEffect(() => {
    try {
      localStorage.setItem(`${source}-progress-v2`, JSON.stringify({ version: 2, checks }));
    } catch { /* Keep the checklist usable when browser storage is unavailable. */ }
  }, [source, checks]);

  const done = useMemo(() => new Set(Object.entries(checks)
    .filter(([, mask]) => mask === 7)
    .map(([id]) => source === "hr" ? id : Number(id))), [checks, source]);

  const toggle = (id, index) => setChecks((previous) => toggleCheck(previous, id, index));
  return { checks, done, toggle };
}
