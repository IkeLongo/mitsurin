import HeadingSection from "@/containers/our-story-page/heading-section";
import OurOriginStorySection from "@/containers/our-story-page/our-origin-story-section";
import BreedingExcellenceSection from "@/containers/our-story-page/understanding-our-heard";
import WhyMitsurinSection from "@/containers/our-story-page/why-mitsurin-section";
import BreedingandRaisingSection from "@/containers/our-story-page/breeding-and-raising-section";
import HowItWorksSection from "@/containers/our-story-page/how-it-works-section";
import ThirtyMonthsSection from "@/containers/our-story-page/30-months-section";
import GrowingTheDreamSection from "@/containers/our-story-page/dream-to-reality-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <OurOriginStorySection />
        <BreedingExcellenceSection />
        <WhyMitsurinSection />
        <BreedingandRaisingSection />
        <HowItWorksSection />
        <ThirtyMonthsSection />
        <GrowingTheDreamSection />
      </main>
    </div>
  );
}