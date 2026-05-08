import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// CONTACT (/contact)
// Minimal: email, LinkedIn, GitHub. No form unless decided otherwise.
export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="min-h-screen px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            04 / Contact
          </p>
          <h1 className="mt-6 font-display text-display-lg text-cream">
            {/* PLACEHOLDER: Contact headline */}
            Get in touch
          </h1>
          {/* TODO: Email link */}
          {/* TODO: LinkedIn link */}
          {/* TODO: GitHub link */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
