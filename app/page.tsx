import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import DiscoverSection from "@/containers/home-page/discover-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeroSection />
        <AboutSection />
        <DiscoverSection />
      </main>
    </div>
  );
}
