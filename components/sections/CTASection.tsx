"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function CTASection() {
  return (
    <section id="cta" className="bg-[#111827] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-teal/6 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(130,244,214,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* First block */}
        <motion.h2
          variants={item}
          className="font-[family-name:var(--font-inter)] font-semibold text-4xl lg:text-6xl text-white leading-tight mt-4"
        >
          Build Your Engineering Team{" "}
          <span className="text-brand-teal">Faster</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 font-[family-name:var(--font-opensans)] text-white/60 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Tell us about your project and the type of engineers you need. Our
          team will help you find the right talent to accelerate your product
          development.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Button variant="primary" size="large" href="mailto:hello@jeelup.com">
            Schedule a Call
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-4 text-sm text-white/30">
          No long-term commitment required. Start with one engineer.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={item}
          className="mt-20 mb-20 max-w-xs mx-auto border-t border-white/8"
        />

        {/* Second block */}
        <motion.p
          variants={item}
          className="font-[family-name:var(--font-inter)] font-bold text-2xl text-white"
        >
          Jeel<span className="text-brand-teal">up</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 font-[family-name:var(--font-opensans)] text-white/50 text-base max-w-lg mx-auto"
        >
          Jeelup represents a{" "}
          <span className="text-white font-medium">new generation of engineers</span>{" "}
          building alongside founders.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 font-[family-name:var(--font-inter)] font-semibold text-2xl text-white"
        >
          Start Building With Jeelup.
        </motion.p>

        <motion.div variants={item} className="mt-6">
          <Button variant="primary" href="mailto:hello@jeelup.com">
            Book a Call
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
