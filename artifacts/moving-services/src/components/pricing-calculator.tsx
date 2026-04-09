import React, { useState } from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./whatsapp-button";
import { CheckCircle2, Sparkles } from "lucide-react";

const propertyTypes = [
  { id: "studio", label: "Studio", sublabel: "Up to 400 sqft", price: 800 },
  { id: 1, label: "1 Bedroom", sublabel: "Studio + 1 bed", price: 1200 },
  { id: 2, label: "2 Bedrooms", sublabel: "2 bed apartment", price: 2400 },
  { id: 3, label: "3 Bedrooms", sublabel: "3 bed apartment/villa", price: 3600 },
  { id: 4, label: "4 Bedrooms", sublabel: "Large villa", price: 4800 },
];

const includes = [
  "Professional packing materials",
  "Furniture dismantling & assembly",
  "GPS-tracked truck transport",
  "Unpacking at new location",
  "Full transit insurance",
];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string | number>(1);
  const selectedType = propertyTypes.find(p => p.id === selected) ?? propertyTypes[1];

  const getMessage = () =>
    `Hello! I would like to book a move for a ${selectedType.label} home. Estimated price: AED ${selectedType.price.toLocaleString()}. Please confirm availability and moving date.`;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              Instant Price Calculator
            </h2>
            <p className="text-gray-500 text-lg">No hidden fees. AED 1,200 per bedroom — that simple.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left: Selector */}
            <div className="p-8 md:p-10 border-r border-gray-100">
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Select your property size</h3>
              <p className="text-gray-400 text-sm mb-6">Price = AED 1,200 × number of bedrooms</p>
              <div className="flex flex-col gap-3">
                {propertyTypes.map(type => {
                  const isSelected = selected === type.id;
                  return (
                    <button
                      key={String(type.id)}
                      onClick={() => setSelected(type.id)}
                      style={{ cursor: "pointer" }}
                      className={`flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all font-medium text-left ${
                        isSelected
                          ? "border-[#F59E0B] bg-amber-50 text-[#0B1F3A]"
                          : "border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:bg-amber-50/40 hover:text-[#0B1F3A]"
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-[15px]">{type.label}</span>
                        <span className={`text-xs ${isSelected ? "text-amber-600" : "text-gray-400"}`}>{type.sublabel}</span>
                      </div>
                      <span className={`text-sm font-extrabold ${isSelected ? "text-[#F59E0B]" : "text-gray-400"}`}>
                        AED {type.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Price display */}
            <div className="p-8 md:p-10 bg-[#0B1F3A] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-wider">Your Estimate</span>
                </div>

                <p className="text-gray-400 text-sm font-medium mb-1">{selectedType.label} Move</p>
                <motion.div
                  key={selectedType.price}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-baseline gap-2 mb-2"
                >
                  <span className="text-gray-400 text-xl font-medium">AED</span>
                  <span className="text-5xl md:text-6xl font-extrabold text-white">
                    {selectedType.price.toLocaleString()}
                  </span>
                </motion.div>

                <p className="text-gray-400 text-sm mb-8">All-inclusive. No extra charges on moving day.</p>

                <div className="space-y-2.5 mb-8">
                  {includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <WhatsAppButton
                size="lg"
                className="w-full text-base"
                text="Book Now at this Price"
                message={getMessage()}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
