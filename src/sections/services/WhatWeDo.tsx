"use client";
import React from "react";
import Image from "next/image";
import TabComponent from "@/components/TabComponent";
import { motion, useInView } from "framer-motion";

const WhatWeDo = () => {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section className="bg-[#151515]">
      <div className="relative z-10">
        <div className="flex flex-col py-24 md:py-36">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className="px-4 sm:px-8 md:px-12 lg:px-16  w-full"
          >
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              <div className="w-full">
                <div className="relative pl-6">
                  <motion.div
                    variants={lineVariants}
                    className="absolute left-0 top-0 w-1 bg-white"
                  ></motion.div>
                  <p
                    style={{ letterSpacing: 1 }}
                    className="text-xs uppercase text-white"
                  >
                    What We Do
                  </p>
                  <h2
                    style={{ letterSpacing: -1 }}
                    className="text-2xl md:text-3xl text-neutral-100 mt-1 md:mt-2"
                  >
                    Enterprise-grade electrical solutions
                  </h2>
                </div>

                <div className="mt-2 md:mt-3 w-full md:max-w-xl">
                  <p
                    style={{ lineHeight: 1.55 }}
                    className="text-neutral-200 pl-6"
                  >
                    We design and implement mission-critical electrical systems
                    that power New York&apos;s most demanding institutions.
                  </p>
                </div>

                {/* Tab Component */}
                <div className="mt-4 w-fit">
                  <TabComponent />
                </div>
              </div>

              {/* Right Image - Only on desktop */}
              <div className="hidden lg:block lg:w-full self-start">
                <Image
                  alt="Striano Electric"
                  src="/tiff3.JPEG"
                  width={500}
                  height={380}
                  className="w-full rounded-md object-cover h-[500px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
