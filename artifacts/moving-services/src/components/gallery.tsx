import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BrandBadge } from "./brand-badge";

const galleryImages = [
  {
    src: "/images/amp_mover_photo1.png",
    alt: "AMP professional mover holding branded moving box",
    label: "Expert Packers",
  },
  {
    src: "/images/amp_mover_photo2.png",
    alt: "AMP crew loading branded boxes into moving truck",
    label: "Our Team",
  },
  {
    src: "/images/amp_mover_photo3.png",
    alt: "AMP mover with stack of branded moving boxes",
    label: "Branded Boxes",
  },
  {
    src: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=1200",
    alt: "AMP large moving truck on Dubai road",
    label: "AMP Trucks",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
    alt: "AMP moving crew at work loading furniture",
    label: "Moving Day",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    alt: "AMP fleet of delivery and moving trucks",
    label: "Our Fleet",
  },
  {
    src: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=1200",
    alt: "AMP professional packing materials and supplies",
    label: "Packing Supplies",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    alt: "Luxury Dubai villa ready for AMP relocation",
    label: "Dubai Villas",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = galleryImages.length;

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + total) % total : null);
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % total : null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0B1F3A]">
              See Us in Action
            </h2>
            <p className="text-gray-500 text-lg">
              Real workers, real trucks, real boxes — every job handled with the AMP standard.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => open(i)}
              style={{ cursor: "pointer" }}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 ? "col-span-2 row-span-2" : i === 5 ? "col-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />

              {/* AMP badge on every gallery photo */}
              <div className="absolute bottom-3 left-3">
                <BrandBadge size={i === 0 ? "md" : "sm"} />
              </div>

              {/* Hover label */}
              <div className="absolute top-3 right-3 bg-[#F59E0B] text-[#0B1F3A] text-[10px] font-black px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            >
              <button onClick={close} style={{ cursor: "pointer" }} className="absolute top-4 right-4 text-white hover:text-[#F59E0B] transition-colors p-2">
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                style={{ cursor: "pointer" }}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <div className="relative" onClick={e => e.stopPropagation()}>
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  className="max-w-5xl max-h-[85vh] w-full h-full object-contain rounded-xl"
                />
                {/* AMP badge in lightbox */}
                <div className="absolute bottom-4 left-4">
                  <BrandBadge size="lg" />
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                style={{ cursor: "pointer" }}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                {galleryImages[lightboxIndex].label} — {lightboxIndex + 1} / {total}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
