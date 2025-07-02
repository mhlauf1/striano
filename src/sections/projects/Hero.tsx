"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const images = [
    {
      id: 0,
      name: "Citi HQ Bank Branch",
      src: "citi-main.png",
      address: "388 Greenwich St.",
    },
    {
      id: 1,
      name: "Tiffany",
      src: "tiffany-1.jpg",
      address: "727 5th Ave., New York, NY.",
    },
    {
      id: 2,
      name: "The Ford Foundation",
      src: "ford-foundation.png",
      address: "320 E. 43rd St., New York, NY.",
    },
    {
      id: 3,
      name: "Barclays Capital",
      src: "bac-2.jpeg",
      address: "745 7th Ave., New York, NY.",
    },
    // move JPMC to be last
    {
      id: 4,
      name: "JPMC",
      src: "park-ave.jpg",
      address: "270 Park Ave High Rise, floors 40–44.",
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
    <section className="relative bg-gradient-to-b pb-12 md:pb-4 pt-12 from-[#000000] to-[#202020]">
      <div className="relative gap-12 z-10 justify-between pt-24 md:pt-12 p-4 sm:p-8 md:p-16 flex flex-col md:flex-row items-center">
        <div className="flex flex-col mt-auto justify-between items-start w-full md:w-3/5">
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
              style={{ letterSpacing: -1 }}
              className="text-3xl sm:text-4xl font-medium lg:text-5xl text-white mb-2 md:mb-3"
            >
              Striano Portfolio Of Success
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
              style={{ lineHeight: 1.35 }}
              className="text-md md:text-lg font-medium w-full md:max-w-2xl text-gray-100"
            >
              We provide a full range of electrical and telecommunication
              services to blue-chip clients with critical systems, end-users,
              building owners and construction companies across the Greater New
              York & New Jersey areas.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex mt-8 flex-col justify-between items-start gap-2"
          >
            <h3 className="text-white text-sm uppercase tracking-wider text-md font-normal">
              Variety Of Business Sectors:
            </h3>
            {/* Business sectors with desktop layout preserved but responsive on mobile */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-white/80">
              {/* Desktop layout preserved, mobile layout improved */}
              <div className="hidden md:flex items-center">
                <span className="text-sm sm:text-base">
                  Financial Institutions
                </span>
                <span className="mx-2 text-white/90">•</span>
                <span className="text-sm sm:text-base">
                  Hotels / Hospitality
                </span>
                <span className="mx-2 text-white/90">•</span>
                <span className="text-sm sm:text-base">Specialty Projects</span>
              </div>

              {/* Mobile-only layout for first row */}
              <div className="flex flex-col md:hidden w-full space-y-2">
                <span className="text-sm sm:text-base">
                  Financial Institutions
                </span>
                <span className="text-sm sm:text-base">
                  Hotels / Hospitality
                </span>
                <span className="text-sm sm:text-base">Specialty Projects</span>
              </div>

              <div className="hidden md:flex items-center">
                <span className="text-sm sm:text-base">
                  Real Estate Services, Insurance Management, Law Firms
                </span>
                <span className="mx-2 text-white/90">•</span>
                <span className="text-sm sm:text-base">
                  Electrical Maintenance
                </span>
              </div>

              {/* Mobile-only layout for second row */}
              <div className="flex flex-col md:hidden w-full space-y-2">
                <span className="text-sm sm:text-base">
                  Real Estate Services, Insurance Management, Law Firms
                </span>
                <span className="text-sm sm:text-base">
                  Electrical Maintenance
                </span>
              </div>

              <div className="hidden md:flex items-center">
                <span className="text-sm sm:text-base">Data Centers</span>
                <span className="mx-2 text-white/90">•</span>
                <span className="text-sm sm:text-base">
                  Corporate Offices, Retail Stores, Museums, Government
                  Buildings
                </span>
              </div>

              {/* Mobile-only layout for third row */}
              <div className="flex flex-col md:hidden w-full space-y-2">
                <span className="text-sm sm:text-base">Data Centers</span>
                <span className="text-sm sm:text-base">
                  Corporate Offices, Retail Stores, Museums, Government
                  Buildings
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm sm:text-base">
                  Universities, Educational Facilities, Medical Facilities,
                  Non-Profit Organizations
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simple Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex md:w-1/2 w-full h-[500px] md:h-[80vh] relative rounded-md overflow-hidden"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/${image.src}`}
                alt={image.name}
                fill
                className={
                  image.src === "park-ave.jpg"
                    ? "object-contain" // show whole image, letterboxed on black
                    : "object-cover" // your normal crop
                }
                priority={index === 0}
              />
            </div>
          ))}

          {/* Animated caption */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: index === currentImage ? 1 : 0,
                y: index === currentImage ? 0 : 10,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-2 left-2 right-2"
            >
              <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-[#981D1F] font-medium">{image.name}</p>
                <p className="text-sm text-gray-600">{image.address}</p>
              </div>
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute top-4 left-4 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`size-2 md:size-3 rounded-full ${
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
