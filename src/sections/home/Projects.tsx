"use client";
import React from "react";
import { PrimaryButton } from "@/components/Button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const sectors = [
  "Financial Institutions",
  "Corporate Offices, Retail Stores, Museums, Government Buildings",
  "Universities, Educational Facilities, Medical Facilities, Non-Profit Organizations",
  "Hotels / Hospitality",
  "Data Centers",
  "Specialty Projects",
  "Real Estate Services, Insurance Management, Law Firms",
];

const Projects = () => {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/services-main.png"
          alt="Background image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70  to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col py-24 md:py-36">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className="flex mt-4 md:mt-8  px-4 sm:px-8 md:px-12 lg:px-16  flex-col md:flex-row gap-x-36 justify-between"
          >
            <div className="flex flex-col flex-1 justify-between items-start max-w-3xl">
              <div className="relative pl-6">
                <motion.div
                  variants={lineVariants}
                  className="absolute left-0 top-0 w-1 bg-[#981D1F]"
                ></motion.div>
                <p
                  style={{ letterSpacing: 1 }}
                  className="text-xs uppercase  text-white"
                >
                  Portfolio of Success
                </p>
                <h2
                  style={{ letterSpacing: -1 }}
                  className="text-2xl md:text-3xl text-neutral-100 mt-1 md:mt-2"
                >
                  Projects we&apos;ve worked on
                </h2>
              </div>
              <div className="max-w-2xl mt-2 md:mt-3">
                <p
                  style={{ lineHeight: 1.55 }}
                  className="text-neutral-200 pl-6 "
                >
                  We provide a full range of electrical and telecommunication
                  services to blue-chip clients with critical systems across a
                  wide variety of business sectors:
                </p>
              </div>

              <div className="flex pl-2 md:pl-0 mt-8 flex-col items-start gap-3">
                {sectors.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#981D1F]"></div>
                    <p className="font-medium text-md md:text-lg text-white">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 md:space-y-4 mt-12 md:mt-16">
                <PrimaryButton>Learn More</PrimaryButton>
                <p className="font-medium text-neutral-300 text-sm md:max-w-2xl border-l-2 border-[#981D1F] pl-3">
                  Trusted by leading financial institutions, universities, and
                  corporations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
