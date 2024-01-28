import Navbar from "./_components/navbar";
import React from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
}
