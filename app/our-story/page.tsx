import HeadingSection from "@/containers/our-story-page/heading-section";
import SparkedMissionSection from "@/containers/our-story-page/sparked-a-mission-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeadingSection />
        <SparkedMissionSection />
      </main>
    </div>
  );
}