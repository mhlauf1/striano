"use client";
import React, { useState, useEffect, useRef } from "react";
import { projects } from "@/lib/projectData";
import { FILTER_OPTIONS, FilterOption } from "@/lib/projectData";
import { ChevronDown } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState<FilterOption>("All Projects");
  const [isSticky, setIsSticky] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { top } = headerRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredProjects = projects
    .filter((project) => {
      if (activeFilter === "All Projects") return true;
      if (activeFilter === "Featured Projects") return project.featured;
      return project.category === activeFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleFilterSelect = (filter: FilterOption) => {
    setActiveFilter(filter);
    setIsFilterOpen(false);
  };

  return (
    <section className="flex flex-col mt-24 md:mt-36 pb-12 md:pb-24">
      <div className="flex flex-col">
        {/* Filters */}
        <div className="flex flex-col px-4 sm:px-12 lg:px-20">
          <p className="text-neutral-600">Filter by sector:</p>
          <div className="flex mb-12 mt-4 flex-wrap gap-x-6 gap-y-3">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs sm:text-md md:text-lg text-start  transition-colors
                ${
                  activeFilter === filter
                    ? " font-medium text-black"
                    : " text-neutral-400 font-medium hover:text-neutral-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Filter text */}
          <div
            ref={headerRef}
            className="flex sticky bg-white top-0 px-4 sm:px-12 lg:px-20 items-center justify-between mb-4 py-4 border-b transition-colors duration-300 z-50"
          >
            <h2 className="text-2xl md:text-3xl font-medium transition-colors duration-300">
              {activeFilter}
            </h2>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`transition-colors duration-300 flex items-center gap-2
                  ${isSticky ? "text-black" : "text-neutral-500"}`}
              >
                Filter
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top
                  ${
                    isFilterOpen
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-0 -translate-y-2"
                  }`}
              >
                {FILTER_OPTIONS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterSelect(filter)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-neutral-50
                      ${
                        activeFilter === filter
                          ? "text-[#981D1F] font-medium"
                          : "text-neutral-600"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="px-4 sm:px-12 lg:px-20 border-t border-black/10 pt-8"
              >
                <div className="flex items-center mb-2 gap-2">
                  <div className="h-[6px] w-[6px] bg-[#981D1F] rounded-full"></div>
                  <div className="text-xs md:text-sm uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-600">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
