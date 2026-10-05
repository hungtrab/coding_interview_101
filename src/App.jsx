import { useState, useMemo } from "react";

const PHASES = [
  {
    id: "p1",
    phase: 1,
    title: "Nền tảng & High-Frequency",
    weeks: "Tuần 1–2",
    color: "#58a6ff",
    topics: [
      {
        name: "Array / Two Pointers",
        icon: "📦",
        problems: [
          { id: 1, title: "Two Sum", diff: "E", tags: ["hashmap"], lc: 1 },
          { id: 121, title: "Best Time to Buy and Sell Stock", diff: "E", tags: ["greedy"], lc: 121 },
          { id: 217, title: "Contains Duplicate", diff: "E", tags: ["hashset"], lc: 217 },
          { id: 15, title: "3Sum", diff: "M", tags: ["two-ptr", "sort"], lc: 15 },
          { id: 11, title: "Container With Most Water", diff: "M", tags: ["two-ptr"], lc: 11 },
          { id: 238, title: "Product of Array Except Self", diff: "M", tags: ["prefix"], lc: 238 },
          { id: 53, title: "Maximum Subarray", diff: "M", tags: ["kadane"], lc: 53 },
        { id: 152, title: "Maximum Product Subarray", diff: "M", tags: ["kadane"], lc: 152 },
          { id: 153, title: "Find Minimum in Rotated Sorted Array", diff: "M", tags: ["NA"], lc: 153 },
            { id: 33, title: "Search in Rotated Sorted Array", diff: "M", tags: ["NA"], lc: 33 },
          { id: 560, title: "Subarray Sum Equals K", diff: "M", tags: ["prefix", "hashmap"], lc: 560 },
         { id: 16, title: "3Sum Closest", diff: "M", tags: ["two-ptr"], lc: 16 },
        { id: 18, title: "4Sum", diff: "M", tags: ["two-ptr", "array"], lc: 18 },
          { id: 31, title: "Next Permutation", diff: "M", tags: ["array"], lc: 31 },
        ],
      },
      {
        name: "Matrix",
        icon: "🔢",
        problems: [
          { id: 73, title: "Set Matrix Zeroes", diff: "M", tags: ["in-place"], lc: 73 },
          { id: 54, title: "Spiral Matrix", diff: "M", tags: ["simulation"], lc: 54 },
          { id: 48, title: "Rotate Image", diff: "M", tags: ["transpose+flip"], lc: 48 },
          { id: 79, title: "Word Search", diff: "M", tags: ["grid-backtrack"], lc: 79 },
        ],
      },
      {
        name: "Sliding Window",
        icon: "🪟",
        problems: [
          { id: 3, title: "Longest Substring Without Repeating Characters", diff: "M", tags: ["hashmap"], lc: 3 },
          { id: 424, title: "Longest Repeating Character Replacement", diff: "M", tags: ["variable-window"], lc: 424 },
          { id: 209, title: "Minimum Size Subarray Sum", diff: "M", tags: ["variable-window"], lc: 209 },
          { id: 567, title: "Permutation in String", diff: "M", tags: ["fixed-window"], lc: 567 },
          { id: 76, title: "Minimum Window Substring", diff: "H", tags: ["hashmap"], lc: 76 },
        ],
      },
      {
        name: "Binary Search",
        icon: "🔍",
        problems: [
          { id: 704, title: "Binary Search", diff: "E", tags: ["basic"], lc: 704 },
          { id: 153, title: "Find Minimum in Rotated Sorted Array", diff: "M", tags: ["rotated"], lc: 153 },
          { id: 33, title: "Search in Rotated Sorted Array", diff: "M", tags: ["rotated"], lc: 33 },
          { id: 875, title: "Koko Eating Bananas", diff: "M", tags: ["bs-on-answer"], lc: 875 },
          { id: 74, title: "Search a 2D Matrix", diff: "M", tags: ["matrix"], lc: 74 },
          { id: 162, title: "Find Peak Element", diff: "M", tags: ["tricky"], lc: 162 },
          { id: 34, title: "Find First and Last Position", diff: "M", tags: ["bisect"], lc: 34 },
        ],
      },
      {
        name: "Linked List",
        icon: "🔗",
        problems: [
          { id: 206, title: "Reverse Linked List", diff: "E", tags: ["reverse"], lc: 206 },
          { id: 21, title: "Merge Two Sorted Lists", diff: "E", tags: ["merge"], lc: 21 },
          { id: 141, title: "Linked List Cycle", diff: "E", tags: ["floyd"], lc: 141 },
          { id: 142, title: "Linked List Cycle II", diff: "M", tags: ["floyd"], lc: 142 },
          { id: 19, title: "Remove Nth Node From End", diff: "M", tags: ["two-ptr"], lc: 19 },
          { id: 143, title: "Reorder List", diff: "M", tags: ["reverse+merge"], lc: 143 },
          { id: 138, title: "Copy List with Random Pointer", diff: "M", tags: ["deep-copy"], lc: 138 },
          { id: 146, title: "LRU Cache", diff: "M", tags: ["design", "★Qualcomm"], lc: 146, star: true },
          { id: 23, title: "Merge K Sorted Lists", diff: "H", tags: ["heap"], lc: 23 },
        ],
      },
    ],
  },
  {
    id: "p2",
    phase: 2,
    title: "Core Patterns",
    weeks: "Tuần 2–3",
    color: "#3fb950",
    topics: [
      {
        name: "Stack / Monotonic Stack",
        icon: "📚",
        problems: [
          { id: 20, title: "Valid Parentheses", diff: "E", tags: ["basic"], lc: 20 },
          { id: 155, title: "Min Stack", diff: "M", tags: ["design"], lc: 155 },
          { id: 150, title: "Evaluate Reverse Polish Notation", diff: "M", tags: ["stack"], lc: 150 },
          { id: 394, title: "Decode String", diff: "M", tags: ["stack+string"], lc: 394 },
          { id: 739, title: "Daily Temperatures", diff: "M", tags: ["monotonic"], lc: 739 },
          { id: 496, title: "Next Greater Element I", diff: "E", tags: ["monotonic"], lc: 496 },
          { id: 84, title: "Largest Rectangle in Histogram", diff: "H", tags: ["monotonic"], lc: 84 },
          { id: 227, title: "Basic Calculator II", diff: "M", tags: ["stack", "parsing"], lc: 227 },
{ id: 735, title: "Asteroid Collision", diff: "M", tags: ["stack"], lc: 735 },
{ id: 402, title: "Remove K Digits", diff: "M", tags: ["mono-stack", "greedy"], lc: 402 },
{ id: 456, title: "132 Pattern", diff: "M", tags: ["mono-stack"], lc: 456 },
{ id: 503, title: "Next Greater Element II", diff: "M", tags: ["mono-stack", "circular"], lc: 503 },
{ id: 901, title: "Online Stock Span", diff: "M", tags: ["mono-stack"], lc: 901 },
{ id: 853, title: "Car Fleet", diff: "M", tags: ["sort", "stack"], lc: 853 },
{ id: 316, title: "Remove Duplicate Letters", diff: "M", tags: ["mono-stack", "greedy"], lc: 316 },
{ id: 71, title: "Simplify Path", diff: "M", tags: ["stack", "string"], lc: 71 },
{ id: 224, title: "Basic Calculator", diff: "H", tags: ["stack", "recursion"], lc: 224 },
        ],
      },
      {
        name: "String / HashMap",
        icon: "🗂️",
        problems: [
          { id: 125, title: "Valid Palindrome", diff: "E", tags: ["two-ptr"], lc: 125 },
          { id: 242, title: "Valid Anagram", diff: "E", tags: ["hashmap"], lc: 242 },
          { id: 49, title: "Group Anagrams", diff: "M", tags: ["hashmap", "sort"], lc: 49 },
          { id: 128, title: "Longest Consecutive Sequence", diff: "M", tags: ["hashset"], lc: 128 },
          { id: 347, title: "Top K Frequent Elements", diff: "M", tags: ["heap", "bucket"], lc: 347 },
          { id: 8, title: "String to Integer (atoi)", diff: "M", tags: ["parsing", "★Qualcomm"], lc: 8, star: true },
          { id: 5, title: "Longest Palindromic Substring", diff: "M", tags: ["expand-center"], lc: 5 },
          { id: 647, title: "Palindromic Substrings", diff: "M", tags: ["expand-center"], lc: 647 },
          { id: 438, title: "Find All Anagrams in String", diff: "M", tags: ["sliding-window"], lc: 438 },
          { id: 271, title: "Encode and Decode Strings", diff: "M", tags: ["design", "🔒Premium"], lc: 271 },
        ],
      },
      {
        name: "Binary Tree / BST",
        icon: "🌳",
        problems: [
          { id: 104, title: "Maximum Depth of Binary Tree", diff: "E", tags: ["dfs"], lc: 104 },
          { id: 100, title: "Same Tree", diff: "E", tags: ["dfs"], lc: 100 },
          { id: 226, title: "Invert Binary Tree", diff: "E", tags: ["dfs"], lc: 226 },
          { id: 572, title: "Subtree of Another Tree", diff: "E", tags: ["dfs+match"], lc: 572 },
          { id: 102, title: "Binary Tree Level Order Traversal", diff: "M", tags: ["bfs"], lc: 102 },
          { id: 98, title: "Validate BST", diff: "M", tags: ["dfs", "range"], lc: 98 },
          { id: 230, title: "Kth Smallest Element in BST", diff: "M", tags: ["inorder"], lc: 230 },
          { id: 235, title: "LCA of BST", diff: "M", tags: ["bst-property"], lc: 235 },
          { id: 236, title: "LCA of Binary Tree", diff: "M", tags: ["dfs"], lc: 236 },
          { id: 105, title: "Construct BT from Preorder & Inorder", diff: "M", tags: ["divide-conquer"], lc: 105 },
          { id: 124, title: "Binary Tree Max Path Sum", diff: "H", tags: ["dfs"], lc: 124 },
          { id: 297, title: "Serialize & Deserialize BT", diff: "H", tags: ["design"], lc: 297 },
        ],
      },
      {
        name: "Heap / Priority Queue",
        icon: "⛰️",
        problems: [
          { id: 347.1, title: "Top K Frequent Elements", diff: "M", tags: ["heap", "bucket"], lc: 347, skip: true },
          { id: 215, title: "Kth Largest Element in Array", diff: "M", tags: ["heap", "quickselect"], lc: 215 },
          { id: 621, title: "Task Scheduler", diff: "M", tags: ["greedy", "heap"], lc: 621 },
          { id: 355, title: "Design Twitter", diff: "M", tags: ["design", "heap"], lc: 355 },
          { id: 295, title: "Find Median from Data Stream", diff: "H", tags: ["two-heaps"], lc: 295 },
          { id: 1046, title: "Last Stone Weight", diff: "E", tags: ["max-heap"], lc: 1046 },
{ id: 703, title: "Kth Largest Element in Stream", diff: "E", tags: ["min-heap"], lc: 703 },
{ id: 973, title: "K Closest Points to Origin", diff: "M", tags: ["heap", "quickselect"], lc: 973 },
{ id: 692, title: "Top K Frequent Words", diff: "M", tags: ["heap", "sort"], lc: 692 },
{ id: 378, title: "Kth Smallest in Sorted Matrix", diff: "M", tags: ["heap", "bs"], lc: 378 },
{ id: 767, title: "Reorganize String", diff: "M", tags: ["heap", "greedy"], lc: 767 },
{ id: 1642, title: "Furthest Building You Can Reach", diff: "M", tags: ["heap", "greedy"], lc: 1642 },
{ id: 373, title: "Find K Pairs with Smallest Sums", diff: "M", tags: ["heap"], lc: 373 },
{ id: 502, title: "IPO", diff: "H", tags: ["two-heaps", "greedy"], lc: 502 },
{ id: 857, title: "Minimum Cost to Hire K Workers", diff: "H", tags: ["heap", "sort"], lc: 857 },
          { id: 23.1, title: "Merge K Sorted Lists", diff: "H", tags: ["heap"], lc: 23, skip: true },
        ],
      },
      {
  name: "Queue / Deque",
  icon: "🚶‍♂️",
  problems: [
    { id: 232, title: "Implement Queue using Stacks", diff: "E", tags: ["design"], lc: 232 },
    { id: 225, title: "Implement Stack using Queues", diff: "E", tags: ["design"], lc: 225 },
    { id: 622, title: "Design Circular Queue", diff: "M", tags: ["design"], lc: 622 },
    { id: 641, title: "Design Circular Deque", diff: "M", tags: ["design"], lc: 641 },
    { id: 649, title: "Dota2 Senate", diff: "M", tags: ["queue", "greedy"], lc: 649 },
    { id: 950, title: "Reveal Cards In Increasing Order", diff: "M", tags: ["deque", "sort"], lc: 950 },
    { id: 1438, title: "Longest Subarray With Abs Diff <= Limit", diff: "M", tags: ["mono-deque"], lc: 1438 },
    { id: 239, title: "Sliding Window Maximum", diff: "H", tags: ["mono-deque", "★classic"], lc: 239, star: true },
    { id: 862, title: "Shortest Subarray with Sum >= K", diff: "H", tags: ["mono-deque", "prefix"], lc: 862 },
  ],
},
    ],
  
  },
{
    id: "p3",
    phase: 3,
    title: "Graph & DP",
    weeks: "Tuần 3–4",
    color: "#d2a8ff",
    topics: [
      {
        name: "Graph (BFS / DFS / Topo)",
        icon: "🕸️",
        problems: [
          { id: 200, title: "Number of Islands", diff: "M", tags: ["grid-dfs", "★Qualcomm"], lc: 200, star: true },
          { id: 133, title: "Clone Graph", diff: "M", tags: ["dfs+hashmap"], lc: 133 },
          { id: 207, title: "Course Schedule", diff: "M", tags: ["topo-sort", "cycle"], lc: 207 },
          { id: 210, title: "Course Schedule II", diff: "M", tags: ["topo-sort"], lc: 210 },
          { id: 994, title: "Rotting Oranges", diff: "M", tags: ["multi-bfs"], lc: 994 },
          { id: 417, title: "Pacific Atlantic Water Flow", diff: "M", tags: ["multi-dfs"], lc: 417 },
          { id: 130, title: "Surrounded Regions", diff: "M", tags: ["border-dfs"], lc: 130 },
          { id: 743, title: "Network Delay Time", diff: "M", tags: ["dijkstra"], lc: 743 },
          { id: 261, title: "Graph Valid Tree", diff: "M", tags: ["union-find", "🔒Premium"], lc: 261 },
          { id: 323, title: "Number of Connected Components", diff: "M", tags: ["union-find", "🔒Premium"], lc: 323 },
          { id: 269, title: "Alien Dictionary", diff: "H", tags: ["topo-sort", "🔒Premium"], lc: 269 },
        ],
      },
      {
        name: "Dynamic Programming",
        icon: "🧩",
        problems: [
          { id: 70, title: "Climbing Stairs", diff: "E", tags: ["1d-dp"], lc: 70 },
          { id: 198, title: "House Robber", diff: "M", tags: ["1d-dp"], lc: 198 },
          { id: 213, title: "House Robber II", diff: "M", tags: ["circular"], lc: 213 },
          { id: 55, title: "Jump Game", diff: "M", tags: ["greedy/dp"], lc: 55 },
          { id: 91, title: "Decode Ways", diff: "M", tags: ["1d-dp"], lc: 91 },
          { id: 322, title: "Coin Change", diff: "M", tags: ["unbounded-knapsack"], lc: 322 },
          { id: 377, title: "Combination Sum IV", diff: "M", tags: ["unbounded-knapsack"], lc: 377 },
          { id: 139, title: "Word Break", diff: "M", tags: ["1d-dp", "trie"], lc: 139 },
          { id: 300, title: "Longest Increasing Subsequence", diff: "M", tags: ["lis", "bs"], lc: 300 },
          { id: 1143, title: "Longest Common Subsequence", diff: "M", tags: ["2d-dp", "classic"], lc: 1143 },
          { id: 62, title: "Unique Paths", diff: "M", tags: ["2d-dp"], lc: 62 },
          { id: 64, title: "Minimum Path Sum", diff: "M", tags: ["2d-dp"], lc: 64 },
          { id: 152, title: "Maximum Product Subarray", diff: "M", tags: ["tricky-dp"], lc: 152 },
          { id: 416, title: "Partition Equal Subset Sum", diff: "M", tags: ["0/1-knapsack"], lc: 416 },
        ],
      },
      {
        name: "Interval",
        icon: "📐",
        problems: [
          { id: 56, title: "Merge Intervals", diff: "M", tags: ["sort+merge"], lc: 56 },
          { id: 57, title: "Insert Interval", diff: "M", tags: ["intervals"], lc: 57 },
          { id: 435, title: "Non-overlapping Intervals", diff: "M", tags: ["greedy"], lc: 435 },
          { id: 252, title: "Meeting Rooms", diff: "E", tags: ["sort", "🔒Premium"], lc: 252 },
          { id: 253, title: "Meeting Rooms II", diff: "M", tags: ["heap", "🔒Premium"], lc: 253 },
        ],
      },
    ],
  },
  {
    id: "p4",
    phase: 4,
    title: "Bit Manipulation & Advanced",
    weeks: "Tuần 4",
    color: "#ffa657",
    topics: [
      {
        name: "Bit Manipulation ⚡ Qualcomm Focus",
        icon: "💡",
        problems: [
          { id: 136, title: "Single Number", diff: "E", tags: ["xor"], lc: 136 },
          { id: 191, title: "Number of 1 Bits", diff: "E", tags: ["hamming"], lc: 191 },
          { id: 338, title: "Counting Bits", diff: "E", tags: ["dp+bit"], lc: 338 },
          { id: 190, title: "Reverse Bits", diff: "E", tags: ["bit-shift"], lc: 190 },
          { id: 268, title: "Missing Number", diff: "E", tags: ["xor"], lc: 268 },
          { id: 231, title: "Power of Two", diff: "E", tags: ["n&(n-1)"], lc: 231 },
          { id: 137, title: "Single Number II", diff: "M", tags: ["bit-count"], lc: 137 },
          { id: 201, title: "Bitwise AND of Numbers Range", diff: "M", tags: ["prefix-bit"], lc: 201 },
          { id: 371, title: "Sum of Two Integers", diff: "M", tags: ["add-no-plus", "★Qualcomm"], lc: 371, star: true },
          { id: 29, title: "Divide Two Integers", diff: "M", tags: ["bit-shift", "★Qualcomm"], lc: 29, star: true },
        ],
      },
      {
        name: "Backtracking",
        icon: "🔙",
        problems: [
          { id: 78, title: "Subsets", diff: "M", tags: ["template"], lc: 78 },
          { id: 46, title: "Permutations", diff: "M", tags: ["template"], lc: 46 },
          { id: 39, title: "Combination Sum", diff: "M", tags: ["template"], lc: 39 },
          { id: 17, title: "Letter Combinations of Phone Number", diff: "M", tags: ["template"], lc: 17 },
          { id: 22, title: "Generate Parentheses", diff: "M", tags: ["pruning"], lc: 22 },
        ],
      },
      {
        name: "Trie / Union-Find",
        icon: "🔠",
        problems: [
          { id: 208, title: "Implement Trie", diff: "M", tags: ["design"], lc: 208 },
          { id: 211, title: "Add and Search Word", diff: "M", tags: ["trie+dfs"], lc: 211 },
          { id: 212, title: "Word Search II", diff: "H", tags: ["trie+backtrack"], lc: 212 },
        ],
      },
    ],
  },
];

