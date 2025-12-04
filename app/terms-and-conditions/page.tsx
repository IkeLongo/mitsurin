import { TermsAndConditions } from "@/containers/terms-and-conditions-page/terms-and-conditions-section";
import { TermsAndConditionsWrapper } from "@/containers/terms-and-conditions-page/terms-and-conditions-wrapper";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: 'Terms and Conditions | Mitsurin Wagyu',
  description: 'Read the terms and conditions for Mitsurin Wagyu services including web design, development, branding, and hosting. Understand your rights and obligations when using our services.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions | Mitsurin Wagyu',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center">
      <main className="w-full mx-auto">
        <TermsAndConditionsWrapper>
          <TermsAndConditions />
        </TermsAndConditionsWrapper>
      </main>
    </div>
  );
}