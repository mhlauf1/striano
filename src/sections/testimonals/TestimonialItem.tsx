import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialItemProps {
  testimonial: {
    id: number;
    quote: string;
    author: string;
    title: string;
    company: string;
    logo?: string;
    companySize?: string;
    industry?: string;
  };
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[4/3] rounded-md overflow-hidden"
        >
          <Image
            src="/facebook-cover.jpg"
            alt={`${testimonial.company} project by Striano Electric`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Right Column - Text Content */}
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full flex flex-col justify-between"
        >
          <div>
            {/* Company Name */}
            <h3 className="text-3xl font-normal mb-6 md:mb-8">
              {testimonial.company}
            </h3>

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6 md:mb-10">
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-1">
                  Company size
                </p>
                <p className="text-neutral-900 font-medium">
                  {testimonial.companySize || "1,000+"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-1">
                  Industry
                </p>
                <p className="text-neutral-900 font-medium">
                  {testimonial.industry || "Construction"}
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative">
              <p className="text-lg md:text-2xl tracking-wide md:tracking-normal leading-relaxed text-neutral-800  md:pl-3 mb-8">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-neutral-200 pt-6 mt-8">
                <p className="font-medium text-neutral-900">
                  {testimonial.author}
                </p>
                <p className="text-neutral-500 text-sm">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialItem;
