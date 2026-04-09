import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Package } from "lucide-react";
import { BrandBadge } from "./brand-badge";
import { WhatsAppButton } from "./whatsapp-button";

const boxTypes = [
  {
    name: "Standard Moving Box",
    dims: "60 × 40 × 40 cm",
    use: "Books, clothes, kitchenware, toys",
    icon: "📦",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500&h=400",
  },
  {
    name: "Wardrobe Box",
    dims: "55 × 55 × 130 cm",
    use: "Hanging clothes, suits, dresses",
    icon: "👔",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500&h=400",
  },
  {
    name: "Fragile / Dish Box",
    dims: "45 × 45 × 50 cm",
    use: "Glassware, crockery, ceramics",
    icon: "🫙",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=500&h=400",
  },
  {
    name: "TV & Mirror Box",
    dims: "Custom cut to size",
    use: "Flat screens, mirrors, artwork",
    icon: "📺",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500&h=400",
  },
];

const materials = [
  { label: "Double-walled corrugated boxes", desc: "2× stronger than standard cardboard" },
  { label: "Bubble wrap & foam sheeting", desc: "Air-cushion protection for fragile items" },
  { label: "Heavy-duty packing tape", desc: "Reinforced sealing for every box" },
  { label: "Packing peanuts & tissue paper", desc: "Fill voids and wrap delicate items" },
  { label: "Stretch wrap / furniture blankets", desc: "Full sofa, chair & furniture protection" },
  { label: "Foam corner protectors", desc: "Keep glass table tops & picture frames safe" },
];

export default function PackingMaterials() {
  return (
    <section id="packing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Packing &amp; Packaging
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              Professional Moving Boxes &amp; Packing Materials
            </h2>
            <p className="text-gray-500 text-lg">
              Every box custom-selected. Every item wrapped. Nothing left to chance.
            </p>
          </motion.div>
        </div>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-14 h-72 md:h-96 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1400&h=600"
            alt="Professional AMP branded moving boxes stacked ready for transport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
            <BrandBadge size="lg" />
            <h3 className="text-2xl md:text-4xl font-bold text-white mt-5 mb-3 max-w-lg">
              All Packing Materials Included — Zero Extra Cost
            </h3>
            <p className="text-gray-300 max-w-lg">
              Our movers bring everything needed on move day. No trips to the hardware store. No hidden material fees.
            </p>
          </div>
        </motion.div>

        {/* Box type cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Our Box Types</h3>
          <p className="text-gray-500 mb-8">We bring the right box for every item — not a one-size-fits-all approach.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {boxTypes.map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={box.image}
                    alt={`AMP ${box.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent" />
                  {/* Box icon badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-md text-xl">
                    {box.icon}
                  </div>
                  {/* AMP badge */}
                  <div className="absolute bottom-3 left-3">
                    <BrandBadge size="sm" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h4 className="font-bold text-[#0B1F3A] mb-1">{box.name}</h4>
                  <p className="text-[11px] text-[#F59E0B] font-bold uppercase tracking-wider mb-2">{box.dims}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{box.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Materials list + CTA */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Materials included */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B1F3A] rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                <Package className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <h3 className="text-xl font-bold text-white">Everything Included</h3>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Our move price covers all packing materials from start to finish — boxes, wrapping, taping, protection. Everything.
            </p>
            <div className="space-y-4">
              {materials.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-semibold">{m.label}</p>
                    <p className="text-gray-400 text-xs">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-rows-2 grid-cols-2 gap-3"
          >
            {/* Large top-left */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=700&h=350"
                alt="AMP mover carefully packing boxes with premium materials"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <BrandBadge size="md" />
              </div>
              <div className="absolute top-3 right-3 bg-[#F59E0B] text-[#0B1F3A] text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                100% Included
              </div>
            </div>
            {/* Bottom two */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=350&h=250"
                alt="Stacked AMP moving boxes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
              <div className="absolute bottom-2 left-2">
                <BrandBadge size="sm" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=350&h=250"
                alt="AMP professional packing supplies and bubble wrap"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
              <div className="absolute bottom-2 left-2">
                <BrandBadge size="sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Ready to experience stress-free, zero-damage packing?</p>
          <WhatsAppButton
            text="Book Packing Service on WhatsApp"
            size="lg"
            message="Hello! I would like to book your packing & moving service. Please share availability and pricing."
          />
        </motion.div>

      </div>
    </section>
  );
}
