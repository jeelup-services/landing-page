'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Rocket } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function MeetJeelupSection() {
  const t = useTranslations('meet');
  const locale = useLocale();
  const isRTL = locale?.startsWith('ar') ?? false;

  const PILLS = [
    { label: t('pill1'), Icon: Zap    },
    { label: t('pill2'), Icon: Rocket },
  ];

  return (
    <section id="meet-jeelup" className="bg-[var(--bg-primary)] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left column — visual card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--bg-card)] border border-brand-teal/15 rounded-2xl p-8 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
              {/* Top-left glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/8 rounded-full blur-2xl pointer-events-none" />

              {/* Image */}
              <Image
                src="/meet-jeelup.png"
                width={500}
                height={300}
                className="rounded-xl w-full object-cover"
                alt="Jeelup team meeting"
              />

              {/* Trust tag */}
              <div className="mt-6 pt-6 border-t border-[var(--border-color)] flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-teal flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">{t('trust')}</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right column — text ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h2
              className="mt-4 font-[family-name:var(--font-inter)] font-semibold
                         text-3xl lg:text-5xl text-[var(--text-primary)] leading-tight"
            >
              {t('headline')}
            </h2>

            <div className="space-y-4 mt-6">
              <p className="font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-base leading-relaxed">
                {t('p1')}
              </p>
              <p className="font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-base leading-relaxed">
                {t('p2')}
              </p>
              <p className="font-[family-name:var(--font-opensans)] text-[var(--text-secondary)] text-base leading-relaxed">
                {t('p3')}
              </p>
            </div>

            {/* Stat pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {PILLS.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[var(--border-color)] border border-[var(--border-color)]
                             rounded-full px-4 py-2 text-sm text-[var(--text-secondary)]"
                >
                  <Icon size={14} className="text-brand-teal" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
