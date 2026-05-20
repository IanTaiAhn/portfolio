"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutPreview() {
  return (
    <section className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-amber"
          >
            03 / About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-4xl font-display text-display-md text-cream"
          >
            A mixture of data science, machine learning, software engineering, all blended together in my brain.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="mt-12 inline-block font-mono text-sm uppercase tracking-widest text-amber hover:text-amber-electric transition-colors"
            >
              More about me →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
