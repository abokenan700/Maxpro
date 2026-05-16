# Maxpro Pixel-Perfect Visual Identity

> مرجع الهوية البصرية الرسمي لتطبيق Maxpro. يجب استخدام هذا الملف كوثيقة تنفيذ pixel-perfect عند تصميم أو بناء أي شاشة أو مكوّن جديد. أي تغيير بصري مستقبلي يجب أن يحافظ على هذه القواعد أو يتم توثيقه كقرار تصميم صريح قبل التنفيذ.

## 1. Brand Essence

### 1.1 Positioning
Maxpro هو تطبيق تجارة إلكترونية عربي فاخر، موبايل فقط، أحادي العلامة التجارية. الهوية البصرية يجب أن تنقل:

- الثقة قبل الإبهار.
- الفخامة الهادئة قبل الضجيج التسويقي.
- تجربة عربية أصيلة وليست واجهة غربية مترجمة.
- وضوح الشراء والدفع قبل الزخرفة.
- إحساس تطبيق iOS/Android أصلي داخل shell ويب موبايل.

### 1.2 Visual Personality
| السمة | التعبير البصري |
| --- | --- |
| فخامة دافئة | خلفيات ivory، أسطح بيضاء شفافة، ظلال بنية ناعمة |
| ثقة شرائية | مساحات ink داكنة حول السلة والدفع والـ CTA المهم |
| طاقة تجارية | orange brand فقط للأفعال عالية النية مثل add-to-cart |
| عربية أصيلة | RTL كامل، عناوين عربية ثقيلة، line-height مريح للنصوص |
| موبايل أصلي | safe areas، bottom nav، rails أفقية، tap compression |

### 1.3 Non-Negotiables
- لا desktop layout.
- لا tablet adaptation.
- لا marketplace/vendor/seller visuals.
- لا ألوان عشوائية خارج palette.
- لا border radius غير موثق.
- لا CTA برتقالي إلا لفعل شرائي أو high-intent.
- لا تقليل تباين النصوص العربية لأجل الزخرفة.

---

## 2. Canvas & App Shell

### 2.1 Mobile Canvas
| الخاصية | القيمة الدقيقة |
| --- | --- |
| Max shell width | `430px` |
| Width formula | `min(100vw, 430px)` |
| Min height | `100vh` |
| Shell alignment | centered with `margin: 0 auto` |
| Shell overflow | `hidden` |
| Shell background | `#fcfbf8` |
| Outer body background | warm radial + vertical ivory gradient |
| Shell shadow | `0 0 0 1px rgba(33, 26, 21, 0.05), 0 28px 90px rgba(33, 26, 21, 0.18)` |

### 2.2 Safe Areas
| Token | CSS |
| --- | --- |
| Top safe area | `--safe-top: env(safe-area-inset-top, 0px)` |
| Bottom safe area | `--safe-bottom: env(safe-area-inset-bottom, 0px)` |
| Header top padding | `calc(var(--safe-top) + 14px)` |
| Bottom nav padding | `calc(var(--safe-bottom) + 14px)` |

### 2.3 Directionality
- Root document direction: `rtl`.
- Arabic reading rhythm is primary; do not mirror from LTR patterns blindly.
- Important floating actions in product imagery use RTL-aware placement:
  - product badge: top-right,
  - wishlist: top-left,
  - inventory cue: left below wishlist.

---

## 3. Color System

## 3.1 Primary Palette
| Role | HEX | RGB | HSL | Tailwind | Usage |
| --- | --- | --- | --- | --- | --- |
| Brand Primary | `#f77b12` | `247 123 18` | `27 93% 52%` | `brand-500` | purchase CTAs, active purchase highlights, selected high-intent moments |
| Brand Secondary / Luxury | `#b98b53` | `185 139 83` | `33 42% 53%` | `brand-luxury` | editorial luxury accents, giftable moments, premium storytelling |
| Trusted CTA Ink | `#211a15` | `33 26 21` | `25 22% 11%` | `ink-900` | trusted purchase zones, sticky payment areas, dark buttons |
| Deep Ink | `#0b0806` | `11 8 6` | approx `24 29% 3%` | `ink-1000` | hero gradients, deep overlays, dark app foundations |

