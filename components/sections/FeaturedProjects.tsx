"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects-preview" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              02 / Selected Work
            </p>
            <h2 className="mt-4 font-display text-display-md text-cream">
              What I've built.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {featured.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-16 flex justify-end">
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest text-cream/50 transition-colors hover:text-amber"
            >
              View all →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
