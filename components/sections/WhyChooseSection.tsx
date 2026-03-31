'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Globe2, Zap } from 'lucide-react';

const CARDS = [
  {
    Icon: Rocket,
    title: 'Startup Mindset',
    body: 'Our engineers understand product development cycles, iteration, and the speed required to build startups.',
  },
  {
    Icon: Users,
    title: 'Dedicated Team Members',
    body: 'Each engineer works as part of your team, contributing directly to your product and roadmap.',
  },
  {
    Icon: Globe2,
    title: 'Multilingual Collaboration',
    body: 'Our engineers communicate fluently in Arabic, English, and French — making collaboration seamless.',
  },
  {
    Icon: Zap,
    title: 'Fast Deployment',
    body: 'Traditional hiring takes months. Jeelup helps companies add engineers within days, allowing teams to move faster.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseSection() {
  return (
    <section id="why-jeelup" className="bg-[#0D1117] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-inter)] font-semibold text-center
                     text-3xl lg:text-5xl text-white mt-2 max-w-2xl mx-auto"
        >
          Why Companies Choose Jeelup
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
              className="bg-brand-zinc border border-white/8 rounded-2xl p-6
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
              <h3 className="font-[family-name:var(--font-inter)] font-semibold text-xl text-white mb-3">
                {title}
              </h3>

              {/* Body */}
              <p className="font-[family-name:var(--font-opensans)] text-sm text-white/60 leading-relaxed">
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
