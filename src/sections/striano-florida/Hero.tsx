"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  // Animation variants
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

  // Simple carousel with 4 hardcoded images
  const images = [
    {
      id: 0,
      text: "AC Marriott",
      src: "FL-marriott-1.jpg",
    },
    {
      id: 0,
      text: "Porsche Studio",
      src: "porsche-4.JPG",
    },
    {
      id: 0,
      text: "Gulf Shore Blvd Boardwalk",
      src: "FL-Boardwalk-2.jpg",
    },
    {
      id: 0,
      text: "AC Marriott",
      src: "FL-marriott-2.jpg",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b pb-12 md:pb-4 pt-12 from-[#FFFFFF] to-[#EFEBE1]">
      <div className="relative gap-12 z-10 justify-between pt-24 md:pt-12 p-4 sm:p-8 md:p-16 flex flex-col md:flex-row items-center">
        <div className="flex flex-col mt-auto mb-12 justify-between items-start w-full md:w-2/5">
          <div className="flex flex-col justify-between items-start">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "175px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-1 bg-[#981D1F] mb-4"
            ></motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              style={{ letterSpacing: -1.5, lineHeight: 1.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 mb-2 md:mb-3"
            >
              Striano Florida: Bringing Premier Electrical Solutions to the
              Sunshine State
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
              style={{ lineHeight: 1.55 }}
              className="text-md md:text-lg md:max-w-3xl font-medium w-full text-neutral-600"
            >
              Leveraging our proven New York expertise to deliver exceptional
              electrical services for Florida&apos;s most demanding projects.
            </motion.p>
          </div>
          <Link href="/contact">
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12"
            >
              <PrimaryButton>Contact Florida Team</PrimaryButton>
            </motion.div>
          </Link>
        </div>

        {/* Simple Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex md:w-3/5 w-full h-[500px] md:h-[80vh] relative rounded-md overflow-hidden"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0  ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute top-6 z-20 left-6 right-6">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                  <p className="text-[#981D1F] font-medium"> {image?.text}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0  ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/${image?.src}`}
                alt={`Project showcase`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
