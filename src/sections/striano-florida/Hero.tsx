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
      name: "AC Marriott",
      src: "FL-marriott-1.jpg",
      address: "123 Ocean Blvd, Miami, FL",
    },
    {
      id: 1,
      name: "Porsche Studio",
      src: "porsche-4.JPG",
      address: "500 Design Dr, West Palm Beach, FL",
    },
    {
      id: 2,
      name: "Gulf Shore Blvd Boardwalk",
      src: "FL-Boardwalk-2.jpg",
      address: "40 Gulf Shore Blvd, Naples, FL",
    },
    {
      id: 3,
      name: "AC Marriott South",
      src: "FL-marriott-2.jpg",
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
    <section className="relative bg-gradient-to-b from-[#FFFFFF] to-[#EFEBE1] pt-12 pb-12 md:pb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-4 sm:p-8 md:p-16 relative z-10">
        {/* Text side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "175px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-1 bg-[#981D1F] mb-4"
          />
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 mb-2 md:mb-3"
            style={{ letterSpacing: -1, lineHeight: 1.3 }}
          >
            Striano Florida: Premier Electrical Solutions in the Sunshine State
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
            className="text-md md:text-lg font-medium text-neutral-600 md:max-w-3xl"
            style={{ lineHeight: 1.55 }}
          >
            From luxury hotels to beachfront boardwalks, we bring our New
            York–honed expertise down to Florida’s most demanding projects.
          </motion.p>
          <Link href="/contact">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className="mt-8"
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
          className="w-full md:w-1/2 h-[500px] md:h-[80vh] relative rounded-md overflow-hidden"
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
                className="object-cover"
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
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                  <p className="text-[#981D1F] font-medium">{slide.name}</p>
                  {/* <p className="text-sm text-gray-600">{slide.address}</p> */}
                </div>
              </motion.div>
            </div>
          ))}

          {/* nav dots */}
          <div className="absolute top-4 left-4 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`size-2 md:size-3 rounded-full ${
                  idx === currentImage ? "bg-white" : "bg-white/50"
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
