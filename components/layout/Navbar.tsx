'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Home',         href: '/'              },
  { label: 'How it Works', href: '#how-it-works'  },
  { label: 'Talent',       href: '#talent'        },
  { label: 'Why Jeelup',   href: '#why-jeelup'    },
  { label: 'About',        href: '#about'         },
  { label: 'Contact',      href: '#cta'           },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-slate/90 backdrop-blur-md border-b border-white/5'
          : '',
      ].join(' ')}
    >
      {/* ── Main bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="font-semibold text-xl text-white">
            Jeel<span className="text-brand-teal">up</span>
            <span className="text-brand-teal">↗</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button variant="primary" href="#cta">Book a Call</Button>
          </div>

          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-brand-slate border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base text-white/60 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  variant="primary"
                  href="#cta"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
