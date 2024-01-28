"use client";

import Logo from "@/app/(marketing)/_components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        `
        z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6
      `,
        scrolled &&
          "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;