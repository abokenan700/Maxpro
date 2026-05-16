import { NextResponse } from "next/server";
import { products } from "@/lib/commerce-data";
import { normalizeArabicSearch } from "@/lib/design-system";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = normalizeArabicSearch(query);

  const rankedResults = products
    .map((product) => {
      const haystack = normalizeArabicSearch(`${product.name} ${product.story} ${product.badge} ${product.materials.join(" ")}`);
      const exactName = normalizeArabicSearch(product.name).includes(normalizedQuery) ? 30 : 0;
      const storyHit = normalizeArabicSearch(product.story).includes(normalizedQuery) ? 12 : 0;
      const materialHit = product.materials.some((material) => normalizeArabicSearch(material).includes(normalizedQuery)) ? 8 : 0;
      const popularity = Math.round(product.rating * 3) + Math.min(product.reviews / 100, 12);
      return { product, haystack, score: normalizedQuery.length === 0 ? popularity : exactName + storyHit + materialHit + popularity };
    })
    .filter(({ haystack, score }) => normalizedQuery.length === 0 || haystack.includes(normalizedQuery) || score > 18)
    .sort((a, b) => b.score - a.score)
    .map(({ product, score }) => ({ ...product, searchScore: Number(score.toFixed(2)) }));

  return NextResponse.json({
    query,
    locale: "ar-SA",
    direction: "rtl",
    engine: "arabic-commerce-ranking-v1",
    suggestions: ["حقيبة جلدية", "ساعة سفر", "حذاء مريح", "هدية فاخرة"],
    filters: {
      colors: Array.from(new Set(products.flatMap((product) => product.colors))),
      inventory: ["متوفر الآن", "كمية محدودة"],
      priceRangeSar: [0, Math.max(...products.map((product) => product.price))]
    },
    results: rankedResults
  });
}
