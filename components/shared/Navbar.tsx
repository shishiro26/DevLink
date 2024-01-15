import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500"] });

const Navbar = () => {
  return (
    <nav
      className={`${
        jetBrains.className
      } ${"h-24"} bg-[#7D80DA] backdrop-blur-md p-4 flex items-center justify-between`}
    >
      <div className="container flex  items-center justify-between">
        <h1 className="uppercase text-[2rem] font-bold text-white">
          <Link href={`/`}>DEVLINK</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <Button variant={"link"} className={"text-white"} asChild>
            <Link href={"/"} className="text-[1.5vw]">
              Home
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
