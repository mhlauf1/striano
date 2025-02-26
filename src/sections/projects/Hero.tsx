"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsBuilding, BsBank } from "react-icons/bs";
import {
  MdOutlineSchool,
  MdOutlineHotel,
  MdBusinessCenter,
} from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
import { RiGovernmentLine } from "react-icons/ri";

const sectors = [
  {
    title: "Financial Institutions",
    icon: <BsBank className="w-5 h-5" />,
  },
  {
    title:
      "Universities, Educational Facilities, Medical Facilities, Non-Profit Organizations",
    icon: <MdOutlineSchool className="w-5 h-5" />,
  },
  {
    title: "Real Estate Services, Insurance Management, Law Firms",
    icon: <BsBuilding className="w-5 h-5" />,
  },
  {
    title: "Hotels / Hospitality",
    icon: <MdOutlineHotel className="w-5 h-5" />,
  },
  {
    title: "Corporate Offices, Retail Stores, Museums, Government Buildings",
    icon: <RiGovernmentLine className="w-5 h-5" />,
  },
  {
    title: "Data Centers",
    icon: <HiOutlineDatabase className="w-5 h-5" />,
  },
  {
    title: "Specialty Projects",
    icon: <MdBusinessCenter className="w-5 h-5" />,
  },
  {
    title: "Electrical Maintenance",
    icon: <BsBuilding className="w-5 h-5" />,
  },
];

const Hero = () => {
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "120px",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
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

  const sectorVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="relative bg-white py-20 h-auto md:py-24">
      <div className="relative pt-24 z-10 px-4 sm:px-8 md:px-12 h-full lg:px-16 xl:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-full items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="h-1 bg-[#981D1F] my-4"
            ></motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-800"
            >
              Portfolio of Success
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl font-medium text-neutral-600 mt-4"
            >
              We provide a full range of electrical and telecommunication
              services to blue-chip clients with critical systems, end-users,
              building owners and construction companies across the Greater New
              York & New Jersey areas.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="relative rounded-lg overflow-hidden h-[500px] shadow-lg"
            >
              <Image
                src="/google-cover.webp"
                alt="NYC skyline showcasing Striano Electric projects"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium mb-1 text-white/80">
                  Featured Project
                </p>
                <p className="text-xl font-medium">Tiffany&apos;s</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-8">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-sm uppercase tracking-wide text-neutral-500 mb-3 font-medium"
          >
            variety of business sectors
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={sectorVariants}
                className="flex items-center gap-2 p-3 rounded-md bg-neutral-50"
              >
                <div className="text-[#981D1F]">{sector.icon}</div>
                <p className="text-neutral-700 text-sm">{sector.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
