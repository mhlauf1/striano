"use client";
import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  };
  return (
    <section className="relative  rounded-md">
      <Image
        src="/hero-home-bg.png"
        alt="New York City skyline with Empire State Building"
        fill
        priority
        className="object-cover -z-10 object-top"
        quality={100}
        sizes="100vw"
      />

      <div className="relative  z-10 h-[93vh]  px-4 sm:px-12 lg:px-20 flex flex-col justify-end pb-32">
        <motion.div {...animationProps} className="max-w-5xl space-y-1">
          <h1 className="text-4xl mb-3 font-medium title-line-height md:text-5xl lg:text-6xl text-white tracking-tight">
            Striano Electric Powers New York City&apos;s Most Critical
            Infrastructure
          </h1>
          <p className="text-lg md:text-xl title-line-subheight max-w-md font-medium w-full  text-neutral-100">
            Premier electrical solutions for New York&apos;s leading
            institutions, delivered on time and on budget.
          </p>
          <div className="flex flex-col md:flex-row gap-4 pt-12">
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>View Services</SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
