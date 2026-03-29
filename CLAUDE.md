# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, port 3000)
npm run build    # Production build (Turbopack)
npm run start    # Start production server
npm run lint     # Run ESLint directly (note: `next lint` was removed in Next.js 16)
```

No test runner is configured yet.

## Next.js 16.2 Breaking Changes

This project uses Next.js **16.2.0** — significantly different from 15.x. Key changes:

- **`next lint` removed** — linting uses ESLint CLI directly (`eslint`)
- **Turbopack is default** for both `next dev` and `next build`; no `--turbopack` flag needed
- **`middleware.ts` deprecated** → renamed to `proxy.ts` (export `proxy` function, not `middleware`)
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed** → use `process.env` and `NEXT_PUBLIC_` prefix
- **`experimental.dynamicIO` removed** → replaced by top-level `cacheComponents: true` in next.config
- **AMP removed entirely** (no `next/amp`, no `amp` config)
- **Node.js 20.9+** required

Always read `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Architecture

**Framework:** Next.js 16.2 App Router · **Styling:** Tailwind CSS v4 (no config file — uses `@theme` in CSS) · **Language:** TypeScript 5 (strict)

**Route structure:**

- `app/(auth)/` — unauthenticated pages (login)
- `app/(dashboard)/` — authenticated shell with `Sidebar` + `Navbar` layout
- `app/(dashboard)/dashboard/` — main section with sub-pages: `users/`, `inventario/`, `servicios/`

**Path alias:** `@/` maps to the repo root (e.g. `@/components/...`, `@/hooks/...`)

**Design system:** Material Design 3 color tokens defined in `app/globals.css` via `@theme {}`. Dark-first UI. Utility classes `.ambient-shadow` and `.glass-effect` are defined there. Do not use a separate `tailwind.config.*` — Tailwind v4 is configured entirely through CSS.

**Notifications:** `sonner` via `<Toaster>` in root layout; use `toast()` from `sonner` in client components.

**Empty directories** (`services/`, `store/`, `types/`, `utils/`, `components/forms/`) are scaffolded and ready for implementation.

**`useTitle` hook** (`hooks/useTitle.ts`) — call at the top of dashboard page components to set the document title.
