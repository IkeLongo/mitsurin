"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Will I be able to get a job after completing the course?",
    answer:
      "The knowledge I teach comes from my real work experience. I’ve also spent 3 years mentoring interns at my company, so after finishing the course, you'll feel confident to start working in a real business environment.",
  },
  {
    question: "Will you help me find a job after the course?",
    answer:
      "If you study well and are hardworking, I can recommend you to my current company and my brother's company. I’ll also help you prepare for interviews and work with you on any questions you might face.",
  },
  {
    question: "Is the study schedule flexible?",
    answer:
      "Yes, the schedule is very flexible since it’s an online course. You can book a session whenever you're free.",
  },
];

const FAQs = ({ 
  heading = "Frequently Asked Questions",
  eyebrowText,
  className = ""
}: {
  heading?: string;
  eyebrowText?: string;
  className?: string;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }} // Start below with 0 opacity
      whileInView={{ y: 0, opacity: 1 }} // Move to the normal position and become visible
      viewport={{ once: true }} // Trigger animation when 30% of the card is visible
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`${className}`}
      id="cau-hoi-thuong-gap"
    >
      <div className="mx-auto max-w-4xl px-3 lg:px-8">
        {/* Eyebrow text (optional) */}
        {eyebrowText && (
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            {eyebrowText.toUpperCase()}
          </p>
        )}

        {/* Main heading - matching your existing section styles */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-center text-red-900 mb-12">
          {heading}
        </h3>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-200">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-4 text-left text-gray-900 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isOpen ? <MinusIcon className="size-6 text-red-900" /> : <PlusIcon className="size-6 text-yellow-600" />}
                  </span>
                </button>

                {/* Answer Section with Smooth Animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-2 pb-3 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default FAQs;
