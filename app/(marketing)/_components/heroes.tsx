"use client";

import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div
          className="relative
        w-[300px] h-[300px]
        sm:w-[350px] sm:h-[350px]
        md:w-[400px] md:h-[400px]
        "
        >
          <Image
            src="/default/documents.png"
            fill
            className="object-contain  dark:hidden"
            alt="docs"
          />
          <Image
            src="/dark/documents.png"
            fill
            className="hidden  dark:block"
            alt="docs"
          />
        </div>
        <div
          className="relative
        w-[400px] h-[400px]
        hidden
        md:block
        "
        >
          <Image
            src="/default/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="reading"
          />
          <Image
            src="/dark/reading.png"
            fill
            className="object-contain hidden dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
