import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="min-h-screen px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl">

          {/* Section label */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            01 / About
          </p>

          {/* Heading + Korean signature */}
          <div className="mt-6 flex items-end gap-6">
            <h1 className="font-display text-display-lg text-cream leading-none">
              About
            </h1>
            <span
              className="font-calligraphy text-5xl text-amber/60 leading-none pb-1"
              lang="ko"
              aria-label="Ian Tai Ahn in Korean"
            >
              안인태
            </span>
          </div>

          {/* Bio */}
          <div className="mt-12 space-y-5 font-body text-lg text-cream/80 leading-relaxed max-w-2xl">
            <p>
              I&apos;m Ian Tai, a software engineer and ML practitioner who stays
              locked in on hard problems for as long as it takes. The common
              thread across everything I do is a high skill cap: I&apos;m drawn
              to disciplines that take years of deliberate effort before you
              even begin to understand them.
            </p>
            <p>
              On the technical side that means machine learning, data science,
              and systems engineering. Off-screen it means snowboarding and
              piano, things where the feedback loop is immediate and the
              ceiling keeps moving. I&apos;m a life-long learner and I live for
              the progression.
            </p>
            <p>
              I&apos;m based in South Ogden, UT, and I&apos;m always open to
              interesting problems worth solving.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-6">
              Skills
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  area: "Machine Learning",
                  items: ["PyTorch", "Scikit-learn", "Transformers / HuggingFace", "RAG pipelines", "Econometrics"],
                },
                {
                  area: "Engineering",
                  items: ["Python", "TypeScript / React", "Next.js", "FastAPI", "SQL"],
                },
                {
                  area: "Tools & Infra",
                  items: ["Git", "Docker", "Vercel", "Render", "Linux"],
                },
              ].map(({ area, items }) => (
                <div key={area}>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-3">
                    {area}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="font-body text-sm text-cream/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Resume + LinkedIn CTAs */}
          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber px-6 py-3 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-navy"
            >
              View Resume
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

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 font-mono text-sm text-cream/60 transition-colors hover:border-cream/50 hover:text-cream"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
