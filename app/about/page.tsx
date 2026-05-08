import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

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
            About
          </h1>
          I'm able to stay focused on multiple problems for prolonged amounts of time.
          Looking at all of the interests and hobbies I have seem to have one important characteristic. High skill cap.
          I'm a life-long learner and live for the progression. Progression in software engineering, machine learning, systems, snowboarding, piano, and pretty much any highly technical activity that takes years of dedication to even begin to grasp the fundamentals of.
        </div>
      </section>
      <Footer />
    </main>
  );
}
