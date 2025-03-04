import TestimonialSection from "./TestimonialSection";

const testimonialData = [
  {
    id: 0,
    quote:
      "Each and every one of our team members and trade contractors are expected to add value to our mission of satisfying our clients' challenging facilities project requirements. Striano Electric has always met or exceeded our expectations.",
    author: "Joseph Sorbera",
    title: "President",
    company: "JLS Cost Management Systems, Inc.",
  },
  {
    id: 1,
    quote:
      "Structure Tone's core value is client first, last and always and we value partners who are driven by the same goals. Striano Electric is just that kind of partner. We have worked with Striano for several years, particularly on challenging hotel renovations. Their dedication to quality and client service has been a key part of our success together.",
    author: "James K. Donaghy",
    title: "Executive Chairman",
    company: "Structure Tone, Inc.",
  },
  {
    id: 2,
    quote:
      "Striano Electric is dedicated to complete customer service on every project they take on. Their team of highly dedicated and experienced professionals consistently performs work at the highest level of satisfaction and at competitive prices. As one of our preferred electrical contractors, we look forward to working with Striano Electric on our future projects.",
    author: "Louis Esposito",
    title: "Chief Operating Officer",
    company: "The Durst Organization",
  },
  {
    id: 3,
    quote:
      "Striano Electric is professional, reliable and knowledgeable. Having worked together on several projects over the years, Striano has provided exemplary service to both the client and the project teams; they are greatly invested in the project from start to finish.",
    author: "Ted Moudis",
    title: "Senior Principal",
    company: "Ted Moudis Associates",
  },
  {
    id: 4,
    quote:
      "The measure of success is when a company builds lasting client relationships. Striano Electric has established numerous long-standing client relationships that they continue to service.",
    author: "Joseph Brancato",
    title: "Regional Managing Principal-North East",
    company: "Principal-North East",
  },
];

const projectImages = [{ id: 1, src: "/Pfizer1.jpg" }];

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialSection
        testimonials={testimonialData}
        projectImages={projectImages}
      />
    </main>
  );
}