const HR_TOPICS = [
  {
    name: "Warm-up",
    icon: "🔥",
    problems: [
      { title: "Solve Me First", diff: "E", url: "https://www.hackerrank.com/challenges/solve-me-first", tags: ["intro"] },
      { title: "Simple Array Sum", diff: "E", url: "https://www.hackerrank.com/challenges/simple-array-sum", tags: ["array"] },
      { title: "Compare the Triplets", diff: "E", url: "https://www.hackerrank.com/challenges/compare-the-triplets", tags: ["array"] },
      { title: "A Very Big Sum", diff: "E", url: "https://www.hackerrank.com/challenges/a-very-big-sum", tags: ["math"] },
      { title: "Plus Minus", diff: "E", url: "https://www.hackerrank.com/challenges/plus-minus", tags: ["array"] },
      { title: "Staircase", diff: "E", url: "https://www.hackerrank.com/challenges/staircase", tags: ["string"] },
    ],
  },
  {
    name: "Array & Sorting",
    icon: "📦",
    problems: [
      { title: "2D Array - DS (Hourglass)", diff: "E", url: "https://www.hackerrank.com/challenges/2d-array", tags: ["matrix"] },
      { title: "Arrays: Left Rotation", diff: "E", url: "https://www.hackerrank.com/challenges/array-left-rotation", tags: ["array"] },
      { title: "New Year Chaos", diff: "M", url: "https://www.hackerrank.com/challenges/new-year-chaos", tags: ["bubble-sort"] },
      { title: "Minimum Swaps 2", diff: "M", url: "https://www.hackerrank.com/challenges/minimum-swaps-2", tags: ["cycle-sort"] },
      { title: "Mark and Toys", diff: "E", url: "https://www.hackerrank.com/challenges/mark-and-toys", tags: ["greedy", "sort"] },
      { title: "Fraudulent Activity Notifications", diff: "M", url: "https://www.hackerrank.com/challenges/fraudulent-activity-notifications", tags: ["counting-sort", "median"] },
      { title: "Merge Sort: Counting Inversions", diff: "H", url: "https://www.hackerrank.com/challenges/ctci-merge-sort", tags: ["merge-sort"] },
    ],
  },
  {
    name: "String",
    icon: "🔤",
    problems: [
      { title: "Strings: Making Anagrams", diff: "E", url: "https://www.hackerrank.com/challenges/ctci-making-anagrams", tags: ["hashmap"] },
      { title: "Alternating Characters", diff: "E", url: "https://www.hackerrank.com/challenges/alternating-characters", tags: ["greedy"] },
      { title: "Sherlock and the Valid String", diff: "M", url: "https://www.hackerrank.com/challenges/sherlock-and-valid-string", tags: ["freq-count"] },
      { title: "Special String Again", diff: "M", url: "https://www.hackerrank.com/challenges/special-palindrome-again", tags: ["palindrome"] },
      { title: "Common Child (LCS)", diff: "M", url: "https://www.hackerrank.com/challenges/common-child", tags: ["dp", "lcs"] },
    ],
  },
  {
    name: "HashMap & Search",
    icon: "🗂️",
    problems: [
      { title: "Hash Tables: Ransom Note", diff: "E", url: "https://www.hackerrank.com/challenges/ctci-ransom-note", tags: ["hashmap"] },
      { title: "Two Strings", diff: "E", url: "https://www.hackerrank.com/challenges/two-strings", tags: ["hashset"] },
      { title: "Sherlock and Anagrams", diff: "M", url: "https://www.hackerrank.com/challenges/sherlock-and-anagrams", tags: ["hashmap", "substring"] },
      { title: "Count Triplets", diff: "M", url: "https://www.hackerrank.com/challenges/count-triplets-1", tags: ["hashmap", "gp"] },
      { title: "Frequency Queries", diff: "M", url: "https://www.hackerrank.com/challenges/frequency-queries", tags: ["hashmap"] },
      { title: "Pairs", diff: "M", url: "https://www.hackerrank.com/challenges/pairs", tags: ["hashset", "two-ptr"] },
      { title: "Triple Sum", diff: "M", url: "https://www.hackerrank.com/challenges/triple-sum", tags: ["sort", "binary-search"] },
    ],
  },
  {
    name: "Stack & Queue",
    icon: "📚",
    problems: [
      { title: "Balanced Brackets", diff: "M", url: "https://www.hackerrank.com/challenges/balanced-brackets", tags: ["stack"] },
      { title: "Largest Rectangle", diff: "M", url: "https://www.hackerrank.com/challenges/largest-rectangle", tags: ["monotonic-stack"] },
      { title: "Min Max Riddle", diff: "M", url: "https://www.hackerrank.com/challenges/min-max-riddle", tags: ["monotonic-stack"] },
      { title: "Castle on the Grid", diff: "M", url: "https://www.hackerrank.com/challenges/castle-on-the-grid", tags: ["bfs", "queue"] },
      { title: "Queue using Two Stacks", diff: "M", url: "https://www.hackerrank.com/challenges/queue-using-two-stacks", tags: ["design"] },
      { title: "Poisonous Plants", diff: "H", url: "https://www.hackerrank.com/challenges/poisonous-plants", tags: ["stack"] },
    ],
  },
  {
    name: "Tree & Graph",
    icon: "🌳",
    problems: [
      { title: "Tree: Height of a Binary Tree", diff: "E", url: "https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree", tags: ["dfs"] },
      { title: "Binary Search Tree: Lowest Common Ancestor", diff: "E", url: "https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor", tags: ["bst"] },
      { title: "Tree: Huffman Decoding", diff: "M", url: "https://www.hackerrank.com/challenges/tree-huffman-decoding", tags: ["tree"] },
      { title: "Is This a Binary Search Tree?", diff: "M", url: "https://www.hackerrank.com/challenges/is-binary-search-tree", tags: ["bst", "validate"] },
      { title: "BFS: Shortest Reach in Graph", diff: "M", url: "https://www.hackerrank.com/challenges/bfs-shortest-reach", tags: ["bfs"] },
      { title: "DFS: Connected Cell in Grid", diff: "M", url: "https://www.hackerrank.com/challenges/connected-cell-in-a-grid", tags: ["dfs", "grid"] },
      { title: "Find Nearest Clone", diff: "M", url: "https://www.hackerrank.com/challenges/find-the-nearest-clone", tags: ["bfs"] },
      { title: "Roads and Libraries", diff: "M", url: "https://www.hackerrank.com/challenges/torque-and-development", tags: ["dfs", "union-find"] },
    ],
  },
  {
    name: "Dynamic Programming",
    icon: "🧩",
    problems: [
      { title: "Max Array Sum (No Adjacent)", diff: "M", url: "https://www.hackerrank.com/challenges/max-array-sum", tags: ["1d-dp"] },
      { title: "Abbreviation", diff: "M", url: "https://www.hackerrank.com/challenges/abbr", tags: ["2d-dp"] },
      { title: "Candies", diff: "M", url: "https://www.hackerrank.com/challenges/candies", tags: ["greedy/dp"] },
      { title: "Decibinary Numbers", diff: "H", url: "https://www.hackerrank.com/challenges/decibinary-numbers", tags: ["dp", "precompute"] },
    ],
  },
  {
    name: "Greedy & Miscellaneous",
    icon: "🧰",
    problems: [
      { title: "Minimum Absolute Difference in Array", diff: "E", url: "https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array", tags: ["sort"] },
      { title: "Luck Balance", diff: "E", url: "https://www.hackerrank.com/challenges/luck-balance", tags: ["greedy", "sort"] },
      { title: "Greedy Florist", diff: "M", url: "https://www.hackerrank.com/challenges/greedy-florist", tags: ["greedy", "sort"] },
      { title: "Max Min (Angry Children)", diff: "M", url: "https://www.hackerrank.com/challenges/angry-children", tags: ["sort", "sliding-window"] },
      { title: "Reverse Shuffle Merge", diff: "H", url: "https://www.hackerrank.com/challenges/reverse-shuffle-merge", tags: ["greedy", "stack"] },
    ],
  },
];

