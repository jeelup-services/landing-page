'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Globe2, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseSection() {
  const t = useTranslations('why');

  const CARDS = [
    { Icon: Rocket, title: t('card1Title'), body: t('card1Body') },
    { Icon: Users,  title: t('card2Title'), body: t('card2Body') },
    { Icon: Globe2, title: t('card3Title'), body: t('card3Body') },
    { Icon: Zap,    title: t('card4Title'), body: t('card4Body') },
  ];

  return (
    <section id="why-jeelup" className="bg-[var(--bg-secondary)] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-inter)] font-semibold text-center
                     text-3xl lg:text-5xl text-[var(--text-primary)] mt-2 max-w-2xl mx-auto"
        >
          {t('headline')}
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {CARDS.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6
                         group cursor-default transition-all duration-300
                         hover:border-brand-teal/35
                         hover:shadow-[0_0_40px_rgba(130,244,214,0.05)]"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center
                              group-hover:bg-brand-teal/20 transition-colors duration-300">
                <Icon size={24} className="text-brand-teal" />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-inter)] font-semibold text-xl text-[var(--text-primary)] mb-3 text-start">
                {title}
              </h3>

              {/* Body */}
              <p className="font-[family-name:var(--font-opensans)] text-sm text-[var(--text-secondary)] leading-relaxed text-start">
                {body}
              </p>

              {/* Bottom accent bar */}
              <div className="mt-6 h-px w-0 bg-brand-teal/40 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
