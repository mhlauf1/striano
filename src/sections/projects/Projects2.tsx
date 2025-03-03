"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    src: "url('/proj.png')",
    name: "Citi H Branch, 388 Greenwich St",
  },
  {
    id: 1,
    src: "url('/tiff-1.JPEG')",
    name: "Tiffany's",
  },
  {
    id: 2,
    src: "url('/ms-1.jpg')",
    name: "Morgan Stanely",
  },
  {
    id: 3,
    src: "url('/pfizer-1.jpg')",
    name: "Pfizer",
  },
  {
    id: 0,
    src: "url('/pic-3.jpg')",
    name: "Little Nell, 10 Rockefeller Center",
  },
  {
    id: 0,
    src: "url('/proj.png')",
    name: "Citi H Branch, 388 Greenwich St",
  },
];

const Projects2 = () => {
  return (
    <section className="grid grid-cols-1 gap-1 px-1 mt-12 w-full  md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div key={item.id} className="h-[80vh] w-auto  relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="h-full flex flex-col justify-between px-8 py-12 rounded-sm bg-cover bg-center"
            style={{ backgroundImage: item.src }}
          >
            <p className="font-semibold tracking-widest text-sm uppercase text-white/80">
              {item.name}
            </p>

            <div className="self-end bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full text-white text-sm">
              View Photos
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Projects2;
