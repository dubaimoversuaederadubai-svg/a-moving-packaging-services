import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Home, Building, ShieldCheck, Wrench } from "lucide-react";
import { BrandBadge } from "./brand-badge";

const services = [
  {
    icon: Home,
    title: "Residential Moving",
    description: "Seamless door-to-door relocation for apartments and villas of any size across the UAE.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=340",
  },
  {
    icon: Building,
    title: "Corporate Relocation",
    description: "Minimal downtime office moves. IT equipment, furniture, and sensitive documents handled securely.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=340",
  },
  {
    icon: Package,
    title: "Premium Packing",
    description: "White-glove packing using top-grade materials to ensure zero damage to your valuables.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600&h=340",
  },
  {
    icon: Truck,
    title: "Secure Transport",
    description: "Modern fleet of covered, GPS-tracked trucks specifically designed for safe furniture transport.",
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=600&h=340",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Expert dismantling and reassembly of all furniture types, including complex modular systems.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600&h=340",
  },
  {
    icon: ShieldCheck,
    title: "Secure Storage",
    description: "Climate-controlled, 24/7 monitored storage facilities for short or long-term needs.",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=600&h=340",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              Comprehensive Moving Solutions
            </h2>
            <p className="text-gray-500 text-lg">
              Every service tailored to make your transition effortless and secure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              {/* Real photo with logo badge overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />

                {/* AMP Logo badge — bottom left of every card photo */}
                <div className="absolute bottom-3 left-3">
                  <BrandBadge size="sm" />
                </div>

                {/* Service icon — bottom right */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center shadow-md">
                  <service.icon className="w-4 h-4 text-[#0B1F3A]" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#0B1F3A]">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