const DIFF_COLORS = { E: "#3fb950", M: "#d29922", H: "#f85149" };
const DIFF_LABELS = { E: "Easy", M: "Medium", H: "Hard" };

function lcSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "").replace(/^-+/, "");
}

export default function DSARoadmap() {
  const [done, setDone] = useState(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("lc-done") || "[]");
    return new Set(saved);
  } catch { return new Set(); }
});

// Thêm ngay dưới:
const toggleLc = (lc) => setDone((prev) => {
  const next = new Set(prev);
  next.has(lc) ? next.delete(lc) : next.add(lc);
  localStorage.setItem("lc-done", JSON.stringify([...next]));
  return next;
});
const [hrDone, setHrDone] = useState(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("hr-done") || "[]");
    return new Set(saved);
  } catch { return new Set(); }
});

const toggleHr = (key) => setHrDone((prev) => {
  const next = new Set(prev);
  next.has(key) ? next.delete(key) : next.add(key);
  localStorage.setItem("hr-done", JSON.stringify([...next]));
  return next;
});
  const [expandedPhase, setExpandedPhase] = useState("p1");
  const [expandedHr, setExpandedHr] = useState("0");
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("leetcode");

  const allLc = useMemo(() => {
    const seen = new Set();
    return PHASES.flatMap((p) => p.topics.flatMap((t) => t.problems)).filter((p) => {
      if (p.skip || seen.has(p.lc)) return false;
      seen.add(p.lc); return true;
    });
  }, []);
  const allHr = useMemo(() => HR_TOPICS.flatMap((t, ti) => t.problems.map((p, pi) => ({ ...p, key: `${ti}-${pi}` }))), []);
  const lcTotal = allLc.length;
  const lcDone = allLc.filter((p) => done.has(p.lc)).length;
  const hrTotal = allHr.length;
  const hrDoneCount = allHr.filter((p) => hrDone.has(p.key)).length;
  const starProblems = allLc.filter((p) => p.star);

  const stats = useMemo(() => {
    const s = { E: 0, M: 0, H: 0, Ed: 0, Md: 0, Hd: 0 };
    allLc.forEach((p) => { s[p.diff]++; if (done.has(p.lc)) s[p.diff + "d"]++; });
    return s;
  }, [done, allLc]);

  const hrStats = useMemo(() => {
    const s = { E: 0, M: 0, H: 0, Ed: 0, Md: 0, Hd: 0 };
    allHr.forEach((p) => { s[p.diff]++; if (hrDone.has(p.key)) s[p.diff + "d"]++; });
    return s;
  }, [hrDone, allHr]);

  const shouldShow = (p, isDone) => {
    if (filter === "all") return true;
    if (filter === "todo") return !isDone;
    if (filter === "done") return isDone;
    if (filter === "star") return p.star;
    return true;
  };

  const progressPct = tab === "leetcode" ? (lcDone / lcTotal) * 100 : (hrDoneCount / hrTotal) * 100;
  const currentStats = tab === "leetcode" ? stats : hrStats;
  const currentTotal = tab === "leetcode" ? lcTotal : hrTotal;
  const currentDone = tab === "leetcode" ? lcDone : hrDoneCount;

  return (
    <div style={{
      "--bg": "#0d1117", "--bg2": "#161b22", "--bg3": "#1c2333",
      "--border": "#30363d", "--text": "#e6edf3", "--text2": "#8b949e",
      fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
      background: "var(--bg)", color: "var(--text)", minHeight: "100vh",
    }}>
      {/* Header */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "20px 24px 16px" }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
          🎯 DSA Roadmap — Qualcomm Interview Prep
        </h1>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, margin: "14px 0 14px", borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)", width: "fit-content" }}>
          {[["leetcode", `LeetCode (${lcDone}/${lcTotal})`, "#ffa116"], ["hackerrank", `HackerRank (${hrDoneCount}/${hrTotal})`, "#1ba94c"]].map(([id, label, clr]) => (
            <button key={id} onClick={() => { setTab(id); setFilter("all"); }}
              style={{
                padding: "8px 18px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
                fontFamily: "inherit",
                background: tab === id ? clr + "20" : "var(--bg3)",
                color: tab === id ? clr : "var(--text2)",
                borderBottom: tab === id ? `2px solid ${clr}` : "2px solid transparent",
              }}>{label}</button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1, height: 8, background: "var(--bg3)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              width: `${progressPct}%`, height: "100%", borderRadius: 4, transition: "width 0.3s",
              background: tab === "leetcode" ? "linear-gradient(90deg,#3fb950,#58a6ff)" : "linear-gradient(90deg,#1ba94c,#2ec866)",
            }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: tab === "leetcode" ? "#58a6ff" : "#2ec866", minWidth: 55, textAlign: "right" }}>
            {currentDone}/{currentTotal}
          </span>
        </div>

        {/* Stats + Filter */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
            {["E", "M", "H"].map((d) => (
              <span key={d} style={{ color: DIFF_COLORS[d] }}>
                {DIFF_LABELS[d]}: <b>{currentStats[d + "d"]}/{currentStats[d]}</b>
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {(tab === "leetcode"
              ? [["all", "Tất cả"], ["todo", "Chưa làm"], ["done", "Đã làm"], ["star", "★ Must-do"]]
              : [["all", "Tất cả"], ["todo", "Chưa làm"], ["done", "Đã làm"]]
            ).map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)}
                style={{
                  padding: "4px 10px", fontSize: 11, fontWeight: 600, border: "1px solid var(--border)",
                  borderRadius: 6, cursor: "pointer", fontFamily: "inherit",
                  background: filter === val ? "#58a6ff" : "var(--bg3)",
                  color: filter === val ? "#0d1117" : "var(--text2)",
                }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Must-do banner (LC only) */}
      {tab === "leetcode" && filter !== "star" && (
        <div style={{
          margin: "16px 24px 0", padding: "12px 16px", background: "#1a1500",
          border: "1px solid #6e5e00", borderRadius: 8, fontSize: 12, lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 700, color: "#ffa657" }}>⭐ Must-do nếu ít thời gian: </span>
          <span style={{ color: "var(--text2)" }}>
            {starProblems.map((p, i) => (
              <span key={p.lc}>
                <span style={{ color: done.has(p.lc) ? "#3fb950" : "#e6edf3" }}>
                  {done.has(p.lc) ? "✓" : ""} LC {p.lc}
                </span>{i < starProblems.length - 1 ? " · " : ""}
              </span>
            ))}
          </span>
        </div>
      )}

      <div style={{ padding: "16px 24px 40px" }}>
        {/* === LEETCODE TAB === */}
        {tab === "leetcode" && PHASES.map((phase) => {
          const isExp = expandedPhase === phase.id;
          const seen = new Set();
          const pProblems = phase.topics.flatMap((t) => t.problems).filter((p) => {
            if (p.skip || seen.has(p.lc)) return false; seen.add(p.lc); return true;
          });
          const pDone = pProblems.filter((p) => done.has(p.lc)).length;
          const pTotal = pProblems.length;

          return (
            <div key={phase.id} style={{ marginBottom: 12 }}>
              <button onClick={() => setExpandedPhase(isExp ? null : phase.id)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--border)",
                  borderRadius: isExp ? "10px 10px 0 0" : 10, cursor: "pointer",
                  color: "var(--text)", fontFamily: "inherit", textAlign: "left",
                }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: phase.color, background: phase.color + "18", padding: "2px 8px", borderRadius: 4 }}>
                  PHASE {phase.phase}
                </span>
                <span style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{phase.title}</span>
                <span style={{ fontSize: 11, color: "var(--text2)" }}>{phase.weeks}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: pDone === pTotal ? "#3fb950" : phase.color }}>
                  {pDone}/{pTotal}
                </span>
                <span style={{ transition: "transform 0.2s", transform: isExp ? "rotate(180deg)" : "rotate(0)", fontSize: 12, color: "var(--text2)" }}>▼</span>
              </button>

              {isExp && (
                <div style={{ border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                  {phase.topics.map((topic, ti) => {
                    const seenT = new Set();
                    const visible = topic.problems
                      .filter((p) => { if (p.skip || seenT.has(p.lc)) return false; seenT.add(p.lc); return true; })
                      .filter((p) => shouldShow(p, done.has(p.lc)));
                    if (visible.length === 0 && filter !== "all") return null;
                    return (
                      <div key={ti}>
                        <div style={{ padding: "10px 16px", background: "var(--bg3)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
                          <span>{topic.icon}</span>
                          <span style={{ fontWeight: 600, fontSize: 13 }}>{topic.name}</span>
                          <span style={{ fontSize: 11, color: "var(--text2)" }}>
                            ({topic.problems.filter((p) => !p.skip && done.has(p.lc)).length}/{topic.problems.filter((p) => !p.skip).length})
                          </span>
                        </div>
                        {visible.map((p) => (
                          <div key={p.id} onClick={() => toggleLc(p.lc)}
                            style={{
                              display: "flex", alignItems: "center", gap: 10,
                              padding: "9px 16px 9px 20px", cursor: "pointer",
                              background: done.has(p.lc) ? "#3fb95008" : "var(--bg2)",
                              borderBottom: "1px solid #21262d",
                              opacity: done.has(p.lc) ? 0.55 : 1, transition: "all 0.15s",
                            }}>
                            <span style={{
                              width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                              border: done.has(p.lc) ? "2px solid #3fb950" : "2px solid var(--border)",
                              background: done.has(p.lc) ? "#3fb950" : "transparent",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: 11, color: "#0d1117", fontWeight: 700,
                            }}>{done.has(p.lc) && "✓"}</span>
                            {p.star && <span style={{ fontSize: 13, flexShrink: 0 }}>⭐</span>}
                            <span style={{ fontSize: 11, color: "var(--text2)", minWidth: 36, flexShrink: 0, fontFamily: "monospace" }}>#{p.lc}</span>
                            <a href={`https://leetcode.com/problems/${lcSlug(p.title)}/`} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                flex: 1, fontSize: 13, color: "var(--text)",
                                textDecoration: done.has(p.lc) ? "line-through" : "none",
                                textDecorationColor: "var(--text2)",
                              }}>{p.title}</a>
                            <span style={{
                              fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4,
                              color: DIFF_COLORS[p.diff], background: DIFF_COLORS[p.diff] + "18", flexShrink: 0,
                            }}>{DIFF_LABELS[p.diff]}</span>
                            <div style={{ display: "flex", gap: 4, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 200 }}>
                              {p.tags.map((t) => (
                                <span key={t} style={{
                                  fontSize: 10, padding: "1px 6px", borderRadius: 4,
                                  background: t.startsWith("★") ? "#ffa65720" : t.includes("Premium") ? "#58a6ff15" : "var(--bg3)",
                                  color: t.startsWith("★") ? "#ffa657" : t.includes("Premium") ? "#58a6ff" : "var(--text2)",
                                  border: "1px solid " + (t.startsWith("★") ? "#6e5e00" : t.includes("Premium") ? "#1a3a5c" : "#21262d"),
                                  fontWeight: t.startsWith("★") || t.includes("Premium") ? 700 : 400,
                                }}>{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* === HACKERRANK TAB === */}
        {tab === "hackerrank" && HR_TOPICS.map((topic, ti) => {
          const isExp = expandedHr === String(ti);
          const tDone = topic.problems.filter((_, pi) => hrDone.has(`${ti}-${pi}`)).length;
          const visible = topic.problems.filter((p, pi) => shouldShow(p, hrDone.has(`${ti}-${pi}`)));

          return (
            <div key={ti} style={{ marginBottom: 12 }}>
              <button onClick={() => setExpandedHr(isExp ? null : String(ti))}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--border)",
                  borderRadius: isExp ? "10px 10px 0 0" : 10, cursor: "pointer",
                  color: "var(--text)", fontFamily: "inherit", textAlign: "left",
                }}>
                <span style={{ fontSize: 16 }}>{topic.icon}</span>
                <span style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{topic.name}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: tDone === topic.problems.length ? "#3fb950" : "#2ec866" }}>
                  {tDone}/{topic.problems.length}
                </span>
                <span style={{ transition: "transform 0.2s", transform: isExp ? "rotate(180deg)" : "rotate(0)", fontSize: 12, color: "var(--text2)" }}>▼</span>
              </button>

              {isExp && (
                <div style={{ border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                  {visible.map((p, pi) => {
                    const actualIdx = topic.problems.indexOf(p);
                    const key = `${ti}-${actualIdx}`;
                    const isDone = hrDone.has(key);
                    return (
                      <div key={pi} onClick={() => toggleHr(key)}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "9px 16px 9px 20px", cursor: "pointer",
                          background: isDone ? "#3fb95008" : "var(--bg2)",
                          borderBottom: "1px solid #21262d",
                          opacity: isDone ? 0.55 : 1, transition: "all 0.15s",
                        }}>
                        <span style={{
                          width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                          border: isDone ? "2px solid #3fb950" : "2px solid var(--border)",
                          background: isDone ? "#3fb950" : "transparent",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, color: "#0d1117", fontWeight: 700,
                        }}>{isDone && "✓"}</span>
                        <a href={p.url} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            flex: 1, fontSize: 13, color: "var(--text)",
                            textDecoration: isDone ? "line-through" : "none",
                            textDecorationColor: "var(--text2)",
                          }}>{p.title}</a>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4,
                          color: DIFF_COLORS[p.diff], background: DIFF_COLORS[p.diff] + "18", flexShrink: 0,
                        }}>{DIFF_LABELS[p.diff]}</span>
                        <div style={{ display: "flex", gap: 4, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 180 }}>
                          {p.tags.map((t) => (
                            <span key={t} style={{
                              fontSize: 10, padding: "1px 6px", borderRadius: 4,
                              background: "var(--bg3)", color: "var(--text2)", border: "1px solid #21262d",
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
