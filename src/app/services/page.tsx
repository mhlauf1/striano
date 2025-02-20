import React from "react";
import Hero from "@/sections/services/Hero";
import Services from "@/sections/services/Services";
import WhatWeDo from "@/sections/services/WhatWeDo";

export default function ServicesPage() {
  return (
    <main className="border-x border-black/10 mx-4 md:mx-8">
      <Hero />
      <Services />
      <WhatWeDo />
    </main>
  );
}
