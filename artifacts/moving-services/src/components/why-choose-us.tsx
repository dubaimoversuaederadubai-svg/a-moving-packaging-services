import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Star, Users } from "lucide-react";
import { BrandBadge } from "./brand-badge";

const stats = [
  { number: "2,000+", label: "Moves Completed", icon: Users },
  { number: "4.9/5", label: "Customer Rating", icon: Star },
  { number: "8+", label: "Years Experience", icon: Award },
  { number: "100%", label: "Safe Delivery Rate", icon: Shield },
];

const reasons = [
  { icon: Shield, title: "Fully Insured", description: "Complete transit coverage from origin to destination." },
  { icon: Award, title: "Premium Materials", description: "Branded double-walled boxes and packing supplies." },
  { icon: Clock, title: "On-Time Guarantee", description: "We respect your schedule — punctuality, always." },
  { icon: ThumbsUp, title: "Trained Professionals", description: "Vetted, trained, permanently employed crew." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0B1F3A] rounded-2xl p-6 md:p-8 text-center"
            >
              <stat.icon className="w-8 h-8 text-[#F59E0B] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Why Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#0B1F3A]">
              The Premium Standard in UAE Moving
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We don't just move boxes — we relocate lives. Our commitment to excellence has made us the trusted choice for high-end residential and corporate moves across Dubai and the UAE.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#0B1F3A]">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo with logo badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900&h=1100"
                alt="Professional AMP mover at work in Dubai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
              {/* AMP badge on mover photo */}
              <div className="absolute bottom-6 left-6">
                <BrandBadge size="lg" />
              </div>
            </div>
            {/* Floating review */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[220px]">
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-xs text-gray-500 italic">"Absolutely flawless. Best movers in Dubai."</p>
              <p className="text-xs font-bold text-[#0B1F3A] mt-2">— Sarah M., Palm Jumeirah</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
