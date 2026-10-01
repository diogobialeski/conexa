import React, { useState } from "react";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { PROBLEM_CARDS, getWhatsAppLinkWithMessage } from "../data/conexaData";

export const ProblemSection: React.FC = () => {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  const toggleProblem = (id: string) => {
    setSelectedProblems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedProblems.length;
  const isIdentified = selectedCount >= 2;

  // Custom WhatsApp message dynamically generated based on user selection
  const selectedTitles = PROBLEM_CARDS.filter((p) => selectedProblems.includes(p.id))
    .map((p) => p.title)
    .join(", ");

  const customMessage = isIdentified
    ? `Olá! Fiz o diagnóstico na página da Conexa e identifiquei os seguintes desafios na minha operação: ${selectedTitles}. Gostaria de entender como podemos organizar isso.`
    : "Olá! Gostaria de entender o diagnóstico operacional da Conexa para a minha empresa.";

  const whatsappHref = getWhatsAppLinkWithMessage(customMessage);

  return (
    <section id="problema" className="py-24 sm:py-32 bg-[#F6F5F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-[#123D35] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A276]" />
            <span>O Ponto de Partida</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-6">
            Sua operação ainda depende demais das pessoas?
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            Quando processos não estão estruturados, o crescimento pode trazer mais complexidade,
            retrabalho e perda de oportunidades.
          </p>

          <p className="text-xs sm:text-sm text-[#123D35] font-semibold mt-4">
            💡 Dica prática: clique nos pontos abaixo que acontecem no seu dia a dia para autoavaliar sua operação:
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card) => {
            const isChecked = selectedProblems.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => toggleProblem(card.id)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleProblem(card.id);
                  }
                }}
                className={`group p-7 rounded-xl transition-all duration-200 cursor-pointer border text-left flex flex-col justify-between ${
                  isChecked
                    ? "bg-[#123D35] text-white border-[#123D35] shadow-md ring-2 ring-[#B5A276]/60 translate-y-[-2px]"
                    : "bg-white text-[#10211E] border-[#123D35]/15 hover:border-[#123D35]/40 hover:shadow-xs hover:translate-y-[-2px]"
                }`}
              >
                <div>
                  {/* Top Bar with Number and Selection Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isChecked ? "text-[#B5A276]" : "text-[#68716E]"
                      }`}
                    >
                      CARD {card.number}
                    </span>

                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors ${
                        isChecked
                          ? "bg-[#B5A276] border-[#B5A276] text-[#10211E]"
                          : "border-[#123D35]/20 group-hover:border-[#123D35]"
                      }`}
                      aria-label={isChecked ? "Ponto selecionado" : "Selecionar ponto"}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading text-lg sm:text-xl font-bold uppercase tracking-tight mb-3 ${
                      isChecked ? "text-white" : "text-[#10211E]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isChecked ? "text-[#F6F5F0]/90" : "text-[#68716E]"
                    }`}
                  >
                    "{card.description}"
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 mt-4 border-t border-current/10 flex items-center justify-between text-xs">
                  <span
                    className={`font-medium ${
                      isChecked ? "text-[#B5A276]" : "text-[#123D35]"
                    }`}
                  >
                    {card.impactTag}
                  </span>
                  <span
                    className={`text-[11px] underline underline-offset-2 ${
                      isChecked ? "text-white/80" : "text-[#68716E]"
                    }`}
                  >
                    {isChecked ? "Selecionado" : "Identificar"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion Callout & CTA */}
        <div className="mt-14 p-8 sm:p-10 rounded-xl bg-white border border-[#123D35]/15 shadow-sm text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#123D35]">
              <AlertCircle className="w-4 h-4 text-[#B5A276]" />
              <span>
                {selectedCount > 0
                  ? `${selectedCount} gargalo${selectedCount > 1 ? "s" : ""} selecionado${selectedCount > 1 ? "s" : ""}`
                  : "Análise de Fricção Operacional"}
              </span>
            </div>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#10211E] leading-snug">
              Se você se identificou com dois ou mais desses pontos, provavelmente existe espaço
              para organizar sua operação.
            </p>
            <p className="text-sm text-[#68716E] mt-2">
              A complexidade não precisa crescer junto com o faturamento. Processos claros protegem a
              margem e a tranquilidade da liderança.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-[#123D35] text-white font-semibold text-sm hover:bg-[#1D5146] active:scale-[0.99] transition-all shadow-md group"
          >
            <span>Quero entender minha operação</span>
            <ArrowUpRight className="w-4 h-4 text-[#B5A276] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
