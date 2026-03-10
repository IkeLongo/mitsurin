import LegalPage from '@/app/components/legal/components/LegalPage';
import LegalToc from '@/app/components/legal/components/LegalToc';
import PrivacyContent from '@/app/components/legal/content/privacy-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Mitsurin Wagyu | Premium Japanese Beef',
  description: 'Learn how Mitsurin Wagyu protects your personal information. Our privacy policy outlines data collection, usage, and security practices for our premium Japanese wagyu beef services.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information security',
    'Mitsurin Wagyu privacy',
    'premium beef privacy',
    'Japanese wagyu privacy',
    'customer confidentiality',
    'website privacy policy'
  ],
  openGraph: {
    title: 'Privacy Policy - Mitsurin Wagyu',
    description: 'Learn how we protect your personal information and respect your privacy at Mitsurin Wagyu, your source for premium Japanese beef.',
    url: 'https://mitsurinwagyu.com/privacy',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Mitsurin Wagyu Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Mitsurin Wagyu',
    description: 'Learn how we protect your personal information and respect your privacy at Mitsurin Wagyu.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalPage
        title="Website Privacy Policy"
        lastUpdated="March 5, 2026"
        toc={<LegalToc />}
      >
        <PrivacyContent />
      </LegalPage>
    </>
  );
}