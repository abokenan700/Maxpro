# Maxpro Mobile Visual Commerce Roadmap

> Permanent source of truth for all future visual, UX, interaction, and commerce execution phases. No implementation phase may begin until the user explicitly confirms the exact phase or micro-phase to execute.

## 0. Governance Rules

### 0.1 Execution Contract
- This roadmap is the required reference for every future change.
- Do not execute any phase automatically.
- Before execution, confirm the exact requested phase or micro-phase with the user.
- Execute only the selected phase scope; do not opportunistically add adjacent phases.
- After each completed phase:
  - run available checks,
  - summarize changes,
  - commit the changes,
  - open/update the PR.

### 0.2 Product Boundary
- Maxpro remains a **single-brand premium ecommerce app**.
- Temu, SHEIN, and AliExpress are used only as comparative UX references for mobile discovery, deal mechanics, filtering, reviews, and checkout clarity.
- Do not add seller, vendor, supplier, marketplace, merchant dashboard, or multi-vendor logic.
- Do not add desktop or tablet layouts.
- All visual work must remain Arabic-first, RTL-native, mobile-only, and thumb-zone optimized.

### 0.3 Visual Quality Bar
- The application must feel native, premium, emotionally persuasive, fast, and commercially credible.
- Usability outranks decoration.
- Trust, clarity, and purchase confidence outrank aggressive gamification.
- Motion must be lightweight and intentional.
- Every phase must preserve the locked warm ivory / ink / orange visual DNA unless a dedicated design-token phase explicitly updates it.

---

## 1. Current Project Audit

### 1.1 Repository Structure Observed
- `src/app/page.tsx` renders a single mobile shell containing header, search, category rail, product hero, product detail section, recommendation rail, payment promo, trust signals, cart preview, and bottom navigation.
- `src/components/mobile/ui.tsx` contains all visible mobile UI components in one large file.
- `src/lib/design-system.ts` contains tokens, color architecture, product types, Arabic search normalization, and formatting helpers.
- `src/lib/commerce-data.ts` contains static Arabic fixtures for products, categories, trust signals, and checkout trust labels.
- `src/store/commerce-store.ts` contains Zustand state for cart, wishlist, selected category, and selected color.
- `src/app/api/mobile-commerce/search/route.ts` exposes a simple Arabic-aware search response.
- `src/app/api/mobile-commerce/checkout/route.ts` exposes checkout quote validation and totals.
- `prisma/schema.prisma` defines a broader enterprise commerce schema.
- `docs/architecture.md` documents the mobile-only architecture and phased approach.

### 1.2 Current UX Strengths
- Strong Arabic RTL baseline with `html dir="rtl"` and mobile shell constraints.
- Cohesive warm luxury palette: ivory background, ink surfaces, and orange CTAs.
- Consistent rounded-card language and soft shadows.
- Product hero has emotional storytelling, price, rating, wishlist, inventory cue, and add-to-cart.
- Product detail section adds gallery, trust tiles, color selection, delivery promise, materials, bundle, reviews, and installment CTA.
- Cart preview makes state visible and demonstrates quantity controls, VAT, shipping, and payment trust.
- APIs and Prisma schema are moving toward real commerce foundations.

### 1.3 Current UX Weaknesses
- The app is still essentially one long home page; major screens are not separated into route-level or screen-level flows.
- `src/components/mobile/ui.tsx` is too large and mixes primitives, sections, and feature logic, making design governance harder.
- Search input is visually present but not connected to a full search screen, suggestions, recent searches, filters, sorting, voice search, or empty states.
- Category rail changes state but does not visibly filter product rails or transition into category feeds.
- Bottom navigation buttons do not navigate to distinct screens.
- The product detail experience is embedded on home rather than being a dedicated product page with sticky purchase controls and variant confidence.
- Cart preview is useful but not a complete cart or checkout flow.
- No wishlist screen, order tracking, profile, address book, payment selection, loyalty, coupon wallet, notifications, or recently viewed UX exists yet.
- Micro-interactions are mostly tap compression; there is no cohesive motion choreography for entry, sheet transitions, cart fly-to-bag, filter drawer, or skeleton loading.
- Visual density is premium and calm, but it lacks the high-impact campaign energy found in top discovery apps.

