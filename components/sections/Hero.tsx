// HERO
// Big animated headline + one-line tagline + scroll cue.
// TODO: Framer Motion stagger reveal, marquee/scroll indicator, ambient bg
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-editorial-grid px-6 pb-24 pt-40 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
          {/* PLACEHOLDER: small overline (e.g., "Portfolio / 2025") */}
          Portfolio / {new Date().getFullYear()}
        </p>
        <h1 className="mt-8 font-display text-display-xl text-cream">
          {/* PLACEHOLDER: animated headline goes here */}
          Headline.
        </h1>
        <p className="mt-8 max-w-2xl font-body text-xl text-cream/80 md:text-2xl">
          {/* PLACEHOLDER: punchy one-liner about who you are */}
          One sentence about who you are and what you do.
        </p>
        {/* TODO: CTA "Explore my work" → #projects-preview */}
        {/* TODO: Scroll indicator (animated arrow / line) */}
      </div>
      {/* TODO: ambient visual element — gradient mesh, oversized typography in background, or D3 particles */}
    </section>
  );
}
