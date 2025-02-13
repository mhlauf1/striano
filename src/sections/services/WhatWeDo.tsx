import React from "react";
import Image from "next/image";
import TabComponent from "@/components/TabComponent";

const WhatWeDo = () => {
  return (
    <section className="bg-[#151515]">
      <div className="mx-4 md:mx-8 flex flex-col py-24 md:py-36 border-x border-white/10">
        <div className="flex items-center gap-2 flex-row px-4 sm:px-12 lg:px-20">
          <div className="h-[1px] w-[16px] md:w-[75px] bg-white/10"></div>
          <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
          <p className="text-sm md:text-base text-neutral-400">What We Do</p>
        </div>
        <div className="flex mt-8 md:mt-12 px-4 sm:px-12 lg:px-20 gap-16 lg:gap-24">
          {/* Left Content - Takes up 2/3 of the space */}
          <div className="w-full flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-neutral-300 tracking-tight leading-[1.1]">
              <span className="text-neutral-100">
                Enterprise-grade electrical
              </span>{" "}
              solutions for{" "}
              <span className="text-neutral-100">New York's </span> most
              demanding environments
            </h2>

            <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300">
              We design and implement mission-critical electrical systems that
              power New York's most demanding institutions.
            </p>

            {/* Tab Component */}
            <div className="mt-12">
              <TabComponent />
            </div>
          </div>

          {/* Right Image - Takes up 1/3 of the space */}
          <div className="hidden lg:block w-1/2">
            <Image
              alt="Striano Electric"
              src="/what-we-do.png"
              height={785}
              width={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
