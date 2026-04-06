"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className={`fixed bottom-6 right-6 z-50 rounded-full p-3 cursor-pointer transition-colors ${
            resolvedTheme === 'light'
              ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white'
              : 'bg-brand-teal/10 border border-brand-teal/20 hover:bg-brand-teal/20 text-brand-teal'
          }`}
        >
          <ArrowUp size={18} className={resolvedTheme === 'light' ? 'text-white' : 'text-brand-teal'} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
