# Coding Interview 101

Ứng dụng web nhỏ để ôn tập coding interview theo roadmap DSA. Repo này gom các bài LeetCode và HackerRank theo chủ đề, chia theo phase học, có checklist lưu tiến độ ngay trên trình duyệt.

## Nội dung chính

- Roadmap LeetCode theo 4 phase: nền tảng, core patterns, graph/DP, bit manipulation và advanced topics.
- Danh sách HackerRank theo nhóm kỹ năng: warm-up, array/sorting, string, hashmap/search, stack/queue, tree/graph, dynamic programming, greedy.
- Bộ lọc bài: tất cả, chưa làm, đã làm, và nhóm must-do cho LeetCode.
- Thanh tiến độ tổng và thống kê theo độ khó Easy, Medium, Hard.
- Checklist lưu bằng `localStorage`, nên tiến độ được giữ lại trên cùng trình duyệt.
- Link trực tiếp tới từng bài để luyện nhanh.

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
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Ghi chú sử dụng

Tiến độ làm bài được lưu trong trình duyệt bằng `localStorage` với hai key:

- `lc-done` cho LeetCode
- `hr-done` cho HackerRank

Nếu muốn reset tiến độ, có thể xóa site data của trình duyệt hoặc xóa hai key này trong DevTools.
