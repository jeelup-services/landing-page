import type { Metadata } from "next";
import { Inter, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="min-h-full font-inter"
        style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
