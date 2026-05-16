export const designTokens = {
  mode: "mobile-only-rtl",
  spacing: {
    pageX: 20,
    sectionY: 24,
    card: 16,
    compact: 10,
    touchTarget: 48
  },
  radius: {
    card: 28,
    hero: 34,
    media: 24,
    control: 18,
    sheet: 32,
    pill: 999
  },
  typography: {
    hero: "text-[2.1rem] leading-[1.05] font-black tracking-[-0.04em]",
    title: "text-[1.45rem] leading-[1.18] font-extrabold tracking-[-0.02em]",
    subtitle: "text-[1.05rem] leading-7 font-bold",
    body: "text-[0.92rem] leading-7 font-medium",
    caption: "text-[0.74rem] leading-5 font-bold"
  },
  motion: {
    spring: { type: "spring", stiffness: 310, damping: 28, mass: 0.9 },
    tap: { scale: 0.97 },
    sheet: { type: "spring", stiffness: 260, damping: 32 },
    carousel: { type: "spring", stiffness: 240, damping: 30, mass: 0.8 }
  }
} as const;

export const colorArchitecture = {
  brandPrimary: {
    hex: "#f77b12",
    rgb: "247 123 18",
    hsl: "27 93% 52%",
    tailwind: "brand-500",
    usage: "Primary purchase CTAs, selected navigation, high-intent highlights.",
    contrastOnInk1000: "8.4:1"
  },
  brandSecondary: {
    hex: "#b98b53",
    rgb: "185 139 83",
    hsl: "33 42% 53%",
    tailwind: "brand-luxury",
    usage: "Premium storytelling badges, editorial surfaces, and giftable product moments.",
    contrastOnInk1000: "7.1:1"
  },
  cta: {
    hex: "#211a15",
    rgb: "33 26 21",
    hsl: "25 22% 11%",
    tailwind: "ink-900",
    usage: "Sticky add-to-cart and payment actions where maximum trust is required.",
    contrastOnWhite: "16.2:1"
  },
  neutralScale: {
    0: "#ffffff",
    25: "#fcfbf8",
    50: "#f8f5ef",
    100: "#efeadf",
    150: "#e5ddce",
    200: "#d9ceba",
    300: "#bcae96",
    400: "#9a886f",
    500: "#7f6b53",
    600: "#66533f",
    700: "#514131",
    800: "#372c22",
    900: "#211a15",
    950: "#16110e",
    1000: "#0b0806"
  },
  semantic: {
    success: { hex: "#188c58", rgb: "24 140 88", hsl: "153 71% 32%", usage: "Inventory confidence and successful payment feedback.", contrastOnWhite: "4.7:1" },
    error: { hex: "#c83737", rgb: "200 55 55", hsl: "0 57% 50%", usage: "Validation errors, failed payments, and destructive confirmations.", contrastOnWhite: "4.3:1" },
    warning: { hex: "#c87a13", rgb: "200 122 19", hsl: "34 83% 43%", usage: "Low-stock urgency and limited delivery windows.", contrastOnWhite: "3.1:1 with large/bold text" },
    info: { hex: "#2667c9", rgb: "38 103 201", hsl: "216 68% 47%", usage: "Delivery intelligence, support notices, and neutral guidance.", contrastOnWhite: "5.1:1" }
  },
  surfaces: {
    app: "#fcfbf8",
    elevated: "rgba(255,255,255,0.86)",
    sheet: "#fffaf1",
    navigation: "rgba(255,255,255,0.78)",
    glass: "rgba(255,255,255,0.18)",
    darkApp: "#0b0806",
    darkElevated: "#16110e"
  }
} as const;

export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  body: string;
  verified: boolean;
};

export type ProductBundle = {
  title: string;
  saving: number;
  items: string[];
};

export type Product = {
  id: string;
  name: string;
  story: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  gallery: string[];
  colors: string[];
  inventory: "high" | "medium" | "low";
  deliveryPromise: string;
  installmentMonths: number;
  materials: string[];
  bundle?: ProductBundle;
  reviewHighlights: ProductReview[];
};

export type CheckoutQuote = {
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;
};

export const formatSar = (value: number) =>
  new Intl.NumberFormat("ar-SA", { style: "currency", currency: "SAR", maximumFractionDigits: 0 }).format(value);

export const normalizeArabicSearch = (value: string) =>
  value
    .trim()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\u064B-\u065F]/g, "")
    .toLowerCase();

export const inventoryLabel = (inventory: Product["inventory"]) => {
  if (inventory === "low") return { label: "كمية محدودة", tone: "warning" as const };
  if (inventory === "medium") return { label: "متوفر بكمية جيدة", tone: "info" as const };
  return { label: "متوفر الآن", tone: "success" as const };
};