### CTA Rule
- Use `brand-500` only when the user action creates strong commercial progress:
  - add to cart,
  - continue checkout,
  - claim a valid coupon,
  - confirm payment.
- Use `ink-900` for trust-heavy CTAs where safety matters more than urgency.

## 3.2 Neutral Scale
| Token | HEX | Usage |
| --- | --- | --- |
| `ink-0` | `#ffffff` | pure cards, inner purchase panels |
| `ink-25` | `#fcfbf8` | app surface, subtle blocks |
| `ink-50` | `#f8f5ef` | chips, media placeholders, quiet cards |
| `ink-100` | `#efeadf` | borders, dividers, soft outlines |
| `ink-150` | `#e5ddce` | secondary dividers |
| `ink-200` | `#d9ceba` | disabled borders, warm contrast |
| `ink-300` | `#bcae96` | strikethrough prices, low emphasis |
| `ink-400` | `#9a886f` | micro labels |
| `ink-500` | `#7f6b53` | secondary body text |
| `ink-600` | `#66533f` | strong body text |
| `ink-700` | `#514131` | secondary heading |
| `ink-800` | `#372c22` | elevated text |
| `ink-900` | `#211a15` | primary text / trusted surface |
| `ink-950` | `#16110e` | dark elevated surface |
| `ink-1000` | `#0b0806` | deepest overlay |

## 3.3 Brand Scale
| Token | HEX | Usage |
| --- | --- | --- |
| `brand-50` | `#fff8ed` | orange-tinted badge background |
| `brand-100` | `#ffedcf` | offer card border |
| `brand-200` | `#ffd79d` | soft offer fills |
| `brand-300` | `#ffbb61` | dark-surface labels |
| `brand-400` | `#ff9d32` | selected color border / hover accent |
| `brand-500` | `#f77b12` | primary CTA |
| `brand-600` | `#d9580a` | section eyebrow / active labels |
| `brand-700` | `#b43b0d` | badge text on light orange |
| `brand-800` | `#923012` | deep warning accent |
| `brand-900` | `#782a12` | deepest brand text |

## 3.4 Semantic Colors
| Role | HEX | Usage |
| --- | --- | --- |
| Success | `#188c58` | inventory confidence, verified purchase, successful payment |
| Error | `#c83737` | destructive actions, validation, failed payment |
| Warning | `#c87a13` | low stock, delivery cutoff, limited window |
| Info | `#2667c9` | delivery intelligence, guidance, support messages |

## 3.5 Surface Rules
| Surface | Value | Usage |
| --- | --- | --- |
| App | `#fcfbf8` | app shell background |
| Elevated | `rgba(255,255,255,0.86)` | sticky header, cards, soft overlays |
| Sheet | `#fffaf1` | future bottom sheets |
| Navigation | `rgba(255,255,255,0.78)` | bottom navigation glass |
| Glass | `rgba(255,255,255,0.18)` | hero overlays and dark panels |
| Dark App | `#0b0806` | dark hero depth |
| Dark Elevated | `#16110e` | dark elevated cards |

---

## 4. Typography

### 4.1 Font Stack
```css
"Tajawal", "IBM Plex Sans Arabic", "Noto Kufi Arabic", Arial, sans-serif
```

### 4.2 Rendering
- `-webkit-font-smoothing: antialiased`.
- `text-rendering: optimizeLegibility`.
- Arabic body copy must keep generous line-height.
- Avoid thin Arabic fonts; use `font-bold`, `font-extrabold`, or `font-black` for hierarchy.

