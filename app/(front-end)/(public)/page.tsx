import HeroSection from "@/app/components/layout/home/hero";
import AboutSection from "@/app/components/layout/home/about";
import DiscoverSection from "@/app/components/layout/home/discover";
import PackagesSection from "@/app/components/layout/home/packages";
import AvailabilitySection from "@/app/components/layout/home/availability";
import HowItWorksSection from "@/app/components/layout/home/how-it-works";
import RaisedWithPurposeSection from "@/app/components/layout/home/raised-with-purpose";
import WhyMitsurinSection from "@/app/components/layout/home/why-mitsurin";
import JapaneseGeneticsSection from "@/app/components/layout/home/japanese-genetics";
import FAQSection from "@/app/components/layout/home/faqs";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50 overflow-x-hidden">
      <main className="w-full mx-auto overflow-hidden">
        <HeroSection />
        <AboutSection />
        <DiscoverSection />
        <PackagesSection />
        <AvailabilitySection />
        <HowItWorksSection />
        <RaisedWithPurposeSection />
        <WhyMitsurinSection />
        <JapaneseGeneticsSection />
        <FAQSection />
      </main>
    </div>
  );
}
