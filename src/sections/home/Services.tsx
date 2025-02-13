import React from "react";
import { PrimaryButton } from "@/components/Button";
import { GiElectricalResistance } from "react-icons/gi";
import { SlLayers } from "react-icons/sl";
import { MdEmergencyShare } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import Link from "next/link";
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
      <GiElectricalResistance className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#981D1F]" />
    ),
    title: "Core Infrastructure",
  },
  {
    id: 1,
    icon: (
      <SlLayers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#981D1F]" />
    ),
    title: "Building Systems",
  },
  {
    id: 2,
    icon: (
      <MdEmergencyShare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#981D1F]" />
    ),
    title: "Maintenance & Support",
  },
  {
    id: 3,
    icon: (
      <IoBarChartSharp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#981D1F]" />
    ),
    title: "Project Services",
  },
];

const ServiceItem = ({ id, icon, title }: serviceItemDataProps) => (
  <div key={id} className="flex flex-col gap-2">
    {icon}
    <h3 className="text-lg md:text-xl font-medium tracking-tight mt-1">
      {title}
    </h3>
  </div>
);

const Services = () => {
  return (
    <section className="border-x border-black/10 mx-4 md:mx-8 flex flex-col py-12 sm:py-20 md:py-36">
      {/* Header */}
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-base text-neutral-500">Our Services</p>
      </div>

      {/* Main Content */}
      <div className="flex mt-4 md:mt-8 px-4 sm:px-12 lg:px-20 w-full flex-col md:flex-row gap-8 sm:gap-16 md:gap-24">
        {/* Left Content */}
        <div className="w-full flex flex-col md:w-2/3">
          <div className="flex flex-col h-full justify-between gap-8">
            <div className="flex flex-col items-start gap-6 max-w-3xl sm:gap-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-800 leading-tight">
                Complete Electrical Distribution
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-900">
                Our reputation of completing on-time and on-budget projects has
                gained us a reputation for service and integrity unequaled in
                the industry.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-500">
                Through our quality and professional service we have developed
                and maintained our client base which includes numerous industry
                leaders in financial services, museums, hospitality, health care
                and entertainment.
              </p>

              {/* Service Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full mt-4">
                {serviceItemData.map((item) => (
                  <ServiceItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>

              <Link href="/services" className="mt-4">
                <PrimaryButton>Learn More</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 h-[300px] sm:h-[400px] md:h-auto relative">
          <Image
            src="/tall-building.png"
            alt="Building"
            fill
            className="object-cover object-top rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
