import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/conexaData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Método", href: "#metodo" },
    { label: "Para empresas", href: "#para-empresas" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#123D35]/10 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Logo Only */}
          <a
            href="#"
            className="flex items-center group text-left py-1"
            aria-label="Conexa Gestão Estratégica Início"
          >
            <img
              src="https://i.ibb.co/xKstq77M/IMG-6950-removebg-preview-1.png"
              alt="CONEXA Gestão Estratégica"
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-110 shrink-0 drop-shadow-md scale-110 sm:scale-115 origin-left"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#10211E]/80 hover:text-[#123D35] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#123D35] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#123D35] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D5146] active:scale-[0.98] transition-all shadow-xs"
            >
              <span>Falar com a Conexa</span>
              <ArrowUpRight className="w-4 h-4 text-[#B5A276]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#10211E] hover:bg-[#123D35]/5 focus-visible:outline-2 focus-visible:outline-[#123D35]"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#10211E]/40 backdrop-blur-xs transition-opacity">
          <div className="fixed top-16 left-0 right-0 bg-[#F6F5F0] border-b border-[#123D35]/15 shadow-xl px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-center pb-5 border-b border-[#123D35]/10">
              <img
                src="https://i.ibb.co/xKstq77M/IMG-6950-removebg-preview-1.png"
                alt="CONEXA Gestão Estratégica"
                className="h-20 w-auto object-contain scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#10211E] hover:text-[#123D35] py-2 border-b border-[#123D35]/10 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B5A276]">→</span>
                </a>
              ))}
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-[#123D35] text-white font-medium text-sm hover:bg-[#1D5146] active:scale-[0.99] transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#B5A276]" />
              <span>Quero estruturar minha operação</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
