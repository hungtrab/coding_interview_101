import { useState } from "react";
import { LEVELLING_PROBLEMS, LEVELLING_TOPICS, levellingKey, levellingUrl } from "./data/levelling";
import "./Levelling.css";

const DIFFICULTIES = { E: "Easy", M: "Medium", H: "Hard" };

export default function Levelling({ done, csesDone, toggleLc, toggleCses, filter }) {
  const [expanded, setExpanded] = useState(new Set(["hash-prefix"]));
  const [level, setLevel] = useState("all");
  const isDone = (problem) => problem.lc ? done.has(problem.lc) : csesDone.has(problem.cses);
  const core = LEVELLING_PROBLEMS.filter((problem) => problem.star);
  const coreDone = core.filter(isDone).length;
  const visibleProblems = (topic) => topic.problems.filter((problem) => {
    if (level !== "all" && !problem.level.includes(level)) return false;
    if (filter === "todo") return !isDone(problem);
    if (filter === "done") return isDone(problem);
    if (filter === "star") return problem.star;
    return true;
  });
  const visibleTopics = LEVELLING_TOPICS.filter((topic) => visibleProblems(topic).length > 0);
  const toggleTopic = (id) => setExpanded((previous) => {
    const next = new Set(previous);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <section className="levelling" aria-label="Leetcode Levelling">
      <div className="levelling-intro">
        <h2>Học pattern từ L0 → L1 → L2</h2>
        <p>62 bài · 12 topic · 58 LeetCode + 4 CSES. ★ Core 20: <strong>{coreDone}/20</strong> đã hoàn thành.</p>
        <div className="level-guide">
          <p><b>L0</b> Biết pattern, tập code template.</p>
          <p><b>L1</b> Tự nhận ra một pattern chính trong khoảng 5 phút.</p>
          <p><b>L2</b> Nhận pattern và biến đổi hoặc ghép thêm primitive.</p>
        </div>
        <p>Level luyện pattern khác với độ khó Easy/Medium/Hard. Các level chuyển tiếp được hiển thị nguyên bản.</p>
        <p>Tick hoặc bỏ tick bài LeetCode trùng sẽ đồng bộ với tab LeetCode.</p>
        <p className="levelling-review">Đi từ template → tự nhận pattern → ghép pattern. Với core 20, thử tự derive lại sau 2 tuần rồi luyện random problem và mock interview.</p>
      </div>

      <div className="levelling-controls">
        <label htmlFor="levelling-level">Level</label>
        <select id="levelling-level" value={level} onChange={(event) => setLevel(event.target.value)}>
          <option value="all">Tất cả level</option>
          <option value="L0">L0 (gồm L0/L1)</option>
          <option value="L1">L1 (gồm level chuyển tiếp)</option>
          <option value="L2">L2 (gồm L1/L2, L1+/L2)</option>
        </select>
        <button type="button" onClick={() => setExpanded(new Set(visibleTopics.map((topic) => topic.id)))}>Mở tất cả</button>
        <button type="button" onClick={() => setExpanded(new Set())}>Thu gọn</button>
      </div>

      {visibleTopics.length === 0 && <p className="levelling-empty">Không có bài phù hợp với bộ lọc hiện tại.</p>}
      {visibleTopics.map((topic) => {
        const visible = visibleProblems(topic);
        const topicDone = topic.problems.filter(isDone).length;
        const isExpanded = expanded.has(topic.id);
        return (
          <div key={topic.id} className="levelling-topic">
            <button type="button" className="levelling-topic-header"
              aria-expanded={isExpanded} aria-controls={`levelling-${topic.id}`}
              onClick={() => toggleTopic(topic.id)}>
              <span>{topic.icon}</span>
              <span className="levelling-topic-name">{LEVELLING_TOPICS.indexOf(topic) + 1}. {topic.name}</span>
              <span className="levelling-topic-count">{topicDone}/{topic.problems.length}</span>
              <span aria-hidden="true">{isExpanded ? "▲" : "▼"}</span>
            </button>
            {isExpanded && (
              <div id={`levelling-${topic.id}`}>
                <p className="levelling-note">{topic.note}</p>
                {visible.map((problem, index) => {
                  const completed = isDone(problem);
                  const key = levellingKey(problem);
                  return (
                    <div key={key}>
                      {problem.section && visible[index - 1]?.section !== problem.section && (
                        <h3 className="levelling-subtopic">{problem.section}</h3>
                      )}
                      <div className={`levelling-problem${completed ? " is-done" : ""}`}
                        onClick={() => problem.lc ? toggleLc(problem.lc) : toggleCses(problem.cses)}>
                        <input type="checkbox" checked={completed}
                          aria-label={`Hoàn thành ${problem.lc ? "LC" : "CSES"} ${problem.lc || problem.cses} — ${problem.title}`}
                          onClick={(event) => event.stopPropagation()}
                          onChange={() => problem.lc ? toggleLc(problem.lc) : toggleCses(problem.cses)} />
                        <span className="levelling-level">{problem.level}</span>
                        <div className="levelling-problem-info">
                          <a href={levellingUrl(problem)} target="_blank" rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}>
                            {problem.star && <span className="levelling-star" aria-label="Core 20">★ </span>}
                            <span className="levelling-problem-id">{problem.lc ? "LC" : "CSES"} {problem.lc || problem.cses}</span>
                            {problem.title}
                          </a>
                          <p>{problem.focus}</p>
                        </div>
                        {problem.diff && <span className={`levelling-difficulty diff-${problem.diff}`}>{DIFFICULTIES[problem.diff]}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
