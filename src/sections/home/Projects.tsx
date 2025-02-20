import React from "react";
import { PrimaryButton } from "@/components/Button";
import { GiElectricalResistance } from "react-icons/gi";
import { SlLayers } from "react-icons/sl";
import { MdEmergencyShare } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import Image from "next/image";

interface projectItemDataProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const sectors = [
  "Financial Institutions",
  "Corporate Offices, Retail Stores, Museums, Government Buildings",
  "Universities, Educational Facilities, Medical Facilities, Non-Profit Organizations",
  "Hotels / Hospitality",
  "Data Centers",
  "Specialty Projects",
  "Real Estate Services, Insurance Management, Law Firms",
];

const projectItemData = [
  {
    id: 0,
    icon: <GiElectricalResistance className="w-6 h-6 text-white " />,
    title: "Commercial",
    description:
      "Full-service electrical solutions for NYC's most demanding commercial spaces. From Wall Street trading floors to mission-critical data centers, we deliver enterprise-grade installations and 24/7 support.",
  },
  {
    id: 1,
    icon: <SlLayers className="w-6 h-6 text-white" />,
    title: "Institutional",
    description:
      "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
  },
  {
    id: 2,
    icon: <MdEmergencyShare className="w-6 h-6 text-white" />,
    title: "Site Management",
    description:
      "Powering critical facilities across education, healthcare, and government sectors. From university campuses to medical centers, we design and maintain the electrical systems that keep essential services operating without interruption.",
  },
  {
    id: 3,
    icon: <IoBarChartSharp className="w-6 h-6 text-white" />,
    title: "Pre-Construction",
    description:
      "Expert electrical planning, value engineering, and system design. We collaborate with architects and contractors to optimize electrical systems for maximum efficiency and scalability.",
  },
];

const ProjectItem = ({
  id,
  icon,
  title,
  description,
}: projectItemDataProps) => (
  <div key={id} className="flex flex-col gap-2">
    {icon}
    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-100">
      {title}
    </h3>
    <p className="text-neutral-300 font-medium md:max-w-2xl text-lg md:text-xl">
      {description}
    </p>
  </div>
);
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
