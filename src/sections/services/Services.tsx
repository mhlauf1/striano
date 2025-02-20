import React from "react";
import Image from "next/image";

interface serviceItemDataProps {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

const serviceItemData = [
  {
    id: 0,
    number: "01",
    title: "Core Infrastructure",
    description:
      "Complete Electrical Distribution, High/Low Voltage Systems, Underground & Overhead Installations, Data Center & UPS Infrastructure",
    image: "/services-1.png",
  },
  {
    id: 1,
    number: "02",
    title: "Building Systems",
    description:
      "Lighting & Controls, Security Integration, Audio/Visual Solutions, Fire & Life Safety, Motor Control Systems",
    image: "/services-2.png",
  },
  {
    id: 2,
    number: "03",
    title: "Maintenance & Support",
    description:
      "24/7 Emergency Response, Preventive Maintenance, Safety Inspections, Power Quality Monitoring, After-Hours Service",
    image: "/services-3.png",
  },
  {
    id: 3,
    number: "04",
    title: "Project Services",
    description:
      "Value Engineering, Project Management, Installation & Implementation, System Integration, Quality Assurance",
    image: "/services-1.png",
  },
];

const ServiceItem = ({
  number,
  image,
  title,
  description,
}: serviceItemDataProps) => (
  <div className="grid grid-cols-12 items-center gap-8 py-12 border-b  px-4 sm:px-12 lg:px-20 border-black/10">
    {/* Number section */}
    <div className="col-span-2">
      <div className="flex items-center gap-2">
        <div className="h-[8px] w-[8px]  bg-[#981D1F] rounded-full"></div>
        <p className="text-neutral-500 text-lg">{number}</p>
      </div>
    </div>

    {/* Content section */}
    <div className="col-span-7">
      <h3 className="text-2xl md:text-3xl font-medium  text-neutral-700 mb-3">
        {title}
      </h3>
      <p className="text-neutral-500 font-medium text-lg md:text-xl md:max-w-2xl pr-12">
        {description}
      </p>
    </div>

    {/* Image section */}
    <div className="col-span-3">
      <Image
        src={image}
        alt={title}
        height={200}
        width={360}
        className="rounded-sm w-full"
      />
    </div>
  </div>
);

const Services = () => {
  return (
    <section className=" flex flex-col py-20 md:py-36">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-md text-neutral-700">Our Services</p>
      </div>
      <div className="flex mt-4 md:mt-8 flex-col  gap-16">
        <div className="max-w-6xl space-y-6 px-4 sm:px-12 lg:px-20">
          <h2
            style={{ lineHeight: "100%" }}
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-800"
          >
            Where Excellence Meets Engineering
          </h2>
          <p className="text-neutral-800 max-w-5xl text-xl">
            Our goal is to develop on-going, long-term client relationships by
            continually working to maintain our reputation for quality
            installations performed on-time and within budget. We provide a full
            range of commercial electrical contracting service to end-users,
            building owners and contractors. We furnish, install and maintain
            any electrical system or combination of electrical, datacom, life
            safety and fire alarm systems in a wide range of project types.
          </p>
        </div>
        <div>
          <p className="text-md sm:text-lg  px-4 sm:px-12 lg:px-20 text-neutral-700">
            Our services Include:
          </p>
          {serviceItemData.map((item) => (
            <ServiceItem
              key={item.id}
              image={item.image}
              id={item.id}
              title={item.title}
              description={item.description}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
