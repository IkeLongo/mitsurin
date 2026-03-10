// app/(front-end)/(public)/layout.tsx

import type { Metadata } from "next";
import ConditionalLayout from "@/app/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsurinwagyu.com"),
  title: {
    default: "Mitsurin Wagyu | Premium Wagyu in South Texas",
    template: "%s | Mitsurin Wagyu",
  },
  description:
    "Premium Wagyu from Mitsurin Wagyu in Hondo, Texas — serving San Antonio and all of South Texas. Limited, artisan-cut Wagyu with exceptional marbling and flavor.",
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

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ConditionalLayout>
        {children}
      </ConditionalLayout>
    </>
  );
}