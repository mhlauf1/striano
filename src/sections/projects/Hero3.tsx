"use client";
import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Button";

const Hero = () => {
  // Simple animation variants
  const fadeInVariants = {
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

  return (
    <section className="relative min-h-[95vh] bg-white">
      <div className="relative gap-12 z-10 justify-between md:h-[95vh] p-4 sm:p-8 md:p-16 lg:p-20 flex pt-[20vh] flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mt-auto justify-between items-start w-3/5"
        >
          <div className="flex flex-col justify-between items-start gap-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInVariants}
              style={{ letterSpacing: -1.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-black mb-2"
            >
              Striano Portfolio
              <br />
              Of Success
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInVariants}
              style={{ lineHeight: "135%" }}
              className="text-base sm:text-lg text-black/80 w-full md:max-w-[54ch] mb-4"
            >
              We provide a full range of electrical and telecommunication
              services to blue-chip clients with critical systems, end-users,
              building owners and construction companies across the Greater New
              York & New Jersey areas.
            </motion.p>

            <motion.button
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInVariants}
            >
              <PrimaryButton>View Gallery</PrimaryButton>
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex mt-12 flex-col justify-between items-start gap-4"
          >
            <h3 className="text-black/80 text-sm uppercase tracking-wider text-md font-normal">
              Variety Of Business Sectors:
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-black/80">
              <div className="flex items-center">
                <span className="text-sm sm:text-base">
                  Financial Institutions
                </span>
                <span className="mx-2 text-black/90">•</span>
                <span className="text-sm sm:text-base">
                  Hotels / Hospitality
                </span>
                <span className="mx-2 text-black/90">•</span>
                <span className="text-sm sm:text-base">Specialty Projects</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm sm:text-base">
                  Real Estate Services, Insurance Management, Law Firms
                </span>
                <span className="mx-2 text-black/90">•</span>
                <span className="text-sm sm:text-base">
                  Electrical Maintenance
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm sm:text-base">Data Centers</span>
                <span className="mx-2 text-black/90">•</span>
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
        </motion.div>
        <div className="flex w-2/5 h-full flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="h-full flex flex-col justify-between p-6 rounded-md bg-cover bg-center"
            style={{ backgroundImage: "url('/pic-3.jpg')" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