### 1.4 Current Visual Gaps
- No immersive campaign banners, editorial modules, countdown offer cards, or offer stacking patterns.
- No product grid density modes; only hero and horizontal cards exist.
- No polished loading, skeleton, shimmer, or pull-to-refresh system.
- No visual filter chips with active counts.
- No product badges for delivery, stock, free returns, installments, or limited offers in grid cards.
- No review photo strip, size/fit confidence, or user-generated proof modules.
- No haptic-like visual feedback patterns for add-to-cart, wishlist, coupon claim, or payment success.
- No bottom sheets for filters, variants, coupons, delivery scheduling, or order summary.

### 1.5 Current Functional Gaps
- Product data is static and limited.
- Search ranking is simplistic and has no query analytics, typo tolerance beyond normalization, synonym handling, or personalized ranking.
- Checkout API has no inventory reservation, address validation, payment provider handoff, idempotency key, or fraud/rate-limit layer.
- Cart state is client-only and not persisted.
- Wishlist is client-only and not routed.
- Prisma schema is broad but not wired to runtime services.
- No analytics event taxonomy exists for impression, click, add-to-cart, checkout, purchase, or retention.

---

## 2. Comparative UX Learnings From Leading Mobile Commerce Apps

### 2.1 Temu Patterns Worth Learning From
Research signals: Temu is known for dense mobile discovery, flash deals, coupon centers, countdowns, gamified rewards, referral/check-in loops, and strong bargain-hunting energy. User commentary also highlights that excessive popups, deceptive scarcity, and notification overload can damage trust.

Applicable Maxpro lessons:
- Use urgency sparingly and truthfully: limited stock, delivery cutoffs, or genuine campaign windows.
- Add a premium coupon center without manipulative popups.
- Add daily discovery modules, but keep them elegant and optional.
- Use lightweight reward mechanics for loyalty, not aggressive game loops.
- Provide review and policy clarity wherever price or urgency appears.

### 2.2 SHEIN Patterns Worth Learning From
Research signals: SHEIN emphasizes mobile-first fashion discovery, new arrivals, trends, best sellers, daily flash sales, app-exclusive offers, size preferences, recommendations, review depth, points, free returns, live chat, and fast checkout.

Applicable Maxpro lessons:
- Add preference-aware personalization, especially color, style, size, gifting intent, and budget.
- Add richer review filters and photo reviews.
- Add trend/new-arrival/best-seller rails with strong visual hierarchy.
- Add a points/loyalty layer tied to reviews and purchases.
- Add live support and service confidence inside product and checkout.

### 2.3 AliExpress Patterns Worth Learning From
Research signals: AliExpress uses app-exclusive deals, coupon/coin mechanics, Choice-style trust badges, product-level coupons, wishlist behavior, extensive filters, sorting, review inspection, and mobile-first discount stacking. User commentary also shows that unclear discount application creates frustration.

Applicable Maxpro lessons:
- Show discount stacking transparently from product page through checkout.
- Add filter/sort depth, but keep it digestible in mobile bottom sheets.
- Add clear fulfillment badges such as fast delivery, free return, warranty, and authenticity.
- Add wishlist-to-checkout flow instead of encouraging purchase from low-context search cards.
- Make offer math explainable: original price, coupon, wallet credit, loyalty redemption, VAT, shipping, total.

### 2.4 Strategic Differentiation for Maxpro
Maxpro should not copy noisy marketplace behavior. It should outperform marketplace UX through:
- premium clarity instead of clutter,
- truthful urgency instead of pressure,
- editorial product storytelling instead of commodity listing,
- Arabic-native trust language instead of translated labels,
- refined micro-interactions instead of intrusive game mechanics,
- transparent offer math instead of confusing coupons.

