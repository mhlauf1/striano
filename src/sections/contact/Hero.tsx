"use client";
import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Button";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div className="flex md:flex-row flex-col   md:px-12 rounded-md py-12 sm:py-16 md:py-24  mt-8 bg-neutral-50 gap-12 md:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col w-full md:w-1/2  md:pr-8"
        >
          <div className="md:mb-10">
            <p className="text-xs uppercase tracking-wider text-[#981D1F] font-medium mb-2">
              Get in touch
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-4">
              Contact us
            </h1>
            <p className="text-lg text-gray-600">
              Ready to start your next electrical project? Our team is here to
              deliver expert solutions for your infrastructure needs.
            </p>
          </div>

          <div className="space-y-6 mt-8 md:mt-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 text-[#981D1F] mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@strianoelectric.com"
                  className="text-[#981D1F] hover:text-gray-900 transition-colors"
                >
                  info@strianoelectric.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-[#981D1F] mt-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  Phone
                </h3>
                <p className="text-gray-600">(718) 225-2100</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-[#981D1F] mt-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  Address
                </h3>
                <p className="text-gray-600">
                  246 Park Avenue, Garden City Park, New York 11040, United
                  States
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col w-full md:w-1/2  space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#981D1F] focus:border-[#981D1F]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#981D1F] focus:border-[#981D1F]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={8}
              placeholder="Type your message..."
              className="w-full border rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#981D1F] focus:border-[#981D1F]"
            ></textarea>
          </div>
          <div className="pt-2">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
