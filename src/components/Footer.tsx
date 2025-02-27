import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-100">
      <div className="flex flex-col items-start md:items-center text-center gap-5 px-4 sm:px-12 lg:px-20 py-10 md:py-12">
        <div className="flex items-center">
          <div className="h-5 w-1 bg-[#981D1F] mr-2"></div>
          <h2 className="text-lg tracking-wider font-semibold">
            <span className="text-neutral-800">STRIANO</span>
            <span className="text-neutral-500 ml-1">ELECTRIC</span>
          </h2>
        </div>

        <div className="flex flex-col items-start  md:flex-row gap-3 md:gap-5 text-neutral-600">
          <Link
            href="/"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link
            href="/services"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link
            href="/projects"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link
            href="/testimonials"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link
            href="/striano-florida"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Striano Electric Florida
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link
            href="/contact"
            className="hover:text-neutral-900 transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#981D1F] group-hover:w-full transition-all duration-200"></span>
          </Link>
        </div>

        <div className="text-start md:text-center">
          <p className="text-sm text-neutral-500 mb-1">
            © Striano Electric Co. Inc, 2025. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Designed and developed by{" "}
            <Link
              target="_blank"
              href="https://www.lauf.co/"
              className="text-[#981D1F] hover:underline"
            >
              Lauf.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