### 4.3 Type Roles
| Role | Tailwind / CSS | Usage |
| --- | --- | --- |
| Hero | `text-[2.1rem] leading-[1.05] font-black tracking-[-0.04em]` | major product or campaign title |
| Product Hero Title | `text-[2rem] leading-[1.08] font-black tracking-[-0.04em]` | title inside image hero |
| Screen / Section Title | `text-2xl font-black tracking-[-0.04em]` | major sections |
| Title Token | `text-[1.45rem] leading-[1.18] font-extrabold tracking-[-0.02em]` | reusable title system |
| Subtitle | `text-[1.05rem] leading-7 font-bold` | supportive content |
| Body | `text-[0.92rem] leading-7 font-medium` | Arabic paragraphs |
| Card Body | `text-sm font-bold leading-6` | product story and descriptions |
| Caption | `text-[0.74rem] leading-5 font-bold` | labels and metadata |
| Micro Label | `text-[0.68rem] font-black` | VAT, badges, status, helper labels |
| Product Card Title | `text-base font-black leading-6` | product cards |
| Price Large | `text-xl font-black` | hero and purchase areas |
| Price Compact | `text-lg font-black` | cards and cart lines |

### 4.4 Tracking Rules
- Arabic headings use tight negative tracking only for premium compactness: `-0.03em` to `-0.04em`.
- Body copy should not use negative tracking.
- Micro labels can be bold/black but must remain readable.

---

## 5. Spacing System

### 5.1 Core Tokens
| Token | px | Tailwind equivalent | Usage |
| --- | --- | --- | --- |
| Page X | `20px` | `px-5`, `mx-5` | screen gutters |
| Section Y | `24px` | `pt-6`, `mt-6` approximate | vertical rhythm |
| Card Padding | `16px` | `p-4` | major card internals |
| Compact Gap | `10px` | `gap-2.5` approximate | dense controls |
| Touch Target | `48px` | `h-12 w-12` | icon buttons / minimum tap area |

### 5.2 Observed Production Spacing
| Pattern | Exact classes | Usage |
| --- | --- | --- |
| Header shell | `px-5 pb-3 pt-[calc(var(--safe-top)+14px)]` | sticky top header |
| Search bar | `mx-5 mt-2 h-14 px-4 gap-3` | primary search |
| Category rail | `px-5 py-4 gap-2` | horizontal category chips |
| Hero card | `mx-5` | large product hero |
| Product detail card | `mx-5 mt-7 p-4` | detail module |
| Recommendation section | `px-5 pt-7` | product rails |
| Payment promo | `mx-5 mt-7 p-5` | promotional blocks |
| Trust list | `mx-5 mt-4 gap-2` | trust signals |
| Bottom nav wrapper | `px-5 pb-[calc(var(--safe-bottom)+14px)]` | bottom safe navigation |

### 5.3 Pixel Rules
- Never use page gutter less than `20px` for primary sections.
- Rails may overflow horizontally but must start at the same `20px` gutter.
- Inside premium cards, default to `16px` padding; use `20px` only for more editorial blocks.
- Dense chips can use `8px–12px` vertical padding but must remain tappable when interactive.

---

## 6. Radius System

| Token | px | Tailwind / usage |
| --- | --- | --- |
| Hero | `34px` | hero product card, large dark panels |
| Sheet | `32px` | cart preview, future bottom sheets |
| Card | `28px` | product detail sections, review blocks |
| Product Card | `30px` | recommendation cards |
| Media | `24px` | image masks, trust tile blocks |
| Control | `18px–22px` | buttons, inputs, chips |
| Icon Button | `16px` | `rounded-2xl` square buttons |
| Pill | `999px` | category chips, badges |

### Radius Rules
- Large surfaces: `28px–34px`.
- Media inside cards: parent radius minus `4px–6px`.
- Buttons: `20px–22px` for purchase actions.
- Do not introduce sharp corners.

---

## 7. Elevation & Shadows

| Shadow | Value | Usage |
| --- | --- | --- |
| Soft | `0 16px 45px rgba(33, 26, 21, 0.10)` | product cards, elevated surfaces |
| Navigation | `0 -18px 55px rgba(33, 26, 21, 0.13)` | bottom nav glass |
| Glow | `0 18px 44px rgba(247, 123, 18, 0.24)` | selected/high-intent actions |
| Shell | `0 0 0 1px rgba(33, 26, 21, 0.05), 0 28px 90px rgba(33, 26, 21, 0.18)` | mobile app container |

