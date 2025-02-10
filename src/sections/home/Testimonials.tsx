import React from "react";

interface TestimonialItemProps {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
}

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

const TestimonialItem = ({
  quote,
  author,
  title,
  company,
}: Omit<TestimonialItemProps, "id">) => (
  <div className="flex flex-col h-auto  rounded gap-6">
    <p className="text-neutral-800 font-medium text-md md:text-lg">{quote}</p>
    <div className="flex flex-col gap-1">
      <p className="font-medium text-lg md:text-xl">
        {author}, {title}
      </p>
      <p className="text-neutral-700 font-medium">{company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="border-x border-black/10 mx-4 md:mx-8 flex flex-col py-24 md:py-36">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-md text-neutral-500">
          Hear From Our Clients
        </p>
      </div>
      <div className="flex mt-4 md:mt-8 px-4 sm:px-12 lg:px-20 flex-col gap-12 md:gap-20">
        <div className="flex flex-col items-start">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight max-w-3xl">
              Proof that better engineering makes a difference
            </h2>
            <p className="text-lg md:text-xl max-w-3xl text-neutral-700">
              As we continue to grow our business, we continually remind
              ourselves of our commitment to our clients to provide a personal
              yet professional service at a competitive price.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialData.map((item) => (
            <div key={item.id}>
              <TestimonialItem
                key={item.id}
                quote={item.quote}
                author={item.author}
                title={item.title}
                company={item.company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
