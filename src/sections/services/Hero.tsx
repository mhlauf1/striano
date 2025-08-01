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
    <section className="relative pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#1F1F1F] to-[#151515]">
      <div className="relative gap-12 z-10 justify-between  px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        <div className="flex w-full md:w-1/2 flex-col">
          {/* Branded accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "220px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-[#981D1F] mb-2"
          ></motion.div>

          {/* Subtitle with subtle left animation */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-neutral-100 font-medium text-xs mt-4 uppercase "
            style={{ letterSpacing: 2 }}
          >
            Specialized Solutions. Superior Service.
          </motion.p>

          {/* Heading with subtle left animation */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            style={{ lineHeight: 1.1 }}
            className="text-3xl  md:text-4xl mb-2 md:mb-5 lg:text-5xl mt-3 text-white font-semibold md:max-w-3xl tracking-tight"
          >
            Engineering Power Solutions, Delivering Critical Results
          </motion.h1>

          {/* Subheading with subtle left animation */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            style={{ lineHeight: 1.35 }}
            className="text-md md:text-xl font-medium w-full md:max-w-2xl text-gray-100"
          >
            Striano Electric Co., Inc. has the knowledge and experience
            necessary to perform effectively on any size project.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full md:w-1/2 h-[300px] md:h-[650px] relative rounded-md overflow-hidden"
        >
          <div className="flex flex-col absolute top-2 left-2 gap-1 z-10 p-3 bg-black/30 backdrop-blur-md rounded-md">
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
                  className="h-[12px] md:h-[16px] w-[12px] md:w-[16px] text-yellow-400"
                />
              ))}
            </motion.div>
            <motion.p
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-white text-xs md:text-sm "
            >
              A Top New York City Electrical Partner
            </motion.p>
          </div>
          <div className="absolute bottom-2 z-20 left-2 right-2">
            <div className="px-4 py-2 bg-white rounded-sm ">
              <p className="text-[#981D1F] font-medium">
                {" "}
                New Your Stock Exchange
              </p>
              <p className="text-sm text-gray-600">NYSE, 11 Wall St.</p>
            </div>
          </div>
          <Image
            alt="Striano Electric"
            src="/NYSE.jpg"
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
