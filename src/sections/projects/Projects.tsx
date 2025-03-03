"use client";
import React from "react";
import { motion } from "framer-motion";
import { GrProjects } from "react-icons/gr";
import { IoMdFolderOpen } from "react-icons/io";

const data = [
  {
    id: 0,
    src: "url('/proj.png')",
    name: "Citi Bank",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
  {
    id: 1,
    src: "url('/tiff-1.JPEG')",
    name: "Tiffany's",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
  {
    id: 2,
    src: "url('/ms-1.jpg')",
    name: "Morgan Stanely",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
  {
    id: 3,
    src: "url('/pfizer-1.jpg')",
    name: "Pfizer",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
  {
    id: 0,
    src: "url('/pic-3.jpg')",
    name: "Little Nell, 10 Rockefeller Center",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
  {
    id: 0,
    src: "url('/proj.png')",
    name: "Citi Bank",
    address: "H Branch, 388 Greenwich St",
    sector: "Financial Institutions",
  },
];

const Projects = () => {
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

  return (
    <div className="mt-12">
      <div className=" px-4 sm:px-8 md:px-12 lg:px-16 ">
        <motion.h2
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
          className="text-md tracking-normal text-neutral-500 text-lg mb-4"
        >
          Filter project by business sector
        </motion.h2>
        <div className="flex flex-row gap-4  items-end">
          <motion.button
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
            className=" text-neutral-700 px-4 py-2 rounded-full bg-neutral-100 text-lg font-medium flex items-center tracking-tight gap-2"
          >
            <IoMdFolderOpen />
            Project
          </motion.button>
          <motion.button
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
            className=" text-neutral-700 px-4 py-2 rounded-full bg-neutral-100 text-lg font-medium flex items-center tracking-tight gap-2"
          >
            <GrProjects size={16} />
            Business Sector
          </motion.button>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-4 px-4 sm:px-8 md:px-12 lg:px-16 w-full bg-inherit mt-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="h-[60vh] w-auto  relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="h-full relative flex flex-col justify-end px-6 pb-8 rounded-sm bg bg-cover bg-center"
              style={{ backgroundImage: item.src }}
            >
              <div className="absolute inset-0 top-0 left-0 right-0 bottom-0  bg-gradient-to-b -z-1 from-transparent to-[#202020]/40"></div>
              <div className="z-10">
                <p className="text-white/80 text-sm md:text-normal z-10">
                  {item.sector}
                </p>
                <div className="flex items-end flex-wrap flex-row mt-1 mb-4 gap-1">
                  <p className="font-semibold text-xl text-white capitalize ">
                    {item.name}
                  </p>
                  <p className="font-normal text-xl text-white capitalize ">
                    {item.address}
                  </p>
                </div>

                <button className=" text-center bg-[#981D1F] backdrop-blur-xl py-3 px-6 rounded-full text-white text-sm">
                  View Photos
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
