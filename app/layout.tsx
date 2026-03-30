import type { Metadata } from "next";
import { Inter, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-opensans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Jeelup | Build Your Engineering Team",
  description:
    "Jeelup deploys skilled engineers who integrate directly into your team. Connecting GCC startups with top Algerian engineering talent.",
  keywords:
    "engineering talent, GCC, UAE, Algeria, tech outsourcing, startup engineers",
  openGraph: {
    title: "Jeelup | Build Your Engineering Team",
    description:
      "Deploy skilled GCC-aligned engineers within days. Connecting GCC startups with top Algerian engineering talent.",
    url: "https://jeelup.com",
    siteName: "Jeelup",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-full font-inter"
        style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