### Elevation Rules
- Use glow sparingly: active category, primary CTA, trusted profile/CTA button.
- White elevated cards use soft warm shadow, not gray/blue shadows.
- Dark surfaces can rely on contrast and rounded geometry rather than heavy shadows.

---

## 8. Component Geometry

## 8.1 Header
| Property | Value |
| --- | --- |
| Position | `sticky top-0 z-30` |
| Outer padding | `px-5 pb-3 pt-[calc(var(--safe-top)+14px)]` |
| Header surface | `rounded-[26px] border border-white/70 bg-white/70` |
| Internal padding | `px-4 py-3` |
| Backdrop | `backdrop-blur-2xl` |
| Shadow | `shadow-soft` |
| Icon buttons | `h-12 w-12 rounded-2xl` |

## 8.2 Search Bar
| Property | Value |
| --- | --- |
| Container | `mx-5 mt-2 flex h-14` |
| Shape | `rounded-[22px]` |
| Border | `border border-ink-100` |
| Fill | `bg-white/80` |
| Padding | `px-4` |
| Gap | `gap-3` |
| Input text | `text-[0.95rem] font-bold` |
| AI chip | `rounded-full bg-ink-50 px-3 py-1 text-xs font-black` |

## 8.3 Category Chip
| State | Classes |
| --- | --- |
| Base | `shrink-0 rounded-full px-5 py-3 text-sm font-black transition` |
| Active | `bg-ink-900 text-white shadow-glow` |
| Inactive | `bg-white text-ink-500 shadow-soft` |
| Tap motion | scale to `0.97` |

## 8.4 Product Hero
| Property | Value |
| --- | --- |
| Container | `mx-5 overflow-hidden rounded-[34px] bg-ink-900 text-white shadow-soft` |
| Media height | `420px` |
| Image fit | `object-cover` |
| Overlay | `bg-gradient-to-t from-ink-1000 via-ink-900/22 to-transparent` |
| Top badge | `right-4 top-4 rounded-full bg-white/86 px-4 py-2` |
| Wishlist | `left-4 top-4 h-12 w-12 rounded-2xl bg-white/86` |
| Inventory | `left-4 top-[76px] rounded-full bg-ink-900/50 px-3 py-2` |
| Bottom content | `absolute inset-x-0 bottom-0 p-5` |
| Price panel | `rounded-[26px] bg-white p-3 text-ink-900` |
| CTA | `rounded-[20px] bg-brand-500 px-5 py-4` |

## 8.5 Product Card
| Property | Value |
| --- | --- |
| Width | `min-w-[220px]` |
| Container | `rounded-[30px] bg-white p-3 shadow-soft` |
| Media | `h-48 rounded-[24px] bg-ink-50` |
| Content padding | `px-1 pt-3` |
| Badge | `rounded-full bg-brand-50 px-2 py-1 text-[0.65rem]` |
| Add button | `h-11 w-11 rounded-2xl bg-ink-900` |

## 8.6 Product Detail Card
| Property | Value |
| --- | --- |
| Container | `mx-5 mt-7 rounded-[34px] bg-white p-4 shadow-soft` |
| Gallery rail | `flex snap-x gap-3 overflow-x-auto` |
| Gallery item | `h-56 min-w-[84%] snap-center rounded-[28px]` |
| Trust grid | `grid grid-cols-3 gap-2` |
| Dark variant panel | `rounded-[28px] bg-ink-900 p-4 text-white` |
| Material row | `rounded-[22px] bg-ink-25 px-4 py-3` |
| Review card | `rounded-[24px] bg-white p-4 shadow-soft` |
| Installment dock | `rounded-[28px] bg-white p-3 shadow-soft ring-1 ring-ink-100` |

