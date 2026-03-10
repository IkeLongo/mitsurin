import LegalPage from '@/app/components/legal/components/LegalPage';
import LegalToc from '@/app/components/legal/components/LegalToc';
import TermsContent from '@/app/components/legal/content/terms-content';
import { Metadata } from 'next';

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

export default function TermsPage() {
  return (
    <>
      <LegalPage
        title="Terms & Conditions"
        lastUpdated="March 5, 2026"
        toc={<LegalToc />}
      >
        <TermsContent />
      </LegalPage>
    </>
  );
}