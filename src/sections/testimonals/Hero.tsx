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
    <section className="relative bg-white border-b pb-8 md:pb-16 pt-16 md:pt-24">
      <div className=" px-4 sm:px-8 md:px-12 lg:px-16 mt-[10vh]  mx-auto">
        {/* Branded accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-[#981D1F] mb-6"
        ></motion.div>

        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className=" text-sm text-[#981D1F] uppercase tracking-wider"
        >
          Client Success Stories
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-800 mb-4"
        >
          You're in great company
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl text-neutral-600 max-w-3xl"
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
