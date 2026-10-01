import React from "react";
import { ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "../data/conexaData";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#123D35] text-white relative overflow-hidden text-center">
      {/* Subtle decorative architectural background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D5146]/80 via-[#123D35] to-[#10211E] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#B5A276] uppercase mb-4">
          Próximo Passo
        </span>

        {/* Title */}
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F6F5F0] tracking-tight leading-[1.12] mb-6 text-balance">
          Sua operação pode funcionar melhor.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#F6F5F0]/85 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Vamos entender como sua empresa funciona hoje e identificar onde processos, CRM e
          tecnologia podem ajudar.
        </p>

        {/* Big Action Button */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-5 rounded-lg bg-[#B5A276] text-[#10211E] font-heading font-extrabold text-lg sm:text-xl hover:bg-[#c4b387] active:scale-[0.99] transition-all shadow-xl group"
          >
            <MessageSquare className="w-5 h-5 text-[#10211E]" />
            <span>Quero estruturar minha operação</span>
            <ArrowUpRight className="w-5 h-5 text-[#10211E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <p className="text-xs sm:text-sm text-[#F6F5F0]/70 flex items-center gap-2 mt-2">
            <ShieldCheck className="w-4 h-4 text-[#B5A276]" />
            <span>Sem compromisso. Primeiro entendemos o seu cenário.</span>
          </p>
        </div>

        {/* 3 Practical trust pillars */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#F6F5F0]/70">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B5A276]" />
            <span>Conversa direta com especialista</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B5A276]" />
            <span>Diagnóstico do seu fluxo atual</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B5A276]" />
            <span>Proposta sob medida para o negócio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
