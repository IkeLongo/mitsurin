import { Metadata } from 'next';
import { Suspense } from 'react';
// Privacy Policy Components
import { PrivacyPolicyWrapper } from '../../containers/privacy-policy-page/privacy-policy-wrapper';
import { Summary } from '../../containers/privacy-policy-page/summary-section';
import { TableOfContents } from '../../containers/privacy-policy-page/table-of-contents-section';
import { InfoWeCollect } from '../../containers/privacy-policy-page/information-we-collect-section';
import { ProcessYourInfo } from '../../containers/privacy-policy-page/processing-your-information-section';
import { LegalBasis } from '../../containers/privacy-policy-page/legal-basis-section';
import { SharePersonalInfo } from '../../containers/privacy-policy-page/share-your-personal-information-section';
import { ThirdPartyWebsites } from '../../containers/privacy-policy-page/third-party-websites-section';
import { CookieTrackingTechnology } from '../../containers/privacy-policy-page/cookie-tracking-technology-section';
import { SocailLogins } from '../../containers/privacy-policy-page/social-logins-section';
import { InfoTranIntl } from '../../containers/privacy-policy-page/information-transferred-internationally-section';
import { KeepInfo } from '../../containers/privacy-policy-page/how-long-we-keep-information-section';
import { KeepInfoSafe } from '../../containers/privacy-policy-page/keeping-your-information-safe-section';
import { MinorInfo } from '../../containers/privacy-policy-page/minor-information-section';
import { PrivacyRights } from '../../containers/privacy-policy-page/privacy-rights-section';
import { DoNotTrack } from '../../containers/privacy-policy-page/do-not-track-section';
import { CaliforniaInformation } from '../../containers/privacy-policy-page/california-information-section';
import { Virginia } from '../../containers/privacy-policy-page/virginia-information-section';
import { UpdatesToNotice } from '../../containers/privacy-policy-page/updates-to-notice-section';
import { ContactAboutNotice } from '../../containers/privacy-policy-page/contact-about';
import Cookies from '../../containers/privacy-policy-page/cookie-section';
import PrivacyContactForm from '@/containers/privacy-policy-page/privacy-contact-form';

// These components need to be created or imported from elsewhere
// import { PrivacyNotice } from '../../containers/privacy-policy-page/privacy-notice-section';
// import { Cookies } from '../../containers/cookies';
// import { PrivacyContactForm } from '../../containers/privacy-contact-form';

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
    url: 'https://mitsurinwagyu.com/privacy-policy',
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
    canonical: 'https://mitsurinwagyu.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Loading component for the suspense fallback
function ContactFormSkeleton() {
  return (
    <div className="w-full">
      <div className="md:hidden relative">
        <div className="w-full h-[300px] bg-gray-200 animate-pulse" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="h-8 w-48 bg-gray-300 animate-pulse rounded" />
          <div className="h-4 w-64 bg-gray-300 animate-pulse rounded mt-4" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 w-full min-h-screen md:min-h-0">
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center w-full h-screen">
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        </div>
        
        <div className="relative flex flex-col items-center justify-start md:justify-center bg-transparent">
          <div className="w-full max-w-[500px] p-8 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 h-12 bg-gray-200 animate-pulse rounded-[13px]" />
              <div className="flex-1 h-12 bg-gray-200 animate-pulse rounded-[13px]" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 h-12 bg-gray-200 animate-pulse rounded-[13px]" />
              <div className="flex-1 h-12 bg-gray-200 animate-pulse rounded-[13px]" />
            </div>
            <div className="h-32 bg-gray-200 animate-pulse rounded-[13px]" />
            <div className="h-12 bg-gray-200 animate-pulse rounded-[13px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-auto bg-gray-200">
      <main className="flex flex-col w-full h-full mx-4">
        <Suspense fallback={<ContactFormSkeleton />}>
          <div className="relative h-auto w-full max-w-[1020px] mx-auto bg-cover bg-top overflow-x-hidden top-40 mb-24 px-4">
            <div className="flex flex-col justify-center items-center">
              <header className="text-center py-8">
                <h1 className="text-stone-800 text-4xl font-[montserrat] font-semibold mb-10">Mitsurin Wagyu<br />Website Privacy Policy</h1>
                <p className="text-stone-800">Last updated November 20, 2025</p>
              </header>
              <main className="px-2 md:px-6 pb-8 w-full max-w-4xl">
                <PrivacyPolicyWrapper>
                  <Summary />
                  <TableOfContents />
                  <InfoWeCollect />
                  <ProcessYourInfo />
                  <LegalBasis />
                  <SharePersonalInfo />
                  <ThirdPartyWebsites />
                  <CookieTrackingTechnology />
                  <SocailLogins />
                  <InfoTranIntl />
                  <KeepInfo />
                  <KeepInfoSafe />
                  <MinorInfo />
                  <PrivacyRights />
                  <DoNotTrack />
                  <CaliforniaInformation />
                  <Virginia />
                  <UpdatesToNotice />
                  <ContactAboutNotice />
                </PrivacyPolicyWrapper>
              </main>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center w-full h-auto px-6 md:mx-6 py-10 bg-navy-800 overflow-visible shrink-0 md:-top-0 text-white tracking-wide">
            <div id="cookie-policy" className="text-center py-8 max-w-[60em]">
              <h3 className="text-stone-800 text-4xl font-[montserrat] font-semibold mb-10">Mitsurin Wagyu<br />Website Cookie Policy</h3>
              <p className="text-stone-800">Last updated November 20, 2025</p>
            </div>
            <PrivacyPolicyWrapper>
              <Cookies />
            </PrivacyPolicyWrapper>
          </div>
          <div className="relative flex flex-col justify-center self-center w-full max-w-[60em] h-auto px-4 pb-10 overflow-visible shrink-0 md:-top-0 md:mb-20 text-white font-avenir tracking-wide">
            <div id="data-subject-request" className="text-center py-8">
              <h4 className="text-stone-800 text-2xl font-[montserrat] font-semibold">Data Subject Request</h4>
            </div>
            <section id="dpo-contact-form" className='px-4 md:px-10'>
              <PrivacyContactForm />
            </section>
          </div>
        </Suspense>
      </main>
    </div>
  );
}