"use client";
import React, { useState, useEffect } from "react";
import { LuServer } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

const Services = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
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
    <section className="flex flex-col pb-20 pt-12  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 md:pb-28 md:pt-16">
      {/* Top content area with two columns */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full"
      >
        {/* Left column - Headers */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <div className="relative pl-6">
            <motion.div
              variants={lineVariants}
              className="absolute left-0 top-0 w-1 bg-[#981D1F]"
            ></motion.div>
            <p className="text-sm md:text-md font-medium text-[#981D1F]">
              Our Services
            </p>
            <h2
              style={{ letterSpacing: -0.35 }}
              className="text-2xl md:text-3xl text-neutral-800 font-medium mt-2 mb-4"
            >
              Complete Electrical Distribution
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.7 }}
            className="text-neutral-600 text-md pl-6 md:text-lg"
          >
            Our reputation of completing on-time and on-budget projects has
            gained us a reputation for service and integrity unequaled in the
            industry. Through our quality and professional service we have
            developed and maintained our client base which includes numerous
            industry leaders in financial services, museums, hospitality, health
            care and entertainment.
          </motion.p>
        </div>

        {/* Right column - Service cards */}
        <div className="lg:w-1/2 space-y-2">
          <motion.div
            custom={0}
            variants={cardVariants}
            className="flex items-start justify-end gap-4 lg:gap-5 p-4"
          >
            <motion.div
              variants={iconVariants}
              className="p-3 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 shrink-0">
                <LuServer className="text-[#981D1F] w-5 h-5" />
              </div>
            </motion.div>

            <div className="space-y-2 max-w-xl">
              <h3 className="font-medium text-xl">
                Full-Service Electrical Contracting
              </h3>
              <p
                style={{ lineHeight: 1.7 }}
                className="text-neutral-600 text-sm md:text-base"
              >
                Striano Electric Co., Inc. has the knowledge and experience
                necessary to perform effectively on any size project.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            className="flex justify-end items-start gap-4 lg:gap-5 p-4"
          >
            <motion.div
              variants={iconVariants}
              className="p-3 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 shrink-0">
                <BsLightningCharge className="text-[#981D1F] w-5 h-5" />
              </div>
            </motion.div>
            <div className="space-y-2 max-w-xl">
              <h3 className="font-medium text-xl">
                Comprehensive System Solutions
              </h3>
              <p
                style={{ lineHeight: 1.7 }}
                className="text-neutral-600 text-sm md:text-base"
              >
                We provide a full range of commercial electrical contracting
                service to end-users, building owners and contractors.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
