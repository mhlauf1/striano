import React from "react";

const Hero = () => {
  return (
    <section className="relative h-auto pt-[30vh]">
      <div className="relative  h-full px-4 sm:px-12 lg:px-20 flex flex-col justify-end ">
        <div className="max-w-5xl">
          <p className=" text-sm uppercase tracking-wider">
            Our Impact Across The Greater New York Area
          </p>
          <h1 className="text-4xl mt-2 mb-4 md:mb-8 md:text-5xl lg:text-7xl font-medium  tracking-tight">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl font-medium text-neutral-600 ">
            We provide a full range of electrical and telecommunication services
            to blue-chip clients with critical systems, end-users, building
            owners and construction companies. Operating in the Greater New York
            & New Jersey areas, across a wide variety of business sectors:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
