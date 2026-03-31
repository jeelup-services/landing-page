'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Zap, Lightbulb, Globe2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const BADGES = [
  'Startup-minded builders',
  'Fast deployment',
  'Seamless collaboration',
];

const TRUST = [
  { icon: <Users      size={18} />, label: 'Dedicated engineers'      },
  { icon: <Zap        size={18} />, label: 'Fast team deployment'      },
  { icon: <Lightbulb  size={18} />, label: 'Startup mindset'           },
  { icon: <Globe2     size={18} />, label: 'Arabic · English · French' },
];

export default function HeroSection() {
  return (
    <section className="bg-[#111827] h-screen flex items-center pt-20 pb-8 relative overflow-hidden">

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
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-[family-name:var(--font-inter)] font-semibold
                           text-3xl sm:text-4xl lg:text-5xl
                           text-white leading-[1.08]"
              >
                Build Your Engineering Team Without Slowing Down
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="mt-4 font-[family-name:var(--font-opensans)] text-lg text-white/60 leading-relaxed max-w-xl">
                Jeelup connects startups and companies across the GCC with highly
                skilled engineers who work as dedicated members of your team.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-semibold
                             bg-white/5 border border-white/10 rounded-full
                             px-4 py-2 text-white/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={itemVariants} className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 max-w-sm">
              {TRUST.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-brand-teal">{icon}</span>
                  <span className="text-sm text-white/70">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary"  size="large" href="#cta">Book a Call</Button>
              <Button variant="outline"  size="large" href="#how-it-works">See How It Works</Button>
            </motion.div>
          </motion.div>

          {/* ── Right column — image only ── */}
          <motion.div
            className="lg:col-span-2 w-full relative hidden lg:block self-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10">
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
