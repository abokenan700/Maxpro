import { NextResponse } from "next/server";

const SAR_TAX_RATE = 0.15;

type CheckoutLine = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export async function POST(request: Request) {
  const body = (await request.json()) as { lines?: CheckoutLine[]; city?: string; coupon?: string };
  const lines = body.lines ?? [];

  if (!lines.length) {
    return NextResponse.json({ code: "EMPTY_CART", messageAr: "السلة فارغة، أضف منتجاً قبل إتمام الشراء." }, { status: 400 });
  }

  const subtotal = lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
  const shipping = body.city === "الرياض" ? 0 : 35;
  const discount = body.coupon === "MAXPRO" ? Math.min(subtotal * 0.1, 150) : 0;
  const taxable = subtotal + shipping - discount;
  const tax = Math.round(taxable * SAR_TAX_RATE);
  const total = taxable + tax;

  return NextResponse.json({
    checkoutId: `chk_${Date.now()}`,
    currency: "SAR",
    subtotal,
    shipping,
    discount,
    tax,
    total,
    paymentMethods: ["Apple Pay", "Mada", "Visa", "Mastercard"],
    deliveryPromiseAr: body.city === "الرياض" ? "يصل خلال ٢٤ ساعة" : "يصل خلال ٢ إلى ٤ أيام",
    nextAction: "CONFIRM_PAYMENT"
  });
}
