"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Florida = () => {
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  // State to track current index for carousel navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track images per view based on screen size
  const [imagesPerView, setImagesPerView] = useState(3); // Default to 3 for desktop

  const floridaImageData = [
    {
      id: 0,
      title: "AC Marriott Coffee Bar",
      subtext: "Coffee Bar",
      src: "FL-marriott-2.jpg",
    },
    {
      id: 1,
      title: "AC Marriott",
      src: "FL-marriott-1.jpg",
    },

    {
      id: 2,
      title: "Boardwalk Bollards",
      subtext: "Gulf Shore Blvd",
      src: "FL-Boardwalk-1.jpg",
    },
    {
      id: 3,
      title: "Boardwalk Lighting",
      subtext: "Gulf Shore Blvd",
      src: "FL-Boardwalk-2.jpg",
    },
    {
      id: 4,
      title: "Boardwalk Lighting",
      subtext: "Gulf Shore Blvd",
      src: "FL-Boardwalk-parents.jpg",
    },
    {
      id: 5,
      title: "Harbour Lights",
      subtext: "Gulf Shore Blvd Service Rebuild",
      src: "FL-Harbour-1.jpg",
    },
    {
      id: 6,
      title: "Surfs Edge",
      subtext: "Hurricane Ian Restoration",
      src: "FL-Harbour-2.jpg",
    },
    {
      id: 7,
      title: "Surfs Edge",
      subtext: "Hurricane Ian Restoration",
      src: "FL-Harbour-3.jpg",
    },
    {
      id: 8,
      title: "Surfs Edge",
      subtext: "Hurricane Ian Restoration",
      src: "FL-Harbour-4.jpg",
    },
  ];

  // Update images per view based on screen size - improved responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setImagesPerView(2); // Tablet: 2 images
      } else {
        setImagesPerView(3); // Desktop: 3 images
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Maximum index to prevent scrolling past the end
  const maxIndex = Math.max(0, floridaImageData.length - imagesPerView);

  // Functions to handle carousel navigation
  const scrollNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Page fade in animation
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Text animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Line animation variants
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

  // Carousel animation variants
  const carouselVariants = {
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="flex flex-col px-4 gap-5 lg:gap-8 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24"
    >
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        variants={variants}
        className="lg:w-1/2"
      >
        <div className="relative pl-6">
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 w-1 bg-[#981D1F] h-full"
          ></motion.div>
          <p
            style={{ letterSpacing: 1 }}
            className="text-xs uppercase text-[#981D1F] font-medium"
          >
            Striano Florida
          </p>
          <h2
            style={{ letterSpacing: -0.75 }}
            className="text-2xl md:text-3xl text-neutral-800 mt-1 md:mt-2 mb-2 md:mb-3 font-medium"
          >
            Explore projects completed in Florida
          </h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ lineHeight: 1.55 }}
          className="text-neutral-700 text-md  pl-6"
        >
          From high-rise condominiums to commercial spaces, our dedicated
          Florida team brings the same commitment to quality, reliability, and
          innovation that has built Striano Electric&apos;s reputation for
          excellence.
        </motion.p>
      </motion.div>

      {/* Image Carousel Section */}
      <div className="w-full" ref={carouselRef}>
        <motion.div
          initial="hidden"
          animate={isCarouselInView ? "visible" : "hidden"}
          variants={carouselVariants}
          className="relative"
        >
          {/* Carousel Controls - Simple below images design */}
          <div className="flex md:justify-end mb-4">
            {/* Carousel Dots/Indicators */}
            <div className="flex items-center space-x-4">
              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                aria-label="Previous image"
                className={`rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer focus:outline-none transition-all duration-200 ${
                  currentIndex === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#981D1F] bg-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots - Show different number based on screen size */}
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition-all duration-200 cursor-pointer  ${
                      currentIndex === index
                        ? "bg-[#981D1F] w-4"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                disabled={currentIndex === maxIndex}
                aria-label="Next image"
                className={`rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer   transition-all duration-200 ${
                  currentIndex === maxIndex
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#981D1F] bg-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / imagesPerView)
                }%)`,
              }}
            >
              {floridaImageData.map((data, index) => (
                <div
                  key={index}
                  style={{ width: `${100 / imagesPerView}%` }}
                  className="flex-shrink-0 px-2 py-1"
                >
                  <div className="relative rounded-md overflow-hidden h-[400px] md:h-[650px] shadow-lg">
                    {/* Image */}
                    <Image
                      src={`/${data.src}`}
                      alt={`${data.title} - ${
                        data.subtext || "Florida project"
                      }`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    {/* Enhanced Label - Only improving this part */}
                    <div className="absolute top-6 left-6 right-6">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                        <p className="text-[#981D1F] font-medium">
                          {" "}
                          {data.title}
                        </p>
                        {data.subtext && (
                          <p className="text-sm text-gray-600">
                            {data.subtext}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Florida;
