import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

// FEATURED PROJECTS (home page preview)
// Shows 3–4 highlights, links to /projects for the full grid.
// TODO: scroll-triggered reveals, asymmetric layout (offset cards)
export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section
      id="projects-preview"
      className="px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              02 / Selected Work
            </p>
            <h2 className="mt-4 font-display text-display-md text-cream">
              {/* PLACEHOLDER: section headline */}
              What I've built.
            </h2>
          </div>
          {/* TODO: "View all →" link */}
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
