import HeadingSection from "@/containers/our-story-page/heading-section";
import OurOriginStorySection from "@/containers/our-story-page/our-origin-story-section";
import BreedingExcellenceSection from "@/containers/our-story-page/understanding-our-heard";
import WhyMitsurinSection from "@/containers/our-story-page/why-mitsurin-section";
import BreedingandRaisingSection from "@/containers/our-story-page/breeding-and-raising-section";
import HowItWorksSection from "@/containers/our-story-page/how-it-works-section";
import ThirtyMonthsSection from "@/containers/our-story-page/30-months-section";
import GrowingTheDreamSection from "@/containers/our-story-page/dream-to-reality-section";
import OurMissionSection from "@/containers/our-story-page/our-mission-section";
import TheMitsurinDifferenceSection from "@/containers/our-story-page/the-mitsurin-difference-section";
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