import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { PrimaryButton, SecondaryButton } from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative max-h-screen bg-gradient-to-b from-[#1F1F1F] to-[#151515]">
      <div className="relative mx-4 md:mx-8 border-x gap-12 border-white/10 z-10 justify-between md:h-screen px-4 sm:px-12 lg:px-20 flex pb-24 md:pb-0 pt-[20vh] md:pt-0 flex-col md:flex-row items-center ">
        <div className=" flex flex-1 flex-col gap-4 md:gap-6">
          <p className="text-white/80 text-sm uppercase tracking-wider">
            Specialized Solutions. Superior Service.
          </p>
          <h1 className="text-4xl title-line-height md:text-5xl lg:text-6xl text-white md:max-w-xl tracking-tight">
            Engineering Power Solutions,{" "}
            <span className="text-neutral-300">
              Delivering Critical Results
            </span>
          </h1>
          <p className="text-lg md:text-xl title-line-subheight font-medium w-full md:max-w-2xl  text-gray-200">
            Striano Electric Co., Inc. has the knowledge and experience
            necessary to perform effectively on any size project.
          </p>
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>Contact us</SecondaryButton>
          </div>
        </div>
        <div className="flex flex-1  justify-center  relative items-center rounded-lg  ">
          <div className="relative">
            <div className="flex flex-col absolute bottom-4 left-4 gap-1">
              <div className="flex flex-row gap-1 items-center">
                <IoIosStar className="h-[24px] w-[24px] text-yellow-400" />
                <IoIosStar className="h-[24px] w-[24px] text-yellow-400" />
                <IoIosStar className="h-[24px] w-[24px] text-yellow-400" />
                <IoIosStar className="h-[24px] w-[24px] text-yellow-400" />
                <IoIosStar className="h-[24px] w-[24px] text-yellow-400" />
              </div>
              <p className="text-white font-semibold">
                New York's Most Trusted Electrical Partner
              </p>
            </div>
            <Image
              src="/services-hero.png"
              className="rounded-md"
              alt="Striano Electric"
              height={508}
              width={766}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
