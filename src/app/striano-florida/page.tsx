import React from "react";
import StrianoFloridaHero from "@/sections/striano-florida/Hero";
import FloridaCTA from "@/sections/striano-florida/FloridaCTA";
import FloridaProjects from "@/sections/striano-florida/FloridaProjects";

export default function StrianoFlorida() {
  return (
    <main>
      <StrianoFloridaHero />
      <FloridaProjects />
      <FloridaCTA />
    </main>
  );
}
