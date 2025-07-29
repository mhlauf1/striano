"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const imageRef = React.useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "circOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.5,
        ease: "circOut",
      },
    }),
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 0.8,
        ease: "circOut",
        delay: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "circOut",
      },
    },
  };

  return (
    <section className="flex flex-col pb-20 px-4 sm:px-8 md:px-12 lg:px-20 md:pb-20 pt-12">
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
          {/* Featured Project Image */}
          <div ref={imageRef}>
            <motion.div
              initial="hidden"
              animate={isImageInView ? "visible" : "hidden"}
              variants={imageVariants}
              className="relative rounded-md overflow-hidden h-[600px] w-full "
            >
              <Image
                src="/mlb.jpg"
                alt="NYC skyline showcasing Striano Electric projects"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-2  left-2  right-2">
                <div className="px-4 py-2 bg-white rounded-sm ">
                  <p className="text-[#981D1F] font-medium">
                    {" "}
                    Major League Baseball
                  </p>
                  <p className="text-sm text-gray-600">MLB All-star game</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right column - Service cards */}
        <div className="lg:w-1/2 mt-4 md:mt-0 space-y-2">
          <div className="relative pl-6">
            <motion.div
              variants={lineVariants}
              className="absolute left-0 top-0 w-1 bg-[#981D1F]"
            ></motion.div>
            <p
              className="text-xs uppercase font-medium mb-1 md:mb-3 text-[#981D1F]"
              style={{ letterSpacing: 2 }}
            >
              Our Services
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl text-neutral-800 mt-1 md:mt-2 mb-3 md:mb-5">
              Complete Electrical Distribution
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.6 }}
            className="text-neutral-700 text-md md:text-lg pl-6 md:w-[95%]"
          >
            Our reputation of completing on-time and on-budget projects has
            gained us a reputation for service and integrity unequaled in the
            industry. Through our quality and professional service we have
            developed and maintained our client base which includes numerous
            industry leaders in financial services, museums, hospitality, health
            care and entertainment.
          </motion.p>
          <motion.div
            custom={0}
            variants={cardVariants}
            className="flex items-start  pl-6 gap-3 lg:gap-3 pt-6 md:pt-8"
          >
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-md text-neutral-800 font-medium md:text-xl">
                Full-Service Electrical Contracting
              </h3>
              <p
                style={{ lineHeight: 1.6 }}
                className="text-neutral-700 md:w-[85%]"
              >
                Striano Electric Co., Inc. has the knowledge and experience
                necessary to perform effectively on any size project.
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={1}
            variants={cardVariants}
            className="flex items-start pl-6  gap-3 lg:gap-5 pt-6"
          >
            <div className="space-y-1 max-w-3xl">
              <h3 className="text-md text-neutral-800 font-medium md:text-xl">
                Comprehensive System Solutions
              </h3>
              <p
                style={{ lineHeight: 1.6 }}
                className="text-neutral-700 md:w-[85%]"
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
