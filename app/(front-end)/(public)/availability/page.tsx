
import CurrentAvailabilityCard from "@/containers/availability-page/current-availability-card";
import SanityAvailabilityHero from "@/containers/availability-page/heading-section";
import ReserveYourWagyuSection from "@/containers/availability-page/reserve-your-wagyu-section";
import { sanityFetch } from '@/sanity/lib/fetch';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Current Availability | Mitsurin Wagyu - Check Texas Wagyu Stock',
  description: 'Check current availability of premium Wagyu beef from Mitsurin Ranch in Texas. See live stock levels, reserve your cattle, and get notified when new Wagyu becomes available.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.webp', // OpenGraph image for availability page
        width: 1200,
        height: 630,
        alt: 'Current Availability | Mitsurin Wagyu - Check Texas Wagyu Stock',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://mitsurinwagyu.com/availability', // Canonical URL for availability page
  },
};

export default async function Availability() {
  // Fetch the _updatedAt field from Sanity
  const data = await sanityFetch<any>({
    query: `*[_type == "availabilityType"][0]{ _updatedAt }`,
    revalidate: 10
  });
  const updatedAt = data?._updatedAt ? new Date(data._updatedAt).toLocaleString() : null;

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <main className="w-full mx-auto">
        {/* Hero Section with Sanity Content */}
        <SanityAvailabilityHero />

        {/* Availability Data Section */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {updatedAt && (
              <div className="w-none lg:w-2xl max-w-2xl mx-auto text-sm text-gray-500 mb-4 text-left">
                Last updated: {updatedAt}
              </div>
            )}
            <CurrentAvailabilityCard />
          </div>
        </section>

        <ReserveYourWagyuSection />
      </main>
    </div>
  );
}