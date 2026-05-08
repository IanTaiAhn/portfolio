import Link from "next/link";

// ABOUT PREVIEW (home page)
// Short teaser → full /about page.
// TODO: copy, headshot or geometric portrait substitute, skills cluster preview
export default function AboutPreview() {
  return (
    <section className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          03 / About
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-display-md text-cream">
          {/* PLACEHOLDER: about teaser headline (1 sentence, big) */}
          A mixture of data science, machine learning, software engineering, all blended together in my brain.
        </h2>
        <Link
          href="/about"
          className="mt-12 inline-block font-mono text-sm uppercase tracking-widest text-amber hover:text-amber-electric transition-colors"
        >
          More about me →
        </Link>
      </div>
    </section>
  );
}
