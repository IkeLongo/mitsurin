import HeadingSection from "@/app/components/layout/why-wagyu/heading";
import WhatIsWagyuSection from "@/app/components/layout/why-wagyu/what-is-wagyu";
import WagyuDifferenceSection from "@/app/components/layout/why-wagyu/wagyu-difference";
import HealthBenefitsSection from "@/app/components/layout/why-wagyu/health-benefits";
import DrSelvaSection from "@/app/components/layout/why-wagyu/dr-selva";
import USDAGradingSection from "@/app/components/layout/why-wagyu/usda-grading";
import WhyWagyuStandsApartSection from "@/app/components/layout/why-wagyu/stands-apart";
import IsItReallyWagyuSection from "@/app/components/layout/why-wagyu/is-it-really-wagyu";
import WagyuExperienceSection from "@/app/components/layout/why-wagyu/wagyu-experience";
import ExperienceTheDifferenceSection from "@/app/components/layout/why-wagyu/experience-the-difference";
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