### 2.5 Sources Consulted
- Temu UX and gamification overview: `https://www.searchengineinsight.com/temu-app-review/`
- Temu safety/trust discussion: `https://www.digitaltrends.com/mobile/temu-app-is-it-legit-scam-how-download-explained/`
- SHEIN App Store listing and user-facing features: `https://apps.apple.com/us/app/shein-shopping-online/id878577184`
- AliExpress App Store listing and mobile app context: `https://apps.apple.com/us/app/aliexpress-shopping-app/id436672029`
- SHEIN product teardown: `https://nextsprints.com/guide/shein-product-manager-teardown-analysis`

---

## 3. Target Product Experience

### 3.1 North Star
Build the most visually polished Arabic mobile commerce experience for a single premium brand: fast, trustworthy, emotionally engaging, conversion-optimized, and easier to use than dense marketplaces.

### 3.2 Core Experience Pillars
1. **Arabic-first luxury discovery:** editorial banners, curated rails, visual product storytelling, and RTL-native scanning.
2. **Fast purchase confidence:** visible delivery promise, stock, return policy, installment math, review proof, and sticky CTA.
3. **Premium deal intelligence:** transparent offers, loyalty, coupons, and bundles without spammy popups.
4. **World-class mobile ergonomics:** bottom sheets, thumb-zone CTAs, horizontal rails, skeleton loading, native transitions.
5. **Enterprise reliability:** validated APIs, schema alignment, event tracking, accessibility, performance budgets, and clean modular code.

### 3.3 Design Principles
- Mobile-only: no desktop breakpoints.
- Premium density: enough content to drive discovery, never chaotic.
- Visual hierarchy before feature count.
- Every CTA must explain value and consequence.
- Every discount must be auditable.
- Every state needs empty, loading, success, error, and offline treatment.

---

## 4. Stage-by-Stage Development Roadmap

## Phase 0 — Roadmap Lock & Baseline Cleanup
**Goal:** Establish roadmap governance, protect previous work from uncontrolled drift, and prepare the project for phased execution.

### Micro-tasks
- Confirm this roadmap file is the single source of truth.
- Add a roadmap pointer to `docs/architecture.md`.
- Add a short `docs/phase-log.md` template for recording completed phases.
- Capture current route/component inventory.
- Define phase acceptance checklist:
  - mobile-only,
  - RTL-native,
  - no vendor logic,
  - visual DNA preserved,
  - tests/checks attempted,
  - commit created.

### Acceptance Criteria
- No UI feature changes beyond documentation.
- User explicitly confirms the next phase before implementation.

### Phase 0 Completion Artifacts
- Architecture pointer: `docs/architecture.md`.
- Execution log and acceptance checklist: `docs/phase-log.md`.
- Current route/component inventory: `docs/current-inventory.md`.

---

## Phase 1 — Design System Refactor & Visual Token Hardening
**Goal:** Convert the current visual language into reusable, enforceable foundations.

### Micro-tasks
1. Split `src/lib/design-system.ts` into logical exports if needed:
   - spacing,
   - radius,
   - typography,
   - color architecture,
   - motion,
   - commerce helpers.
2. Add tokenized mobile layout constants:
   - shell max width,
   - page gutter,
   - section gap,
   - rail gap,
   - sticky CTA offset,
   - safe-area spacing.
3. Add semantic component tokens:
   - product card surface,
   - offer card surface,
   - trust card surface,
   - bottom sheet surface,
   - skeleton surface,
   - danger/success/warning/info variants.
4. Add motion presets:
   - tap compression,
   - card entrance,
   - sheet reveal,
   - filter chip selection,
   - add-to-cart pulse,
   - wishlist heart pop,
   - reduced-motion fallback.
5. Add typography roles:
   - screen title,
   - section title,
   - card title,
   - price large,
   - price compact,
   - Arabic body,
   - micro label.
6. Add a visual QA checklist in docs.

