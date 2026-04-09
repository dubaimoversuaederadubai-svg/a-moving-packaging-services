import React from "react";
import { motion } from "framer-motion";
import { BrandBadge } from "./brand-badge";

const steps = [
  {
    number: "01",
    title: "Get a Quote",
    description: "Use our instant price calculator or message us on WhatsApp for a transparent estimate.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=500&h=320",
    alt: "Person getting a moving quote on phone",
  },
  {
    number: "02",
    title: "Schedule Your Date",
    description: "Pick a date and time. We operate 7 days a week, flexible around your schedule.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=500&h=320",
    alt: "Calendar scheduling for moving date",
  },
  {
    number: "03",
    title: "We Pack & Move",
    description: "Our branded uniformed crew arrives on time, packs everything safely, and transports it securely.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500&h=320",
    alt: "AMP movers packing and loading truck",
  },
  {
    number: "04",
    title: "Settle In",
    description: "We unpack, reassemble all furniture, and place everything exactly where you want it.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=500&h=320",
    alt: "Beautiful new home after AMP move",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg">
              A streamlined 4-step process for your peace of mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Real photo + AMP badge */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent" />

                {/* Step number — bottom left */}
                <div className="absolute bottom-3 left-3 w-11 h-11 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-[#0B1F3A] font-black text-sm">{step.number}</span>
                </div>

                {/* AMP badge — top right */}
                <div className="absolute top-3 right-3">
                  <BrandBadge size="sm" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold mb-2 text-[#0B1F3A]">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
