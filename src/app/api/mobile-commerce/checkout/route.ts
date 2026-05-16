import { NextResponse } from "next/server";
import { z } from "zod";

const SAR_TAX_RATE = 0.15;
const checkoutSchema = z.object({
  lines: z.array(
    z.object({
      productId: z.string().min(1),
      quantity: z.number().int().min(1).max(10),
      unitPrice: z.number().positive(),
      selectedColor: z.string().optional()
    })
  ).min(1),
  city: z.string().min(2).default("الرياض"),
  coupon: z.string().trim().optional(),
  walletCredit: z.number().min(0).default(0),
  deliveryWindow: z.string().optional()
});

export async function POST(request: Request) {
  const parsed = checkoutSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { code: "INVALID_CHECKOUT", messageAr: "تحقق من بيانات السلة والتوصيل قبل المتابعة.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const body = parsed.data;
  const subtotal = body.lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
  const shipping = body.city === "الرياض" || subtotal >= 500 ? 0 : 35;
  const couponDiscount = body.coupon === "MAXPRO" ? Math.min(subtotal * 0.1, 150) : 0;
  const walletDiscount = Math.min(body.walletCredit, Math.max(subtotal + shipping - couponDiscount, 0));
  const discount = couponDiscount + walletDiscount;
  const taxable = Math.max(subtotal + shipping - discount, 0);
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
    selectedDeliveryWindow: body.deliveryWindow ?? "أقرب موعد متاح",
    riskDecision: "APPROVED_LOW_RISK",
    nextAction: "CONFIRM_PAYMENT"
  });
}