### Visual Improvements
- Make all future UI visually consistent.
- Prevent arbitrary radius, spacing, and font-size drift.
- Create a premium rhythm similar to a single Figma system.

### Acceptance Criteria
- Tokens are clear, typed, and reusable.
- No major screen redesign yet.
- Existing UI compiles conceptually with updated imports.

---

## Phase 2 — Component Architecture Decomposition
**Goal:** Break the monolithic mobile UI file into professional reusable modules.

### Micro-tasks
1. Create component folders:
   - `src/components/mobile/primitives/`
   - `src/components/mobile/shell/`
   - `src/components/mobile/product/`
   - `src/components/mobile/cart/`
   - `src/components/mobile/search/`
   - `src/components/mobile/offers/`
2. Move primitives:
   - `MobileButton`,
   - `IconButton`,
   - `PriceText`,
   - `TrustPill`,
   - `SectionHeader`,
   - `BottomSheetFrame`,
   - `SkeletonBlock`.
3. Move shell elements:
   - `MobileHeader`,
   - `BottomNavigation`,
   - mobile shell wrappers.
4. Move product modules:
   - hero,
   - product card,
   - gallery,
   - trust tiles,
   - variant selector,
   - review card,
   - bundle card.
5. Move cart modules:
   - cart line,
   - quantity stepper,
   - summary line,
   - checkout CTA.
6. Add index exports for stable imports.

### Visual Improvements
- No visual redesign; exact look retained.
- Improves long-term velocity and consistency.

### Acceptance Criteria
- UI output remains visually equivalent.
- Imports are clean.
- No phase 3 feature added prematurely.

---

## Phase 3 — App Shell Navigation & Screen Routing
**Goal:** Convert the single-page demo into a real mobile app shell with screen-level navigation.

### Micro-tasks
1. Define mobile routes:
   - `/` home,
   - `/search`,
   - `/product/[id]`,
   - `/cart`,
   - `/checkout`,
   - `/wishlist`,
   - `/profile`,
   - `/orders`,
   - `/notifications`.
2. Make bottom navigation route-aware.
3. Add top header variants:
   - home header,
   - back header,
   - search header,
   - checkout secure header.
4. Add route transition wrapper with motion presets.
5. Add RTL back behavior and screen titles.
6. Ensure all routes remain mobile-shell constrained.

### Visual Improvements
- Native mobile app feeling.
- Clear mental model: discovery, search, cart, account.
- Better navigation hierarchy.

### Acceptance Criteria
- Bottom tabs navigate correctly.
- No desktop/tablet UI introduced.
- Product hero on home links to product detail route.

---

## Phase 4 — Premium Home Discovery Redesign
**Goal:** Make the home screen visually competitive with top shopping apps while staying premium and uncluttered.

### Micro-tasks
1. Add top campaign carousel:
   - hero offer,
   - new arrival drop,
   - limited gift bundle,
   - delivery promise campaign.
2. Add compact deal strip:
   - truthful countdown,
   - free shipping threshold,
   - loyalty multiplier.
3. Add category icon rail:
   - bags,
   - watches,
   - shoes,
   - gifts,
   - best sellers,
   - new arrivals.
4. Add editorial product rail:
   - “اختيارات تناسب ذوقك”,
   - “الأكثر حفظاً”,
   - “وصل حديثاً”,
   - “هدايا فاخرة”.
5. Add recently viewed rail.
6. Add AI recommendation card with transparent reason text:
   - “لأنك تفضل الجلد البني”.
7. Add visual loading skeleton for home modules.
8. Add pull-to-refresh micro-interaction placeholder.

### Visual Improvements
- More impact above the fold.
- More discovery depth without marketplace clutter.
- Clear conversion hierarchy from campaign to product to cart.

### Acceptance Criteria
- Home remains fast-scanning and premium.
- No manipulative popups.
- All modules use established tokens.

---

## Phase 5 — Search, Suggestions, Filters & Sorting
**Goal:** Build a marketplace-grade search experience adapted for Arabic single-brand shopping.

