import SanityAvailabilitySection from "@/containers/availability-section/availability-section";
import SanityAvailabilityHero from "@/containers/availability-section/availability-hero";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

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
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <main className="w-full mx-auto">
        {/* Hero Section with Sanity Content */}
        <SanityAvailabilityHero />

        {/* Availability Data Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SanityAvailabilitySection />
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[Montserrat] text-gray-900 mb-4">
                Reserve Your Wagyu
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our cattle are raised for 30+ months to ensure the highest quality marbling and flavor. 
                Don't miss out on this limited seasonal offering.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Reserve?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to secure your premium Wagyu beef and learn about our available cuts.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-300"
              >
                Contact Us to Reserve
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}