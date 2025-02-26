"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TabComponent from "@/components/TabComponent";
import { motion, useInView } from "framer-motion";

const WhatWeDo = () => {
  const [threshold, setThreshold] = useState(0.5);
  const ref = React.useRef(null);

  // Update threshold based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Check if we're on a mobile device (less than 768px width)
      if (window.innerWidth < 768) {
        setThreshold(0.2); // Lower threshold for mobile
      } else {
        setThreshold(0.5); // Default threshold for desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isInView = useInView(ref, { once: true, amount: threshold });

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
    <section className="bg-[#151515]">
      <div className="relative z-10">
        <div className="flex flex-col py-24 md:py-36">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full"
          >
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              <div className="w-full">
                <div className="relative pl-6">
                  <motion.div
                    variants={lineVariants}
                    className="absolute left-0 top-0 w-1 bg-white"
                  ></motion.div>
                  <p className="text-sm md:text-md font-medium text-white">
                    What We Do
                  </p>
                  <h2
                    style={{ letterSpacing: -0.35 }}
                    className="text-2xl md:text-3xl text-neutral-100 font-medium mt-2"
                  >
                    Enterprise-grade electrical solutions
                  </h2>
                </div>

                <div className="mt-4">
                  <p
                    style={{ lineHeight: 1.7 }}
                    className="text-neutral-300 pl-6 text-md md:text-lg"
                  >
                    We design and implement mission-critical electrical systems
                    that power New York&apos;s most demanding institutions.
                  </p>
                </div>

                {/* Tab Component */}
                <div className="mt-12 w-fit">
                  <TabComponent />
                </div>
              </div>

              {/* Right Image - Only on desktop */}
              <div className="hidden lg:block lg:w-full self-start">
                <Image
                  alt="Striano Electric"
                  src="/wwd-img.jpeg"
                  width={500}
                  height={380}
                  className="w-full rounded-lg object-cover h-[500px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
