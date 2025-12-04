import HeadingSection from "@/containers/why-wagyu-page/heading-section";
import WhatIsWagyuSection from "@/containers/why-wagyu-page/what-is-wagyu-section";
import WagyuDifferenceSection from "@/containers/why-wagyu-page/wagyu-difference-section";
import HealthBenefitsSection from "@/containers/why-wagyu-page/health-benefits-section";
import DrSelvaSection from "@/containers/why-wagyu-page/dr-selva-section";
import USDAGradingSection from "@/containers/why-wagyu-page/usda-grading-section";
import WhyWagyuStandsApartSection from "@/containers/why-wagyu-page/why-wagyu-stands-apart-section";
import IsItReallyWagyuSection from "@/containers/why-wagyu-page/is-it-really-wagyu-section";
import WagyuExperienceSection from "@/containers/why-wagyu-page/wagyu-experience-section";
import ExperienceTheDifferenceSection from "@/containers/why-wagyu-page/experience-the-difference-section";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: 'Why Wagyu | Understanding Premium Japanese Beef & USDA Grading',
  description: 'Learn about Wagyu beef superiority, health benefits, and USDA grading standards. Discover what makes authentic Japanese Wagyu different and why Mitsurin raises the finest Texas Wagyu cattle.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp', // OpenGraph image for the our story page
        width: 1200,
        height: 630,
        alt: 'Why Wagyu | Understanding Premium Japanese Beef & USDA Grading',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/why-wagyu', // Canonical URL for why wagyu page
  },
};

export default function WhyWagyu() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <WhatIsWagyuSection />
        <WagyuDifferenceSection />
        <HealthBenefitsSection />
        <DrSelvaSection />
        <USDAGradingSection />
        <WhyWagyuStandsApartSection />
        <IsItReallyWagyuSection />
        <WagyuExperienceSection />
        <ExperienceTheDifferenceSection />
      </main>
    </div>
  );
}