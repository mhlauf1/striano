"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });

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

  const imageVariants = {
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
    <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 mt-12 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
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
              className="absolute left-0 top-0 w-1 bg-[#981D1F]"
            ></motion.div>
            <p className="text-sm md:text-md font-medium text-[#981D1F]">
              About Us
            </p>
            <h2
              style={{ letterSpacing: -1 }}
              className="text-2xl md:text-3xl text-neutral-800  font-medium mt-1 md:mt-2 mb-2 md:mb-4"
            >
              Trusted Electrical Contractor in NYC
            </h2>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ lineHeight: 1.7 }}
              className="text-neutral-600 text-md md:text-lg pl-6"
            >
              Striano Electric Co., Inc. is an I.B.E.W. full service contractor
              providing electrical and telecommunications installations, repairs
              and maintenance throughout Greater New York & New Jersey. Our
              reputation for completing on-time, on-budget projects has
              established us as an industry leader with unequaled service and
              integrity. We proudly serve diverse clients including leaders in
              financial services, museums, hospitality, healthcare and
              entertainment, maintaining our commitment to personal,
              professional service at competitive prices.
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Project Image */}
        <div className="hidden lg:block lg:w-1/2" ref={imageRef}>
          <motion.div
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative rounded-md overflow-hidden h-[500px] shadow-lg"
          >
            <Image
              src="/tiffany-2.JPEG"
              alt="NYC skyline showcasing Striano Electric projects"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
