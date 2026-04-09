import React from "react";

export function BrandBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { wrap: "gap-1.5 px-2.5 py-1.5", icon: "w-5 h-5", text: "text-[10px]" },
    md: { wrap: "gap-2 px-3 py-2", icon: "w-6 h-6", text: "text-xs" },
    lg: { wrap: "gap-2.5 px-4 py-2.5", icon: "w-8 h-8", text: "text-sm" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center ${s.wrap} bg-[#0B1F3A]/90 backdrop-blur-sm rounded-full shadow-lg border border-white/10`}>
      {/* Mini truck icon */}
      <div className={`${s.icon} flex-shrink-0`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="20" fill="#0B1F3A" />
          <rect x="5" y="14" width="18" height="13" rx="1.5" fill="#F59E0B" />
          <path d="M23 18 L23 27 L35 27 L35 22 L30 16 L23 16 Z" fill="#F59E0B" />
          <path d="M25 17.5 L30 17.5 L33 22 L25 22 Z" fill="#0B1F3A" opacity="0.7" />
          <circle cx="11" cy="28" r="3" fill="white" />
          <circle cx="11" cy="28" r="1.5" fill="#0B1F3A" />
          <circle cx="29" cy="28" r="3" fill="white" />
          <circle cx="29" cy="28" r="1.5" fill="#0B1F3A" />
          <text x="6.5" y="23" fontSize="6.5" fontWeight="bold" fill="#0B1F3A" fontFamily="Arial">AMP</text>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-black text-[#F59E0B] tracking-tight`}>A Moving &amp;</span>
        <span className={`${s.text} font-black text-white tracking-tight`}>Packaging</span>
      </div>
    </div>
  );
}
