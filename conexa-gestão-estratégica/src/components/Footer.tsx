import React from "react";
import { Instagram, MessageSquare, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../data/conexaData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10211E] text-white pt-16 pb-24 md:pb-16 border-t border-[#123D35]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 text-left">
            <a href="#" className="inline-block mb-5">
              <img
                src="https://i.ibb.co/xKstq77M/IMG-6950-removebg-preview-1.png"
                alt="CONEXA Gestão Estratégica"
                className="h-24 sm:h-28 w-auto object-contain brightness-0 invert opacity-95 block scale-110 origin-left"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-sm font-medium text-[#F6F5F0]/70 max-w-sm mb-4">
              Pessoas • Processos • Resultados
            </p>

            <p className="text-xs text-[#F6F5F0]/50 max-w-md leading-relaxed">
              Estruturação operacional, implementação de CRM, automações e capacitação presencial
              para empresas que desejam crescer com solidez.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5A276] block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-sm text-[#F6F5F0]/75">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-white transition-colors">
                  Método
                </a>
              </li>
              <li>
                <a href="#para-empresas" className="hover:text-white transition-colors">
                  Para empresas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5A276] block mb-4">
              Canais Oficiais
            </span>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-[#F6F5F0]/80 hover:text-[#B5A276] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-[#123D35] flex items-center justify-center text-[#B5A276]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>WhatsApp Comercial</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A276]" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-[#F6F5F0]/80 hover:text-[#B5A276] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-[#123D35] flex items-center justify-center text-[#B5A276]">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@cone_xaconsultoria</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A276]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F5F0]/50 gap-4">
          <p>© Conexa. Todos os direitos reservados.</p>
          <p>Gestão Estratégica & Operação Comercial</p>
        </div>
      </div>
    </footer>
  );
};
