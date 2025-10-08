import { HeroSection } from "@/containers/construction-page/hero-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeroSection />
      </main>
    </div>
  );
}