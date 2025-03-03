"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define a single, shared navigation items array
const NAV_ITEMS = [
  { label: "Home", href: "/", mobileOnly: true },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Striano Electric Florida", href: "/striano-florida" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <nav className="sticky bg-white shadow w-full top-0 left-0 right-0 z-50 py-3">
      <div className="flex  px-4 sm:px-8 md:px-12 lg:px-16 justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <div className="h-6 w-1 bg-[#981D1F] mr-2"></div>
            <h2 className="text-md tracking-wide">
              <span className="text-neutral-800  font-semibold">STRIANO</span>
              <span className="text-neutral-500 ml-1">ELECTRIC</span>
            </h2>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.filter((item) => !item.mobileOnly).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900 text-neutral-500 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded border border-[#981D1F] text-[#981D1F] hover:bg-[#981D1F] hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-neutral-800 transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-neutral-800 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-neutral-800 transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-sm p-8 lg:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white p-2"
                aria-label="Close menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute w-full h-0.5 bg-white rotate-45 top-1/2 -translate-y-1/2" />
                  <span className="absolute w-full h-0.5 bg-white -rotate-45 top-1/2 -translate-y-1/2" />
                </div>
              </button>

              <div className="flex flex-col gap-8 mt-16">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded border border-[#981D1F] text-white hover:bg-[#981D1F] hover:text-white transition-colors duration-200 text-center mt-4 block"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
