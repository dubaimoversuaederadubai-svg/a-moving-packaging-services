import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton({
  text = "Book Now on WhatsApp",
  message = "Hello, I would like to book your moving services",
  className,
  variant = "default",
  size = "default",
}: {
  text?: string;
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const handleClick = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971508199686?text=${encoded}`, "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`font-semibold tracking-wide cursor-pointer bg-[#25D366] hover:bg-[#1ebe5d] text-white border-none shadow-lg hover:shadow-xl transition-all ${className ?? ""}`}
      onClick={handleClick}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
}
