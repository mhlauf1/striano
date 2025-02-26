"use client";
import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen rounded-md">
      {/* Background image with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-home-bg.png"
          alt="New York City skyline with Empire State Building"
          fill
          priority
          className="object-cover -z-10 object-top"
          quality={100}
          sizes="100vw"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-end md:pb-32">
        <div className="max-w-3xl">
          {/* Branded accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "175px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-1 bg-[#981D1F] mb-6"
          ></motion.div>

          {/* Simplified heading animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-3xl mb-4 font-medium title-line-height md:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Striano Electric Powers New York City&apos;s Most Critical
            Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl title-line-subheight max-w-md font-medium w-full text-neutral-100"
          >
            Premier electrical solutions for New York&apos;s leading
            institutions, delivered on time and on budget.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 pt-12"
          >
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>View Services</SecondaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