## 8.7 Cart Preview
| Property | Value |
| --- | --- |
| Container | `mx-5 mt-7 rounded-[34px] bg-ink-900 p-4 text-white shadow-soft` |
| Empty state | `rounded-[28px] bg-white/10 p-4` |
| Cart line | `rounded-[28px] bg-white p-3 text-ink-900` |
| Cart image | `h-20 w-20 rounded-[22px] object-cover` |
| Stepper | `rounded-full bg-ink-50 p-1` |
| Summary panel | `rounded-[28px] bg-white/10 p-4` |
| Checkout CTA | `h-14 rounded-[22px] bg-brand-500` |

## 8.8 Bottom Navigation
| Property | Value |
| --- | --- |
| Position | `fixed bottom-0 left-1/2 z-40` |
| Width | `w-full max-w-[430px] -translate-x-1/2` |
| Padding | `px-5 pb-[calc(var(--safe-bottom)+14px)]` |
| Surface | `rounded-[30px] border border-white/70 bg-white/82 p-2` |
| Backdrop | `backdrop-blur-2xl` |
| Active item | `rounded-[22px] bg-ink-900 text-white` |
| Inactive item | `text-ink-500` |
| Item type | `text-[0.67rem] font-black` |

---

## 9. Iconography

### 9.1 Library
- Primary icon set: `lucide-react`.
- Stroke-based icons only; avoid filled mixed icon packs except intentional heart fill state.

### 9.2 Sizes
| Context | Size |
| --- | --- |
| Header icon | `20px–21px` |
| Search icon | `22px` |
| Bottom nav icon | `20px` |
| Product card add icon | `19px` |
| Trust tile icon | `20px` |
| Review star | `14px–15px` |
| CTA icon | `20px` |

### 9.3 Rules
- Icons inherit text color unless representing rating/brand state.
- Stars may use `fill="#f77b12"`.
- Wishlist heart fill uses `#f77b12` when active and transparent when inactive.

---

## 10. Motion & Interaction

### 10.1 Motion Tokens
| Token | Value | Usage |
| --- | --- | --- |
| Tap | `{ scale: 0.97 }` | buttons, chips, icon actions |
| Spring | `{ type: "spring", stiffness: 310, damping: 28, mass: 0.9 }` | general premium movement |
| Sheet | `{ type: "spring", stiffness: 260, damping: 32 }` | bottom sheet / modal movement |
| Carousel | `{ type: "spring", stiffness: 240, damping: 30, mass: 0.8 }` | gallery entry and rails |

### 10.2 Existing Animation Pattern
Gallery cards enter with:
- initial: `opacity: 0`, `y: 12`.
- while in view: `opacity: 1`, `y: 0`.
- delay: `index * 0.04`.

### 10.3 Reduced Motion
Global reduced motion must force:
- `animation-duration: 0.01ms`.
- `animation-iteration-count: 1`.
- `scroll-behavior: auto`.
- `transition-duration: 0.01ms`.

### 10.4 Interaction Rules
- Every tappable purchase action uses tap compression.
- Do not animate layout in a way that delays purchase decisions.
- Motion must confirm state change: wishlist, add-to-cart, color selected, filter applied.
- No infinite decorative animation on product or checkout screens.

---

## 11. Imagery & Media

### 11.1 Product Images
- Must be high-resolution, editorial, premium, and object-cover.
- Product hero image: full bleed inside `420px` height card.
- Product card image: `h-48` inside `220px` card.
- Product detail gallery: `h-56`, `min-w-[84%]`, horizontal snap.

### 11.2 Overlay Rules
- Use dark gradient overlays only when text is placed on image.
- Hero overlay must preserve product visibility while making white text readable.
- Avoid loud marketplace-style stickers over luxury product images.

### 11.3 Alt Text
- Arabic alt text is required.
- Gallery images use product name plus image index.

---

## 12. Layout Patterns

### 12.1 Horizontal Rails
- Use `no-scrollbar` utility.
- Preserve starting gutter `20px`.
- Use `gap-2` for chips, `gap-3` for product/gallery rails.
- Use snap behavior for immersive galleries.

