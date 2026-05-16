"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Bell, ChevronLeft, Heart, Home, Minus, PackageCheck, Plus, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, UserRound, WalletCards } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/lib/design-system";
import { designTokens, formatSar, inventoryLabel } from "@/lib/design-system";
import { checkoutTrust } from "@/lib/commerce-data";
import { useCommerceStore } from "@/store/commerce-store";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  const cartCount = useCommerceStore((state) => state.cartCount());

  return (
    <header className="sticky top-0 z-30 px-5 pb-3 pt-[calc(var(--safe-top)+14px)] backdrop-blur-2xl">
      <div className="flex items-center justify-between rounded-[26px] border border-white/70 bg-white/70 px-4 py-3 shadow-soft">
        <div>
          <p className="text-xs font-black text-brand-600">ماكس برو</p>
          <h1 className="text-lg font-black tracking-[-0.03em] text-ink-900">تسوقك الفاخر اليوم</h1>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={designTokens.motion.tap}
            aria-label="فتح الإشعارات"
            className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink-700 shadow-soft"
          >
            <Bell size={20} />
            {!!cartCount && <span className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-brand-500" />}
          </motion.button>
          <motion.button
            whileTap={designTokens.motion.tap}
            aria-label="فتح الملف الشخصي"
            className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white shadow-glow"
          >
            <UserRound size={21} />
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export function SearchBar() {
  return (
    <div className="mx-5 mt-2 flex h-14 items-center gap-3 rounded-[22px] border border-ink-100 bg-white/80 px-4 shadow-soft">
      <Search className="text-brand-600" size={22} />
      <input
        aria-label="بحث عن المنتجات"
        className="min-w-0 flex-1 bg-transparent text-[0.95rem] font-bold outline-none placeholder:text-ink-400"
        placeholder="ابحث باسم المنتج أو اللون"
      />
      <span className="rounded-full bg-ink-50 px-3 py-1 text-xs font-black text-ink-500">AI</span>
    </div>
  );
}

export function CategoryRail({ categories }: { categories: readonly string[] }) {
  const selectedCategory = useCommerceStore((state) => state.selectedCategory);
  const setCategory = useCommerceStore((state) => state.setCategory);

  return (
    <nav aria-label="تصنيفات المنتجات" className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-4">
      {categories.map((category) => {
        const active = category === selectedCategory;
        return (
          <motion.button
            whileTap={designTokens.motion.tap}
            key={category}
            onClick={() => setCategory(category)}
            className={cn(
              "shrink-0 rounded-full px-5 py-3 text-sm font-black transition",
              active ? "bg-ink-900 text-white shadow-glow" : "bg-white text-ink-500 shadow-soft"
            )}
          >
            {category}
          </motion.button>
        );
      })}
    </nav>
  );
}

export function ProductHero({ product }: { product: Product }) {
  const addToCart = useCommerceStore((state) => state.addToCart);
  const toggleWishlist = useCommerceStore((state) => state.toggleWishlist);
  const wishlistIds = useCommerceStore((state) => state.wishlistIds);
  const wished = wishlistIds.includes(product.id);
  const stock = inventoryLabel(product.inventory);

  return (
    <section className="mx-5 overflow-hidden rounded-[34px] bg-ink-900 text-white shadow-soft">
      <div className="relative h-[420px]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-1000 via-ink-900/22 to-transparent" />
        <div className="absolute right-4 top-4 rounded-full bg-white/86 px-4 py-2 text-xs font-black text-ink-900 backdrop-blur-xl">
          {product.badge}
        </div>
        <motion.button
          whileTap={designTokens.motion.tap}
          onClick={() => toggleWishlist(product.id)}
          aria-label="إضافة للمفضلة"
          className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/86 text-ink-900 backdrop-blur-xl"
        >
          <Heart size={21} fill={wished ? "#f77b12" : "transparent"} className={wished ? "text-brand-500" : ""} />
        </motion.button>
        <div className="absolute left-4 top-[76px] rounded-full bg-ink-900/50 px-3 py-2 text-[0.68rem] font-black text-white backdrop-blur-xl">
          {stock.label}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[2rem] font-black leading-[1.08] tracking-[-0.04em]">{product.name}</h2>
              <p className="mt-2 max-w-[18rem] text-sm font-bold leading-6 text-white/76">{product.story}</p>
            </div>
            <div className="rounded-[22px] bg-white/14 px-3 py-2 text-center backdrop-blur-xl">
              <p className="text-lg font-black">{product.rating}</p>
              <p className="text-[0.68rem] font-bold text-white/70">{product.reviews} تقييم</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-[26px] bg-white p-3 text-ink-900">
            <div>
              <p className="text-[0.68rem] font-black text-ink-400">السعر شامل الضريبة</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-black">{formatSar(product.price)}</p>
                {product.compareAt && <p className="text-xs font-black text-ink-300 line-through">{formatSar(product.compareAt)}</p>}
              </div>
            </div>
            <motion.button
              whileTap={designTokens.motion.tap}
              onClick={() => addToCart(product)}
              className="rounded-[20px] bg-brand-500 px-5 py-4 text-sm font-black text-white shadow-glow"
            >
              أضف للسلة
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCommerceStore((state) => state.addToCart);
  return (
    <article className="min-w-[220px] rounded-[30px] bg-white p-3 shadow-soft">
      <div className="h-48 overflow-hidden rounded-[24px] bg-ink-50">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="px-1 pt-3">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-black leading-6 text-ink-900">{product.name}</h3>
          <span className="rounded-full bg-brand-50 px-2 py-1 text-[0.65rem] font-black text-brand-700">{product.badge}</span>
        </div>
        <p className="line-clamp-2 text-xs font-bold leading-5 text-ink-500">{product.story}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-black text-ink-900">{formatSar(product.price)}</p>
          <motion.button
            whileTap={designTokens.motion.tap}
            onClick={() => addToCart(product)}
            aria-label={`إضافة ${product.name} للسلة`}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 text-white"
          >
            <ShoppingBag size={19} />
          </motion.button>
        </div>
      </div>
    </article>
  );
}

export function ProductDetailExperience({ product }: { product: Product }) {
  const addToCart = useCommerceStore((state) => state.addToCart);
  const selectedColor = useCommerceStore((state) => state.selectedColorByProduct[product.id] ?? product.colors[0]);
  const setSelectedColor = useCommerceStore((state) => state.setSelectedColor);
  const stock = inventoryLabel(product.inventory);
  const installment = Math.ceil(product.price / product.installmentMonths);

  return (
    <section className="mx-5 mt-7 rounded-[34px] bg-white p-4 shadow-soft" aria-labelledby="product-detail-title">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black text-brand-600">تجربة المنتج</p>
          <h2 id="product-detail-title" className="mt-1 text-2xl font-black tracking-[-0.04em] text-ink-900">
            تفاصيل شراء ذكية
          </h2>
        </div>
        <div className="rounded-[22px] bg-ink-50 px-3 py-2 text-center">
          <div className="flex items-center justify-center gap-1 text-ink-900">
            <Star size={15} fill="#f77b12" className="text-brand-500" />
            <span className="text-sm font-black">{product.rating}</span>
          </div>
          <p className="text-[0.65rem] font-black text-ink-400">موثّق</p>
        </div>
      </div>

      <div className="no-scrollbar mt-4 flex snap-x gap-3 overflow-x-auto pb-1">
        {product.gallery.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...designTokens.motion.carousel, delay: index * 0.04 }}
            className="h-56 min-w-[84%] snap-center overflow-hidden rounded-[28px] bg-ink-50"
          >
            <img src={image} alt={`${product.name} - صورة ${index + 1}`} className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <TrustTile icon={ShieldCheck} label="أصلي 100٪" value="ضمان سنتين" />
        <TrustTile icon={Truck} label="تسليم ذكي" value="نافذة محددة" />
        <TrustTile icon={WalletCards} label="تقسيط" value={`${product.installmentMonths} دفعات`} />
      </div>

      <div className="mt-4 rounded-[28px] bg-ink-900 p-4 text-white">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-black text-white/56">اختر اللون</p>
            <div className="mt-3 flex gap-2">
              {product.colors.map((color) => (
                <motion.button
                  key={color}
                  whileTap={designTokens.motion.tap}
                  onClick={() => setSelectedColor(product.id, color)}
                  aria-label={`اختيار اللون ${color}`}
                  className={cn("grid h-10 w-10 place-items-center rounded-2xl border", selectedColor === color ? "border-brand-400" : "border-white/20")}
                >
                  <span className="h-6 w-6 rounded-full border border-white/35" style={{ backgroundColor: color }} />
                </motion.button>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] bg-white/12 px-3 py-2 text-left backdrop-blur-xl">
            <p className="text-[0.68rem] font-black text-white/60">{stock.label}</p>
            <p className="text-sm font-black">{product.deliveryPromise}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2">
        {product.materials.map((material) => (
          <div key={material} className="flex items-center gap-3 rounded-[22px] bg-ink-25 px-4 py-3 text-sm font-black text-ink-700">
            <BadgeCheck size={18} className="shrink-0 text-success" />
            <span>{material}</span>
          </div>
        ))}
      </div>

      {product.bundle && (
        <div className="mt-3 rounded-[28px] border border-brand-100 bg-brand-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black text-brand-700">باقة موصى بها</p>
              <h3 className="mt-1 text-lg font-black text-ink-900">{product.bundle.title}</h3>
              <p className="mt-1 text-sm font-bold leading-6 text-ink-600">وفر {formatSar(product.bundle.saving)} عند إضافة الطقم كاملاً.</p>
            </div>
            <Sparkles className="text-brand-600" size={24} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.bundle.items.map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-2 text-[0.7rem] font-black text-ink-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 rounded-[28px] bg-ink-25 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-black text-ink-900">آراء العملاء</h3>
          <button className="flex items-center gap-1 text-xs font-black text-brand-700">
            الكل <ChevronLeft size={15} />
          </button>
        </div>
        <div className="grid gap-3">
          {product.reviewHighlights.map((review) => (
            <article key={review.id} className="rounded-[24px] bg-white p-4 shadow-soft">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="font-black text-ink-900">{review.author}</p>
                <div className="flex items-center gap-1 text-xs font-black text-brand-600">
                  <Star size={14} fill="#f77b12" /> {review.rating}.0
                </div>
              </div>
              <p className="text-sm font-bold leading-6 text-ink-600">{review.body}</p>
              {review.verified && <p className="mt-2 text-[0.68rem] font-black text-success">شراء موثّق من ماكس برو</p>}
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[28px] bg-white p-3 shadow-soft ring-1 ring-ink-100">
        <div>
          <p className="text-[0.68rem] font-black text-ink-400">أو ادفع شهرياً</p>
          <p className="text-lg font-black text-ink-900">{formatSar(installment)} × {product.installmentMonths}</p>
        </div>
        <motion.button
          whileTap={designTokens.motion.tap}
          onClick={() => addToCart(product, selectedColor)}
          className="rounded-[22px] bg-ink-900 px-5 py-4 text-sm font-black text-white shadow-glow"
        >
          أضف اللون المختار
        </motion.button>
      </div>
    </section>
  );
}

function TrustTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-[24px] bg-ink-25 p-3 text-center">
      <Icon className="mx-auto text-brand-600" size={20} />
      <p className="mt-2 text-[0.65rem] font-black text-ink-400">{label}</p>
      <p className="text-[0.72rem] font-black text-ink-800">{value}</p>
    </div>
  );
}

export function CartPreviewSheet() {
  const cart = useCommerceStore((state) => state.cart);
  const addToCart = useCommerceStore((state) => state.addToCart);
  const decrementCartLine = useCommerceStore((state) => state.decrementCartLine);
  const cartTotal = useCommerceStore((state) => state.cartTotal());
  const cartCount = useCommerceStore((state) => state.cartCount());
  const shipping = cartTotal > 500 || cartTotal === 0 ? 0 : 35;
  const tax = Math.round((cartTotal + shipping) * 0.15);
  const total = cartTotal + shipping + tax;

  return (
    <section className="mx-5 mt-7 rounded-[34px] bg-ink-900 p-4 text-white shadow-soft" aria-labelledby="cart-preview-title">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black text-brand-300">السلة الذكية</p>
          <h2 id="cart-preview-title" className="mt-1 text-2xl font-black tracking-[-0.04em]">ملخص جاهز للدفع</h2>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12 text-sm font-black">{cartCount}</div>
      </div>

      <div className="mt-4 grid gap-3">
        {cart.length === 0 ? (
          <div className="rounded-[28px] bg-white/10 p-4 text-sm font-bold leading-7 text-white/72">
            أضف منتجاً للسلة لتظهر تجربة الدفع، التوصيل، الضريبة، وطرق الدفع المتاحة فوراً.
          </div>
        ) : (
          cart.map((line) => (
            <article key={`${line.product.id}-${line.selectedColor}`} className="flex gap-3 rounded-[28px] bg-white p-3 text-ink-900">
              <img src={line.product.image} alt={line.product.name} className="h-20 w-20 rounded-[22px] object-cover" />
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-1 font-black">{line.product.name}</h3>
                <p className="mt-1 text-xs font-bold text-ink-500">لون مختار <span className="inline-block h-3 w-3 rounded-full align-middle" style={{ backgroundColor: line.selectedColor }} /></p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <p className="font-black">{formatSar(line.product.price * line.quantity)}</p>
                  <div className="flex items-center gap-2 rounded-full bg-ink-50 p-1">
                    <button onClick={() => decrementCartLine(line.product.id, line.selectedColor)} aria-label="إنقاص الكمية" className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink-700">
                      <Minus size={15} />
                    </button>
                    <span className="w-5 text-center text-sm font-black">{line.quantity}</span>
                    <button onClick={() => addToCart(line.product, line.selectedColor)} aria-label="زيادة الكمية" className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-white">
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="mt-4 grid gap-2 rounded-[28px] bg-white/10 p-4 text-sm font-bold">
        <SummaryLine label="المجموع" value={formatSar(cartTotal)} />
        <SummaryLine label="الشحن" value={shipping === 0 ? "مجاني" : formatSar(shipping)} />
        <SummaryLine label="ضريبة القيمة المضافة" value={formatSar(tax)} />
        <div className="h-px bg-white/12" />
        <SummaryLine label="الإجمالي" value={formatSar(total)} strong />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {checkoutTrust.map((item) => (
          <span key={item} className="rounded-full bg-white/10 px-3 py-2 text-[0.68rem] font-black text-white/76">
            {item}
          </span>
        ))}
      </div>

      <motion.button
        whileTap={designTokens.motion.tap}
        disabled={!cart.length}
        className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-[22px] bg-brand-500 text-sm font-black text-white shadow-glow disabled:cursor-not-allowed disabled:bg-white/18 disabled:text-white/42"
      >
        <PackageCheck size={20} /> متابعة الدفع الآمن
      </motion.button>
    </section>
  );
}

function SummaryLine({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={cn("flex items-center justify-between", strong ? "text-lg font-black text-white" : "text-white/72")}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function BottomNavigation() {
  const cartCount = useCommerceStore((state) => state.cartCount());
  const items = [
    { label: "الرئيسية", icon: Home, active: true },
    { label: "البحث", icon: Search },
    { label: "السلة", icon: ShoppingBag, badge: cartCount },
    { label: "حسابي", icon: UserRound }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 px-5 pb-[calc(var(--safe-bottom)+14px)]">
      <div className="grid grid-cols-4 rounded-[30px] border border-white/70 bg-white/82 p-2 shadow-nav backdrop-blur-2xl">
        {items.map(({ label, icon: Icon, active, badge }) => (
          <button key={label} className={cn("relative grid place-items-center gap-1 rounded-[22px] py-3 text-[0.67rem] font-black", active ? "bg-ink-900 text-white" : "text-ink-500")}>
            <Icon size={20} />
            <span>{label}</span>
            {!!badge && <span className="absolute left-4 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[0.6rem] text-white">{badge}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
