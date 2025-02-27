"use client";
import React, { useState } from "react";
import { projects } from "@/lib/projectData";
import { PROJECT_CATEGORIES } from "@/lib/types";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Define a type for the project categories
type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];

const Projects = () => {
  // State for active category and dropdown open/close
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    Object.values(PROJECT_CATEGORIES)[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter projects by active category
  const filteredProjects = projects
    .filter((project) => project.category === activeCategory)
    .sort((a, b) => a.name.localeCompare(b.name));

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Correctly typed handleCategorySelect function
  const handleCategorySelect = (category: ProjectCategory) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <section className="flex flex-col bg-neutral-50 pt-6 md:pt-12 pb-6 md:pb-24">
      {/* Category Dropdown - Sticky at top */}
      <div className="z-40 bg-neutral-50 py-4">
        <div className="px-4 sm:px-12 lg:px-20">
          <div className="relative w-full max-w-xl">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between px-4 py-3 border rounded-md cursor-pointer bg-white"
            >
              <span className="text-sm font-medium mr-2">{activeCategory}</span>
              <ChevronDown
                size={16}
                className={`text-neutral-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-md shadow-lg z-10">
                <div className="py-1">
                  {Object.values(PROJECT_CATEGORIES).map((category) => (
                    <div
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                        activeCategory === category
                          ? "bg-neutral-100 text-[#981D1F]"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16  py-4">
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="relative "
            >
              {/* <motion.div
                variants={lineVariants}
                className="absolute left-0 top-0 h-full w-1 bg-[#981D1F]/20"
              ></motion.div>
              <p className="text-sm font-medium text-[#981D1F]">
                {activeCategory}
              </p> */}
              <h3 className="text-md hover:text-[#981D1F]  md:text-lg text-neutral-800 font-medium mt-2">
                {project.name}
              </h3>
            </motion.div>
          ))}

          {/* Add electrical maintenance if selected category is Data Centers */}
          {activeCategory === PROJECT_CATEGORIES.DATA_CENTERS && (
            <motion.div
              custom={filteredProjects.length}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="relative"
            >
              {/* <motion.div
                variants={lineVariants}
                className="absolute left-0 top-0 h-full w-1 bg-[#981D1F]"
              ></motion.div>
              <p className="text-sm font-medium text-[#981D1F]">
                Electrical Maintenance
              </p> */}
              <h3 className="text-md md:text-lg text-neutral-800 font-medium mt-2">
                24/7 Emergency Response & Preventive Maintenance
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
