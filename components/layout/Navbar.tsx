'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]     = useState(false);
  const [mounted, setMounted]   = useState(false);
  const { resolvedTheme } = useTheme();
  const t      = useTranslations('nav');
  const locale = useLocale();
  const isRTL  = locale === 'ar';
  const router = useRouter();
  const pathname = usePathname();

  const NAV_LINKS = [
    { label: t('home'),       href: '/'             },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('talent'),     href: '#talent'       },
    { label: t('whyJeelup'),  href: '#why-jeelup'   },
    { label: t('about'),      href: '#about'        },
    { label: t('contact'),    href: '#cta'          },
  ];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <motion.nav
      dir="ltr"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)]'
          : '',
      ].join(' ')}
    >
      {/* ── Main bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={mounted && resolvedTheme === 'light' ? '/jeelup.svg' : '/logo.svg'} alt="Jeelup" width={120} height={36} style={{ width: 'auto', height: '36px' }} priority />
        </Link>

        {/* Desktop links */}
        <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm transition-colors duration-200 ${mounted && resolvedTheme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + locale switcher + mobile toggle */}
        <div className="flex items-center gap-4">
          {/* Locale switcher */}
          <div className="hidden lg:flex items-center gap-1 bg-[var(--border-color)] rounded-full p-1">
            {(['en', 'ar'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLocale(lang)}
                className={[
                  'px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200',
                  locale === lang
                    ? 'bg-brand-teal text-brand-slate'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
                ].join(' ')}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <ThemeToggle />

          <div className="hidden lg:block">
            <Button variant="primary" href="https://calendly.com/jeelup/book-a-call" target="_blank" rel="noopener noreferrer">
              {t('bookACall')}
            </Button>
          </div>

          <button
            className="lg:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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
            className="lg:hidden overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
          >
            <div className={`px-6 py-4 flex flex-col${isRTL ? ' items-end' : ''}`}>
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-base transition-colors duration-200 ${mounted && resolvedTheme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile locale switcher */}
              <div className="flex gap-2 py-3">
                {(['en', 'ar'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { switchLocale(lang); setIsOpen(false); }}
                    className={[
                      'px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200',
                      locale === lang
                        ? 'bg-brand-teal text-brand-slate'
                        : 'bg-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
                    ].join(' ')}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="pt-3">
                <Button
                  variant="primary"
                  href="https://calendly.com/jeelup/book-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('bookACall')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
