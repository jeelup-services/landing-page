'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Zap, Rocket } from 'lucide-react';

const PILLS = [
  { label: 'Impact-focused',    Icon: MapPin  },
  { label: 'Deployed in days', Icon: Zap     },
  { label: 'Startup-tested',   Icon: Rocket  },
];

export default function MeetJeelupSection() {
  return (
    <section id="meet-jeelup" className="bg-[#111827] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left column — visual card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-zinc border border-brand-teal/15 rounded-2xl p-8 relative overflow-hidden">
              {/* Top-left glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/8 rounded-full blur-2xl pointer-events-none" />

              {/* Element 2 — Image */}
              <Image
                src="/meet-jeelup.png"
                width={500}
                height={300}
                className="rounded-xl w-full object-cover"
                alt="Jeelup team meeting"
              />

              {/* Element 3 — Trust tag */}
              <div className="mt-6 pt-6 border-t border-white/8 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-teal" />
                <span className="text-sm text-white/50">
                  Not a freelancer. Not an agency. A team extension.
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right column — text ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2
              className="mt-4 font-[family-name:var(--font-inter)] font-semibold
                         text-3xl lg:text-5xl text-white leading-tight"
            >
              Meet Jeelup
            </h2>

            <div className="space-y-4 mt-6">
              <p className="font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed">
                Jeelup deploys skilled engineers who integrate directly into your team.
              </p>
              <p className="font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed">
                Instead of freelancers or distant outsourcing agencies, you work with{' '}
                <span className="text-brand-teal font-semibold">
                  dedicated builders who collaborate
                </span>{' '}
                with your engineers, product managers, and founders every day.
              </p>
              <p className="font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed">
                Our engineers understand the pace and ownership required to build and
                scale modern technology products.
              </p>
            </div>

            {/* Stat pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {PILLS.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10
                             rounded-full px-4 py-2 text-sm text-white/60"
                >
                  <Icon size={14} className="text-brand-teal" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
