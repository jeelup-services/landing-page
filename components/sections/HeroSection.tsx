'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Zap, Lightbulb, Globe2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTranslations, useLocale } from 'next-intl';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  const t     = useTranslations('hero');
  const locale = useLocale();
  const isRTL  = locale?.startsWith('ar') ?? false;

  const BADGES = [t('badge1'), t('badge2'), t('badge3')];

  const TRUST = [
    { icon: <Users     size={18} />, label: t('trust1') },
    { icon: <Zap       size={18} />, label: t('trust2') },
    { icon: <Lightbulb size={18} />, label: t('trust3') },
    { icon: <Globe2    size={18} />, label: t('trust4') },
  ];

  return (
    <section className="bg-[var(--bg-primary)] h-screen flex items-center pt-20 pb-8 relative overflow-hidden">

      {/* ── Background ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(130,244,214,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-32 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none -z-10 -translate-y-1/2"
      />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex items-center">
        <div className="w-full flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            className={`lg:col-span-3 ${isRTL ? 'text-right' : 'text-left'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-[family-name:var(--font-inter)] font-semibold
                           text-3xl sm:text-4xl lg:text-5xl
                           text-[var(--text-primary)] leading-[1.08] text-start"
              >
                {t('headline')}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="mt-4 font-[family-name:var(--font-opensans)] text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl text-start">
                {t('subheadline')}
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className={`mt-5 flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-semibold
                             bg-[var(--border-color)] border border-[var(--border-color)] rounded-full
                             px-4 py-2 text-[var(--text-secondary)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={itemVariants} className={`mt-6 grid grid-cols-2 gap-x-6 gap-y-4 max-w-xs ${isRTL ? 'ml-auto' : ''}`}>
              {TRUST.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-brand-teal flex-shrink-0">{icon}</span>
                  <span className="text-sm text-[var(--text-secondary)]">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-4">
              {isRTL ? (
                <>
                  <Button variant="outline" size="large" href="#how-it-works">{t('cta2')}</Button>
                  <Button variant="primary" size="large" href="https://calendly.com/jeelup/book-a-call" target="_blank" rel="noopener noreferrer">{t('cta1')}</Button>
                </>
              ) : (
                <>
                  <Button variant="primary" size="large" href="https://calendly.com/jeelup/book-a-call" target="_blank" rel="noopener noreferrer">{t('cta1')}</Button>
                  <Button variant="outline" size="large" href="#how-it-works">{t('cta2')}</Button>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* ── Right column — image only ── */}
          <motion.div
            className="lg:col-span-2 w-full relative hidden lg:block self-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/hero.png"
                alt="Jeelup engineering team collaborating"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 mix-blend-overlay" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
