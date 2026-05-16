import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8ed",
          100: "#ffedcf",
          200: "#ffd79d",
          300: "#ffbb61",
          400: "#ff9d32",
          500: "#f77b12",
          600: "#d9580a",
          700: "#b43b0d",
          800: "#923012",
          900: "#782a12"
        },
        ink: {
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
        success: "#188c58",
        warning: "#c87a13",
        danger: "#c83737",
        info: "#2667c9"
      },
      fontFamily: {
        sans: ["var(--font-arabic)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 45px rgba(33, 26, 21, 0.10)",
        nav: "0 -18px 55px rgba(33, 26, 21, 0.13)",
        glow: "0 18px 44px rgba(247, 123, 18, 0.24)"
      },
      borderRadius: {
        mobile: "28px",
        chip: "999px"
      }
    }
  },
  plugins: []
};

export default config;
