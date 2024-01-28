"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="./default/logo.svg"
        height={40}
        width={40}
        alt={"Logo"}
        className="dark:hidden"
      ></Image>
      <Image
        src="./dark/logo.svg"
        height={40}
        width={40}
        alt={"Logo"}
        className="hidden dark:block"
      ></Image>
      <p
        className={cn(
          "font-semibold",
          font.className,
        )}
      >
        Notion clone
      </p>
    </div>
  );
};

export default Logo;
