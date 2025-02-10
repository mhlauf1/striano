import React from "react";
import { PrimaryButton } from "@/components/Button";
import { GiElectricalResistance } from "react-icons/gi";
import { SlLayers } from "react-icons/sl";
import { MdEmergencyShare } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";

interface serviceItemDataProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const serviceItemData = [
  {
    id: 0,
    icon: <GiElectricalResistance className="w-8 h-8 text-[#981D1F]" />,
    title: "Core Infrastructure",
    description:
      "Complete Electrical Distribution, High/Low Voltage Systems, Underground & Overhead Installations, Data Center & UPS Infrastructure",
  },
  {
    id: 1,
    icon: <SlLayers className="w-7 h-7 text-[#981D1F]" />,
    title: "Building Systems",
    description:
      "Lighting & Controls, Security Integration, Audio/Visual Solutions, Fire & Life Safety, Motor Control Systems",
  },
  {
    id: 2,
    icon: <MdEmergencyShare className="w-7 h-7 text-[#981D1F]" />,
    title: "Maintenance & Support",
    description:
      "24/7 Emergency Response, Preventive Maintenance, Safety Inspections, Power Quality Monitoring, After-Hours Service",
  },
  {
    id: 3,
    icon: <IoBarChartSharp className="w-7 h-7 text-[#981D1F]" />,
    title: "Project Services",
    description:
      "Value Engineering, Project Management, Installation & Implementation, System Integration, Quality Assurance",
  },
];

const ServiceItem = ({
  id,
  icon,
  title,
  description,
}: serviceItemDataProps) => (
  <div key={id} className="flex flex-col gap-2">
    {icon}
    <h3 className="text-2xl md:text-3xl font-medium tracking-tight mt-1 md:mb-2">
      {title}
    </h3>
    <p className="text-neutral-700 text-lg w-auto md:w-[95%]">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="border-x border-black/10 mx-8 flex flex-col py-20 md:py-36">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[40px] md:w-[75px] bg-black/10"></div>
        <div className="h-[10px] w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-neutral-500">Our Services</p>
      </div>
      <div className="flex mt-8 px-4 sm:px-12 lg:px-20 flex-col md:flex-row gap-16 md:gap-24">
        {/* Left column - shrink to content width */}
        <div className="md:w-2/5 flex flex-col justify-between items-start">
          <div className="space-y-6 md:space-y-8">
            <h2
              style={{ lineHeight: "100%" }}
              className="text-3xl md:text-4xl lg:text-6xl tracking-tight"
            >
              Complete Electrical Distribution
            </h2>
            <p className="text-lg md:text-xl font-medium">
              Striano Electric Co., Inc. has the knowledge and experience
              necessary to perform effectively on any size project.
            </p>
            <PrimaryButton>Learn More</PrimaryButton>
          </div>
        </div>
        {/* Right column - take up remaining space */}
        <div className="md:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            {serviceItemData.map((item) => (
              <ServiceItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
