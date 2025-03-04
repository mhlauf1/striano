"use client";
import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative pt-36 pb-16 md:pb-36 bg-gradient-to-b from-[#1F1F1F] to-[#151515]">
      <div className="relative gap-12 z-10 justify-between  px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="flex w-full md:w-2/5 flex-col">
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
            Specialized Solutions. Superior Service.
          </motion.p>

          {/* Heading with subtle left animation */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl title-line-height md:text-4xl mb-2 md:mb-4 lg:text-5xl mt-2 md:mt-3 text-white md:max-w-xl tracking-tight"
          >
            Engineering Power Solutions,{" "}
            <span className="text-neutral-300">
              Delivering Critical Results
            </span>
          </motion.h1>

          {/* Subheading with subtle left animation */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl title-line-subheight font-medium w-full md:max-w-xl text-gray-200"
          >
            Striano Electric Co., Inc. has the knowledge and experience
            necessary to perform effectively on any size project.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full md:w-3/5 h-[300px] md:h-[500px] relative rounded-lg overflow-hidden"
        >
          <div className="flex flex-col absolute bottom-2 md:bottom-4 left-2 md:left-4 gap-1 z-10 p-3 bg-black/30 backdrop-blur-sm rounded-lg">
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
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
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-white font-medium"
            >
              New York&apos;s Most Trusted Electrical Partner
            </motion.p>
          </div>

          <Image
            alt="Striano Electric"
            src="/MS2.jpg"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
