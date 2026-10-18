# Coding Interview 101

Ứng dụng web nhỏ để ôn tập coding interview theo roadmap DSA. Repo này gom các bài LeetCode và HackerRank theo chủ đề, chia theo phase học, có checklist lưu tiến độ ngay trên trình duyệt.

## Nội dung chính

- Roadmap LeetCode theo 4 phase: nền tảng, core patterns, graph/DP, bit manipulation và advanced topics.
- Tab **Leetcode Levelling** gồm 145 bài khác nhau (141 LeetCode + 4 CSES), chia thành 146 lượt luyện theo 12 topic. Mỗi topic có 3–5 bài ở từng level L0, L1, L2, kèm mục tiêu học và ★ core 20.
- Tab **Qualcomm** gồm 62 bài LeetCode theo đúng danh sách và thứ tự đã chọn, với 28 Easy, 25 Medium, 9 Hard; có link trực tiếp, nhãn Premium, bộ lọc trạng thái và thống kê tiến độ riêng.
- Danh sách HackerRank theo nhóm kỹ năng: warm-up, array/sorting, string, hashmap/search, stack/queue, tree/graph, dynamic programming, greedy.
- Bộ lọc bài: tất cả, chưa làm, đã làm, và nhóm must-do cho LeetCode/Levelling. Tab Levelling có thêm bộ lọc level, mở tất cả hoặc thu gọn topic.
- Thanh tiến độ tổng và thống kê theo độ khó Easy, Medium, Hard.
- Phía trên có 3 chế độ đếm **Xanh dương (đúng 1 tick)**, **Vàng (đúng 2 tick)**, **Xanh lá (đúng 3 tick)**, mặc định xanh lá. Mỗi nút hiển thị số bài theo màu trong tab hiện tại; đổi chế độ cập nhật số trên các tab, thanh tiến độ, thống kê độ khó và CSES. Đếm theo toàn bộ tab, độc lập với bộ lọc danh sách; bài trùng chỉ tính một lần.
- Mỗi bài có **3 checkbox độc lập** cho 3 lượt ôn: **1/3 xanh dương**, **2/3 vàng**, **3/3 xanh lá**. Chỉ đủ 3 tick mới được tính hoàn thành, gạch tên và đưa vào bộ lọc “Đã làm”; bài 0–2 tick vẫn ở “Chưa làm”.
- Checklist lưu bằng `localStorage`, nên cả 3 checkbox được giữ lại trên cùng trình duyệt. Quy tắc này áp dụng cho LeetCode, Levelling, Qualcomm, CSES và HackerRank.
- Link trực tiếp tới từng bài để luyện nhanh.
- Tick hoặc bỏ tick bài trùng giữa LeetCode, Levelling và Qualcomm sẽ đồng bộ giữa cả ba tab, kể cả các bài xuất hiện ở nhiều topic. Tiến độ cũ được giữ lại.

## Leetcode Levelling

- **L0**: 3–5 bài thuần template.
- **L1**: 3–5 bài biến thể, tự nhận pattern.
- **L2**: 3–5 bài combination / interview-ish.

Level luyện pattern độc lập với độ khó Easy/Medium/Hard. Mỗi topic tách rõ nhóm L0/L1/L2 và có tiến độ theo level; bộ lọc level dùng đúng phân loại của roadmap mới. CSES được thống kê riêng, không gán độ khó LeetCode.

Thứ tự học: Hash Map / Prefix Sum → Two Pointers → Sliding Window → Binary Search → Stack / Monotonic Stack → Heap / Priority Queue → Dynamic Programming → Tree DFS/BFS → Graph → Intervals / Greedy → Backtracking → Linked List.

Học sâu từng topic theo L0 → L1 → L2. Nếu tự nhận đúng pattern và code được 3 bài liên tiếp, chuyển lên level tiếp; nếu liên tục gặp khó thì quay lại thêm 1–2 bài level trước. Ưu tiên luyện đủ progression của **Two Pointers, Heap và DP**.

LC 42 — Trapping Rain Water xuất hiện ở cả Two Pointers và Stack, với mục tiêu luyện riêng cho từng pattern. Cả hai dùng chung trạng thái hoàn thành; thanh tiến độ tổng và thống kê độ khó chỉ tính bài này một lần. Vì vậy có **146 lượt luyện nhưng 145 bài khác nhau**. Thay đổi topic hoặc level không làm mất tiến độ đã lưu theo số bài.

Tên, link và độ khó LeetCode được đối chiếu với danh mục chính thức; dữ liệu được lưu sẵn trong ứng dụng nên không cần gọi API khi sử dụng.

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

Kiểm tra logic 3 checkbox và chuyển đổi tiến độ cũ:

```bash
npm test
```

## Cấu trúc thư mục

```text
.
├── public/          # Static assets
├── src/
│   ├── App.jsx     # Roadmap, data bài tập, UI tracker
│   ├── Levelling.jsx # UI học pattern theo level
│   ├── Levelling.css
│   ├── Qualcomm.jsx # Danh sách bài Qualcomm, dùng chung tiến độ LC
│   ├── Qualcomm.css
│   ├── ProblemChecks.jsx # 3 checkbox dùng chung
│   ├── ProblemChecks.css # Màu theo số lượt ôn
│   ├── progress.js     # Chuyển đổi và cập nhật tiến độ
│   ├── useProblemProgress.js # Lưu tiến độ và suy ra bài hoàn thành
│   ├── data/
│   │   ├── levelling.js # 12 topic, level, core 20, link LeetCode/CSES
│   │   └── qualcomm.js # 62 bài Qualcomm theo thứ tự đã chọn
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Ghi chú sử dụng

Tiến độ 3 checkbox được lưu trong trình duyệt bằng `localStorage` với ba key có phiên bản:

- `lc-progress-v2` cho LeetCode, dùng chung giữa tab LeetCode, Levelling và Qualcomm theo số bài LC
- `hr-progress-v2` cho HackerRank
- `cses-progress-v2` cho các bài CSES trong Levelling

Mỗi key chứa `{ version: 2, checks: { ... } }`; mỗi bài lưu trạng thái độc lập của 3 ô bằng bitmask từ 1 đến 7, bài chưa tick được bỏ khỏi object. Số đếm phía trên theo chế độ màu đang chọn; tiến độ hoàn thành của topic, level, core 20 và bộ lọc “Đã làm” vẫn chỉ tính bài đủ 3 tick.

Lần đầu dùng bản mới, các bài đã tick trong `lc-done`, `hr-done`, `cses-done` được chuyển thành **1/3** (một lượt đã làm). Dữ liệu cũ được giữ nguyên làm bản lưu; sau chuyển đổi ứng dụng dùng các key `*-progress-v2`, kể cả khi bỏ hết tick. Để reset hoàn toàn, xóa cả key mới và key cũ, hoặc xóa site data.

Mỗi ô có thể tick/bỏ tick riêng bằng chuột hoặc phím Space; nhấn link hoặc nội dung dòng không làm thay đổi checklist.
