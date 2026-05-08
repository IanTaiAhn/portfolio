// FOOTER
// Minimal — colophon style. Year, name, "built with" line.
export default function Footer() {
  return (
    <footer className="border-t border-cream/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl text-cream">
            {/* PLACEHOLDER */}
            Ian Tai Ahn
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/50">
            {/* PLACEHOLDER tagline / location */}
            South Ogden, UT
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          {/* TODO: socials */}
          <p className="font-mono text-xs uppercase tracking-widest text-cream/40">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
