import React from "react";

export function Logo({ className, showText = false }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        className="h-10 w-10 flex-shrink-0"
        fill="none"
      >
        {/* Background circle */}
        <circle cx="28" cy="28" r="28" fill="#0B1F3A" />
        {/* Truck body */}
        <rect x="8" y="20" width="26" height="18" rx="2" fill="#F59E0B" />
        {/* Truck cab */}
        <path d="M34 26 L34 38 L48 38 L48 30 L42 22 L34 22 Z" fill="#F59E0B" />
        {/* Cab window */}
        <path d="M36 24 L42 24 L46 30 L36 30 Z" fill="#0B1F3A" opacity="0.7" />
        {/* Truck wheels */}
        <circle cx="16" cy="39" r="4" fill="white" />
        <circle cx="16" cy="39" r="2" fill="#0B1F3A" />
        <circle cx="40" cy="39" r="4" fill="white" />
        <circle cx="40" cy="39" r="2" fill="#0B1F3A" />
        {/* Letter A on truck body */}
        <text x="14" y="33" fontSize="11" fontWeight="bold" fill="#0B1F3A" fontFamily="Arial, sans-serif">AMP</text>
        {/* Ground line */}
        <line x1="6" y1="43" x2="50" y2="43" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-base font-extrabold tracking-tight text-[#0B1F3A]">A Moving &</span>
          <span className="text-base font-extrabold tracking-tight text-[#F59E0B]">Packaging Services</span>
        </div>
      )}
    </div>
  );
}
