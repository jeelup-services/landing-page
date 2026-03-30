"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const checklist = [
  "Launching products quickly",
  "Scaling engineering teams",
  "Maintaining technical quality",
  "Managing growth while controlling operational complexity",
];


export default function FounderSection() {
  return (
    <section id="about" className="bg-[#0D1117] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-inter)] font-semibold text-3xl lg:text-4xl text-white leading-tight">
              Designed for Founders and Product Builders.
            </h2>

            <div className="space-y-4 mt-6">
              <p className="font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed">
                Jeelup was built from the experience of working closely with
                technology startups and product teams.
              </p>
              <p className="font-[family-name:var(--font-opensans)] text-white/60 text-base leading-relaxed">
                We understand the challenges founders face:
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-teal flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/70 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-[family-name:var(--font-opensans)] text-white/60 text-base">
              Our goal is simple: help companies{" "}
              <span className="text-brand-teal font-semibold">build faster</span>{" "}
              with the right engineers.
            </p>
          </motion.div>

          {/* Right column */}
          <div className="mt-12 lg:mt-0">
            <Image
              src="/founders.png"
              width={500}
              height={300}
              alt="Jeelup founders"
              className="rounded-2xl w-full object-cover mb-8"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
