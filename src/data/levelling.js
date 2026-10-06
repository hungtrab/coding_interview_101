export const LEVELLING_TOPICS = [
  {
    id: "hash-prefix", name: "Hash map + Prefix Sum", icon: "🗂️",
    note: "Pair/value lookup → hashmap. Subarray sum/count → prefix sum. Prefix + tìm complement → hashmap; ưu tiên LC 560.",
    problems: [
      { lc: 217, title: "Contains Duplicate", diff: "E", level: "L0", focus: "Set membership" },
      { lc: 1, title: "Two Sum", diff: "E", level: "L0", focus: "Complement target − x", star: true },
      { lc: 242, title: "Valid Anagram", diff: "E", level: "L1", focus: "Frequency map" },
      { lc: 560, title: "Subarray Sum Equals K", diff: "M", level: "L1", focus: "Prefix sum + hashmap", star: true },
      { lc: 525, title: "Contiguous Array", diff: "M", level: "L2", focus: "Biến condition thành prefix state" },
    ],
  },
  {
    id: "two-pointers", name: "Sorting + Two Pointers", icon: "📦",
    note: "L,R → sorted + L,R → di chuyển theo invariant → fix one + two pointers → một comparison đếm nhiều đáp án. Ưu tiên 3Sum Smaller.",
    problems: [
      { lc: 125, title: "Valid Palindrome", diff: "E", level: "L0", focus: "Hai con trỏ từ hai đầu" },
      { lc: 167, title: "Two Sum II - Input Array Is Sorted", diff: "M", level: "L0", focus: "Sorted array + complement", star: true },
      { lc: 11, title: "Container With Most Water", diff: "M", level: "L1", focus: "Di chuyển con trỏ theo invariant" },
      { lc: 15, title: "3Sum", diff: "M", level: "L1", focus: "Fix one + two pointers; bỏ trùng", star: true },
      { lc: 259, title: "3Sum Smaller", diff: "M", level: "L2", focus: "Một comparison đếm nhiều bộ ba · 🔒 Premium", star: true },
    ],
  },
  {
    id: "sliding-window", name: "Sliding Window", icon: "🪟",
    note: "Add phần tử bên phải → while window invalid: remove bên trái → update answer. Ưu tiên 209 + 3 + 424; Minimum Window Substring có thể học sau.",
    problems: [
      { lc: 643, title: "Maximum Average Subarray I", diff: "E", level: "L0", focus: "Fixed-size window" },
      { lc: 209, title: "Minimum Size Subarray Sum", diff: "M", level: "L0/L1", focus: "Thu hẹp cửa sổ khi tổng đạt target" },
      { lc: 3, title: "Longest Substring Without Repeating Characters", diff: "M", level: "L1", focus: "Variable window + loại ký tự trùng", star: true },
      { lc: 424, title: "Longest Repeating Character Replacement", diff: "M", level: "L1/L2", focus: "Window length − max frequency ≤ k" },
      { lc: 76, title: "Minimum Window Substring", diff: "H", level: "L2", focus: "Frequency requirements + minimum valid window" },
    ],
  },
  {
    id: "binary-search", name: "Binary Search", icon: "🔍",
    note: "Sorted data: tìm vị trí/boundary. Search on answer: minimum/maximum X + can(X) monotonic → binary search đáp án.",
    problems: [
      { lc: 704, title: "Binary Search", diff: "E", level: "L0", section: "Search sorted data", focus: "Template tìm trong sorted array" },
      { lc: 35, title: "Search Insert Position", diff: "E", level: "L0/L1", section: "Search sorted data", focus: "Lower bound / vị trí chèn" },
      { lc: 34, title: "Find First and Last Position of Element in Sorted Array", diff: "M", level: "L1", section: "Search sorted data", focus: "Tìm hai boundary" },
      { lc: 875, title: "Koko Eating Bananas", diff: "M", level: "L1", section: "Binary search on answer", focus: "Tốc độ tối thiểu + can(speed)", star: true },
      { lc: 1011, title: "Capacity To Ship Packages Within D Days", diff: "M", level: "L2", section: "Binary search on answer", focus: "Capacity tối thiểu + greedy feasibility" },
    ],
  },
  {
    id: "stack", name: "Stack + Monotonic Stack", icon: "📚",
    note: "Stack giữ những phần tử chưa được resolve. Next greater/smaller hoặc nearest greater/smaller → monotonic stack; Daily Temperatures là bài mẫu quan trọng.",
    problems: [
      { lc: 20, title: "Valid Parentheses", diff: "E", level: "L0", section: "Stack thường", focus: "Matching brackets" },
      { lc: 155, title: "Min Stack", diff: "M", level: "L1", section: "Stack thường", focus: "Lưu minimum cùng stack" },
      { lc: 496, title: "Next Greater Element I", diff: "E", level: "L0/L1", section: "Monotonic stack", focus: "Resolve phần tử bằng next greater" },
      { lc: 739, title: "Daily Temperatures", diff: "M", level: "L1", section: "Monotonic stack", focus: "Stack chỉ số chờ nhiệt độ cao hơn", star: true },
      { lc: 84, title: "Largest Rectangle in Histogram", diff: "H", level: "L2", section: "Monotonic stack", focus: "Nearest smaller + chiều rộng rectangle" },
    ],
  },
  {
    id: "heap", name: "Heap / Priority Queue", icon: "⛰️",
    note: "Ưu tiên cao. Liên tục cần min/max → heap. Chỉ cần best K → bounded heap size K. Merge K Sorted Lists ghép sorted lists + heap + multi-pointer.",
    problems: [
      { lc: 1046, title: "Last Stone Weight", diff: "E", level: "L0", focus: "Pop/push max-heap" },
      { lc: 703, title: "Kth Largest Element in a Stream", diff: "E", level: "L0/L1", focus: "Min-heap size K" },
      { lc: 215, title: "Kth Largest Element in an Array", diff: "M", level: "L1", focus: "Top-K", star: true },
      { lc: 347, title: "Top K Frequent Elements", diff: "M", level: "L1", focus: "Hashmap + heap", star: true },
      { lc: 23, title: "Merge k Sorted Lists", diff: "H", level: "L2", focus: "K-way merge" },
    ],
  },
  {
    id: "intervals", name: "Intervals + Greedy", icon: "📐",
    note: "Sort by start → merge. Sort by end → greedy scheduling; sau khi sort chỉ cần ít state.",
    problems: [
      { lc: 56, title: "Merge Intervals", diff: "M", level: "L0", focus: "Sort by start + merge", star: true },
      { lc: 57, title: "Insert Interval", diff: "M", level: "L1", focus: "Chèn interval và gộp vùng overlap" },
      { lc: 435, title: "Non-overlapping Intervals", diff: "M", level: "L1", focus: "Sort by end + greedy scheduling" },
      { lc: 452, title: "Minimum Number of Arrows to Burst Balloons", diff: "M", level: "L2", focus: "Greedy điểm bắn cho các interval" },
    ],
  },
  {
    id: "tree", name: "Tree", icon: "🌳",
    note: "Return-information DFS: child cần return thông tin gì cho parent? Maximum Depth → Diameter: return height, dùng left + right cập nhật answer.",
    problems: [
      { lc: 104, title: "Maximum Depth of Binary Tree", diff: "E", level: "L0", focus: "Return 1 + max(left, right)" },
      { lc: 100, title: "Same Tree", diff: "E", level: "L0", focus: "DFS so sánh hai cây" },
      { lc: 543, title: "Diameter of Binary Tree", diff: "E", level: "L1", focus: "Return height + cập nhật left + right", star: true },
      { lc: 98, title: "Validate Binary Search Tree", diff: "M", level: "L1", focus: "DFS + range constraints" },
      { lc: 236, title: "Lowest Common Ancestor of a Binary Tree", diff: "M", level: "L2", focus: "Ghép thông tin từ hai nhánh" },
    ],
  },
  {
    id: "graph", name: "Graph BFS/DFS", icon: "🕸️",
    note: "Traversal → connected components → multi-source BFS → directed graph + topo sort → weighted graph + heap (Dijkstra).",
    problems: [
      { lc: 733, title: "Flood Fill", diff: "E", level: "L0", focus: "DFS/BFS traversal" },
      { lc: 200, title: "Number of Islands", diff: "M", level: "L0/L1", focus: "Connected components trên grid", star: true },
      { lc: 994, title: "Rotting Oranges", diff: "M", level: "L1", focus: "Multi-source BFS", star: true },
      { lc: 207, title: "Course Schedule", diff: "M", level: "L1/L2", focus: "Topo sort / cycle detection", star: true },
      { lc: 743, title: "Network Delay Time", diff: "M", level: "L2", focus: "Weighted graph + heap = Dijkstra" },
    ],
  },
  {
    id: "dp", name: "Dynamic Programming", icon: "🧩",
    note: "Ưu tiên học kỹ. Định nghĩa dp[state] → transition → thêm dimension. Phân biệt count ways với minimum cost; sequence + constraint hàng xóm → dp[position][last_state].",
    problems: [
      { lc: 70, title: "Climbing Stairs", diff: "E", level: "L0", section: "L0 — Ý nghĩa của dp[state]", focus: "DP một chiều, đếm số cách", star: true },
      { lc: 198, title: "House Robber", diff: "M", level: "L0", section: "L0 — Ý nghĩa của dp[state]", focus: "Take / skip trên prefix", star: true },
      { cses: 1633, title: "Dice Combinations", level: "L0", section: "L0 — Ý nghĩa của dp[state]", focus: "Đếm số cách tạo tổng" },
      { cses: 1634, title: "Minimizing Coins", level: "L1", section: "L1 — Tự xây transition", focus: "dp[x] = 1 + min(dp[x − coin])" },
      { lc: 322, title: "Coin Change", diff: "M", level: "L1", section: "L1 — Tự xây transition", focus: "Minimum cost / unbounded knapsack", star: true },
      { lc: 62, title: "Unique Paths", diff: "M", level: "L1", section: "L1 — Tự xây transition", focus: "DP trên grid" },
      { lc: 416, title: "Partition Equal Subset Sum", diff: "M", level: "L1+/L2", section: "L1+/L2 — State thêm dimension", focus: "0/1 knapsack / subset sum", star: true },
      { cses: 1158, title: "Book Shop", level: "L2", section: "L1+/L2 — State thêm dimension", focus: "0/1 knapsack: budget + số trang" },
      { cses: 1746, title: "Array Description", level: "L2", section: "L1+/L2 — State thêm dimension", focus: "dp[position][last_value] + constraint hàng xóm", star: true },
    ],
  },
  {
    id: "backtracking", name: "Backtracking", icon: "🔙",
    note: "Template: choose → dfs → undo. Subsets + Permutations học template; Word Search ghép backtracking + grid DFS.",
    problems: [
      { lc: 78, title: "Subsets", diff: "M", level: "L0", focus: "Choose / skip; sinh tập con" },
      { lc: 46, title: "Permutations", diff: "M", level: "L0/L1", focus: "Choose → dfs → undo" },
      { lc: 39, title: "Combination Sum", diff: "M", level: "L1", focus: "Reuse choices + pruning" },
      { lc: 79, title: "Word Search", diff: "M", level: "L2", focus: "Backtracking + grid DFS" },
    ],
  },
  {
    id: "linked-list", name: "Linked List", icon: "🔗",
    note: "Primitive: reverse pointers, fast/slow, dummy node, pointer gap. Reorder List = find middle + reverse second half + merge.",
    problems: [
      { lc: 206, title: "Reverse Linked List", diff: "E", level: "L0", focus: "Reverse pointers" },
      { lc: 141, title: "Linked List Cycle", diff: "E", level: "L0", focus: "Fast/slow pointers" },
      { lc: 876, title: "Middle of the Linked List", diff: "E", level: "L1", focus: "Fast/slow tìm midpoint" },
      { lc: 19, title: "Remove Nth Node From End of List", diff: "M", level: "L1", focus: "Dummy node + pointer gap" },
      { lc: 143, title: "Reorder List", diff: "M", level: "L2", focus: "Middle + reverse + merge" },
    ],
  },
];

export const LEVELLING_PROBLEMS = LEVELLING_TOPICS.flatMap((topic) => topic.problems);

export function levellingKey(problem) {
  return problem.lc ? `lc-${problem.lc}` : `cses-${problem.cses}`;
}

export function levellingUrl(problem) {
  if (problem.cses) return `https://cses.fi/problemset/task/${problem.cses}/`;
  const slug = problem.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `https://leetcode.com/problems/${slug}/`;
}
