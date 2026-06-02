import ProjectCard from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/projects";

// PROJECT GRID (full /projects index)
type Props = {
  filter?: ProjectCategory | null;
};

export default function ProjectGrid({ filter }: Props) {
  const projects = getAllProjects().filter(
    (p) => !filter || p.category === filter
  );

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.length > 0 ? (
        projects.map((p) => <ProjectCard key={p.slug} project={p} />)
      ) : (
        <p className="col-span-full font-mono text-xs uppercase tracking-widest text-cream/60">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
