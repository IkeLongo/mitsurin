"use client";

import { useEffect } from 'react';

interface VideoPreloaderProps {
  playbackId: string;
  priority?: boolean;
}

export default function VideoPreloader({ playbackId, priority = false }: VideoPreloaderProps) {
  useEffect(() => {
    if (priority) {
      // Preload the video stream aggressively
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = `https://stream.mux.com/${playbackId}.m3u8`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);

      // Also preload the thumbnail
      const thumbnailLink = document.createElement('link');
      thumbnailLink.rel = 'preload';
      thumbnailLink.as = 'image';
      thumbnailLink.href = `https://image.mux.com/${playbackId}/thumbnail.png?time=0`;
      thumbnailLink.crossOrigin = 'anonymous';
      document.head.appendChild(thumbnailLink);

      return () => {
        document.head.removeChild(link);
        document.head.removeChild(thumbnailLink);
      };
    }
  }, [playbackId, priority]);

  return null;
}