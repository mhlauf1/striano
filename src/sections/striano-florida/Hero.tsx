"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  // Animation variants for text
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

  // Carousel slides: now with name & address
  const images = [
    {
      id: 0,
      name: "Bigham Jewelers",
      src: "bigham-jewelers.jpg",
      address: "123 Ocean Blvd, Miami, FL",
    },
    {
      id: 1,
      name: "AC Hotel Naples",
      src: "fl-hotel-naples.jpg",
      address: "500 Design Dr, West Palm Beach, FL",
    },
    {
      id: 2,
      name: "Shadow Wood",
      src: "shadow-wood.jpg",
      address: "40 Gulf Shore Blvd, Naples, FL",
    },
    {
      id: 3,
      name: "Porshce",
      src: "porshce-11.jpg",
      address: "200 Bay St, Tampa, FL",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto‐rotate
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#FFFFFF] to-[#EFEBE1] pt-32 md:pt-24 pb-12 md:pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-4 sm:p-8 md:p-16 relative z-10">
        {/* Text side */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xs uppercase font-medium mb-2 md:mb-3 text-[#981D1F]"
            style={{ letterSpacing: 2 }}
          >
            Striano Florida
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-start max-w-[16ch] text-neutral-800 mb-1 md:mb-2"
            style={{ letterSpacing: -1.25, lineHeight: 1.1 }}
          >
            Premier Electrical Solutions in the Florida
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
            className="text-md md:text-lg text-center md:text-start mt-3 font-medium text-neutral-600 max-w-[41ch] md:max-w-xl"
            style={{ lineHeight: 1.55 }}
          >
            From luxury hotels to beachfront boardwalks, we bring our New York
            honed expertise down to Florida&apos;s most demanding projects.
          </motion.p>
          <Link href="/contact">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className="md:mt-12 mt-8"
            >
              <PrimaryButton>Contact Our Florida Team</PrimaryButton>
            </motion.div>
          </Link>
        </div>

        {/* Carousel side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/5 h-[500px] md:h-[60vh] relative rounded-md"
        >
          {/* Slides */}
          {images.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/${slide.src}`}
                alt={slide.name}
                fill
                className="object-cover rounded-md"
                priority={idx === 0}
              />

              {/* animated caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: idx === currentImage ? 1 : 0,
                  y: idx === currentImage ? 0 : 10,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-2 left-2 right-2"
              >
                <div className="px-5 py-3 bg-white rounded-sm">
                  <p className="text-[#981D1F] text-lg font-semibold">
                    {slide.name}
                  </p>
                  {/* <p className="text-sm text-gray-600">{slide.address}</p> */}
                </div>
              </motion.div>
            </div>
          ))}

          {/* nav dots */}
          <div className="absolute bottom-[-20px] right-0 flex space-x-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`size-2.5 rounded-full ${
                  idx === currentImage ? "bg-black" : "bg-black/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
