import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[80vh]">
      <Image
        src="/portfolio-hero.png"
        alt="New York City skyline with Empire State Building"
        fill
        priority
        className="object-cover object-center"
        quality={100}
        sizes="100vw"
      />

      <div className="relative mx-4 md:mx-8 border-x border-white/10 h-full px-4 sm:px-12 lg:px-20 flex flex-col justify-end pb-12 md:pb-24">
        <div className="max-w-5xl  mb-8">
          <p className="text-white/90 text-sm uppercase tracking-wider">
            Our Impact Across The Greater New York Area
          </p>
          <h1 className="text-4xl mt-2 mb-4 md:mb-8 md:text-5xl lg:text-7xl font-medium text-white tracking-tight">
            Portfolio
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-200 ">
            We provide a full range of electrical and telecommunication services
            to blue-chip clients with critical systems, end-users, building
            owners and construction companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
