import { HeroSection } from "@/containers/construction-page/hero-section";

export default function Home() {
  return (
    <div
      className="font-sans flex items-center justify-center bg-gray-50 min-h-vvh"
      style={{ height: "100dvh" }} // dvh when supported
    >
      <main className="w-full mx-auto pb-ios">
        <HeroSection />
      </main>
    </div>
  );
}