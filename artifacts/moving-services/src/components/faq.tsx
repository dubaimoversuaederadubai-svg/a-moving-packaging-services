import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide packing materials?",
    answer: "Yes, all packing materials are included — double-walled branded boxes, bubble wrap, custom crating for fragile items, and specialized wardrobe cartons. Everything is covered.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Absolutely. We provide comprehensive transit insurance for all moves. Every item is covered from the moment we begin packing until it is safely placed in your new home.",
  },
  {
    question: "Do you handle furniture dismantling and reassembly?",
    answer: "Yes. Our expert teams dismantle and reassemble all furniture types including complex modular systems and large beds. This is included as standard in every move.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend 1–2 weeks ahead, but we often accommodate short-notice moves. Message us on WhatsApp and we will check availability immediately.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. The price we quote is the price you pay — AED 1,200 per bedroom, Studio AED 800. Absolutely no surprise charges on moving day.",
  },
  {
    question: "Do you serve all areas of Dubai and UAE?",
    answer: "Yes. We cover all areas — Downtown, Dubai Marina, Palm Jumeirah, JBR, Business Bay, Arabian Ranches, Abu Dhabi, Sharjah, and beyond.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our premium moving services.</p>
          </motion.div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl bg-gray-50 px-6 overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <AccordionTrigger
                className="text-left text-base font-semibold py-5 text-[#0B1F3A] no-underline hover:no-underline"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <span className="hover:text-[#F59E0B] transition-colors duration-200">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
