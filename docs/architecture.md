# Maxpro Arabic Mobile Commerce Architecture

## Execution Map
Maxpro is a single-brand, Arabic-first, mobile-only commerce application. The application intentionally excludes sellers, vendors, marketplaces, merchant dashboards, and supplier portals. All commerce flows serve one premium brand with direct inventory ownership.

## Mobile UX Rules
- The shell is capped at a native-phone viewport and does not define desktop or tablet layouts.
- RTL is the source direction, not an adaptation layer.
- Primary thumb actions live in the lower half of the screen through sticky navigation and purchase controls.
- Product discovery uses compact Arabic labels, high-contrast cards, horizontal rails, and low cognitive load.
- Motion uses short spring transitions and tap compression, with reduced-motion support in CSS.

## Design DNA
- Spacing: 20px page gutters, 24px section rhythm, 16px card internals, 48px minimum touch targets.
- Shape: 28px to 34px premium rounded cards, 18px to 22px controls, pill chips for categories.
- Surfaces: warm ivory app background, white elevated cards, dark trusted purchase zones, orange intent highlights.
- Typography: heavy Arabic headings, compact labels, generous line-height for Arabic body copy.
- Shadows: soft warm depth for cards, stronger glow only for selected or high-intent purchase elements.

## Frontend Architecture
- `src/app` contains the Next.js App Router entrypoints and global mobile shell styles.
- `src/components/mobile` contains reusable mobile-only components such as header, search, category chips, product cards, hero purchase panel, and bottom navigation.
- `src/lib` contains design tokens, color architecture, product fixtures, formatting utilities, and shared helpers.
- `src/store` contains Zustand commerce state for cart, wishlist, selected category, and totals.

## State Graph
- Product fixtures feed product hero, recommendation rails, cart lines, and wishlist state.
- `useCommerceStore.addToCart` increments existing color-specific lines or creates a new cart line.
- `useCommerceStore.toggleWishlist` keeps wishlist behavior local and deterministic.
- Derived selectors provide cart count and total for navigation badges and checkout summaries.

## Production Extensions
- TanStack Query should back catalog, pricing, inventory, and personalization endpoints.
- React Hook Form and Zod should validate authentication, address, coupon, and checkout forms.
- Redis should cache Arabic search suggestions, product detail payloads, and checkout delivery estimates.
- Queues should process payment webhooks, transactional notifications, loyalty accrual, and analytics events.
