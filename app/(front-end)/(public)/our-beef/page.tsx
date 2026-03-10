import HeadingSection from "@/app/components/layout/our-beef/heading";
import ExceptionalQualitySection from "@/app/components/layout/our-beef/exceptional-quality";
import PurchasingOptionsSection from "@/app/components/layout/our-beef/purchase-options";
import TheProcessSection from "@/app/components/layout/our-beef/process";
import CutSelectionSection from "@/app/components/layout/our-beef/cut-selection";
import ReadyToReserveSection from "@/app/components/layout/our-beef/reserve";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: 'Our Beef | Mitsurin Wagyu - Premium Cuts & Purchasing Options',
  description: 'Explore our premium Mitsurin Wagyu beef cuts and purchasing options. From exceptional quality A5 marbling to custom butcher services, discover how to reserve your Texas-raised Japanese Wagyu.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp', // OpenGraph image for the our story page
        width: 1200,
        height: 630,
        alt: 'Our Beef | Mitsurin Wagyu - Premium Cuts & Purchasing Options',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/our-beef', // Canonical URL for our story page
  },
};

export default function OurBeef() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <ExceptionalQualitySection />
        <PurchasingOptionsSection />
        <TheProcessSection />
        <CutSelectionSection />
        <ReadyToReserveSection />
      </main>
    </div>
  );
}