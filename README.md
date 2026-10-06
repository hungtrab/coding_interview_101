# Coding Interview 101

Ứng dụng web nhỏ để ôn tập coding interview theo roadmap DSA. Repo này gom các bài LeetCode và HackerRank theo chủ đề, chia theo phase học, có checklist lưu tiến độ ngay trên trình duyệt.

## Nội dung chính

- Roadmap LeetCode theo 4 phase: nền tảng, core patterns, graph/DP, bit manipulation và advanced topics.
- Tab **Leetcode Levelling** gồm 62 bài (58 LeetCode + 4 CSES), chia theo 12 topic, đi từ L0 → L1 → L2, kèm mục tiêu học của từng bài và ★ core 20.
- Danh sách HackerRank theo nhóm kỹ năng: warm-up, array/sorting, string, hashmap/search, stack/queue, tree/graph, dynamic programming, greedy.
- Bộ lọc bài: tất cả, chưa làm, đã làm, và nhóm must-do cho LeetCode/Levelling. Tab Levelling có thêm bộ lọc level, mở tất cả hoặc thu gọn topic.
- Thanh tiến độ tổng và thống kê theo độ khó Easy, Medium, Hard.
- Checklist lưu bằng `localStorage`, nên tiến độ được giữ lại trên cùng trình duyệt.
- Link trực tiếp tới từng bài để luyện nhanh.
- Tick hoặc bỏ tick bài trùng giữa LeetCode và Levelling sẽ đồng bộ hai chiều, kể cả các bài xuất hiện ở nhiều topic. Tiến độ cũ được giữ lại.

## Leetcode Levelling

- **L0**: biết pattern, học và code template.
- **L1**: tự nhận ra một pattern chính trong khoảng 5 phút.
- **L2**: nhận pattern rồi biến đổi hoặc ghép thêm pattern khác.

Level luyện pattern độc lập với độ khó Easy/Medium/Hard. Các nhãn chuyển tiếp L0/L1, L1/L2 và L1+/L2 được giữ nguyên; bộ lọc level bao gồm cả các bài chuyển tiếp tương ứng. CSES được thống kê riêng, không gán độ khó LeetCode.

12 topic: Hash map + Prefix Sum, Sorting + Two Pointers, Sliding Window, Binary Search, Stack + Monotonic Stack, Heap / Priority Queue, Intervals + Greedy, Tree, Graph BFS/DFS, Dynamic Programming, Backtracking và Linked List. Các nhóm nhỏ của Binary Search, Stack và DP cũng được tách rõ trong topic.

★ Must-do trong tab Levelling lọc đúng **core 20**. Sau khi học, thử tự derive lại các bài core sau 2 tuần rồi chuyển sang random problem và mock interview.

## Công nghệ

- React
- Vite
- CSS thuần
- ESLint

## Cài đặt

Yêu cầu Node.js và npm.

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

Sau đó mở URL Vite hiển thị trong terminal, thường là:

```text
http://localhost:5173
```

## Build production

```bash
npm run build
```

Có thể xem thử bản build bằng:

```bash
npm run preview
```

## Kiểm tra lint

```bash
npm run lint
```

## Cấu trúc thư mục

```text
.
├── public/          # Static assets
├── src/
│   ├── App.jsx     # Roadmap, data bài tập, UI tracker
│   ├── Levelling.jsx # UI học pattern theo level
│   ├── Levelling.css
│   ├── data/
│   │   └── levelling.js # 12 topic, level, core 20, link LeetCode/CSES
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Ghi chú sử dụng

Tiến độ làm bài được lưu trong trình duyệt bằng `localStorage` với ba key:

- `lc-done` cho LeetCode, dùng chung giữa tab LeetCode và Levelling theo số bài LC
- `hr-done` cho HackerRank
- `cses-done` cho các bài CSES trong Levelling

Nếu muốn reset tiến độ, có thể xóa site data của trình duyệt hoặc xóa các key này trong DevTools.
