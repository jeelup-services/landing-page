'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Brain, Box, Layers, Cpu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TechSection() {
  const t = useTranslations('tech');

  const COLUMNS = [
    {
      Icon: Code2,
      title: t('col1Title'),
      roles: [t('col1Role1'), t('col1Role2'), t('col1Role3')],
      techLabel: 'React · Node · TypeScript',
    },
    {
      Icon: Smartphone,
      title: t('col2Title'),
      roles: [t('col2Role1'), t('col2Role2')],
      techLabel: 'Swift · Kotlin · Flutter',
    },
    {
      Icon: Brain,
      title: t('col3Title'),
      roles: [t('col3Role1'), t('col3Role2'), t('col3Role3')],
      techLabel: 'Python · PyTorch · SQL',
    },
  ];

  return (
    <section id="talent" className="bg-[#111827] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2
          className="font-[family-name:var(--font-inter)] font-semibold
                     text-2xl lg:text-4xl text-white text-center mb-12"
        >
          {t('headline')}
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {COLUMNS.map(({ Icon, title, roles, techLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#0D1117] border border-white/8 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="bg-brand-teal/10 rounded-xl p-4 mb-4">
                <Icon size={40} className="text-brand-teal" />
              </div>

              {/* Column title */}
              <h3
                className="font-[family-name:var(--font-inter)] font-semibold
                           text-base text-white mb-4 text-center"
              >
                {title}
              </h3>

              {/* Roles */}
              <div className="space-y-2 flex-1">
                {roles.map((role) => (
                  <p
                    key={role}
                    className="font-[family-name:var(--font-opensans)] text-sm text-white/60 text-center"
                  >
                    {role}
                  </p>
                ))}
              </div>

              {/* Bottom tech icons + label */}
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <Box    size={16} className="text-white/30" />
                  <Layers size={16} className="text-white/30" />
                  <Cpu    size={16} className="text-white/30" />
                </div>
                <p className="font-mono text-xs text-white/20">{techLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
