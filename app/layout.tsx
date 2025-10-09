import MainNavbar from "@/components/ui/navigation/MainNavbar";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />

        {/* Expose --vvh and --ios-bottom-ui so components can use them */}
        <Script id="vvh-setup" strategy="beforeInteractive">
          {`
            (function () {
              var docEl = document.documentElement;
              function isIOS() {
                var ua = navigator.userAgent || '';
                return /iP(hone|od|ad)/.test(navigator.platform) ||
                       (ua.includes('Mac') && 'ontouchend' in document);
              }
              function setVars() {
                var vv = window.visualViewport;
                // Visible viewport height (fallback to innerHeight)
                var vvh = (vv && vv.height) ? vv.height : window.innerHeight;
                docEl.style.setProperty('--vvh', vvh + 'px');

                // How much UI overlays the layout viewport at the bottom on iOS Safari
                var hidden = (typeof window.innerHeight === 'number' && vv)
                  ? (window.innerHeight - vv.height)
                  : 0;
                var bottomUi = (isIOS() && hidden > 0) ? Math.ceil(hidden) : 0;
                docEl.style.setProperty('--ios-bottom-ui', bottomUi + 'px');
              }
              setVars();
              if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', setVars);
                window.visualViewport.addEventListener('scroll', setVars);
              }
              window.addEventListener('orientationchange', setVars);
              window.addEventListener('resize', setVars);
            })();
          `}
        </Script>
      </head>
      <body
        className={`antialiased`}
        style={{
          // Prefer dynamic viewport height where supported
          height: "100dvh",
          // Fallback for older Safari: use the JS-computed --vvh
          minHeight: "var(--vvh, 100svh)",
          // Always respect the hardware safe area at the bottom
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <MainNavbar />
        <ToastContainer limit={1} theme="dark" />
        {children}
      </body>
    </html>
  );
}
