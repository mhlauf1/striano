"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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

  return (
    <section className="flex flex-col px-4 sm:px-12 lg:px-20 mt-12 py-12 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="max-w-5xl lg:pr-12"
      >
        <div className="border-l-4 border-[#981D1F] pl-4">
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
        <div className="mt-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.7 }}
            className="text-neutral-600 text-md md:text-lg  border-neutral-200 pl-4"
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
