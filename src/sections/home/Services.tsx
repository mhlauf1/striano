"use client";
import React from "react";
import { PrimaryButton } from "@/components/Button";
import { GiElectricalResistance } from "react-icons/gi";
import { SlLayers } from "react-icons/sl";
import { MdEmergencyShare } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import Image from "next/image";

interface serviceItemDataProps {
  id: number;
  icon: React.ReactNode;
  title: string;
}

const serviceItemData = [
  {
    id: 0,
    icon: (
      <GiElectricalResistance className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  text-neutral-400" />
    ),
    title: "Core Infrastructure",
  },
  {
    id: 1,
    icon: (
      <SlLayers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400" />
    ),
    title: "Building Systems",
  },
  {
    id: 2,
    icon: (
      <MdEmergencyShare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  text-neutral-400" />
    ),
    title: "Maintenance & Support",
  },
  {
    id: 3,
    icon: (
      <IoBarChartSharp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  text-neutral-400" />
    ),
    title: "Project Services",
  },
];

const ServiceItem = ({ id, icon, title }: serviceItemDataProps) => (
  <div key={id} className="flex flex-col gap-2">
    {icon}
    <h3 className="text-lg md:text-xl  text-neutral-700  mt-1">{title}</h3>
  </div>
);

const Services = () => {
  return (
    <section className=" flex flex-col py-12   md:py-24">
      {/* Header */}
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-base text-neutral-700">Our Services</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-12 lg:px-20 min-h-[60vh] ">
        <div className="flex flex-col justify-between items-start  py-4 md:py-8">
          <div className="space-y-6 ">
            <h2 className="text-3xl tracking-tight md:text-5xl">
              Complete Electrical Distribution
            </h2>
            <p className="text-neutral-800 max-w-2xl text-lg">
              Our reputation of completing on-time and on-budget projects has
              gained us a reputation for service and integrity unequaled in the
              industry. Through our quality and professional service we have
              developed and maintained our client base which includes numerous
              industry leaders in financial services, museums, hospitality,
              health care and entertainment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-16 mb-8 mt-4">
            {serviceItemData.map((item) => (
              <ServiceItem
                key={item.id}
                id={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/white-services1.png"
            alt="Building exterior with modern architecture"
            className="object-cover p-4 md:p-8"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
