"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface ProjectImage {
  id: number;
  src: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
}

interface ProjectImageCardProps {
  image: ProjectImage;
  index: number;
  extraClasses?: string;
}

interface GridItem {
  type: "testimonial" | "image";
  index: number;
  extraClasses?: string;
}

interface TestimonialSectionProps {
  testimonials: TestimonialData[];
  projectImages: ProjectImage[];
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="bg-white rounded-lg p-6 shadow-sm"
    >
      <div className="flex items-center mb-4">
        <div>
          <h3 className="font-medium text-neutral-900">{testimonial.author}</h3>
          <p className="text-sm text-neutral-500">
            {testimonial.title} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-neutral-700 mb-4">"{testimonial.quote}"</p>
    </motion.div>
  );
};

const ProjectImageCard: React.FC<ProjectImageCardProps> = ({
  image,
  index,
  extraClasses = "",
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className={`relative rounded-lg overflow-hidden h-64 ${extraClasses}`}
    >
      <Image
        src={image.src}
        alt="Project showcase"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};

// Main Component
const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  projectImages,
}) => {
  // Define the grid layout - each item is either a testimonial or an image
  const gridItems: GridItem[] = [
    { type: "testimonial", index: 0 },
    { type: "testimonial", index: 1 },
    { type: "testimonial", index: 2 },
    { type: "testimonial", index: 3 },
    { type: "testimonial", index: 4 },
    { type: "image", index: 0 },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.type === "testimonial" ? (
              <TestimonialCard
                testimonial={testimonials[item.index]}
                index={idx}
              />
            ) : (
              <ProjectImageCard
                image={projectImages[item.index]}
                index={idx}
                extraClasses={item.extraClasses}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
