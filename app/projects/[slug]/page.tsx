import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";

const EconVizDemo = dynamic(() => import("@/components/demos/EconVizDemo"), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg border border-cream/10 bg-navy-mid flex items-center justify-center h-48">
      <p className="font-mono text-xs uppercase tracking-widest text-cream/30">
        Loading…
      </p>
    </div>
  ),
});

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.hook,
    openGraph: {
      title: `${project.title} — Ian Tai Ahn`,
      description: project.hook,
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const sections = [
    { label: "01 / Problem", body: project.problem },
    { label: "02 / Approach", body: project.approach },
    { label: "03 / Result", body: project.result },
  ].filter((s) => s.body);

  return (
    <main className="relative bg-navy-DEFAULT min-h-screen">
      <Nav />

      <article className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl">

          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cream/40 hover:text-amber transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All Projects
          </Link>

          {/* Header */}
          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 font-display text-display-md text-cream leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 font-body text-lg text-cream/60 max-w-xl">
              {project.hook}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cream/10 px-3 py-1 font-mono text-xs text-cream/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-cream/10" />

          {/* Narrative sections */}
          {sections.length > 0 ? (
            <div className="mt-12 space-y-16">
              {sections.map(({ label, body }) => (
                <section key={label}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-5">
                    {label}
                  </p>
                  <p className="font-body text-lg text-cream/80 leading-relaxed max-w-2xl">
                    {body}
                  </p>
                </section>
              ))}
            </div>
          ) : (
            <p className="mt-12 font-mono text-xs uppercase tracking-widest text-cream/30">
              Write-up coming soon.
            </p>
          )}

          {/* Demo slot */}
          {project.hasDemo && (
            <>
              <div className="mt-16 h-px bg-cream/10" />
              <section className="mt-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-5">
                  04 / Demo
                </p>
                {project.slug === "econometrics-viz" ? (
                  <EconVizDemo />
                ) : (
                  <div className="rounded-lg border border-cream/10 bg-navy-mid flex items-center justify-center h-64">
                    <p className="font-mono text-xs uppercase tracking-widest text-cream/30">
                      Interactive demo — coming soon
                    </p>
                  </div>
                )}
              </section>
            </>
          )}

          {/* Footer links */}
          <div className="mt-16 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 font-mono text-sm text-cream/60 transition-colors hover:border-cream/50 hover:text-cream"
              >
                View on GitHub
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber px-6 py-3 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-navy"
              >
                Live Demo
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
