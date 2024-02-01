"use client";

import Logo from "@/app/(marketing)/_components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Spinner from "@/components/ui/spinner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } =
    useConvexAuth();
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
        {isLoading && (
          <p>
            <Spinner></Spinner>
          </p>
        )}
        {!isAuthenticated &&
          !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                >
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">
                  Get Notion Free
                </Button>
              </SignInButton>
            </>
          )}
        {isAuthenticated &&
          !isLoading && (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <Link href="./documents">
                  Enter notion
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/"></UserButton>
            </>
          )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
