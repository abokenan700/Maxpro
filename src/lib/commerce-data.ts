import type { Product } from "./design-system";

export const heroProduct: Product = {
  id: "mx-signature-01",
  name: "حقيبة ماكس برو الجلدية",
  story: "جلد إيطالي، بطانة مخملية، وحجم يومي مصمم لرحلات المدينة السريعة.",
  price: 1290,
  compareAt: 1490,
  rating: 4.9,
  reviews: 824,
  badge: "إصدار محدود",
  image: "https://images.unsplash.com/photo-1590739225280-d9f361d6d823?auto=format&fit=crop&w=900&q=85",
  colors: ["#211a15", "#b98b53", "#efeadd"],
  inventory: "low"
};

export const products: Product[] = [
  heroProduct,
  {
    id: "mx-watch-02",
    name: "ساعة سفر ذكية",
    story: "إطار تيتانيوم، تتبع صحي، وبطارية تتحمل أسبوعاً كاملاً.",
    price: 1890,
    rating: 4.8,
    reviews: 512,
    badge: "الأكثر طلباً",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    colors: ["#0b0806", "#d9ceba"],
    inventory: "medium"
  },
  {
    id: "mx-sneaker-03",
    name: "حذاء كومفورت برو",
    story: "وسادة هوائية خفيفة ونعل مرن للمشي الطويل داخل المدينة.",
    price: 740,
    compareAt: 860,
    rating: 4.7,
    reviews: 1330,
    badge: "خصم ذكي",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    colors: ["#f77b12", "#ffffff", "#211a15"],
    inventory: "high"
  }
];

export const categories = ["وصل حديثاً", "حقائب", "ساعات", "أحذية", "هدايا"] as const;

export const trustSignals = [
  "دفع آمن مشفر",
  "توصيل خلال ٢٤ ساعة داخل الرياض",
  "استرجاع مجاني خلال ١٤ يوماً"
] as const;
