import React from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0B1F3A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-5 bg-[#F59E0B]/10 px-4 py-1.5 rounded-full border border-[#F59E0B]/30">Ready to Move?</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Book Your Stress-Free Move Today
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get an instant quote on WhatsApp. Our moving experts respond in under 5 minutes — 7 days a week, 7AM to 10PM.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <WhatsAppButton
                size="lg"
                className="text-lg px-10 py-5 cursor-pointer w-full sm:w-auto"
                text="Chat on WhatsApp"
              />
              <a
                href="tel:+971508199686"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-xl px-10 py-5 font-semibold text-lg transition-all cursor-pointer w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call +971 50 819 9686
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Average response: Under 5 minutes</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>Available 7 days a week, 7AM – 10PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
