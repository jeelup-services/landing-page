'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Footer() {
  const t = useTranslations("footer");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("talent"),     href: "#talent"       },
    { label: t("whyJeelup"),  href: "#why-jeelup"   },
    { label: t("about"),      href: "#about"        },
    { label: t("contact"),    href: "#cta"          },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] py-10 px-6">
      {/* Gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent mb-10" />

      <div className="max-w-7xl mx-auto">
        {/* Mobile: stacked centered — Desktop: single row */}
        <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:text-start lg:gap-8 rtl:lg:flex-row-reverse">
          {/* Left — logo + tagline */}
          <div>
            <Image src={mounted && resolvedTheme === 'light' ? '/jeelup.svg' : '/logo.svg'} alt="Jeelup" width={100} height={32} className="h-8 w-auto" />
            <p className={`mt-1 text-xs font-[family-name:var(--font-opensans)] ${mounted && resolvedTheme === 'light' ? 'text-gray-500' : 'text-white/30'}`}>
              {t("tagline")}
            </p>
          </div>

          {/* Center — nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:flex-nowrap lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${mounted && resolvedTheme === 'light' ? 'text-gray-500 hover:text-gray-900' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — copyright */}
          <div className="lg:text-end">
            <p className={`text-xs font-[family-name:var(--font-opensans)] ${mounted && resolvedTheme === 'light' ? 'text-gray-400' : 'text-[var(--text-secondary)]'}`}>
              {t("copyright")}
            </p>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-8 pt-6 border-t border-white/6 flex justify-center gap-6">
          <Link href="/privacy" className="text-xs text-white/30 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-white/30 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
