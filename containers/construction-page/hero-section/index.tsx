import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background/background-beams-with-collision";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-center relative z-20">
        <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-black dark:text-white tracking-tight mb-4 font-[oswald]">
          <div className="mb-2">OUR NEW WEBSITE</div>
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-red-800 via-orange-600 to-yellow-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="text-8xl md:text-9xl lg:text-9xl font-[oswald]">COMING<br/>SOON</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-red-800 via-orange-600 to-yellow-600 py-4">
              <span className="text-8xl md:text-9xl lg:text-9xl font-[oswald]">COMING<br/>SOON</span>
            </div>
          </div>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
