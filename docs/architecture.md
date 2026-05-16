# Maxpro Arabic Mobile Commerce Architecture

## Roadmap Source of Truth
All future visual, UX, route, component, interaction, and commerce execution phases must reference `docs/mobile-visual-commerce-roadmap.md` before implementation. Phase completion notes and governance checks are recorded in `docs/phase-log.md`, while the current baseline route/component inventory is maintained in `docs/current-inventory.md`.

## Phase 0 — Master Execution Map
Maxpro is a single-brand, Arabic-first, mobile-only commerce application. The application intentionally excludes sellers, vendors, marketplaces, merchant dashboards, supplier portals, and any multi-vendor workflow. Every screen, API, state selector, schema, and operational concern serves direct premium retail for one owned brand.

## Phase 1 — Locked Design DNA
- **Mobile shell:** capped at a native-phone viewport, with safe-area aware header and bottom navigation; no desktop, tablet, or marketplace layouts.
- **Spacing:** 20px page gutters, 24px section rhythm, 16px card internals, compact 10px micro-gaps, and 48px minimum touch targets.
- **Shape:** 28px to 34px premium cards, 18px to 22px controls, rounded image masks, and pill chips for categories and trust labels.
- **Surfaces:** warm ivory app background, elevated white cards, dark trusted purchase zones, glass navigation, and orange intent highlights.
- **Typography:** heavy Arabic headings, compact labels, generous Arabic body line-height, and high-contrast price treatment.
- **Motion:** native-feeling tap compression, short spring transitions, horizontal gallery snapping, and CSS-level reduced-motion support.

## Phase 2 — Core Foundations
- `src/app` contains the Next.js App Router entrypoints, global mobile shell CSS, metadata, viewport, and commerce APIs.
- `src/components/mobile` contains reusable mobile-only UI primitives and screen sections: header, search, chips, hero, product-detail experience, cart preview, and bottom navigation.
- `src/lib` contains design tokens, color architecture, Arabic normalization, typed product models, commerce fixtures, formatting utilities, and shared helpers.
- `src/store` contains Zustand state for cart lines, wishlist IDs, selected category, selected product colors, and derived totals.
- `prisma/schema.prisma` models production commerce entities for users, sessions, catalog, inventory, orders, payments, wallet, loyalty, notifications, analytics, CMS, and audit logs.

## Phase 3 — Shared Component System
Reusable components must preserve the same visual DNA before new screens are added:
1. Rounded white elevated cards for discovery and reviews.
2. Dark ink purchase zones for checkout confidence.
3. Orange CTA accents only for high-intent actions.
4. Horizontal rails for mobile scanning and thumb ergonomics.
5. Compact Arabic trust tiles that reduce checkout anxiety without adding cognitive load.

## Phase 4 — Navigation & App Shell
- Header is sticky, blurred, safe-area aware, and keeps account plus notification access in thumb-friendly controls.
- Bottom navigation is fixed inside the 430px mobile shell and never becomes a desktop sidebar or responsive tablet bar.
- Route expansion should keep the same four core destinations: home, search, cart, and profile.

## Phase 5 — Commerce Screen Matrix
The current home screen includes discovery, product storytelling, product-detail decision support, recommendations, payment education, trust signals, and a live cart preview. Future screens should be generated one at a time and validated against spacing, typography, motion, RTL, state, and component consistency.

| Screen | Primary state | Required shared systems |
| --- | --- | --- |
| Product details | product, selected color, wishlist, cart | gallery, trust tiles, reviews, sticky purchase controls |
| Cart | cart lines, totals, shipping, tax | quantity controls, payment trust, empty state |
| Checkout | address, delivery window, coupon, wallet, payment | Zod validation, Apple Pay/Mada, order summary |
| Profile | user, wallet, loyalty, orders | secure sessions, notification preferences |
| Orders | order status, fulfillment events | tracking timeline, support entry points |

## Phase 6 — State & API Architecture
- `useCommerceStore.addToCart` increments an existing product/color line up to a quantity limit, or creates a new line.
- `useCommerceStore.decrementCartLine` safely decrements quantities and removes empty lines.
- `/api/mobile-commerce/search` normalizes Arabic letter variants and ranks results by product name, story, materials, rating, and review count.
- `/api/mobile-commerce/checkout` validates checkout payloads with Zod, calculates shipping, coupon discount, wallet redemption, VAT, risk decision, and payment next action.

## Phase 7 — Motion & Interaction Rules
- Use spring motion for high-value transitions and tap compression for buttons.
- Gallery rails use horizontal snap because it is native to mobile shopping and avoids large-screen patterns.
- Reduced-motion preferences must remain respected globally.
- Floating or sticky purchase UI must never hide content or reduce readability.

## Phase 8 — Production Hardening Strategy
- Use TanStack Query for catalog, pricing, inventory, recommendations, checkout quote, and order tracking.
- Use React Hook Form and Zod for authentication, OTP, address, coupon, wallet, and payment forms.
- Cache Arabic search suggestions, product detail payloads, delivery estimates, and recommendation responses in Redis.
- Process payment webhooks, push notifications, loyalty accrual, analytics aggregation, and inventory reservation through queues.
- Enforce JWT/refresh-session protection, RBAC for internal operations, rate limiting, audit logging, XSS/CSRF controls, and PCI-safe payment handoff.
- Target Lighthouse 95+ with optimized images, route splitting, lazy sections, streaming data, CDN caching, and Core Web Vitals budgets.
