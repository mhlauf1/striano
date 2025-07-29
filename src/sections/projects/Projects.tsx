"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  combinedProjects,
  ProjectWithGallery,
  FILTER_OPTIONS,
  FilterOption,
} from "@/lib/projectImageData";

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<ProjectWithGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Category filter state - default to null (nothing selected)
  const [activeCategory, setActiveCategory] = useState<FilterOption | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = React.useMemo(() => {
    if (!activeCategory) {
      return []; // Return empty array if no category is selected
    } else {
      return combinedProjects.filter(
        (project) => project.category === activeCategory
      );
    }
  }, [activeCategory]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowRight" && selectedProject) {
        nextImage();
      } else if (e.key === "ArrowLeft" && selectedProject) {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  // Reset current image index when a new project is selected
  useEffect(() => {
    setCurrentImageIndex(0);

    // Toggle body scroll
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const openLightbox = (project: ProjectWithGallery): void => {
    if (project.hasGallery && project.gallery && project.gallery.length > 0) {
      setSelectedProject(project);
    }
  };

  const closeLightbox = (): void => {
    setSelectedProject(null);
  };

  const nextImage = (): void => {
    if (
      !selectedProject ||
      !selectedProject.gallery ||
      selectedProject.gallery.length === 0
    )
      return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject!.gallery!.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (): void => {
    if (
      !selectedProject ||
      !selectedProject.gallery ||
      selectedProject.gallery.length === 0
    )
      return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject!.gallery!.length - 1 : prev - 1
    );
  };

  // Function to handle category selection
  const handleCategorySelect = (category: FilterOption) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

  const LightboxModal: React.FC = () => {
    if (
      !selectedProject ||
      !selectedProject.gallery ||
      selectedProject.gallery.length === 0
    )
      return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={closeLightbox}
          className="absolute top-6 right-6 text-white z-50 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          <IoIosClose size={40} />
        </button>

        {/* Project info */}
        <div className="absolute top-6 w-3/4 left-6 text-white z-50">
          <h2 className="text-xl md:text-2xl font-medium">
            {selectedProject.name}
          </h2>
          <p className="text-sm opacity-70">{selectedProject.category} </p>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentImageIndex + 1} / {selectedProject.gallery.length}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-6 bg-black/70 top-1/2 transform -translate-y-1/2 text-white z-50 p-3 hover:bg-black  rounded-full transition-colors"
        >
          <IoIosArrowBack className="size-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-6  bg-black/70 top-1/2 transform -translate-y-1/2 text-white z-50 p-3 hover:bg-black  rounded-full transition-colors"
        >
          <IoIosArrowForward className="size-6" />
        </button>

        {/* Main image */}
        <div className="w-full max-w-5xl max-h-[80vh] relative">
          <div className="absolute flex items-center justify-center w-full z-20 bottom-2">
            {/* <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
              <p className="text-[#981D1F] text-lg md:text-xl font-medium">
                {selectedProject.name}
              </p>
            </div> */}
            <div className="px-5 py-2 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
              <p className="text-neutral-600 md:text-lg text-center font-medium">
                {selectedProject.name}
              </p>
            </div>
          </div>
          <div className="relative w-full h-[70vh]">
            <Image
              src={`/${selectedProject.gallery[currentImageIndex]}`}
              alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Thumbnail navigation at bottom */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4 py-2">
          {selectedProject.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`relative h-16 w-24 flex-shrink-0 transition-all cursor-pointer ${
                currentImageIndex === idx
                  ? "border-2 border-white opacity-100"
                  : "opacity-50"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={`/${img}`}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProjectItem: React.FC<{ project: ProjectWithGallery }> = ({
    project,
  }) => {
    const { id, name } = project;
    const isHovered = hoveredId === id;
    const hasValidGallery =
      project.hasGallery && project.gallery && project.gallery.length > 0;

    return (
      <div
        className="relative"
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className="border-t border-gray-200">
          <motion.div
            className="absolute top-0 left-0 h-[1px] bg-black z-10"
            initial={{ width: "0%" }}
            animate={{
              width: isHovered ? "100%" : "0%",
            }}
            transition={{ duration: 0.6 }}
          />
          <div
            className={`flex flex-row justify-between py-3 relative ${
              hasValidGallery ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={() => hasValidGallery && openLightbox(project)}
          >
            <div className="flex-1 flex items-center">
              <h3 className="text-sm font-normal tracking-tight">{name}</h3>
            </div>
            <div className="flex-1 items-end flex flex-col justify-center">
              {hasValidGallery && (
                <motion.div
                  className="inline-block"
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs uppercase bg-[#981D1F] text-white tracking-widest px-3 py-2 md:px-4 md:py-3">
                    View Gallery
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-12 md:mt-16 pb-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <section className="w-full bg-inherit relative">
        {/* Category Dropdown */}
        <div className="relative w-full z-20 max-w-xl mb-6">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between px-4 py-3 border rounded-md cursor-pointer text-white bg-[#981D1F]"
          >
            <span className="text-lg md:text-xl font-medium mr-2">
              {activeCategory || "View Our Projects"}
            </span>
            <ChevronDown
              size={24}
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-md shadow-lg z-10">
              <div className="py-1 max-h-60 overflow-y-auto">
                {FILTER_OPTIONS.map((category) => (
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

        {activeCategory && (
          <>
            <div className="flex justify-between flex-col md:flex-row gap-2 items-start md:items-center mb-6">
              <p className="text-xs uppercase tracking-widest py-2 rounded-sm text-neutral-500">
                Projects:
              </p>

              {/* Optional: Add indicator for projects with galleries */}
              <p className="text-xs text-neutral-500">
                <span className="inline-block w-2 h-2 rounded-full bg-[#981D1F] mr-2"></span>
                Projects with &quot;View Gallery&quot; have photo galleries
              </p>
            </div>

            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))
            ) : (
              <div className="py-8 text-center border-t border-gray-200">
                <p className="text-neutral-500">
                  No projects available in this category.
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedProject && <LightboxModal />}
    </div>
  );
};

export default Projects;
