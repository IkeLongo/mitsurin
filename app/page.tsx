import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import DiscoverSection from "@/containers/home-page/discover-section";
import PackagesSection from "@/containers/home-page/packages-section";
import AvailabilitySection from "@/containers/home-page/availability-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full mx-auto">
        <HeroSection />
        <AboutSection />
        <DiscoverSection />
        <PackagesSection />
        <AvailabilitySection />
      </main>
    </div>
  );
}
