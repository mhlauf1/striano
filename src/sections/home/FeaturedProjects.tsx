import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

const FeaturedProjects = () => {
  return (
    <section className=" flex flex-col py-12 md:py-24">
      <div className="flex items-center gap-2 flex-row">
        <div className="h-[1px] w-[16px] md:w-[75px] bg-black/10"></div>
        <div className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-[#981D1F] rounded-full"></div>
        <p className="text-sm md:text-base text-neutral-700">
          What we&apos;re working on
        </p>
      </div>
      <h2
        style={{ lineHeight: "120%" }}
        className="text-3xl md:text-4xl tracking-tight mt-4 md:mt-8  px-4 sm:px-12 lg:px-20  mb-8 md:mb-12"
      >
        Current Projects
      </h2>
      <div className="grid grid-cols-1   px-4 sm:px-12 lg:px-20  md:grid-cols-2 gap-y-12 gap-x-6">
        {/* First Project */}
        <div className="space-y-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/facebook-cover.jpg"
              alt="Facebook Point Project"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-xl">Facebook, 50 Hudson Yards</h3>
        </div>

        {/* Second Project */}
        <div className="space-y-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/google-cover.webp"
              alt="Google Project"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-xl">Google Pier 57</h3>
        </div>

        {/* Third Project */}
        <div className="space-y-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/nyu.jpg"
              alt="Third Project"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl">NYU Forbes, 60 5th Ave.</h3>
        </div>

        {/* Fourth Project */}
        <div className="space-y-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/sloan.jpg"
              alt="Fourth Project"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl">
            Memorial Sloan Kettering Cancer Center, 515 Madison Ave.
          </h3>
        </div>
      </div>
      <div className=" px-4 sm:px-12 lg:px-20  mt-12">
        <PrimaryButton>View All Projects</PrimaryButton>
      </div>
    </section>
  );
};

export default FeaturedProjects;
