"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
    <section className="relative bg-gradient-to-b from-[#1F1F1F] to-[#151515] border-b pb-8 md:pb-16 pt-16 md:pt-24">
      <div className=" px-4 sm:px-8 md:px-12 lg:px-16 mt-[10vh]  mx-auto">
        {/* Branded accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-[#981D1F]"
        ></motion.div>

        {/* Subtitle with subtle left animation */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-neutral-100 text-xs mt-4 uppercase "
          style={{ letterSpacing: 1 }}
        >
          Client Success Stories
        </motion.p>

        {/* Heading with subtle left animation */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl title-line-height md:text-4xl mb-2 md:mb-4 lg:text-5xl mt-2 md:mt-3 text-white md:max-w-xl tracking-tight"
        >
          You&apos;re in great company
        </motion.h1>

        {/* Subheading with subtle left animation */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl title-line-subheight font-medium w-full md:max-w-3xl text-gray-200"
        >
          Hear from some of our amazing clients how they trust Striano Electric
          to deliver high-quality electrical contracting services on time and on
          budget.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
