"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabsData } from "@/lib/data";
import { ChevronDown } from "lucide-react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="w-full text-white">
      {/* Mobile Dropdown */}
      <div
        className="md:hidden relative mb-8 border-b border-white/20"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full py-4 flex items-center justify-between text-lg font-medium"
        >
          {activeContent?.title}
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 left-0 right-0 bg-[#202020] shadow-lg rounded-b-md overflow-hidden"
            >
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 ${
                    activeTab === tab.id
                      ? "bg-[#981D1F]/10 text-white"
                      : "text-gray-300 hover:bg-black/20"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Tabs Navigation */}
      <div className="hidden md:block relative border-b border-white/20 mb-8">
        <div className="flex relative">
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
              opacity: 1,
            }}
          />

          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 lg:px-6 first:pl-0 text-base lg:text-lg relative whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              ref={(el) => {
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

      {/* Tab Content */}
      <motion.div key={activeTab} initial="hidden" animate="visible">
        <h3
          style={{ letterSpacing: -0.5 }}
          className="text-xl md:text-2xl font-medium text-white mb-2 pl-2 md:pl-6"
        >
          {activeContent?.heading}
        </h3>
        <p
          className="text-neutral-300 text-md pl-2 md:pl-6 mb-4"
          style={{ lineHeight: 1.55 }}
        >
          {activeContent?.description}
        </p>
        <ul className="space-y-2 pl-2 md:pl-6">
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
