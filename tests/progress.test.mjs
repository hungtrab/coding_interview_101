import assert from "node:assert/strict";
import test from "node:test";
import { countChecks, loadProgress, toggleCheck } from "../src/progress.js";

const storage = (values) => ({ getItem: (key) => values[key] ?? null });

test("legacy completion becomes one review for each platform", () => {
  for (const [source, id] of [["lc", 1], ["hr", "0-0"], ["cses", 1746]]) {
    const oldData = { [`${source}-done`]: JSON.stringify([id]) };
    assert.deepEqual(loadProgress(source, storage(oldData)), { [id]: 1 });
    assert.equal(countChecks(loadProgress(source, storage(oldData))[id]), 1);
    assert.equal(oldData[`${source}-done`], JSON.stringify([id]));
  }
});

test("empty v2 progress takes priority so cleared legacy ticks do not return", () => {
  assert.deepEqual(loadProgress("lc", storage({
    "lc-done": "[1]",
    "lc-progress-v2": JSON.stringify({ version: 2, checks: {} }),
  })), {});
});

test("reviews are independent, reversible and complete only after all three", () => {
  const first = toggleCheck({}, 1, 2);
  assert.deepEqual(first, { 1: 4 });
  const second = toggleCheck(first, 1, 0);
  assert.equal(countChecks(second[1]), 2);
  const third = toggleCheck(second, 1, 1);
  assert.deepEqual(third, { 1: 7 });
  assert.equal(countChecks(third[1]), 3);
  assert.deepEqual(toggleCheck(third, 1, 0), { 1: 6 });
  assert.deepEqual(first, { 1: 4 });

  for (let mask = 0; mask < 8; mask++) {
    const before = mask ? { 1: mask } : {};
    for (let index = 0; index < 3; index++) {
      assert.deepEqual(toggleCheck(toggleCheck(before, 1, index), 1, index), before);
    }
  }
});

test("valid partial checkbox combinations survive loading", () => {
  assert.deepEqual(loadProgress("lc", storage({
    "lc-progress-v2": JSON.stringify({ version: 2, checks: { 1: 5, 42: 6, 206: 7 } }),
  })), { 1: 5, 42: 6, 206: 7 });
});

test("corrupt or blocked storage recovers without accepting invalid masks", () => {
  assert.deepEqual(loadProgress("lc", storage({ "lc-progress-v2": "{broken", "lc-done": "[1]" })), { 1: 1 });
  assert.deepEqual(loadProgress("lc", storage({
    "lc-progress-v2": JSON.stringify({ version: 2, checks: { 1: 7, 2: 8, 3: -1, 4: "7", 5: 1.5 } }),
  })), { 1: 7 });
  assert.deepEqual(loadProgress("lc", { getItem() { throw new Error("Blocked"); } }), {});
  assert.deepEqual(loadProgress("lc", storage({ "lc-done": "{}" })), {});
});
