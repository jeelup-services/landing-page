"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");
  const locale = useLocale();
  const isRTL = locale?.startsWith('ar') ?? false;

  const steps = [
    { number: 1, title: t("step1Title"), body: t("step1Body") },
    { number: 2, title: t("step2Title"), body: t("step2Body") },
    { number: 3, title: t("step3Title"), body: t("step3Body") },
    { number: 4, title: t("step4Title"), body: t("step4Body") },
  ];

  const displaySteps = isRTL ? [...steps].reverse() : steps;

  return (
    <section id="how-it-works" className="bg-[#0D1117] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-inter)] font-semibold text-3xl lg:text-4xl text-white text-center mb-16">
          {t("headline")}
        </h2>

        {/* Desktop Stepper */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="flex items-start justify-between relative rtl:flex-row-reverse" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Animated connector line */}
            <motion.div
              className="absolute top-6 left-[10%] right-[10%] h-px border-t border-dashed border-brand-teal/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {displaySteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex-1 flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-teal text-brand-slate font-bold text-base flex items-center justify-center border-4 border-[#0D1117] relative z-10">
                  {step.number}
                </div>
                <p className="mt-5 font-[family-name:var(--font-inter)] font-semibold text-base text-white">
                  {step.title}
                </p>
                <p className="mt-2 font-[family-name:var(--font-opensans)] text-sm text-white/50 leading-relaxed max-w-[160px] mx-auto">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="flex flex-col lg:hidden space-y-0 max-w-sm mx-auto">
          {displaySteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex items-start gap-5 rtl:flex-row-reverse"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Left side */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-teal text-brand-slate font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-brand-teal/25 my-1" />
                )}
              </div>

              {/* Right side */}
              <div className={index < steps.length - 1 ? "pb-8" : ""}>
                <p className="font-semibold text-base text-white text-start">{step.title}</p>
                <p className="text-sm text-white/50 mt-1 leading-relaxed text-start">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
