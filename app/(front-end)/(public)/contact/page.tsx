import HeadingSection from "@/containers/contact-page/heading-section";
import SendUsMessageSection from "@/containers/contact-page/send-us-message-section";
import HowItWorksSection from "@/containers/contact-page/how-it-works-section";
import FAQSection from "@/containers/contact-page/faq-section";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: 'Contact Us | Mitsurin Wagyu - Reserve Your Premium Texas Wagyu',
  description: 'Contact Mitsurin Wagyu to reserve your premium Japanese beef. Get in touch for ordering information, availability updates, and answers to your Wagyu questions from our Texas ranch.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp', // OpenGraph image for the our story page
        width: 1200,
        height: 630,
        alt: 'Contact Us | Mitsurin Wagyu - Reserve Your Premium Texas Wagyu',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/contact', // Canonical URL for contact page
  },
};

export default function Contact() {
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