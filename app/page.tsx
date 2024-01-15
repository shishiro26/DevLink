import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "@/public/assets/icons/Github.svg";
import { JetBrains_Mono } from "next/font/google";
import Type from "@/components/shared/Type";
import Link from "next/link";

const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <div
      className={
        "h-[100vh] grid place-content-center place-items-center space-y-2 overflow-hidden text-white p-3"
      }
    >
      <div
        className={`${jetBrains.className} flex text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] `}
      >
        <h1 className={`${jetBrains.className}`}>
          Console
          <span className={"text-white"}>
            .<span className={"text-[#0AD3FF]"}>log</span>
          </span>
          <span>&#40;</span>
          <span>&#8220;</span>
        </h1>
        <h1 className={`${jetBrains.className} text-[#FF5964]`}>
          <Type words={["DevLink"]} />
        </h1>
        <h1>
          <span>&#8220;</span>
          <span>&#41;</span>
          <span>&#59;</span>
        </h1>
      </div>
      <div
        className={
          "flex justify-center items-center xl:w-1/2 lg:w-[100%] text-dark dark:text-white"
        }
      >
        <p className="lg:text-[1.3rem] leading-relaxed text-center font-mono text-[#D4DCFF] after:content-['\201D'] before:content-['\201C']">
          Connecting developers worldwide for collaborative coding adventures!
          Join our vibrant community of developers, collaborate on projects,
          participate in hackathons, and explore a wealth of resources to level
          up your coding skills.
        </p>
      </div>
      <div className={"flex justify-around space-x-2"}>
        <Button className={"bg-[#83A2FF] hover:bg-[#7D80DA] text-white"}>
          <Link href={`/auth/login`}>Join us!</Link>
        </Button>
        <Button
          className={
            "flex flex-row items-center gap-2 bg-[#83A2FF] hover:bg-[#7D80DA] text-white"
          }
        >
          <Image
            src={Github}
            alt={"github"}
            width={4}
            height={4}
            className={"w-4 h-4"}
          />
          <span>51.1k</span>
        </Button>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
