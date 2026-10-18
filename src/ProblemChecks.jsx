import { countChecks } from "./progress";
import "./ProblemChecks.css";

export default function ProblemChecks({ mask = 0, name, onToggle }) {
  const count = countChecks(mask);
  return (
    <div className="problem-checks" role="group" aria-label={`Ôn tập ${name}`}>
      {[0, 1, 2].map((index) => (
        <label key={index} title={`Lần ${index + 1} — ${name}`}>
          <input type="checkbox" checked={Boolean(mask & (1 << index))}
            aria-label={`Lần ${index + 1} — ${name}`}
            onChange={() => onToggle(index)} />
          <span aria-hidden="true">{index + 1}</span>
        </label>
      ))}
      <span className="problem-check-count" aria-label={`${count}/3 lượt hoàn thành`}>{count}/3</span>
    </div>
  );
}
