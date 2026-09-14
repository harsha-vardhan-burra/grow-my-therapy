"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate context

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-primary/40 bg-studio shadow-card"
                : "border-borderLinen bg-linen/60 hover:bg-studio/80"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                {item.question}
              </span>
              <span
                className={`p-1 rounded-full text-sage transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-primary bg-primary/10" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-sage leading-relaxed border-t border-borderLinen/40 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
