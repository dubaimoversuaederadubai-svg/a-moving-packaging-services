import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">Find Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">Our Location</h2>
            <p className="text-gray-500 text-lg">Based in the heart of Dubai — serving the entire UAE.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#0B1F3A] rounded-2xl p-8 text-center group"
          >
            <div className="w-14 h-14 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Address</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Sheikh Zayed Road<br />Dubai, UAE</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0B1F3A] rounded-2xl p-8 text-center group"
          >
            <div className="w-14 h-14 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Call or WhatsApp</h3>
            <a href="tel:+971508199686" className="text-[#F59E0B] font-bold text-lg hover:underline cursor-pointer block">
              +971 50 819 9686
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#0B1F3A] rounded-2xl p-8 text-center group"
          >
            <div className="w-14 h-14 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Business Hours</h3>
            <p className="text-gray-400 text-sm">7 Days a Week</p>
            <p className="text-[#F59E0B] font-semibold">7:00 AM – 10:00 PM</p>
          </motion.div>
        </div>

        {/* Map embed */}
        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-[420px] md:h-[520px] w-full">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.18%2C25.17%2C55.36%2C25.28&layer=mapnik&marker=25.2048%2C55.2708"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="A Moving and Packaging Services — Sheikh Zayed Road, Dubai, UAE"
          />
        </div>

        {/* Address schema for Google */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <address className="not-italic">
            <strong className="text-gray-600">A Moving and Packaging Services</strong> &mdash; Sheikh Zayed Road, Dubai, UAE &mdash;{" "}
            <a href="tel:+971508199686" className="text-[#F59E0B] font-semibold hover:underline cursor-pointer">+971 50 819 9686</a>
          </address>
        </div>
      </div>
    </section>
  );
}
