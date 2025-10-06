import MainNavbar from "@/components/ui/navigation/MainNavbar";
import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
