import React from "react";
import { PrimaryButton } from "@/components/Button";
import Image from "next/image";

const sectors = [
  "Financial Institutions",
  "Corporate Offices, Retail Stores, Museums, Government Buildings",
  "Universities, Educational Facilities, Medical Facilities, Non-Profit Organizations",
  "Hotels / Hospitality",
  "Data Centers",
  "Specialty Projects",
  "Real Estate Services, Insurance Management, Law Firms",
];

const Projects = () => {
  return (
    <section className=" bg-[#151515]">
      <div className="flex flex-col py-24 md:py-36">
        <div className="flex items-center gap-2 flex-row">
          <div className="h-[1px] w-[16px] md:w-[75px] bg-white/10"></div>
          <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
          <p className="text-sm md:text-md text-neutral-200">
            Portfolio of Success
          </p>
        </div>
        <div className="flex mt-4 md:mt-8 px-4 sm:px-12 lg:px-20  flex-col md:flex-row gap-x-36 justify-between">
          <div className="flex flex-col flex-1 justify-between items-start">
            <div className="">
              <h2
                style={{ lineHeight: "100%" }}
                className="text-3xl tracking-tight md:text-5xl text-neutral-100"
              >
                Projects we&apos;ve worked on
              </h2>
              <p className=" max-w-2xl text-lg mt-6 text-neutral-200">
                We provide a full range of electrical and telecommunication
                services to blue-chip clients with critical systems across a
                wide variety of business sectors:
              </p>
              <div className="flex mt-10 md:mt-8 flex-col items-start gap-2">
                {sectors.map((item) => (
                  <p
                    key={item}
                    className="font-medium leading-tight  text-lg md:text-xl text-white"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-6 md:space-y-4 mt-8 md:mt-12">
              <PrimaryButton>Learn More</PrimaryButton>
              <p className="font-medium text-neutral-300 text-md md:max-w-2xl">
                Trusted by leading financial institutions, universities, and
                corporations
              </p>
            </div>
          </div>
          <div className="relative flex flex-1">
            <Image
              src="/white-projects.png"
              alt="Building exterior with modern architecture"
              className="object-cover p-4 md:p-8"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
