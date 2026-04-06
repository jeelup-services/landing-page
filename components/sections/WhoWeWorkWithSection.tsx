"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, Package, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhoWeWorkWithSection() {
  const t = useTranslations("whoWeWorkWith");

  const clients = [
    { icon: Rocket,     label: t("client1") },
    { icon: Building2,  label: t("client2") },
    { icon: Package,    label: t("client3") },
    { icon: TrendingUp, label: t("client4") },
  ];

  return (
    <section className="bg-[var(--bg-primary)] py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-inter)] font-semibold text-3xl lg:text-4xl text-[var(--text-primary)] text-center">
          {t("headline")}
        </h2>
        <p className="font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-base text-center mt-4">
          {t("subheadline")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.label}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-brand-teal/30 hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <client.icon size={32} className="text-brand-teal mb-4" />
              <span className="font-[family-name:var(--font-inter)] font-semibold text-base text-[var(--text-primary)]">
                {client.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
