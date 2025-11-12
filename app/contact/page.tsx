import HeadingSection from "@/containers/contact-page/heading-section";
import SendUsMessageSection from "@/containers/contact-page/send-us-message-section";
import HowItWorksSection from "@/containers/contact-page/how-it-works-section";
import FAQSection from "@/containers/contact-page/faq-section";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
      <main className="w-full mx-auto">
        <HeadingSection />
        <SendUsMessageSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
    </div>
  );
}