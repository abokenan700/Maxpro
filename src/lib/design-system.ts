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
    media: 24,
    control: 18,
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
    sheet: { type: "spring", stiffness: 260, damping: 32 }
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
    success: "#188c58",
    error: "#c83737",
    warning: "#c87a13",
    info: "#2667c9"
  },
  surfaces: {
    app: "#fcfbf8",
    elevated: "rgba(255,255,255,0.86)",
    sheet: "#fffaf1",
    navigation: "rgba(255,255,255,0.78)",
    darkApp: "#0b0806",
    darkElevated: "#16110e"
  }
} as const;

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
  colors: string[];
  inventory: "high" | "medium" | "low";
};

export const formatSar = (value: number) =>
  new Intl.NumberFormat("ar-SA", { style: "currency", currency: "SAR", maximumFractionDigits: 0 }).format(value);
