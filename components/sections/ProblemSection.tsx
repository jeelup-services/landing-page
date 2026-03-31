'use client';

import { motion } from 'framer-motion';
import { Search, Clock, BadgeDollarSign, BarChart2 } from 'lucide-react';
import Image from 'next/image';

const PAINS = [
  { icon: <Search          size={16} />, text: 'Finding strong engineers quickly'              },
  { icon: <Clock           size={16} />, text: 'Managing recruitment delays'                   },
  { icon: <BadgeDollarSign size={16} />, text: 'Keeping development costs under control'       },
  { icon: <BarChart2       size={16} />, text: 'Maintaining team productivity while scaling'   },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-[#0D1117] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mt-2 font-[family-name:var(--font-inter)] font-semibold
                         text-3xl lg:text-5xl text-white leading-tight"
            >
              Hiring Developers Shouldn&apos;t Slow Down Your Company
            </h2>

            <p className="mt-3 text-white/60 text-base">
              Growing companies face the same hiring challenges:
            </p>

            <ul className="mt-4 space-y-2">
              {PAINS.map(({ icon, text }, index) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-4 group cursor-default"
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
                  <span className="text-white/70 text-base pt-1">{text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
              <p className="text-white/60 text-sm leading-relaxed">
                Traditional outsourcing often leads to disconnected teams and slow
                execution. Founders need engineers who work{' '}
                <span className="text-white font-semibold">WITH them</span>, not
                outside their company.
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
              src="/problem.png"
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
