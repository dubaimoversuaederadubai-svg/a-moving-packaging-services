import React from "react";
import { Logo } from "./logo";
import { WhatsAppButton } from "./whatsapp-button";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Logo showText className="mb-5" />
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              Dubai's trusted premium movers. We handle your life's most valuable belongings with the precision and care they deserve. AED 1,200 per bedroom — no hidden fees.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span>Sheikh Zayed Road, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <a href="tel:+971508199686" className="hover:text-[#F59E0B] transition-colors cursor-pointer font-semibold text-[#F59E0B]">
                  +971 50 819 9686
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>7 Days/Week — 7:00 AM to 10:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <WhatsAppButton text="Get a Free Quote" className="cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {["Residential Moving", "Corporate Relocation", "Premium Packing", "Storage Solutions", "Furniture Assembly", "Villa Moves"].map(s => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#F59E0B] transition-colors cursor-pointer">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: "Get a Quote", href: "#pricing" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Photo Gallery", href: "#gallery" },
                { label: "Our Fleet", href: "#fleet" },
                { label: "Testimonials", href: "#" },
                { label: "FAQ", href: "#faq" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#F59E0B] transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} A Moving and Packaging Services. All rights reserved. Dubai, UAE.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
