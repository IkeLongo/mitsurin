import HeadingSection from "@/containers/our-beef-page/heading-section";
import ExceptionalQualitySection from "@/containers/our-beef-page/excepectional-quality-section";
import PurchasingOptionsSection from "@/containers/our-beef-page/purchasing-options-section";
import TheProcessSection from "@/containers/our-beef-page/the-process-section";
import CutSelectionSection from "@/containers/our-beef-page/cut-selection-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <ExceptionalQualitySection />
        <PurchasingOptionsSection />
        <TheProcessSection />
        <CutSelectionSection />
      </main>
    </div>
  );
}