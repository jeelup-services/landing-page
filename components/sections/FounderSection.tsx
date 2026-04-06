"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function FounderSection() {
  const t = useTranslations("founder");
  const locale = useLocale();
  const isRTL = locale?.startsWith('ar') ?? false;

  const checklist = [
    t("check1"),
    t("check2"),
    t("check3"),
    t("check4"),
  ];

  return (
    <section id="about" className="bg-[#0D1117] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full"
          >
            <h2 className={`font-[family-name:var(--font-inter)] font-semibold text-3xl lg:text-4xl text-white leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
              {t("headline")}
            </h2>

            <div className="space-y-4 mt-6">
              <p className={`font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {t("p1")}
              </p>
              <p className={`font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {t("p2")}
              </p>
            </div>

            <ul
              className="mt-8 space-y-3 w-full"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-teal flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/70 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <p className={`mt-8 font-[family-name:var(--font-opensans)] text-white/60 text-base ${isRTL ? 'text-right' : 'text-left'}`}>
              {t("closing")}
            </p>
          </motion.div>

          {/* Right column */}
          <div className="mt-12 lg:mt-0">
            <Image
              src="/founders.png"
              width={500}
              height={300}
              alt="Jeelup founders"
              className="rounded-2xl w-full object-cover mb-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
