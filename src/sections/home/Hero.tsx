"use client";
import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="relative h-screen rounded-md">
      {/* Background image with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 h-full px-4 sm:px-8 md:px-12 lg:px-16  flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl">
          {/* Branded accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "175px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-1 bg-[#981D1F] mb-6"
          ></motion.div>

          {/* Heading with subtle left animation */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl mb-2 md:mb-4 font-medium title-line-height md:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Striano Electric Powers New York City&apos;s Most Critical
            Infrastructure
          </motion.h1>

          {/* Subheading with subtle left animation */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            style={{ lineHeight: 1.35 }}
            className="text-md md:text-lg title-line-subheight max-w-xl font-medium w-full text-neutral-100"
          >
            Premier electrical solutions for New York&apos;s leading
            institutions, delivered on time and on budget.
          </motion.p>

          {/* Buttons with subtle left animation */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8"
          >
            <Link className="w-full md:w-auto" href="/projects">
              <PrimaryButton>View Projects</PrimaryButton>
            </Link>
            <Link className="w-full md:w-auto " href="/services">
              <SecondaryButton>View Services</SecondaryButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
