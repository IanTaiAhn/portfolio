import ProjectCard from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/lib/projects";

// PROJECT GRID (full /projects index)
// TODO: client-side filtering by category, possibly intentional asymmetry
//       (some cards spanning 2 cols, some smaller — editorial layout)
export default function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
