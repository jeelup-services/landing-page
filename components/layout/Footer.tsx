import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const navLinks = [
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("talent"),     href: "#talent"       },
    { label: t("whyJeelup"),  href: "#why-jeelup"   },
    { label: t("about"),      href: "#about"        },
    { label: t("contact"),    href: "#cta"          },
  ];

  return (
    <footer className="bg-[#0D1117] py-10 px-6">
      {/* Gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent mb-10" />

      <div className="max-w-7xl mx-auto">
        {/* Mobile: stacked centered — Desktop: single row */}
        <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:text-start lg:gap-8 rtl:lg:flex-row-reverse">
          {/* Left — logo + tagline */}
          <div>
            <Image src="/logo.svg" alt="Jeelup" width={100} height={32} className="h-8 w-auto" />
            <p className="mt-1 text-xs text-white/30 font-[family-name:var(--font-opensans)]">
              {t("tagline")}
            </p>
          </div>

          {/* Center — nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:flex-nowrap lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — copyright */}
          <div className="lg:text-end">
            <p className="text-xs text-white/20 font-[family-name:var(--font-opensans)]">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
