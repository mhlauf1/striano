"use client";
import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1F1F1F] to-[#151515]">
      <div className="relative gap-12 z-10 justify-between md:h-screen  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex pb-24 md:pb-0 pt-[20vh] md:pt-0 flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          {/* Branded accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-[#981D1F]"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-white/80 text-sm uppercase tracking-wider"
          >
            Specialized Solutions. Superior Service.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-4xl title-line-height md:text-5xl lg:text-6xl text-white md:max-w-xl tracking-tight"
          >
            Engineering Power Solutions,{" "}
            <span className="text-neutral-300">
              Delivering Critical Results
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl title-line-subheight font-medium w-full md:max-w-2xl text-gray-200"
          >
            Striano Electric Co., Inc. has the knowledge and experience
            necessary to perform effectively on any size project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 pt-4"
          >
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>Contact us</SecondaryButton>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="flex flex-1 justify-center relative items-center rounded-lg"
        >
          <div className="relative">
            <div className="flex flex-col absolute bottom-4 left-4 gap-1 z-10 p-3 bg-black/30 backdrop-blur-sm rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-row gap-1 items-center"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <IoIosStar
                    key={i}
                    className="h-[24px] w-[24px] text-yellow-400"
                  />
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-white font-semibold"
              >
                New York&apos;s Most Trusted Electrical Partner
              </motion.p>
            </div>
            <Image
              src="/services-hero.png"
              className="rounded-md shadow-lg"
              alt="Striano Electric"
              height={508}
              width={766}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
