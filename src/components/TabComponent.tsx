"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { tabsData } from "@/lib/data";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full  text-white">
      {/* Tabs Navigation */}
      <div className="relative border-b border-white/20 mb-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max relative">
            {/* Animated underline that moves between tabs */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-[#981D1F]"
              layoutId="activeTabIndicator"
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              style={{
                width: "var(--tab-width, 0px)",
                left: "var(--tab-left, 0px)",
              }}
              animate={{
                // This ensures the underline is always visible
                opacity: 1,
              }}
            />

            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 first:pl-0 text-lg relative whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                ref={(el) => {
                  // Set custom properties for the active tab's width and position
                  if (el && tab.id === activeTab) {
                    document.documentElement.style.setProperty(
                      "--tab-width",
                      `${el.offsetWidth}px`
                    );
                    document.documentElement.style.setProperty(
                      "--tab-left",
                      `${el.offsetLeft}px`
                    );
                  }
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        className="pt-4"
      >
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 pl-6">
          {activeContent?.heading}
        </h3>
        <p
          className="text-neutral-300 text-md md:text-lg pl-6 mb-8"
          style={{ lineHeight: 1.7 }}
        >
          {activeContent?.description}
        </p>
        <ul className="space-y-4 pl-6">
          {activeContent?.bulletPoints.map((point, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={bulletVariants}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#981D1F] flex-shrink-0" />
              <span className="font-medium text-md md:text-lg text-white">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default TabComponent;
