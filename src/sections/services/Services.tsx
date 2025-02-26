"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

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
      <div className="p-6 pb-6 flex-grow">
        <h3 className="text-xl text-neutral-800 font-medium mb-3">{title}</h3>
        <p className="text-neutral-600 text-md">{description}</p>
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
  const [threshold, setThreshold] = useState(0.4);
  const ref = React.useRef(null);
  const servicesRef = React.useRef(null);

  // Update threshold based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Check if we're on a mobile device (less than 768px width)
      if (window.innerWidth < 768) {
        setThreshold(0.2); // Lower threshold for mobile
      } else {
        setThreshold(0.4); // Default threshold for desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isInView = useInView(ref, { once: true, amount: threshold });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    amount: threshold,
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
    <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-36 bg-neutral-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="max-w-5xl"
      >
        <div className="relative pl-6 mb-4">
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 w-1 bg-[#981D1F]"
          ></motion.div>
          <p className="text-sm md:text-md font-medium text-[#981D1F]">
            Our Services
          </p>
          <h2
            style={{ letterSpacing: -0.35 }}
            className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-medium mt-2 "
          >
            Expert solutions for every electrical need
          </h2>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ lineHeight: 1.7 }}
            className="text-neutral-600 text-md md:text-lg pl-6"
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
