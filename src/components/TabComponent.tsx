"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { tabsData } from "@/lib/data";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full text-white">
      {/* Tabs Navigation */}
      <div className="relative border-b border-white/20">
        <div className="overflow-x-auto -mx-4 sm:-mx-12 lg:-mx-20">
          <div className="flex min-w-max px-4 sm:px-12 lg:px-20">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 first:pl-0 last:pr-0 text-lg relative whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-8">
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            {activeContent?.heading}
          </h3>
          <p className="text-gray-300 text-xl md:text-2xl font-medium">
            {activeContent?.description}
          </p>
          <ul className="space-y-6">
            {activeContent?.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="h-2 w-2 mt-2.5 bg-[#981D1F] rounded-full flex-shrink-0" />
                <span className="text-lg md:text-xl text-gray-200">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
