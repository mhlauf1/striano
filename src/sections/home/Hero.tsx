import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative max-h-screen rounded-md">
      <Image
        src="/hero-home-bg.png"
        alt="New York City skyline with Empire State Building"
        fill
        priority
        className="object-cover rounded-2xl p-2 -z-10 object-center"
        quality={100}
        sizes="100vw"
      />

      <div className="relative mx-8 md:mx-8 border-x border-white/10 z-10 h-screen  px-4 sm:px-12 lg:px-20 flex flex-col justify-end pb-24">
        <div className="max-w-3xl space-y-4 md:space-y-6">
          <h1
            style={{ lineHeight: "100%" }}
            className="text-4xl md:text-5xl lg:text-7xl text-white tracking-tight"
          >
            Striano Electric Powers New York City&apos;s Most Critical
            Infrastructure
          </h1>
          <p className="text-lg md:text-xl font-medium w-full md:w-[70%] text-gray-200">
            Premier electrical solutions for New York&apos;s leading
            institutions, delivered on time and on budget.
          </p>
          <div className="flex flex-row gap-4 pt-2 md:pt-4">
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>View Services</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
