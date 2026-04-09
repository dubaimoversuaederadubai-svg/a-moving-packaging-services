import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Downtown Dubai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Best moving experience I've had in Dubai. The team was professional, incredibly careful with my art collection, and finished ahead of schedule.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Palm Jumeirah",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Worth every dirham. They dismantled my custom wardrobe and reassembled it perfectly in the new villa. Spotless, professional service.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    location: "Dubai Marina",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    text: "I was anxious about moving, but A Moving & Packaging Services handled everything flawlessly. The branded boxes and uniformed staff were so reassuring.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    location: "Jumeirah Beach Residence",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Moved our entire office — 40 staff members' workstations — with zero downtime. Remarkable planning and execution. We will always use AMP.",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Business Bay",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
    text: "WhatsApp response within minutes. Crew arrived on time, treated my furniture like it was their own, and nothing was damaged. Perfect.",
    rating: 5,
  },
  {
    name: "Mohammed R.",
    location: "Arabian Ranches",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    text: "5 bedroom villa move in one day. Price was exactly as quoted — no surprises whatsoever. Highly recommend to anyone moving in Dubai.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Client Reviews
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-lg">Over 2,000 happy moves across Dubai and the UAE.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#F59E0B]/25 absolute top-6 right-6" />
              <div className="flex gap-0.5 text-[#F59E0B] mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#F59E0B]"
                />
                <div>
                  <p className="font-bold text-[#0B1F3A] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
