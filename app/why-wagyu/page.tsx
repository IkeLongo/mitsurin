import HeadingSection from "@/containers/why-wagyu-page/heading-section";
import WhatIsWagyuSection from "@/containers/why-wagyu-page/what-is-wagyu-section";
import WagyuDifferenceSection from "@/containers/why-wagyu-page/wagyu-difference-section";
import HealthBenefitsSection from "@/containers/why-wagyu-page/health-benefits-section";
import DrSelvaSection from "@/containers/why-wagyu-page/dr-selva-section";
import USDAGradingSection from "@/containers/why-wagyu-page/usda-grading-section";
import WhyWagyuStandsApartSection from "@/containers/why-wagyu-page/why-wagyu-stands-apart-section";

export default function Home() {
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
      </main>
    </div>
  );
}