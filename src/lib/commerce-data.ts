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
  gallery: [
    "https://images.unsplash.com/photo-1590739225280-d9f361d6d823?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85"
  ],
  colors: ["#211a15", "#b98b53", "#efeadd"],
  inventory: "low",
  deliveryPromise: "يصلك غداً بين ٦ و٩ مساءً داخل الرياض",
  installmentMonths: 4,
  materials: ["جلد إيطالي محبب", "بطانة مخملية مقاومة للخدش", "إغلاق مغناطيسي آمن", "تغليف هدايا فاخر"],
  bundle: {
    title: "طقم المدينة الذكي",
    saving: 180,
    items: ["الحقيبة الجلدية", "محفظة بطاقات نحيفة", "رذاذ حماية الجلد"]
  },
  reviewHighlights: [
    {
      id: "rv-1",
      author: "نورة العبدالله",
      rating: 5,
      body: "الخامة فاخرة جداً والحجم مناسب للدوام والسفر القصير. التغليف أعطى إحساس هدية حقيقي.",
      verified: true
    },
    {
      id: "rv-2",
      author: "سارة الحربي",
      rating: 5,
      body: "وصلت في نفس اليوم، اللون البني أعمق وأجمل من الصور، والسحاب ناعم جداً.",
      verified: true
    }
  ]
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
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85"
    ],
    colors: ["#0b0806", "#d9ceba"],
    inventory: "medium",
    deliveryPromise: "شحن مجاني خلال ٢٤ ساعة للمدن الرئيسية",
    installmentMonths: 4,
    materials: ["تيتانيوم خفيف", "زجاج مقاوم للخدش", "مقاومة ماء ٥ATM"],
    reviewHighlights: [
      {
        id: "rv-3",
        author: "فيصل محمد",
        rating: 5,
        body: "بطارية ممتازة وواجهة عربية واضحة. مناسبة جداً للسفر والتنقل.",
        verified: true
      }
    ]
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
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85"
    ],
    colors: ["#f77b12", "#ffffff", "#211a15"],
    inventory: "high",
    deliveryPromise: "تبديل مقاس مجاني من الباب للباب خلال ١٤ يوماً",
    installmentMonths: 4,
    materials: ["نسيج تنفس", "وسادة هوائية", "نعل مقاوم للانزلاق"],
    reviewHighlights: [
      {
        id: "rv-4",
        author: "عبدالله صالح",
        rating: 5,
        body: "مريح للمشي الطويل والمقاس مطابق للجدول.",
        verified: true
      }
    ]
  }
];

export const categories = ["وصل حديثاً", "حقائب", "ساعات", "أحذية", "هدايا"] as const;

export const trustSignals = [
  "دفع آمن مشفر وفق معايير PCI",
  "توصيل خلال ٢٤ ساعة داخل الرياض",
  "استرجاع مجاني خلال ١٤ يوماً"
] as const;

export const checkoutTrust = ["Apple Pay ومدى", "تأكيد فوري", "فاتورة ضريبية", "دعم واتساب"] as const;
