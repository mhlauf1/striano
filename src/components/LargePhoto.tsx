import React from "react";
import Image from "next/image";

const LargePhoto = () => {
  return (
    <div className="w-full">
      <section className="relative h-[100vh] mb-16 md:mb-24">
        <div className="relative w-full h-full">
          <Image
            src="/large-sky-image.png"
            alt="New York City skyline with Empire State Building"
            fill
            priority
            className="object-cover object-top"
            quality={100}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      </section>
    </div>
  );
};

export default LargePhoto;
