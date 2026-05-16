# Maxpro Current Route & Component Inventory

This inventory captures the baseline at the completion of Phase 0. It exists so future phases can measure exactly what changed and prevent uncontrolled visual or architectural drift.

## Product Boundary

- Product type: single-brand premium ecommerce application.
- Language/direction: Arabic-first, RTL-native.
- Form factor: mobile-only web app shell capped to a phone-sized viewport.
- Explicit exclusions: seller systems, vendor systems, supplier portals, merchant dashboards, marketplace onboarding, desktop layouts, tablet layouts.

## Current Routes

| Route | File | Current Role | UX State |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Home shell with discovery, product hero, embedded product detail section, recommendations, payment promo, trust signals, cart preview, and bottom navigation. | Functional prototype screen; not yet separated into full app routes. |
| `/api/mobile-commerce/search` | `src/app/api/mobile-commerce/search/route.ts` | Arabic-normalized search response with ranking score, suggestions, filters, and product fixtures. | API prototype; not yet connected to a full search UI. |
| `/api/mobile-commerce/checkout` | `src/app/api/mobile-commerce/checkout/route.ts` | Checkout quote validation with shipping, coupon, wallet credit, VAT, payment methods, and risk response. | API prototype; not yet connected to a full checkout route. |

## Current App Shell

| Element | File | Current Behavior | Future Roadmap Phase |
| --- | --- | --- | --- |
| Root layout | `src/app/layout.tsx` | Arabic `lang` and `dir`, mobile web app metadata, viewport fit, brand theme color. | Phase 3 navigation and shell hardening. |
| Global CSS | `src/app/globals.css` | RTL direction, warm luxury background, mobile shell max width, no-scrollbar utility, reduced-motion override. | Phase 1 token hardening and Phase 15 accessibility/performance. |
| Mobile shell | `src/app/page.tsx` + `src/app/globals.css` | Single constrained phone viewport. | Phase 3 route-level shell. |
| Bottom navigation | `src/components/mobile/ui.tsx` | Fixed bottom nav with cart badge, not route-aware yet. | Phase 3. |
| Sticky header | `src/components/mobile/ui.tsx` | Brand header with profile and notification buttons. | Phase 3 header variants. |

## Current Components

| Component | File | Role | Current Gap |
| --- | --- | --- | --- |
| `MobileHeader` | `src/components/mobile/ui.tsx` | Sticky safe-area-aware brand header. | Needs route-aware variants and notification route. |
| `SearchBar` | `src/components/mobile/ui.tsx` | Visual search input. | Needs full search screen, suggestions, filters, states. |
| `CategoryRail` | `src/components/mobile/ui.tsx` | Horizontal category chips with selected state. | Does not yet drive visible category feed. |
| `ProductHero` | `src/components/mobile/ui.tsx` | Premium hero with image, badge, wishlist, stock, rating, price, add-to-cart. | Should link to `/product/[id]` in Phase 7. |
| `ProductCard` | `src/components/mobile/ui.tsx` | Horizontal recommendation card with add-to-cart. | Needs listing-grid variants and badges in Phase 6. |
| `ProductDetailExperience` | `src/components/mobile/ui.tsx` | Embedded product detail module with gallery, trust, variant color, materials, bundle, reviews, installment CTA. | Should become dedicated product page in Phase 7. |
| `CartPreviewSheet` | `src/components/mobile/ui.tsx` | Embedded cart preview with quantity controls and totals. | Should become full cart route in Phase 9. |
| `BottomNavigation` | `src/components/mobile/ui.tsx` | Four-item nav visualization with active home state. | Needs actual route awareness in Phase 3. |

## Current Data & State

| Area | File | Current Role | Future Need |
| --- | --- | --- | --- |
| Design tokens | `src/lib/design-system.ts` | Spacing, radius, typography, color architecture, motion, product types, helpers. | Split or harden semantic tokens in Phase 1. |
| Product fixtures | `src/lib/commerce-data.ts` | Static product data with gallery, delivery, materials, bundle, reviews, trust labels. | Expand to catalog service and seed data in Phase 16. |
| Commerce store | `src/store/commerce-store.ts` | Client cart, wishlist IDs, selected category, selected product color, totals. | Persistence, server sync, cart route integration in Phases 8-10. |
| Utilities | `src/lib/utils.ts` | Tailwind class merge helper. | Retain as primitive utility. |

## Current Backend/Data Model

| Area | File | Current Role | Future Need |
| --- | --- | --- | --- |
| Prisma schema | `prisma/schema.prisma` | Users, sessions, catalog, brands, variants, media, orders, payments, coupons, reviews, notifications, wallet, loyalty, analytics, CMS, audit. | Service layer, seed data, inventory reservation, and payment abstraction in Phase 16. |
| Search API | `src/app/api/mobile-commerce/search/route.ts` | Fixture-backed Arabic search prototype. | Query analytics, stronger typo/synonym handling, UI connection in Phase 5. |
| Checkout API | `src/app/api/mobile-commerce/checkout/route.ts` | Quote prototype with Zod validation and totals. | Idempotency, inventory reservation, payment handoff in Phase 10/16. |

## Baseline Visual DNA

- Page gutter: 20px.
- Section rhythm: 24px+.
- Cards: 28px–34px rounded premium surfaces.
- Controls: 18px–22px rounded, 48px target where possible.
- Palette: warm ivory background, ink trusted surfaces, orange high-intent CTA.
- Typography: heavy Arabic headings, bold compact labels, generous Arabic body line-height.
- Motion: tap compression and spring transitions; reduced-motion CSS exists.

## Immediate Next Phase Candidate

After Phase 0 is accepted, the next recommended phase is:

**Phase 1 — Design System Refactor & Visual Token Hardening**

Do not execute Phase 1 until the user explicitly confirms it.
