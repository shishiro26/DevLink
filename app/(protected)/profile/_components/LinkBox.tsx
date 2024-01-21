import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";

type LinkProps = {
  link: string;
};

const LinkBox = () => {
  return (
    <ScrollArea className="flex flex-col gap-y-2">
      <div className="m-1 border rounded-lg p-2 flex items-center gap-2">
        <FaGithub className="h-5 w-5" />
        <p className="text-sm  text-[#4e54c8]">https://github.com/shishiro26</p>
      </div>
      <div className="m-1 border rounded-lg p-2 flex items-center gap-2">
        <FaLinkedin className="h-5 w-5 text-blue-500" />
        <p className="text-sm  text-[#4e54c8]">https://github.com/shishiro26</p>
      </div>
    </ScrollArea>
  );
};

export default LinkBox;
