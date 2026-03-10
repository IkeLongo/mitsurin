import HeadingSection from "@/app/components/layout/our-story/heading";
import OurOriginStorySection from "@/app/components/layout/our-story/origin-story";
import BreedingExcellenceSection from "@/app/components/layout/our-story/understanding";
import WhyMitsurinSection from "@/app/components/layout/our-story/why-mitsurin";
import BreedingandRaisingSection from "@/app/components/layout/our-story/breeding";
import HowItWorksSection from "@/app/components/layout/our-story/how-it-works";
import ThirtyMonthsSection from "@/app/components/layout/our-story/thirty-months";
import GrowingTheDreamSection from "@/app/components/layout/our-story/growing-the-dream";
import OurMissionSection from "@/app/components/layout/our-story/mission";
import TheMitsurinDifferenceSection from "@/app/components/layout/our-story/miturin-difference";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: 'Our Story | Mitsurin Wagyu - Premium Japanese Beef Raised in Texas',
  description: 'Discover the story behind Mitsurin Wagyu. From our origin to raising full-blooded Japanese Wagyu cattle in Hondo, Texas, learn about our 30+ month journey to premium beef excellence.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp', // OpenGraph image for the our story page
        width: 1200,
        height: 630,
        alt: 'Our Story | Mitsurin Wagyu - Premium Japanese Beef Raised in Texas',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/our-story', // Canonical URL for our story page
  },
};

export default function OurStory() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50 overflow-x-hidden">
      <main className="w-full mx-auto">
        <HeadingSection />
        <OurOriginStorySection />
        <BreedingExcellenceSection />
        <WhyMitsurinSection />
        <BreedingandRaisingSection />
        <HowItWorksSection />
        <ThirtyMonthsSection />
        <GrowingTheDreamSection />
        <OurMissionSection />
        <TheMitsurinDifferenceSection />
      </main>
    </div>
  );
}