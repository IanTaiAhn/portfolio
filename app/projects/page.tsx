import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ProjectsClient from "@/components/sections/ProjectsClient";

// PROJECTS (/projects)
// Filterable grid: ML, NLP, Econometrics, Data Science, Automation
// Each card → /projects/[slug]
export default function ProjectsPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            02 / Selected Work
          </p>
          <h1 className="mt-6 font-display text-display-lg text-cream">
            Projects
          </h1>
          <ProjectsClient />
        </div>
      </section>
      <Footer />
    </main>
  );
}
