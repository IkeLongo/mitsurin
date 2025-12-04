
import Image from "next/image";
import ClassicFAQ from "@/components/ui/faq/classic-faq";

export default function FAQSection() {
  const contactFAQs = [
    {
      question: "What cuts are included in a half or whole cow order?",
      answer: "A half or whole cow includes a variety of premium cuts including ribeye, sirloin, tenderloin, ground beef, and more. We work with you to customize the cuts based on your preferences."
    },
    {
      question: "How much freezer space do I need?",
      answer: "A half cow typically requires about 8-10 cubic feet of freezer space, while a whole cow needs approximately 16-20 cubic feet. We recommend having a dedicated chest freezer."
    },
    {
      question: "How long does Wagyu beef stay fresh?",
      answer: "When properly vacuum-sealed and frozen, Wagyu beef can maintain its quality for 12-18 months. For best flavor, we recommend consuming within 6-12 months."
    },
    {
      question: "What makes your Wagyu beef different?",
      answer: "Our Wagyu cattle are 100% full-blooded Japanese genetics, pasture-raised in Texas with no hormones or antibiotics, and grain-finished for optimal marbling. This creates beef that exceeds USDA Prime standards."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We provide free delivery within 100 miles of Hondo, Texas. For customers beyond 100 miles, delivery fees apply based on distance. We can also arrange pickup at our ranch. Contact us to discuss your specific location and delivery options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, check, and major credit cards. A deposit is required when placing your order, with the balance due upon delivery or pickup."
    }
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ClassicFAQ 
          heading="Frequently Asked Questions"
          eyebrowText="Got Questions?"
          faqs={contactFAQs}
        />
      </div>
    </section>
  );
}