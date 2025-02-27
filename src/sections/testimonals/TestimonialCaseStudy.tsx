"use client";
import React from "react";
import TestimonialItem from "./TestimonialItem";
import { motion } from "framer-motion";

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  logo?: string;
  companySize?: string;
  industry?: string;
}

interface TestimonialCaseStudyProps {
  testimonial: TestimonialData[];
}

const TestimonialCaseStudy: React.FC<TestimonialCaseStudyProps> = ({
  testimonial,
}) => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="py-8 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Section Title with animations */}
      <div className="mb-8">
        <motion.h2
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl font-normal tracking-tight mb-1"
        >
          Case studies
        </motion.h2>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl font-light text-neutral-500"
        >
          Construction projects
        </motion.p>
      </div>
      {/* Testimonial items */}
      <div className="flex flex-col gap-16">
        {testimonial.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <TestimonialItem testimonial={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCaseStudy;
