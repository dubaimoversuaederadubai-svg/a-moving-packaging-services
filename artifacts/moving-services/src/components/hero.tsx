import React from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { motion } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { BrandBadge } from "./brand-badge";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden flex items-center min-h-[88vh]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=2070"
          alt="AMP professional moving team in Dubai"
          className="w-full h-full object-cover"
        />
        {/* AMP brand badge over the hero background photo */}
        <div className="absolute bottom-8 right-8 z-20">
          <BrandBadge size="lg" />
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/15 px-4 py-1.5 text-sm font-semibold text-[#F59E0B] mb-7">
              <span className="flex h-2 w-2 rounded-full bg-[#F59E0B] mr-2 animate-pulse"></span>
              Dubai's #1 Premium Movers
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight text-white">
              We Move Your Life,{" "}
              <br />
              <span className="text-[#F59E0B]">Not Just Your Boxes.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Professional packing, secure transport, and white-glove setup — tailored for Dubai's finest homes and offices.
              Trusted by 2,000+ residents across the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <WhatsAppButton size="lg" className="text-base px-8 py-4 cursor-pointer" text="Book Your Move Today" />
              <a
                href="tel:+971508199686"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors rounded-lg px-8 py-4 font-semibold text-base cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                +971 50 819 9686
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="h-5 w-px bg-white/20" />
              <span className="text-gray-300 text-sm">2,000+ Happy Customers</span>
              <div className="h-5 w-px bg-white/20" />
              <span className="text-gray-300 text-sm">7 Days a Week</span>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            {[
              { number: "2,000+", label: "Moves Completed" },
              { number: "5 Min", label: "WhatsApp Response" },
              { number: "100%", label: "Safe Delivery" },
              { number: "7 Days", label: "Always Available" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl font-bold text-[#F59E0B] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