### Micro-tasks
1. Create full search screen.
2. Add search states:
   - idle,
   - focused,
   - typing,
   - loading,
   - results,
   - empty,
   - error.
3. Add Arabic-aware suggestions:
   - recent searches,
   - trending searches,
   - typo-tolerant suggestions,
   - synonym suggestions.
4. Add voice search button visual state.
5. Add filter bottom sheet:
   - category,
   - color,
   - price range,
   - availability,
   - delivery speed,
   - rating,
   - offers,
   - gift suitability.
6. Add sort bottom sheet:
   - recommended,
   - newest,
   - price low-high,
   - price high-low,
   - most loved,
   - fastest delivery.
7. Add active filter chips with counts.
8. Add result grid/list density toggle.
9. Add “save search” and “notify me” micro-UX.
10. Expand API ranking for synonyms, Arabic normalization, and scoring reasons.

### Visual Improvements
- Search feels intentional, not just an input.
- Filters are thumb-friendly and premium.
- Results have clear badges and offer transparency.

### Acceptance Criteria
- Search route works independently.
- Filters do not introduce desktop patterns.
- Empty states are visually polished.

---

## Phase 6 — Product Listing & Category Feed
**Goal:** Create category feeds that match the quality of dedicated commerce apps.

### Micro-tasks
1. Build category route or category state screen.
2. Add sticky compact search/filter header on scroll.
3. Add campaign banner per category.
4. Add product grid cards with:
   - image,
   - name,
   - price,
   - compare-at,
   - rating,
   - wishlist,
   - fast delivery badge,
   - installment badge,
   - stock urgency.
5. Add quick add bottom sheet for variants.
6. Add product comparison drawer for selected products.
7. Add skeleton grid loading.
8. Add end-of-list recommendations.

### Visual Improvements
- Higher product density while preserving luxury.
- Clear category context.
- Fast browse-to-cart interaction.

### Acceptance Criteria
- Category selection changes visible product feed.
- Product cards do not become visually noisy.

---

## Phase 7 — World-Class Product Detail Page
**Goal:** Move product detail out of home and make it a complete premium product page.

### Micro-tasks
1. Create `/product/[id]` route.
2. Add immersive gallery:
   - swipeable images,
   - video preview placeholder,
   - zoom gesture affordance,
   - thumbnail dots,
   - image counter.
3. Add sticky purchase dock:
   - selected color,
   - price,
   - installment summary,
   - add-to-cart,
   - buy now.
4. Add variant bottom sheet:
   - color,
   - size if applicable,
   - stock per variant,
   - delivery estimate per variant.
5. Add product story sections:
   - material,
   - dimensions,
   - care instructions,
   - what fits inside,
   - gift packaging.
6. Add trust module:
   - authenticity,
   - warranty,
   - returns,
   - secure payment,
   - support.
7. Add review system:
   - rating summary,
   - photo reviews,
   - review filters,
   - verified purchase tags,
   - Arabic sentiment highlights.
8. Add bundles and “complete the look”.
9. Add recently viewed and similar products.
10. Add inventory and delivery cutoff microcopy.

### Visual Improvements
- Product page becomes the highest-converting screen.
- Purchase confidence is built before CTA.
- Motion is immersive but not heavy.

### Acceptance Criteria
- Product route is self-contained.
- Sticky CTA is safe-area aware and does not block content.
- Add-to-cart animation updates cart badge.

---

## Phase 8 — Wishlist & Saved Commerce
**Goal:** Make saving products a meaningful conversion path.

### Micro-tasks
1. Create wishlist route.
2. Add wishlist empty state with premium illustration style using existing visual language.
3. Add saved product cards.
4. Add price drop and back-in-stock badges.
5. Add move-to-cart action.
6. Add selected-color memory.
7. Add share wishlist action.
8. Add recently viewed fallback when wishlist is empty.
9. Persist wishlist locally first; later wire to user account.

### Visual Improvements
- Wishlist becomes a polished re-entry surface.
- Saved commerce supports thoughtful premium buying.

