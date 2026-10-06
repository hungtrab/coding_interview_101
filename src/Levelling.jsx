import { useState } from "react";
import { LEVELLING_PROBLEMS, LEVELLING_TOPICS, levellingKey, levellingUrl } from "./data/levelling";
import "./Levelling.css";

const DIFFICULTIES = { E: "Easy", M: "Medium", H: "Hard" };
const LEVEL_TITLES = { L0: "Thuần template", L1: "Biến thể", L2: "Combination / interview-ish" };

export default function Levelling({ done, csesDone, toggleLc, toggleCses, filter }) {
  const [expanded, setExpanded] = useState(new Set(["hash-prefix"]));
  const [level, setLevel] = useState("all");
  const isDone = (problem) => problem.lc ? done.has(problem.lc) : csesDone.has(problem.cses);
  const core = LEVELLING_PROBLEMS.filter((problem) => problem.star);
  const coreDone = core.filter(isDone).length;
  const lcCount = LEVELLING_PROBLEMS.filter((problem) => problem.lc).length;
  const csesCount = LEVELLING_PROBLEMS.length - lcCount;
  const practiceCount = LEVELLING_TOPICS.reduce((total, topic) => total + topic.problems.length, 0);
  const visibleProblems = (topic) => topic.problems.filter((problem) => {
    if (level !== "all" && problem.level !== level) return false;
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
        <p>{LEVELLING_PROBLEMS.length} bài · {LEVELLING_TOPICS.length} topic · {lcCount} LeetCode + {csesCount} CSES. ★ Core {core.length}: <strong>{coreDone}/{core.length}</strong> đã hoàn thành.</p>
        <div className="level-guide">
          <p><b>L0</b> 3–5 bài thuần template.</p>
          <p><b>L1</b> 3–5 bài biến thể, tự nhận pattern.</p>
          <p><b>L2</b> 3–5 bài combination / interview-ish.</p>
        </div>
        <p>{practiceCount} lượt luyện: LC 42 có ở cả Two Pointers và Stack, dùng chung tiến độ và chỉ được tính một lần trong tổng số bài.</p>
        <p>Tick hoặc bỏ tick bài LeetCode trùng sẽ đồng bộ với tab LeetCode. Level luyện pattern độc lập với độ khó Easy/Medium/Hard.</p>
        <p className="levelling-review">Học sâu từng topic theo L0 → L1 → L2. Tự nhận đúng pattern và code được 3 bài liên tiếp → lên level tiếp; nếu liên tục gặp khó, quay lại thêm 1–2 bài level trước. Ưu tiên luyện đủ Two Pointers, Heap và DP.</p>
      </div>

      <div className="levelling-controls">
        <label htmlFor="levelling-level">Level</label>
        <select id="levelling-level" value={level} onChange={(event) => setLevel(event.target.value)}>
          <option value="all">Tất cả level</option>
          <option value="L0">L0 — Thuần template</option>
          <option value="L1">L1 — Biến thể</option>
          <option value="L2">L2 — Combination</option>
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
                {Object.keys(LEVEL_TITLES).map((groupLevel) => {
                  const problems = visible.filter((problem) => problem.level === groupLevel);
                  if (problems.length === 0) return null;
                  const allProblems = topic.problems.filter((problem) => problem.level === groupLevel);
                  const levelDone = allProblems.filter(isDone).length;
                  return (
                    <section key={groupLevel} className="levelling-level-group" aria-label={`${topic.name} ${groupLevel}`}>
                      <h3 className="levelling-subtopic">
                        <span>{groupLevel} — {topic.levelTitles?.[groupLevel] || LEVEL_TITLES[groupLevel]}</span>
                        <span>{levelDone}/{allProblems.length}</span>
                      </h3>
                      {problems.map((problem) => {
                        const completed = isDone(problem);
                        const key = levellingKey(problem);
                        return (
                          <div key={key} className={`levelling-problem${completed ? " is-done" : ""}`}
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
                        );
                      })}
                    </section>
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
