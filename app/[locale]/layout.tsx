import type { Metadata } from "next";
import { Inter, Open_Sans, JetBrains_Mono, Noto_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-noto-arabic",
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

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${inter.variable} ${openSans.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-full font-inter"
        style={{
          fontFamily: isRTL
            ? "var(--font-noto-arabic), 'Noto Sans Arabic', sans-serif"
            : "var(--font-inter), 'Inter', sans-serif",
        }}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* TODO: Replace G-XXXXXXXXXX with real GA4 ID from Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
