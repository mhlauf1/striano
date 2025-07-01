"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

const CTA = () => {
  return (
    <section className="relative  overflow-hidden">
      <div className=" py-12 md:py-16  rounded-md bg-neutral-50 mx-auto px-4 relative z-10">
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
                src="/citi-main.png"
                alt="Striano Electric project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                  <p className="text-[#981D1F] font-medium">Citigroup HQ</p>
                  <p className="text-sm text-gray-600">388 Greenwich St.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