### Acceptance Criteria
- Wishlist icon state is consistent across home, listing, and product pages.
- Empty state is not generic.

---

## Phase 9 — Cart Screen & Offer Transparency
**Goal:** Replace preview-only cart with a full checkout-preparation screen.

### Micro-tasks
1. Create `/cart` route.
2. Add cart line cards with variant, image, delivery, quantity, remove, save for later.
3. Add offer progress bar:
   - free shipping threshold,
   - loyalty multiplier,
   - bundle completion.
4. Add coupon entry and coupon wallet bottom sheet.
5. Add transparent totals:
   - subtotal,
   - item discount,
   - coupon,
   - wallet,
   - shipping,
   - VAT,
   - total.
6. Add recommended add-ons.
7. Add cart empty state.
8. Add cart persistence.
9. Add checkout eligibility validation.

### Visual Improvements
- Cart feels trustworthy and financial details are clear.
- Offer mechanics are understandable, unlike confusing coupon stacking.

### Acceptance Criteria
- Cart route mirrors preview totals.
- Coupon math is never hidden.

---

## Phase 10 — Checkout Experience
**Goal:** Build frictionless premium checkout with real mobile payment confidence.

### Micro-tasks
1. Create `/checkout` route.
2. Add secure checkout header.
3. Add stepper or single-page sections:
   - address,
   - delivery window,
   - payment,
   - review.
4. Add address form with React Hook Form + Zod.
5. Add saved addresses and default address selection.
6. Add delivery scheduling bottom sheet.
7. Add payment methods:
   - Apple Pay,
   - Mada,
   - Visa,
   - Mastercard,
   - wallet,
   - installment.
8. Add final order summary dock.
9. Add error states:
   - invalid address,
   - payment failed,
   - inventory changed,
   - expired coupon.
10. Add order confirmation screen with motion.
11. Add checkout API idempotency and validation improvements.

### Visual Improvements
- Checkout feels calm, premium, and secure.
- Financial trust is visually explicit.

### Acceptance Criteria
- User can move from cart to checkout to confirmation in prototype flow.
- Validation messages are Arabic and clear.

---

## Phase 11 — Profile, Loyalty, Wallet & Notifications
**Goal:** Create retention surfaces without marketplace clutter.

### Micro-tasks
1. Create profile route.
2. Add user summary card.
3. Add wallet balance card.
4. Add loyalty level and progress.
5. Add order shortcuts.
6. Add address book entry.
7. Add preferences:
   - language,
   - notification frequency,
   - style preferences,
   - size/color preferences.
8. Add security settings shell.
9. Add notifications route:
   - order updates,
   - price drops,
   - loyalty rewards,
   - new drops.
10. Add notification settings to avoid spam.

### Visual Improvements
- Retention feels premium and useful.
- Avoids Temu-style notification overload.

### Acceptance Criteria
- Notification permissions and preferences are transparent.
- Loyalty does not feel gimmicky.

---

## Phase 12 — Orders, Tracking & Post-Purchase UX
**Goal:** Build confidence after purchase and reduce support anxiety.

### Micro-tasks
1. Create orders route.
2. Add order list cards.
3. Add order detail route.
4. Add tracking timeline:
   - confirmed,
   - prepared,
   - shipped,
   - out for delivery,
   - delivered.
5. Add support entry per order.
6. Add invoice download placeholder.
7. Add return/exchange eligibility UI.
8. Add reorder and review product CTA.
9. Add review capture flow with loyalty points.

### Visual Improvements
- Post-purchase screen feels calm and reassuring.
- Timeline motion strengthens trust.

### Acceptance Criteria
- Order status is visually obvious.
- Support access is easy but not intrusive.

---

## Phase 13 — Personalization & AI Recommendations
**Goal:** Add intelligent product discovery without black-box confusion.

### Micro-tasks
1. Define recommendation reasons:
   - based on viewed products,
   - based on saved items,
   - based on color preference,
   - based on price range,
   - popular in city.
