"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { JetBrains_Mono } from "next/font/google";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500"] });

type TypeProps = {
  words: string[];
};

const Type = ({ words }: TypeProps) => {
  return (
    <div className={`${jetBrains.className}`}>
      <Typewriter
        words={words}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={150}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Type;
