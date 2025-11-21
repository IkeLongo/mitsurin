"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoPreloaderProps {
  playbackId: string;
  priority?: boolean;
  onVideoLoaded?: () => void;
}

export default function VideoPreloader({ playbackId, priority = false, onVideoLoaded }: VideoPreloaderProps) {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      // Preload the video stream aggressively
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = `https://stream.mux.com/${playbackId}.m3u8`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);

      // Listen for video load events
      const handleVideoLoad = () => {
        setVideoLoaded(true);
        onVideoLoaded?.();
      };

      // Use a more reliable method to detect video loading
      const checkForVideo = () => {
        const videoElements = document.querySelectorAll('video');
        videoElements.forEach(video => {
          if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
            handleVideoLoad();
          } else {
            video.addEventListener('canplay', handleVideoLoad, { once: true });
            video.addEventListener('loadeddata', handleVideoLoad, { once: true });
          }
        });
      };

      // Check immediately and then periodically
      checkForVideo();
      const interval = setInterval(checkForVideo, 500);

      return () => {
        document.head.removeChild(link);
        clearInterval(interval);
      };
    }
  }, [playbackId, priority, onVideoLoaded]);

  // Don't render if not priority, or if video has loaded
  if (!priority) return null;

  return (
    <div 
      className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-500 ${
        thumbnailLoaded && !videoLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 5 }}
    >
      <Image
        src={`https://image.mux.com/${playbackId}/thumbnail.png?time=0&width=1920`}
        alt="Video loading..."
        width={1920}
        height={1080}
        style={{ 
          width: "!115%", 
          height: "!115%", 
          objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          willChange: "transform"
        }}
        priority
        onLoad={() => setThumbnailLoaded(true)}
      />
    </div>
  );
}