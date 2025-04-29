"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button";

const FloridaCTA = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="relative bg-white mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-50 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-[#981D1F]/5 blur-2xl"></div>
      <div className="mt-8 py-12 md:py-16  rounded-md bg-neutral-50 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-5">
              <motion.div variants={itemVariants} className="space-y-2">
                <h2
                  style={{ lineHeight: 1.3 }}
                  className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight"
                >
                  Ready to elevate your <br /> Florida project?
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Our dedicated Florida team brings Striano's exceptional
                  standards of electrical excellence to the Sunshine State.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-gray-600"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    Expert teams specialized in Florida's unique construction
                    codes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    Hurricane-resistant electrical infrastructure
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    On-time, on-budget project delivery guaranteed
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Link href="/contact-florida">
                  <PrimaryButton> Discuss Your Florida Project</PrimaryButton>
                </Link>
              </motion.div>
            </div>

            {/* Right column - Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-64 md:h-full min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/FL-Harbour-1.jpg"
                alt="Striano Electric Florida project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                  <p className="text-[#981D1F] font-medium">Harbour Lights</p>
                  <p className="text-sm text-gray-600">
                    Gulf Shore Blvd Service Rebuild
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FloridaCTA;
