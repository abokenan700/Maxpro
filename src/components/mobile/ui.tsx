"use client";

import { motion } from "framer-motion";
import { Heart, Home, Search, ShoppingBag, UserRound } from "lucide-react";
import type { Product } from "@/lib/design-system";
import { designTokens, formatSar } from "@/lib/design-system";
import { useCommerceStore } from "@/store/commerce-store";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 px-5 pb-3 pt-[calc(var(--safe-top)+14px)] backdrop-blur-2xl">
      <div className="flex items-center justify-between rounded-[26px] border border-white/70 bg-white/70 px-4 py-3 shadow-soft">
        <div>
          <p className="text-xs font-black text-brand-600">ماكس برو</p>
          <h1 className="text-lg font-black tracking-[-0.03em] text-ink-900">تسوقك الفاخر اليوم</h1>
        </div>
        <motion.button
          whileTap={designTokens.motion.tap}
          aria-label="فتح الملف الشخصي"
          className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white shadow-glow"
        >
          <UserRound size={21} />
        </motion.button>
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
              <p className="text-xl font-black">{formatSar(product.price)}</p>
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
