"use client";
import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { motion } from "framer-motion";

const StrianoFloridaHero = () => {
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
    <section className="relative h-screen rounded-md">
      {/* Background image with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/florida.jpg" // You'll need to add this image
          alt="Florida skyline with Striano Electric projects"
          fill
          className="object-cover -z-10 object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 h-full px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl">
          {/* Branded accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "175px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-1 bg-[#981D1F] mb-6"
          ></motion.div>

          {/* Subtitle with subtle left animation */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-white/80 text-sm uppercase tracking-wider mb-2"
          >
            Expanding Our Excellence to the Sunshine State
          </motion.p>

          {/* Heading with subtle left animation */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl mb-4 font-medium title-line-height md:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Striano Florida: Powering the Future of the Sunshine State
          </motion.h1>

          {/* Subheading with subtle left animation */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl title-line-subheight max-w-xl font-medium w-full text-neutral-100"
          >
            Bringing years of New York electrical excellence to Florida&apos;s
            most demanding projects and discerning clients.
          </motion.p>

          {/* Buttons with subtle left animation */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12"
          >
            <PrimaryButton>Florida Projects</PrimaryButton>
            <SecondaryButton>Contact Florida Team</SecondaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrianoFloridaHero;
