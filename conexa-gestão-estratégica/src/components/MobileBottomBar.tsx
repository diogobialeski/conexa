import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/conexaData";

export const MobileBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after user scrolls past 150px
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#10211E]/95 backdrop-blur-md border-t border-[#B5A276]/30 px-4 py-3 transition-all duration-300">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#123D35] border border-[#B5A276]/50 text-white font-heading font-bold text-sm shadow-lg active:scale-[0.98] transition-all"
        aria-label="Falar com a Conexa pelo WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-[#B5A276]" />
        <span>Falar com a Conexa</span>
        <ArrowUpRight className="w-4 h-4 text-[#B5A276]" />
      </a>
    </div>
  );
};
