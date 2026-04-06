"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="bg-[var(--bg-primary)] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-teal/6 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(130,244,214,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* First block */}
        <motion.h2
          variants={item}
          className="font-[family-name:var(--font-inter)] font-semibold text-4xl lg:text-6xl text-[var(--text-primary)] leading-tight mt-4"
        >
          {t("headline")}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Button variant="primary" size="large" href="https://calendly.com/jeelup/book-a-call" target="_blank" rel="noopener noreferrer">
            {t("scheduleCall")}
            <ArrowRight size={18} className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-4 text-sm text-[var(--text-secondary)]">
          {t("microCopy")}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={item}
          className="mt-20 mb-20 max-w-xs mx-auto border-t border-[var(--border-color)]"
        />

        {/* Second block */}
        <motion.p
          variants={item}
          className="font-[family-name:var(--font-inter)] font-bold text-2xl text-[var(--text-primary)]"
        >
          Jeel<span className="text-brand-teal">up</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-base max-w-lg mx-auto"
        >
          {t("trustLine")}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 font-[family-name:var(--font-inter)] font-semibold text-2xl text-[var(--text-primary)]"
        >
          {t("finalHeadline")}
        </motion.p>

        <motion.div variants={item} className="mt-6">
          <Button variant="primary" href="https://calendly.com/jeelup/book-a-call" target="_blank" rel="noopener noreferrer">
            {t("bookACall")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
