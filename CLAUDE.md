# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Stack

| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js | 16.2.2 |
| UI Library | React | 19.2.4 |
| Styling | TailwindCSS | v4 via `@tailwindcss/postcss` |
| Language | TypeScript | ^5 |
| Fonts | Geist Sans, Geist Mono (next/font/google) | — |

## Architecture

**Router**: App Router exclusively (`app/` directory). No Pages Router.

**Path alias**: `@/` maps to the project root (configured in `tsconfig.json`).

**Styling**: TailwindCSS v4 — no `tailwind.config.*` file. All theme customization lives in `app/globals.css` using `@theme inline {}`. Import TailwindCSS with `@import "tailwindcss"` at top of CSS.

**Fonts**: Defined in `app/layout.tsx` as CSS variables (`--font-geist-sans`, `--font-geist-mono`), applied via `@theme inline` in globals.css.

**No** database, auth library, or external API integrations are configured yet.

## Directory Structure

```
app/
├── layout.tsx              # Root layout — fonts, html/body wrapper
├── page.tsx                # Home page
├── globals.css             # TailwindCSS v4 + theme config
│
├── admin/                  # Admin section
│   ├── page.tsx
│   ├── posts/page.tsx
│   ├── user/page.tsx
│   └── [id]/page.tsx       # Dynamic segment
│
├── dashboard/              # Dashboard with nested layout
│   ├── layout.tsx          # Sidebar (250px) + main content flex layout
│   ├── page.tsx
│   ├── loading.tsx         # Suspense-based loading state
│   ├── analytics/page.tsx
│   └── settings/page.tsx
│
├── login/page.tsx
├── logo/page.tsx
│
└── playground/             # Learning area — NOT production code
    └── hooks/
        ├── useState/
        ├── useEffect/
        ├── useRef/
        ├── useMemo/        # Also useMemoPage/ variant
        ├── useCallback/    # Also useCallbackPage/ (with ListItem.tsx)
        ├── useContext/
        ├── useContextSeparate/     # theme-context.tsx pattern
        ├── useContextSimple/
        ├── useContextSimpleTextBox/
        ├── useContextSimpleTextBoxPage/    # header.tsx, navbar.tsx
        ├── useContextSimpleTextBoxPageFinal/ # user-context.tsx, final pattern
        ├── useContextMothonic/
        ├── login/
        └── logingemini/    # page_temp.tsx = scratchpad
```

## Key Patterns

**Nested layouts**: `app/dashboard/layout.tsx` wraps dashboard routes with a sidebar nav + main content area. Follow this pattern for any new section needing shared UI.

**Dynamic routes**: `app/admin/[id]/page.tsx` — use `params.id` (or `await params.id` in async components per Next.js 16+ convention).

**Loading states**: `app/dashboard/loading.tsx` enables automatic Suspense boundaries for the route segment.

**Context pattern** (from playground): Final pattern in `useContextSimpleTextBoxPageFinal/` — separate `user-context.tsx` for context definition, `header.tsx` and `navbar.tsx` as consumers.

## Quy trình xử lý Task & Git

Mỗi khi nhận một task hoặc lỗi, tuân thủ các bước sau:

1. **Phân tích:** Đọc hiểu yêu cầu và quét các file liên quan.
2. **Tạo nhánh:** Luôn tạo nhánh mới từ `main` (hoặc `develop`).
   - Định dạng: `feature/ten-tinh-nang` hoặc `fix/ten-loi`
3. **Thực hiện:** Code và tự kiểm tra bằng lệnh build/test của dự án.
4. **Commit:** Dùng Conventional Commits (`feat: ...`, `fix: ...`). Message tóm tắt đúng thay đổi thực tế.
5. **Push:** Push nhánh lên remote sau khi hoàn thành và kiểm tra thành công.

## Important Notes for AI

- **Always read `node_modules/next/dist/docs/`** before writing code for any Next.js feature. APIs may differ from training data.
- The docs index at `node_modules/next/dist/docs/index.md` contains AI agent hints for known gotchas (e.g., slow client-side navigations require `export unstable_instant` in addition to Suspense).
- Inline styles are used in some components (e.g., `dashboard/layout.tsx`) — prefer TailwindCSS for new code.
- The `playground/` directory is for learning experiments; do not treat it as reference architecture.
