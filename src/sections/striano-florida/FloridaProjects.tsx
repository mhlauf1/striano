"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Dummy data for Florida projects
interface FloridaProject {
  id: string;
  name: string;
  gallery: string[];
}

const floridaProjects: FloridaProject[] = [
  {
    id: "marriott",
    name: "Marriott Hotel",
    gallery: [
      "/FL-marriott-1.jpg",
      "/FL-marriott-2.jpg",
      "/fl-hotel-naples.jpg",
      "/ac-hotel-2.jpeg",
      "/ac-hotel-3.jpeg",
    ],
  },
  {
    id: "porsche",
    name: "Porsche Studio",
    gallery: [
      "/porsche-1.JPG",
      "/porsche-11.jpg",
      "/porsche-2.JPG",
      "/porsche-3.JPG",
      "/porsche-4.JPG",
      "/porsche-5.JPG",
      "/porsche-6.JPG",
    ],
  },
  {
    id: "boardwalk",
    name: "Gulf Shore Blvd Boardwalk",
    gallery: ["/FL-Boardwalk-1.jpg", "/FL-Boardwalk-2.jpg", "/boardwalk-1.jpg"],
  },

  {
    id: "bigham",
    name: "Bigham Jewelers",
    gallery: ["/bigham-jewelers.jpg", "/bigham-jewelers-2.jpg"],
  },
  {
    id: "shadow-wood",
    name: "Shadow Wood CC",
    gallery: ["/shadow-wood.jpg", "/shadow-wood-2.jpg"],
  },
  {
    id: "zoo",
    name: "Naples Zoo",
    gallery: ["/fl-naples-zoo.jpg"],
  },
  {
    id: "garden",
    name: "Naples Botanical Garden",
    gallery: [
      "/fl-naples-garden.jpg",
      "/fl-naples-garden-2.png",
      "/naples-botanical-garden3.jpg",
    ],
  },
  {
    id: "edision",
    name: "The Edision",
    gallery: ["/the-edision.jpg"],
  },
  {
    id: "olympia",
    name: "Olympia Medical Center",
    gallery: ["/fl-medical.jpg"],
  },
  {
    id: "harbour",
    name: "Harbour",
    gallery: [
      "/FL-Harbour-1.jpg",
      "/FL-Harbour-2.jpg",
      "/FL-Harbour-3.jpg",
      "/FL-Harbour-4.jpg",
    ],
  },
  {
    id: "church",
    name: "Hope Lutheran Church, Bonita Springs",
    gallery: ["/hope-church.png"],
  },
];

export default function FloridaProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = floridaProjects.find((p) => p.id === activeId) || null;

  return (
    <div className="pt-12 pb-6 md:pb-12 md:pt-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col  gap-4 items-start justify-between ">
        {/* Animated Title */}
        <motion.h2
          key={activeProject?.id || "empty"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          style={{ lineHeight: 1.1 }}
          className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight"
        >
          {activeProject ? activeProject.name : "View our Florida Gallery"}
        </motion.h2>

        {/* Styled Dropdown */}
        <div className="relative md:w-auto w-full">
          <button
            className={`flex items-center md:max-w-[400px] w-full md:w-[400px] flex-1 justify-between px-4 py-3 rounded-md transition-colors duration-200
              ${
                isOpen || activeProject
                  ? "bg-red-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            onClick={() => setIsOpen((o) => !o)}
          >
            {activeProject ? activeProject.name : "Select a Project"}
            <ChevronDown
              className={`${isOpen ? "transform rotate-180" : ""}`}
              size={20}
            />
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-1 w-full bg-white border rounded-md shadow-lg z-20">
              {floridaProjects.map((p) => (
                <li
                  key={p.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setActiveId(p.id);
                    setIsOpen(false);
                  }}
                >
                  {p.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Gallery */}
      {activeProject ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activeProject.gallery.map((src, idx) => (
            <div key={idx} className="w-full h-full relative">
              <Image
                src={src}
                alt={`${activeProject.name} ${idx + 1}`}
                height={1000}
                width={1000}
                className="object-cover flex flex-1 h-full rounded-md"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center  items-center md:min-h-[150px] min-h-[150px]">
          <div className="bg-neutral-50 mt-4 py-2 px-5 rounded-full">
            <h2 className="text-neutral-500">Select a project</h2>
          </div>
        </div>
      )}
    </div>
  );
}
