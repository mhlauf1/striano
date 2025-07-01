"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
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
    image: "/core-infra.png",
  },
  {
    id: 1,
    number: "02",
    title: "Building Systems",
    description:
      "Lighting & Controls, Security Integration, Audio/Visual Solutions, Fire & Life Safety, Motor Control Systems",
    image: "/building-systems.png",
  },
  {
    id: 2,
    number: "03",
    title: "Maintenance & Support",
    description:
      "24/7 Emergency Response, Preventive Maintenance, Safety Inspections, Power Quality Monitoring, After-Hours Service",
    image: "/support.png",
  },
  {
    id: 3,
    number: "04",
    title: "Project Services",
    description:
      "Value Engineering, Project Management, Installation & Implementation, System Integration, Quality Assurance",
    image: "/proj-services.png",
  },
];

const ServiceItem = ({
  image,
  title,
  description,
  index,
  isInView,
}: serviceItemDataProps & { index: number; isInView: boolean }) => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + index * 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className="bg-white rounded-md overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="px-4 py-8 pb-6 flex-grow">
        <h3 className="text-lg tracking-tight md:text-xl mb-2">{title}</h3>
        <p className="text-neutral-700 text-md">{description}</p>
      </div>
      <div className="relative h-[220px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
    </motion.div>
  );
};

const Services = () => {
  // Set initial threshold value
  const ref = React.useRef(null);
  const servicesRef = React.useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    amount: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24 bg-neutral-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="max-w-5xl"
      >
        <div className="relative pl-6 mb-2 md:mb-3">
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 w-1 bg-[#981D1F]"
          ></motion.div>
          <p
            style={{ letterSpacing: 1 }}
            className="text-xs uppercase  text-[#981D1F]"
          >
            Our Services
          </p>
          <h2 className="text-2xl font-medium md:text-3xl text-neutral-800  mt-1 md:mt-2">
            Expert solutions for every electrical need
          </h2>
        </div>
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.55 }}
            className="text-neutral-700 text-md pl-6"
          >
            Our goal is to develop on-going, long-term client relationships by
            maintaining our reputation for quality installations performed
            on-time and within budget.
          </motion.p>
        </div>
      </motion.div>

      <div ref={servicesRef} className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItemData.map((item, index) => (
            <ServiceItem
              key={item.id}
              image={item.image}
              id={item.id}
              title={item.title}
              description={item.description}
              number={item.number}
              index={index}
              isInView={isServicesInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
