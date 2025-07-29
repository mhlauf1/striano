"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define navigation items array
const NAV_ITEMS = [
  { label: "Home", href: "/", mobileOnly: true },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Striano Electric Florida", href: "/striano-florida" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isFloridaPage = pathname === "/striano-florida";
  const isContactPage = pathname === "/contact";

  const whiteNav = isFloridaPage || isContactPage;

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Determine the styles based on page and scroll state
  const getTextStyles = () => {
    // Use dark text for Florida page or when scrolled
    if (whiteNav || scrolled) {
      return {
        logoMain: "text-neutral-800",
        logoSecondary: "text-neutral-600",
        navLinks: "text-neutral-800 hover:text-[#981D1F]",
        contactButton:
          "border border-[#981D1F] text-[#981D1F] hover:bg-[#981D1F] hover:text-white",
        mobileMenuBars: "bg-neutral-800",
      };
    }

    // Default light text for other pages with dark hero sections
    return {
      logoMain: "text-neutral-100",
      logoSecondary: "text-neutral-300",
      navLinks: "text-neutral-800 hover:text-black",
      contactButton:
        "border border-[#981D1F] text-[#981D1F] hover:bg-[#981D1F] hover:text-white",
      mobileMenuBars: "bg-neutral-900",
    };
  };

  const styles = getTextStyles();

  return (
    <nav className="fixed w-full bg-white shadow-md top-0 left-0 right-0 z-50 py-3 transition-all duration-300">
      <div className="flex px-4 sm:px-8 md:px-12 lg:px-16 justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-no-bg.png"
            alt="Logo"
            height={90}
            width={200}
            className="md:h-auto md:w-[200px] h-auto w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.filter((item) => !item.mobileOnly).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors relative group ${styles.navLinks}`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-5 py-2 rounded transition-colors duration-200 ${styles.contactButton}`}
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
              className={`w-full h-0.5 transition-transform duration-200 ${
                styles.mobileMenuBars
              } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-full h-0.5 transition-opacity duration-200 ${
                styles.mobileMenuBars
              } ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-full h-0.5 transition-transform duration-200 ${
                styles.mobileMenuBars
              } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
                  className="px-6 py-2 rounded border border-[#981D1F] text-white hover:bg-[#981D1F] hover:text-white transition-colors duration-300 text-center mt-4 block"
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
