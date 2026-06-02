import Link from "next/link";
import type { Project } from "@/lib/projects";

// PROJECT CARD
// Used in featured grid and full projects index.
// TODO: hover state with image/visual swap, overflow tag styling, motion
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full border border-cream/10 p-8 transition-colors hover:border-amber active:scale-[0.99] active:border-amber/60"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-amber">
          {project.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-cream/60">
          {project.year}
        </span>
      </div>
      <h3 className="mt-8 font-display text-3xl text-cream group-hover:text-amber transition-colors">
        {project.title}
      </h3>
      <p className="mt-4 font-body text-cream/70">
        {project.hook}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-cream/20 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-cream/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
