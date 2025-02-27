import React from "react";
import Hero from "@/sections/testimonals/Hero";
import TestimonialCaseStudy from "@/sections/testimonals/TestimonialCaseStudy";
import { testimonialData } from "@/lib/data";

export default function Testimonials() {
  return (
    <main>
      <Hero />
      <TestimonialCaseStudy testimonial={testimonialData} />
    </main>
  );
}
