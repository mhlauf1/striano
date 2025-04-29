import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import Services from "@/sections/home/Services";
import Projects from "@/sections/home/Projects";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
    </main>
  );
}
