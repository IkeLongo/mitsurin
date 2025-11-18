import HeadingSection from "@/containers/our-story-page/heading-section";
import OurOriginStorySection from "@/containers/our-story-page/our-origin-story-section";
import BreedingExcellenceSection from "@/containers/our-story-page/understanding-our-heard";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <OurOriginStorySection />
        <BreedingExcellenceSection />
      </main>
    </div>
  );
}