2. Add `RecommendationReason` data model.
3. Add personalized rails.
4. Add “why this product?” microcopy.
5. Add feedback controls:
   - not interested,
   - show more like this,
   - save preference.
6. Add recently viewed persistence.
7. Add recommendation loading skeletons.

### Visual Improvements
- AI feels helpful and premium.
- Users understand why suggestions appear.

### Acceptance Criteria
- Recommendations never block core shopping.
- Personalization controls are visible.

---

## Phase 14 — Motion, Haptics-Like Feedback & Polish
**Goal:** Elevate the app from functional to emotionally memorable.

### Micro-tasks
1. Add shared motion primitives.
2. Add cart fly-to-bag animation.
3. Add wishlist heart pop.
4. Add coupon claim shimmer.
5. Add bottom sheet drag affordance.
6. Add route transitions.
7. Add skeleton shimmer.
8. Add checkout success animation.
9. Add pull-to-refresh animation.
10. Add reduced-motion alternatives.

### Visual Improvements
- Motion feels native, responsive, and premium.
- Interactions communicate system feedback clearly.

### Acceptance Criteria
- Motion does not harm performance.
- Reduced motion is respected.

---

## Phase 15 — Accessibility, Performance & Production Hardening
**Goal:** Make the experience robust enough for real users.

### Micro-tasks
1. Audit tap targets.
2. Audit color contrast.
3. Add aria labels and semantic landmarks.
4. Add focus states.
5. Add reduced-motion checks.
6. Optimize images.
7. Add route-level lazy loading.
8. Add error boundaries.
9. Add offline/poor-network states.
10. Add analytics events:
    - screen_view,
    - product_impression,
    - product_click,
    - add_to_cart,
    - wishlist_toggle,
    - search_submit,
    - filter_apply,
    - checkout_start,
    - purchase_success.
11. Add API rate-limit strategy documentation.
12. Add idempotency and inventory reservation plan.

### Visual Improvements
- App feels faster and more reliable.
- Accessibility improves premium feel and reach.

### Acceptance Criteria
- Checks are documented.
- Performance risks are reduced.

---

## Phase 16 — Backend Integration & Enterprise Commerce Services
**Goal:** Connect the frontend experience to scalable commerce logic.

### Micro-tasks
1. Add service layer for products.
2. Add service layer for cart.
3. Add service layer for checkout.
4. Add Prisma seed data.
5. Add catalog API endpoints.
6. Add inventory reservation endpoint.
7. Add order creation flow.
8. Add payment provider abstraction.
9. Add notification event model.
10. Add analytics event ingestion.
11. Add Redis caching plan.
12. Add queue processing plan.

### Visual Improvements
- Runtime data supports real UI states.
- Product experience becomes operationally realistic.

### Acceptance Criteria
- No vendor/marketplace models are introduced.
- API responses support all mobile UI states.

---

## Phase 17 — Final Visual QA & Launch Readiness
**Goal:** Validate cohesion, impact, and production readiness.

### Micro-tasks
1. Run full screen-by-screen visual audit.
2. Check all screens for spacing drift.
3. Check all typography hierarchy.
4. Check all Arabic copy quality.
5. Check all empty/loading/error/success states.
6. Check safe-area behavior.
7. Check navigation loops.
8. Check checkout trust flow.
9. Check performance budgets.
10. Produce launch readiness report.

### Visual Improvements
- Final app feels like one premium product system.
- Removes accumulated inconsistencies.

### Acceptance Criteria
- Every screen passes visual QA.
- User confirms readiness to proceed to deployment planning.

---

## 5. Immediate Recommended Next Step

Recommended next confirmed execution phase:

**Phase 0 — Roadmap Lock & Baseline Cleanup**

Why:
- It introduces no risky UI changes.
- It formalizes this roadmap as the permanent reference.
- It creates the phase log and acceptance checklist needed before more visual work begins.

The user must explicitly confirm: `Execute Phase 0` before any implementation starts.
