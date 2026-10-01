import React from "react";
import { Check, MapPin, Users, Award, Eye } from "lucide-react";

export const InCompanySection: React.FC = () => {
  const checkItems = [
    { label: "Treinamento da equipe", desc: "Capacitação direta nas telas e rotinas do dia a dia" },
    { label: "Acompanhamento da rotina", desc: "Observação dos atendimentos e gargalos reais da operação" },
    { label: "Ajustes no processo", desc: "Refinamento ágil de regras e fluxos conforme as dúvidas surgem" },
    { label: "Implementação prática", desc: "Colocando o CRM e as automações para rodar com o time" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset with Editorial Scrim & Real-Operation Placeholder badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#123D35]/20 shadow-lg bg-neutral-900 group">
              <img
                src="/src/assets/images/conexa_in_company_consulting_1790819920625.jpg"
                alt="Equipe reunida em sessão de estruturação de processos operacionais"
                className="w-full h-auto aspect-4/3 object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Overlaid Label & Field Note */}
              <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#123D35]/90 border border-[#B5A276]/40 text-[11px] font-mono font-medium text-[#B5A276] mb-2 backdrop-blur-xs">
                  <MapPin className="w-3 h-3" />
                  <span>Imersão na Operação • In-Company</span>
                </div>
                <p className="text-xs text-neutral-200 leading-snug">
                  Espaço reservado para registros de campo reais: nossa equipe vivenciando a rotina,
                  mapeando dores e capacitando os colaboradores no ambiente de trabalho.
                </p>
              </div>

              {/* Floating Seal / Badge Top Right */}
              <div className="absolute top-4 right-4 bg-[#123D35]/95 border border-[#B5A276]/50 text-white px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-[#B5A276]" />
                <span>Implementação Presencial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 text-left">
            {/* Selo Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#123D35]/10 border border-[#123D35]/20 text-xs font-bold tracking-widest text-[#123D35] uppercase">
              <Users className="w-3.5 h-3.5 text-[#B5A276]" />
              <span>Presença Onde o Trabalho Acontece</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-6">
              Quando necessário, a Conexa vai até a operação.
            </h2>

            <p className="text-base sm:text-lg text-[#68716E] leading-relaxed mb-8">
              Algumas mudanças precisam acontecer no ambiente real da empresa. Por isso, quando o
              projeto exige, também atuamos presencialmente para acompanhar processos, treinar a
              equipe e ajudar a colocar a nova estrutura em funcionamento.
            </p>

            {/* 4 Checklist Items */}
            <div className="space-y-4 pt-2 border-t border-[#123D35]/10">
              {checkItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-md bg-[#123D35] text-[#B5A276] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#10211E]">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68716E] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
