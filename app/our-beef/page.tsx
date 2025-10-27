import HeadingSection from "@/containers/our-beef-page/heading-section";
import WhatIsWagyuSection from "@/containers/our-beef-page/what-is-wagyu-section";
import WagyuDifferenceSection from "@/containers/our-beef-page/wagyu-difference-section";
import HealthBenefitsSection from "@/containers/our-beef-page/health-benefits-section";
import DrSelvaSection from "@/containers/our-beef-page/dr-selva-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <WhatIsWagyuSection />
        <WagyuDifferenceSection />
        <HealthBenefitsSection />
        <DrSelvaSection />
      </main>
    </div>
  );
}