### 12.2 Dark Trust Zones
Use dark ink zones for:
- hero backgrounds,
- variant purchase panel,
- cart preview,
- future checkout summary,
- payment confirmation.

Rules:
- Text on dark: white or white opacity `56%–76%`.
- Avoid low-contrast orange body text on dark; reserve orange for labels/CTA.

### 12.3 White Elevated Zones
Use white surfaces for:
- product cards,
- reviews,
- inner price panels,
- header glass,
- bottom nav glass.

Rules:
- White can be translucent only for glass overlays.
- Use warm shadows, not cold gray shadows.

---

## 13. Accessibility & Readability

### 13.1 Contrast
- Primary text: `ink-900` on white/ivory.
- Secondary text: `ink-500` or stronger; do not use lighter text for important Arabic content.
- CTA text: white on `brand-500` or white on `ink-900`.
- Microcopy can use `ink-400` only when non-critical.

### 13.2 Tap Targets
- Icon buttons: prefer `48px` square.
- Bottom nav item height: preserve `py-3` and rounded item geometry.
- Small chips must not be the only way to complete a critical task.

### 13.3 Arabic UX
- Use Arabic-native commercial phrases:
  - `السعر شامل الضريبة`,
  - `دفع آمن`,
  - `شراء موثّق`,
  - `توصيل ذكي`,
  - `متابعة الدفع الآمن`.
- Avoid literal translations from English marketplace UIs.

---

## 14. Pixel-Perfect QA Checklist

Before approving any visual change:

### Shell
- [ ] Width remains `min(100vw, 430px)`.
- [ ] No desktop/tablet breakpoint added.
- [ ] Safe areas are respected at top and bottom.
- [ ] RTL remains default.

### Color
- [ ] All colors come from documented palette.
- [ ] Orange is used only for high-intent or brand emphasis.
- [ ] Dark surfaces use ink values, not arbitrary black.
- [ ] Text contrast remains readable.

### Spacing
- [ ] Primary sections use `20px` horizontal gutter.
- [ ] Section rhythm follows `24px+` vertical spacing.
- [ ] Card internals use `16px` or documented exceptions.
- [ ] Rail gaps follow `8px–12px` chips / `12px` cards.

### Radius
- [ ] Large cards stay between `28px–34px`.
- [ ] Media radius is slightly smaller than parent card.
- [ ] Buttons stay around `18px–22px` or pill.

### Typography
- [ ] Arabic headings are heavy and tight.
- [ ] Body copy keeps generous line-height.
- [ ] Prices are visually dominant and clear.
- [ ] Micro labels are not overused.

### Components
- [ ] Header surface remains glass-like and safe-area aware.
- [ ] Bottom nav remains fixed inside `430px` shell.
- [ ] Product cards retain premium density.
- [ ] CTAs communicate purchase intent clearly.

### Motion
- [ ] Tap compression exists for interactive buttons.
- [ ] Reduced motion remains supported.
- [ ] No decorative animation blocks conversion.

---

## 15. Implementation Mapping

| Design spec | Source file today |
| --- | --- |
| Design tokens | `src/lib/design-system.ts` |
| Color palette in Tailwind | `tailwind.config.ts` |
| Shell, global RTL, safe areas | `src/app/globals.css` |
| Metadata and viewport | `src/app/layout.tsx` |
| Header/search/category/product/cart/nav components | `src/components/mobile/ui.tsx` |
| Product visual data | `src/lib/commerce-data.ts` |
| Roadmap governance | `docs/mobile-visual-commerce-roadmap.md` |
| Phase tracking | `docs/phase-log.md` |
| Current inventory | `docs/current-inventory.md` |

## 16. Future Design Governance

- Any new screen must start from this file and `docs/mobile-visual-commerce-roadmap.md`.
- If a phase changes tokens, update this file in the same commit.
- If implementation diverges from this file, either correct the implementation or document the design decision here.
- This file should remain shorter than the roadmap but more precise visually.
