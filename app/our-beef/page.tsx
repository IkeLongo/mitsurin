import HeadingSection from "@/containers/our-beef-page/heading-section";
import WhatIsWagyuSection from "@/containers/our-beef-page/what-is-wagyu-section";
import WagyuDifferenceSection from "@/containers/our-beef-page/wagyu-difference-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <WhatIsWagyuSection />
        <WagyuDifferenceSection />
      </main>
    </div>
  );
}