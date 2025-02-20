import React from "react";
import Hero from "@/sections/projects/Hero";
import Projects from "@/sections/projects/Projects";

export default function ProjectsPage() {
  return (
    <main className="border-x border-black/10 mx-4 md:mx-8">
      <Hero />
      <Projects />
    </main>
  );
}
