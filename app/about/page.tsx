import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// ABOUT (/about)
// Sections to flesh out:
//   - Story (3–4 sentences, editorial tone)
//   - Skills as visual cluster (NOT a list — consider radial/orbit/tag-cloud layout)
//   - Resume download + LinkedIn
export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="min-h-screen px-6 py-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            01 / About
          </p>
          <h1 className="mt-6 font-display text-display-lg text-cream">
            {/* PLACEHOLDER: About headline */}
            About
          </h1>
          {/* TODO: Story paragraph */}
          {/* TODO: Skills cluster component */}
          {/* TODO: Resume + LinkedIn CTAs */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
