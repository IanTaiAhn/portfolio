import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ian Tai Ahn via email or find his work on GitHub.",
  openGraph: {
    title: "Contact — Ian Tai Ahn",
    description: "Get in touch with Ian Tai Ahn via email or find his work on GitHub.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="min-h-screen px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl">

          {/* Section label */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            04 / Contact
          </p>

          {/* Heading */}
          <h1 className="mt-6 font-display text-display-lg text-cream leading-none">
            Get in touch
          </h1>

          {/* Subheading */}
          <p className="mt-6 font-body text-lg text-cream/70 max-w-xl leading-relaxed">
            Reach me directly via email or find my work on GitHub.
          </p>

          {/* Contact links */}
          <div className="mt-16 flex flex-col gap-6">

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center justify-between rounded-xl border border-amber/30 px-8 py-6 transition-colors hover:border-amber hover:bg-amber/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber/60 mb-1">
                  Email
                </p>
                <p className="font-body text-xl text-cream group-hover:text-amber transition-colors">
                  {siteConfig.email}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber/40 group-hover:text-amber transition-colors"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-cream/10 px-8 py-6 transition-colors hover:border-cream/30 hover:bg-cream/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/30 mb-1">
                  GitHub
                </p>
                <p className="font-body text-xl text-cream/70 group-hover:text-cream transition-colors">
                  github.com/IanTaiAhn
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/20 group-hover:text-cream/50 transition-colors"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-cream/10 px-8 py-6 transition-colors hover:border-cream/30 hover:bg-cream/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/30 mb-1">
                  LinkedIn
                </p>
                <p className="font-body text-xl text-cream/70 group-hover:text-cream transition-colors">
                  Ian Tai Ahn
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/20 group-hover:text-cream/50 transition-colors"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
