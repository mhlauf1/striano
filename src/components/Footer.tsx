import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#151515]">
      <div className=" mx-8 flex flex-col gap-8 md:flex-row  px-4 sm:px-12 lg:px-20 py-8 md:py-12 border-x border-white/10">
        <div className="flex text-white flex-1">logo</div>
        <div className="flex flex-1 md:items-end flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-white md:items-center">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex md:items-end flex-col">
            <p className="text-sm text-neutral-500">
              © Striano Electric Co. Inc, 2025. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              Designed and developed by{" "}
              <Link target="_blank" href="https://www.lauf.co/">
                Lauf.
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
