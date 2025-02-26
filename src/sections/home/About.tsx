"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  // Set initial threshold value
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
        duration: 0.4,
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
    <section className="flex flex-col  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-12 py-12 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="max-w-5xl lg:pr-12"
      >
        <div className="relative pl-6">
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 w-1 bg-[#981D1F]"
          ></motion.div>
          <p className="text-sm md:text-md font-medium text-[#981D1F]">
            About Us
          </p>
          <h2
            style={{ letterSpacing: -0.35 }}
            className="text-2xl md:text-3xl text-neutral-800 font-medium mt-2 mb-4"
          >
            Trusted Electrical Contractor in NYC
          </h2>
        </div>
        <div className="mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.7 }}
            className="text-neutral-600 text-md md:text-lg border-neutral-200 pl-6"
          >
            Striano Electric Co., Inc. is an I.B.E.W. full service contractor
            providing electrical and telecommunications installations, repairs
            and maintenance throughout Greater New York & New Jersey. Our
            reputation for completing on-time, on-budget projects has
            established us as an industry leader with unequaled service and
            integrity. We proudly serve diverse clients including leaders in
            financial services, museums, hospitality, healthcare and
            entertainment, maintaining our commitment to personal, professional
            service at competitive prices.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
