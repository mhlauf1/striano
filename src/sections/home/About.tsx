"use client";
import React from "react";
import Image from "next/image";
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className=" flex flex-col py-12 md:py-24">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-md text-neutral-700">About Us</p>
      </div>
      <div className="flex mt-4 md:mt-8 px-4 sm:px-12 lg:px-20 flex-col pb-16 md:pb-24 gap-20 justify-between">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="flex flex-col flex-1 max-w-7xl gap-9 items-start"
        >
          <h2
            style={{ lineHeight: "120%" }}
            className="text-3xl tracking-tight md:text-5xl"
          >
            Striano Electric Co., Inc. is an I.B.E.W. full service contractor
            and provider of electrical and telecommunications installations,
            repairs and maintenance in the Greater New York & New Jersey Areas.
          </h2>
          <div className="mt-16 md:mt-0">
            <p className="text-neutral-700 mb-3 md:mb-1">Featured Clients</p>
            <div>
              <Image
                src="/client-logos.svg"
                alt="logos"
                height={50}
                width={500}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
