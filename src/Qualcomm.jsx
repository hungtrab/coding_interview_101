import { QUALCOMM_PROBLEMS } from "./data/qualcomm";
import "./Qualcomm.css";

const DIFFICULTIES = { E: "Easy", M: "Medium", H: "Hard" };

export default function Qualcomm({ done, toggleLc, filter }) {
  const visible = QUALCOMM_PROBLEMS.filter((problem) => {
    if (filter === "todo") return !done.has(problem.lc);
    if (filter === "done") return done.has(problem.lc);
    return true;
  });

  return (
    <section className="qualcomm" aria-label="Qualcomm">
      <div className="qualcomm-intro">
        <h2>Qualcomm — Bài tập LeetCode</h2>
        <p>{QUALCOMM_PROBLEMS.length} bài theo đúng danh sách và thứ tự bạn chọn.</p>
        <p>Tick hoặc bỏ tick bài trùng sẽ đồng bộ với tab LeetCode và Leetcode Levelling.</p>
      </div>
      {visible.length === 0 ? (
        <p className="qualcomm-empty">Không có bài phù hợp với bộ lọc hiện tại.</p>
      ) : (
        <div className="qualcomm-list">
          {visible.map((problem) => {
            const completed = done.has(problem.lc);
            return (
              <div key={problem.lc} className={`qualcomm-problem${completed ? " is-done" : ""}`}
                onClick={() => toggleLc(problem.lc)}>
                <input type="checkbox" checked={completed}
                  aria-label={`Hoàn thành LC ${problem.lc} — ${problem.title}`}
                  onClick={(event) => event.stopPropagation()}
                  onChange={() => toggleLc(problem.lc)} />
                <span className="qualcomm-id">#{problem.lc}</span>
                <a href={`https://leetcode.com/problems/${problem.slug}/`} target="_blank" rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}>{problem.title}</a>
                {problem.premium && <span className="qualcomm-premium" aria-label="LeetCode Premium" title="LeetCode Premium">🔒</span>}
                <span className={`qualcomm-difficulty diff-${problem.diff}`}>{DIFFICULTIES[problem.diff]}</span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
