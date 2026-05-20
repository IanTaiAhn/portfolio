"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-editorial-grid px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-40">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-amber"
          >
            Portfolio / {new Date().getFullYear()}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-display-xl text-cream"
          >
            Curiosities
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl font-body text-xl text-cream/80 md:text-2xl"
          >
            Determined. Focused. Striving. Energetic. Hungry.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-amber px-8 py-4 font-mono text-sm uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-navy active:scale-[0.97]"
            >
              Explore my work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-cream/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream/30"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
