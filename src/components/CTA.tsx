"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

const CTA = () => {
  return (
    <section className="relative bg-white mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#981D1F] to-[#981D1F]/80"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#981D1F]/5 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-[#981D1F]/5 blur-2xl"></div>

      <div className="mt-8 py-12 md:py-16  rounded-md bg-neutral-50 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-5">
              <div className="space-y-2">
                <h2
                  style={{ lineHeight: 1.3 }}
                  className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight"
                >
                  Ready to start your next project?
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Our expert teams deliver exceptional electrical solutions, on
                  time and on budget.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    Specialized teams for complex infrastructure projects
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    Comprehensive solutions from design to maintenance
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#981D1F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-2">
                    On-time, on-budget project delivery guaranteed
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <PrimaryButton>Contact Us Today</PrimaryButton>
                </Link>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Pfizer4.jpg"
                alt="Striano Electric project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
