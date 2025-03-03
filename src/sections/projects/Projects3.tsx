"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { data } from "@/lib/projectImageData";

interface ProjectItem {
  id: number;
  src: string;
  name: string;
  year?: string;
  description?: string;
  sector: string;
  gallery: string[];
}

const Projects3: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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

  const openLightbox = (project: ProjectItem): void => {
    setSelectedProject(project);
  };

  const closeLightbox = (): void => {
    setSelectedProject(null);
  };

  const nextImage = (): void => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (): void => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  const LightboxModal: React.FC = () => {
    if (!selectedProject) return null;

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
        <div className="absolute top-6 left-6 text-white z-50">
          <h2 className="text-2xl font-medium">{selectedProject.name}</h2>
          <p className="text-sm opacity-70">
            {selectedProject.sector}{" "}
            {selectedProject.year && `- ${selectedProject.year}`}
          </p>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentImageIndex + 1} / {selectedProject.gallery.length}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white z-50 p-3 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          <IoIosArrowBack size={30} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white z-50 p-3 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          <IoIosArrowForward size={30} />
        </button>

        {/* Main image */}
        <div className="w-full max-w-5xl max-h-[80vh] relative">
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

  const ProjectItem: React.FC<{ project: ProjectItem }> = ({ project }) => {
    const { id, name, sector } = project;
    const isHovered = hoveredId === id;

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
            className="grid grid-cols-1 md:grid-cols-3 py-3 md:py-4 relative cursor-pointer"
            onClick={() => openLightbox(project)}
          >
            {/* Mobile-only sector tag (top position) */}
            <div className="col-span-1 flex items-center justify-start md:hidden mb-2">
              <p className="text-xs text-[#981D1F] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                {sector}
              </p>
            </div>

            {/* Project name */}
            <div className="col-span-1 flex items-center">
              <h3 className="text-lg md:text-xl lg:text-2xl font-normal tracking-tight">
                {name}
              </h3>
            </div>

            {/* View Gallery button */}
            <div className="col-span-1 items-start flex flex-col justify-center mt-2 md:mt-0">
              <motion.div
                className="inline-block"
                animate={{
                  backgroundColor: isHovered
                    ? "rgb(64, 64, 64)"
                    : "transparent",
                  color: isHovered ? "white" : "rgb(107, 114, 128)",
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs uppercase tracking-widest px-3 py-1 md:px-4 md:py-2 rounded-sm">
                  View Gallery
                </p>
              </motion.div>
            </div>

            {/* Desktop-only sector tag (right position) */}
            <div className="col-span-1 items-start hidden md:flex md:justify-end overflow-hidden">
              <p className="text-xs md:text-sm bg-neutral-100 text-[#981D1F] px-3 py-1 whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                {sector}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-12 md:mt-16 pb-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <section className="w-full bg-inherit relative">
        <p className="text-xs uppercase tracking-widest py-2 rounded-sm mt-2 text-neutral-500">
          Projects:
        </p>
        {data.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedProject && <LightboxModal />}
    </div>
  );
};

export default Projects3;
