import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="border-x border-black/10 mx-8 flex flex-col py-24 md:py-36">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[40px] md:w-[75px] bg-black/10"></div>
        <div className="h-[10px] w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-neutral-500">About Us</p>
      </div>
      <div className="flex mt-8  px-4 sm:px-12 lg:px-20  flex-col md:flex-row gap-20 justify-between">
        <div className="flex flex-col flex-1 justify-between items-start">
          <p className="text-xl md:text-2xl font-medium w-full md:w-[85%]">
            Striano Electric Co., Inc. is an I.B.E.W. full service contractor
            and provider of electrical and telecommunications installations,
            repairs and maintenance in the Greater New York & New Jersey Areas.
          </p>
          <div className="mt-16 md:mt-0">
            <p className="font-medium  mb-3 md:mb-1">Featured Clients</p>
            <div>
              <Image
                src="/client-logos.svg"
                alt="logos"
                height={55}
                width={550}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/about-drawing.png"
            alt="About drawing"
            height={375}
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
