import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import Services from "@/sections/home/Services";
import Projects from "@/sections/home/Projects";
import Testimonials from "@/sections/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
    </main>
  );
}
