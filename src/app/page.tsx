import { BottomNavigation, CategoryRail, MobileHeader, ProductCard, ProductHero, SearchBar } from "@/components/mobile/ui";
import { categories, heroProduct, products, trustSignals } from "@/lib/commerce-data";
import { formatSar } from "@/lib/design-system";

export default function HomePage() {
  return (
    <main className="mobile-shell pb-32" aria-label="واجهة ماكس برو للتجارة الفاخرة">
      <MobileHeader />
      <SearchBar />
      <CategoryRail categories={categories} />
      <ProductHero product={heroProduct} />

      <section className="px-5 pt-7">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-black text-brand-600">اختيارات ذكية</p>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-ink-900">منتجات تناسب ذوقك</h2>
          </div>
          <button className="rounded-full bg-ink-50 px-4 py-2 text-xs font-black text-ink-500">عرض الكل</button>
        </div>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
          {products.slice(1).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-5 mt-7 rounded-[32px] bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black text-brand-600">دفع مرن</p>
            <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-ink-900">قسّم مشترياتك بلا رسوم</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-ink-500">
              ادفع على ٤ دفعات تبدأ من {formatSar(Math.ceil(heroProduct.price / 4))} مع تأكيد فوري للطلب.
            </p>
          </div>
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[24px] bg-brand-50 text-center text-xs font-black text-brand-700">
            ٤x
            <br />
            آمنة
          </div>
        </div>
      </section>

      <section className="mx-5 mt-4 grid gap-2">
        {trustSignals.map((signal) => (
          <div key={signal} className="rounded-[22px] border border-ink-100 bg-white/72 px-4 py-3 text-sm font-black text-ink-700 shadow-soft">
            {signal}
          </div>
        ))}
      </section>

      <BottomNavigation />
    </main>
  );
}
