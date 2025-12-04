
import Image from "next/image";
import ClassicFAQ from "@/components/ui/faq/classic-faq";

export default function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-white-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ClassicFAQ />
      </div>
    </section>
  );
}