import TestimonialSection from "./TestimonialSection";
import { testimonialData } from "@/lib/data";

const projectImages = [{ id: 1, src: "/Citi2.jpg" }];

export default function TestimonialsPage() {
  return (
    <TestimonialSection
      testimonials={testimonialData}
      projectImages={projectImages}
    />
  );
}
