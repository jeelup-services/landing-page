import type { Metadata } from "next";
import { Inter, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jeelup — Build Your Engineering Team Without Slowing Down",
  description:
    "Jeelup connects startups and companies across the GCC with highly skilled engineers who work as dedicated members of your team.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
