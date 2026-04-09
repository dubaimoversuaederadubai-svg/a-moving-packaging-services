import React, { useState, useEffect } from "react";
import { Logo } from "./logo";
import { WhatsAppButton } from "./whatsapp-button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#fleet", label: "Our Fleet" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#" style={{ cursor: "pointer" }} className="flex items-center">
          <Logo showText />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 text-[15px] font-semibold text-gray-600">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ cursor: "pointer" }}
              className="hover:text-[#F59E0B] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col text-right">
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Call 24/7</span>
            <a
              href="tel:+971508199686"
              style={{ cursor: "pointer" }}
              className="text-sm font-bold text-[#0B1F3A] hover:text-[#F59E0B] transition-colors duration-200"
            >
              +971 50 819 9686
            </a>
          </div>
          <WhatsAppButton text="Get Quote" />
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer" }}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ cursor: "pointer" }}
              className="py-2.5 px-2 text-gray-700 font-semibold hover:text-[#F59E0B] transition-colors duration-200 border-b border-gray-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <WhatsAppButton text="Get Quote on WhatsApp" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
