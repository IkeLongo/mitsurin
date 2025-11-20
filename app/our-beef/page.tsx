import HeadingSection from "@/containers/our-beef-page/heading-section";
import ExceptionalQualitySection from "@/containers/our-beef-page/excepectional-quality-section";
import PurchasingOptionsSection from "@/containers/our-beef-page/purchasing-options-section";
import TheProcessSection from "@/containers/our-beef-page/the-process-section";
import CutSelectionSection from "@/containers/our-beef-page/cut-selection-section";
import ReadyToReserveSection from "@/containers/our-beef-page/ready-to-reserve-section";
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