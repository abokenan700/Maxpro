import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ماكس برو | تجربة تسوق عربية فاخرة",
  description: "تطبيق تجارة إلكترونية عربي، موبايل فقط، أحادي العلامة التجارية، مبني لتجربة شراء فاخرة وسريعة.",
  applicationName: "Maxpro",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Maxpro"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#f77b12"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
