'use client';

import { motion } from 'framer-motion';
import { Search, Clock, BadgeDollarSign, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function ProblemSection() {
  const t      = useTranslations('problem');
  const locale = useLocale();
  const isRTL  = locale?.startsWith('ar') ?? false;

  const PAINS = [
    { icon: <Search          size={16} />, text: t('pain1') },
    { icon: <Clock           size={16} />, text: t('pain2') },
    { icon: <BadgeDollarSign size={16} />, text: t('pain3') },
    { icon: <BarChart2       size={16} />, text: t('pain4') },
  ];

  return (
    <section id="problem" className="bg-[var(--bg-secondary)] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div
            className={isRTL ? 'text-right' : ''}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`mt-2 font-[family-name:var(--font-inter)] font-semibold
                         text-3xl lg:text-5xl text-[var(--text-primary)] leading-tight
                         ${isRTL ? 'text-right' : 'text-start'}`}
            >
              {t('headline')}
            </h2>

            <p className={`mt-3 text-[var(--text-secondary)] text-base ${isRTL ? 'text-right' : 'text-start'}`}>
              {t('intro')}
            </p>

            <ul className="mt-4 space-y-2">
              {PAINS.map(({ icon, text }, index) => (
                <motion.li
                  key={text}
                  className={`flex items-start gap-4 group cursor-default ${isRTL ? 'text-right' : ''}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                               bg-red-500/10 group-hover:bg-brand-teal/10 transition-colors duration-300
                               text-red-400 group-hover:text-brand-teal"
                  >
                    {icon}
                  </span>
                  <span className="text-[var(--text-secondary)] text-base pt-1 text-start">{text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 bg-[var(--border-color)] border border-[var(--border-color)] rounded-xl p-5">
              <p className={`text-[var(--text-secondary)] text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-start'}`}>
                {t('closing')}
              </p>
            </div>
          </motion.div>

          {/* ── Right column — image ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Image
              src={isRTL ? '/problem_ar.png' : '/problem.png'}
              alt="Traditional recruitment vs Jeelup direct integration"
              width={600}
              height={500}
              className="w-full rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
