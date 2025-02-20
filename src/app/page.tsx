import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import Services from "@/sections/home/Services";
import Projects from "@/sections/home/Projects";
import LargePhoto from "@/components/LargePhoto";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import Testimonials from "@/sections/home/Testimonials";

export default function Home() {
  return (
    <main className="border-x border-black/10 mx-4 md:mx-8">
      <Hero />
      <About />
      <Services />
      <Projects />
      <FeaturedProjects />
      <LargePhoto />
      <Testimonials />
    </main>
  );
}
