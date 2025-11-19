// Video optimization utilities
export const VideoOptimizer = {
  // Preload critical video resources
  preloadVideo: (playbackId: string) => {
    if (typeof window === 'undefined') return;

    // Preload HLS manifest
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'fetch';
    link.href = `https://stream.mux.com/${playbackId}.m3u8`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Preload poster/thumbnail
    const posterLink = document.createElement('link');
    posterLink.rel = 'preload';
    posterLink.as = 'image';
    posterLink.href = `https://image.mux.com/${playbackId}/thumbnail.png?time=0&width=1920`;
    document.head.appendChild(posterLink);
  },

  // Set video performance hints
  optimizeVideoElement: (video: HTMLVideoElement) => {
    if (!video) return;
    
    // Performance hints
    video.setAttribute('importance', 'high');
    video.setAttribute('fetchpriority', 'high');
    
    // Optimize for faster loading
    video.preload = 'auto';
    video.setAttribute('data-setup', '{"fluid": true, "responsive": true}');
    
    // Enable hardware acceleration hints
    video.style.willChange = 'transform';
    video.style.transform = 'translateZ(0)'; // Force GPU acceleration
  },

  // Warmup DNS connections
  warmupConnections: () => {
    if (typeof window === 'undefined') return;

    const connections = [
      'https://stream.mux.com',
      'https://image.mux.com',
      'https://stats.mux.com'
    ];

    connections.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Initialize video optimizations early
if (typeof window !== 'undefined') {
  VideoOptimizer.warmupConnections();
}