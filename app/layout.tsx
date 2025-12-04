import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/sanity/disable-draft-mode'
import { SanityLive } from '@/sanity/lib/live'
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsurinwagyu.com"),
  title: {
    default: "Mitsurin Wagyu | Premium Wagyu in South Texas",
    template: "%s | Mitsurin Wagyu",
  },
  description:
    "Premium Wagyu from Mitsurin Wagyu in Hondo, Texas — serving San Antonio and all of South Texas. Limited, artisan-cut Wagyu with exceptional marbling and flavor.",
  keywords: [
    "Wagyu San Antonio",
    "Wagyu beef Texas",
    "Japanese Wagyu",
    "American Wagyu",
    "buy Wagyu San Antonio",
    "Hondo Texas Wagyu",
    "Texas ranch Wagyu",
    "premium beef Texas",
    "Mitsurin Wagyu",
    "Wagyu steaks",
    "A5-style marbling",
  ],
  authors: [{ name: "Mitsurin Wagyu" }],
  creator: "Mitsurin Wagyu",
  publisher: "Mitsurin Wagyu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitsurin Wagyu — Premium Wagyu in South Texas",
    description:
      "Artisan Wagyu from Hondo, Texas. Serving San Antonio and beyond with limited, premium cuts.",
    images: ["/og-image.webp"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mitsurinwagyu.com",
    title: "Mitsurin Wagyu | Premium Wagyu in South Texas",
    description:
      "Premium Wagyu beef from Mitsurin Wagyu in Hondo, Texas — serving San Antonio and South Texas.",
    siteName: "Mitsurin Wagyu",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Mitsurin Wagyu — premium Wagyu beef from Hondo, Texas",
        type: "image/webp",
      },
    ],
  },
  alternates: {
    canonical: "https://mitsurinwagyu.com",
  },
  category: "food",
  classification: "Meat & Specialty Foods",
  other: {
    "geo.region": "US-TX",
    "geo.placename": "San Antonio–Hondo",
    // Hondo approx coords; update if you want exact ranch location:
    "geo.position": "29.3477;-99.1417",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://stream.mux.com" />
        <link rel="preconnect" href="https://stream.mux.com" crossOrigin="anonymous" />
        <link rel="preload" as="video" href="https://stream.mux.com/cB7VJ1hTqPrBTmnpDTRV2hMbUom4aPaqPHJXIhIcTps.m3u8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ConditionalLayout>
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </ConditionalLayout>
        <ToastContainer />
      </body>
    </html>
  );
}
