import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutPreview from "@/components/sections/AboutPreview";

// HOME (/)
// Order: Hero → Featured Projects (preview) → About preview → Footer
// Detailed content lands in components/sections/*.tsx
export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <Footer />
    </main>
  );
}
