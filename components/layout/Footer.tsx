import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// FOOTER
// Minimal — colophon style. Year, name, socials.
export default function Footer() {
  return (
    <footer className="border-t border-cream/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl text-cream">{siteConfig.name}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/50">
            {siteConfig.location}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-cream/50 transition-colors hover:text-amber"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-cream/50 transition-colors hover:text-amber"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-xs uppercase tracking-widest text-cream/50 transition-colors hover:text-amber"
            >
              Email
            </a>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/40">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
