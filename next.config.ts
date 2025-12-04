import type { NextConfig } from "next";
import { withNextVideo } from 'next-video/process';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withNextVideo(nextConfig);