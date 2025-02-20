"use client";
import React, { useState, useEffect } from "react";

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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col py-12 md:py-24">
      {/* Header */}
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-base text-neutral-700">
          Hear from our clients
        </p>
      </div>

      <div className="w-full space-y-4  px-4 sm:px-12 lg:px-20 mt-4 md:mt-8">
        {/* Progress bar */}
        <div className="h-[2px] w-full bg-neutral-100 overflow-hidden">
          <div
            className="h-full bg-neutral-400 w-full origin-left"
            style={{
              animation: "progress 7s linear infinite",
            }}
          />
        </div>

        {/* Testimonial content */}
        <div
          className="h-[350px] md:h-[450px]  animate-fade-in overflow-hidden"
          key={currentIndex}
        >
          <h2
            style={{ lineHeight: "120%" }}
            className="text-3xl tracking-tight md:text-5xl"
          >
            {testimonialData[currentIndex].quote}
          </h2>
          <h3 className="mt-6 tracking-wide text-lg">
            {testimonialData[currentIndex].author},{" "}
            <span className="text-neutral-500">
              {testimonialData[currentIndex].title}
            </span>
          </h3>
          <p className="text-neutral-500">
            {testimonialData[currentIndex].company}
          </p>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-end gap-3 mt-12">
          {testimonialData.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-neutral-800" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 7s linear;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
