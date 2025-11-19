"use client";

import {Button} from "@heroui/button";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import MuxPlayer from '@mux/mux-player-react/lazy';
import BackgroundVideo from 'next-video/background-video';

export default function HeroSection() {

  return (
    <div className="font-sans min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <BackgroundVideo
          playbackId="cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps"
          thumbnailTime={0}
          autoPlay="muted"
          loop
          muted
          playsInline
          style={{ 
            width: "120%", 
            height: "120%", 
            objectFit: "cover",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          metadata={{
            videoTitle: "Mitsurin Wagyu Hero Video",
            ViewerUserId: "user-id-007",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <section className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mitsurin Logo */}
        <ScrollAnimationWrapper 
          animationType="fade"
          duration={0.8}
          delay={0.1}
          initialY={30}
          className="mb-8"
        >
          <Image
            src="/mitsurin-monogram-white.svg"
            alt="Mitsurin Wagyu Ranch Logo"
            width={96}
            height={96}
            className="w-40 h-40"
            priority
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper 
          animationType="fade"
          duration={0.8}
          delay={0.3}
          initialY={30}
          className="mb-4"
        >
          <h2 className="text-lg md:text-xl text-white font-medium">
            Exceptional Japanese Genetics Raised in Texas.
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper 
          animationType="fade"
          duration={0.8}
          delay={0.5}
          initialY={30}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white leading-tight">
            Mitsurin Wagyu
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper 
          animationType="fade"
          duration={0.8}
          delay={0.7}
          initialY={30}
          className="mb-8 max-w-2xl"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Experience the finest beef in the world — full-blooded Wagyu, 
            pasture-raised with precision and care in Hondo, Texas.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper 
          animationType="fade"
          duration={0.8}
          delay={0.9}
          initialY={30}
        >
          <Button className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-950 transition cursor-pointer">
            About Mitsurin
          </Button>
        </ScrollAnimationWrapper>
      </section>
    </div>
  );
}