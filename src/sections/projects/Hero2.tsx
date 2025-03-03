"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative bg-white">
      <div className="relative gap-12 z-10 px-4 sm:px-8 md:px-12 lg:px-16 flex mt-48 flex-col md:flex-row items-center">
        <div className="flex flex-col justify-between items-start gap-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            style={{ letterSpacing: -1.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-black mb-2"
          >
            Projects
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
            style={{ lineHeight: "135%" }}
            className="text-base sm:text-lg text-neutral-700 w-full font-light md:max-w-[60ch] mb-2"
          >
            We provide a full range of electrical and telecommunication services
            to blue-chip clients with critical systems, end-users, building
            owners and construction companies across the Greater New York & New
            Jersey areas.
          </motion.p>
          <div className="flex flex-row gap-8 items-end">
            <motion.button
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className=" text-neutral-600 py-3 flex items-center gap-2"
            >
              Project
              <IoIosArrowDown />
            </motion.button>
            <motion.button
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className=" text-neutral-600 py-3 flex items-center gap-2"
            >
              Business Sector
              <IoIosArrowDown />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
