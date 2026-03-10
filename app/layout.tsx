
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ToastContainer } from 'react-toastify';
import { AnalyticsProvider } from "@/app/components/analytics/analytics-provider";
import AnalyticsGA4 from "./components/analytics/analytics-ga4";
import ClarityScript from "./components/analytics/microsoft-clarity";

import "./globals.css";
import "@mux/mux-player";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS and Video Preloads */}
        <link rel="dns-prefetch" href="https://stream.mux.com" />
        <link rel="preconnect" href="https://stream.mux.com" crossOrigin="anonymous" />
        <link rel="preload" as="video" href="https://stream.mux.com/cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps.m3u8" />
        <ClarityScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ToastContainer />
        <AnalyticsGA4 />
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
