import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { BrandBadge } from "./brand-badge";

const categories = [
  {
    heading: "Our Moving Workers",
    subtext: "Trained, uniformed professionals who treat every item with care and deliver every job on time.",
    features: [
      "Vetted & background-checked staff",
      "Uniformed with AMP brand badge",
      "Expert in heavy & fragile furniture",
      "Available 7 days a week",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=550",
        alt: "AMP professional mover carrying boxes",
        label: "Expert Packers",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500&h=350",
        alt: "AMP moving crew at work",
        label: "Our Crew",
      },
      {
        src: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=500&h=350",
        alt: "AMP worker loading boxes",
        label: "Loading Up",
      },
    ],
    badge: "bg-[#F59E0B]",
    accentText: "text-[#F59E0B]",
  },
  {
    heading: "Our Moving Trucks & Fleet",
    subtext: "GPS-tracked, air-suspension equipped trucks built for safe long and short-haul moves across the UAE.",
    features: [
      "Modern covered moving trucks",
      "Real-time GPS tracking",
      "Hydraulic tail lifts & ramps",
      "Clean, lined truck interiors",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800&h=550",
        alt: "AMP large moving truck on road",
        label: "AMP Truck",
      },
      {
        src: "https://images.unsplash.com/photo-1519003300449-424ad0405076?auto=format&fit=crop&q=80&w=500&h=350",
        alt: "AMP moving van ready for loading",
        label: "Moving Van",
      },
      {
        src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=500&h=350",
        alt: "AMP fleet of delivery trucks",
        label: "Our Fleet",
      },
    ],
    badge: "bg-[#0B1F3A]",
    accentText: "text-[#0B1F3A]",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-gray-50">
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
              Our Team &amp; Fleet
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              The People &amp; Vehicles Behind Every Move
            </h2>
            <p className="text-gray-500 text-lg">
              Trusted uniforms, trusted trucks — every element branded and professional.
            </p>
          </motion.div>
        </div>

        {/* Worker & Truck categories */}
        <div className="space-y-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              {/* Text side */}
              <div className={ci % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-4">{cat.heading}</h3>
                <p className="text-gray-500 mb-7 leading-relaxed text-lg">{cat.subtext}</p>
                <ul className="space-y-3">
                  {cat.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photos grid */}
              <div className={`grid grid-cols-2 gap-3 ${ci % 2 === 1 ? "md:order-1" : ""}`}>

                {/* Main large photo */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden h-64 md:h-72 shadow-lg group">
                  <img
                    src={cat.photos[0].src}
                    alt={cat.photos[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-transparent" />
                  {/* Label */}
                  <div className="absolute top-4 left-4 bg-[#F59E0B] text-[#0B1F3A] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                    {cat.photos[0].label}
                  </div>
                  {/* AMP badge */}
                  <div className="absolute bottom-4 left-4">
                    <BrandBadge size="md" />
                  </div>
                </div>

                {/* Small photo 1 */}
                <div className="relative rounded-xl overflow-hidden h-40 shadow-md group">
                  <img
                    src={cat.photos[1].src}
                    alt={cat.photos[1].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                  <div className="absolute top-2 left-2 bg-[#F59E0B] text-[#0B1F3A] text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                    {cat.photos[1].label}
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <BrandBadge size="sm" />
                  </div>
                </div>

                {/* Small photo 2 */}
                <div className="relative rounded-xl overflow-hidden h-40 shadow-md group">
                  <img
                    src={cat.photos[2].src}
                    alt={cat.photos[2].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                  <div className="absolute top-2 left-2 bg-[#F59E0B] text-[#0B1F3A] text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                    {cat.photos[2].label}
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <BrandBadge size="sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
