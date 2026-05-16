import { NextResponse } from "next/server";
import { products } from "@/lib/commerce-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = query.replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").toLowerCase();

  const results = products.filter((product) => {
    const haystack = `${product.name} ${product.story}`.replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").toLowerCase();
    return normalizedQuery.length === 0 || haystack.includes(normalizedQuery);
  });

  return NextResponse.json({
    query,
    locale: "ar-SA",
    direction: "rtl",
    suggestions: ["حقيبة جلدية", "ساعة سفر", "حذاء مريح"],
    results
  });
}
