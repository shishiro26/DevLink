import React from "react";
import { JetBrains_Mono } from "next/font/google";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["800"] });

type HeaderProps = {
  label: string;
};

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={`${jetBrains.className} text-[2vw] text-[#7D80DA]`}>
        DEVLINK
      </h1>
      <p className="text-xl text-[#FF5964]">{label}</p>
    </div>
  );
};

export default Header;
