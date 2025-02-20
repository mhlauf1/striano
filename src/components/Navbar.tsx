"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Striano Electric Florida", href: "/florida" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="sticky w-full bg-white top-0 left-0 shadow right-0 z-50 py-3">
      <div className="flex px-4 sm:px-12 md:px-20 justify-between items-center">
        <Link href="/">
          <h2 className="text-xl md:text-2xl tracking-tight text-neutral-800 font-semibold">
            Striano Electric
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="py-2 rounded border border-white bg-white/10 hover:bg-white hover:text-black transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-black transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black transition-all ${
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
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-lg p-8 lg:hidden"
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
                {menuItems.map((item) => (
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
                  className="px-6 py-2 rounded border border-white text-white hover:bg-white hover:text-black transition-all text-center mt-4"
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
