import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";

// PROJECT DETAIL (/projects/[slug])
// Narrative: Problem → Approach → Result
// Embedded visuals/charts; live demo slot for the 3 interactive projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="relative">
      <Nav />
      <article className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {project.category}
          </p>
          <h1 className="mt-6 font-display text-display-md text-cream">
            {project.title}
          </h1>
          {/* TODO: Problem section */}
          Problem
          {/* TODO: Approach section */}
          Approach
          {/* TODO: Result section */}
          Result
          {/* TODO: Embedded visual / chart slot */}
          Visual?
          {/* TODO: Live demo slot (conditional on project.hasDemo) */}
          Live Demo here
          {/* TODO: GitHub link + back to projects nav */}
          GitHub Link
        </div>
      </article>
      <Footer />
    </main>
  );
}
