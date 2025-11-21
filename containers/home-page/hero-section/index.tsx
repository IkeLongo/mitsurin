"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import BackgroundVideo from 'next-video/background-video';
import VideoPreloader from '@/components/ui/video/video-preloader';
import { VideoOptimizer } from '@/lib/video-optimizer';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Preload video resources early
  if (typeof window !== 'undefined') {
    VideoOptimizer.preloadVideo('cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps');
  }

  return (
    <div className="font-sans min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Preload video thumbnail with proper sizing */}
      <VideoPreloader 
        playbackId="cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps" 
        priority 
        onVideoLoaded={() => setVideoLoaded(true)}
      />
      {/* Background Video */}
      <div 
        className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 10 }}
      >
        <BackgroundVideo
          playbackId="cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps"
          thumbnailTime={0}
          autoPlay={true}
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={(e) => {
            const video = e.currentTarget;
            setVideoLoaded(true);
            video.play().catch(console.error);
          }}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.play().catch(console.error);
          }}
          onPlay={() => {
            setVideoLoaded(true);
          }}
          style={{ 
            width: "110%", 
            height: "110%", 
            objectFit: "cover",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            willChange: "transform"
          }}
          metadata={{
            videoTitle: "Mitsurin Wagyu Hero Video",
            ViewerUserId: "user-id-007",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <section className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-20">
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
          <div className="pt-4">
              <Link href="/our-story" className="inline-block bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                About Mitsurin
              </Link>
            </div>
        </ScrollAnimationWrapper>
      </section>
    </div>
  );
}