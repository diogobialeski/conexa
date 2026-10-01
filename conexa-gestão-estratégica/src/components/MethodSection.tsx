import React, { useState } from "react";
import { ArrowUpRight, Search, GitBranch, Database, Rocket, GraduationCap, ChevronRight } from "lucide-react";
import { METHOD_STEPS, WHATSAPP_URL } from "../data/conexaData";

export const MethodSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const stepIcons = [Search, GitBranch, Database, Rocket, GraduationCap];

  return (
    <section id="metodo" className="py-24 sm:py-32 bg-[#F6F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-[#123D35] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A276]" />
            <span>Método Conexa</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-6">
            Do diagnóstico à implementação.
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            Não entregamos apenas uma recomendação. Ajudamos sua empresa a colocar a estrutura para
            funcionar.
          </p>
        </div>

        {/* Desktop Connected Line Layout (hidden on mobile, visible lg) */}
        <div className="hidden lg:block relative mb-16">
          {/* Horizontal Line behind steps */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-[#123D35]/15 -z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {METHOD_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = selectedStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-left group ${
                    isSelected
                      ? "bg-white border-[#123D35] shadow-lg ring-2 ring-[#123D35]/20 translate-y-[-4px]"
                      : "bg-[#F6F5F0] border-[#123D35]/15 hover:bg-white hover:border-[#123D35]/40 hover:shadow-xs"
                  }`}
                >
                  <div>
                    {/* Circle Node */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border font-mono font-bold text-sm transition-colors ${
                          isSelected
                            ? "bg-[#123D35] text-white border-[#123D35]"
                            : "bg-white text-[#123D35] border-[#123D35]/20 group-hover:border-[#123D35]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#B5A276]">
                        ETAPA {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#10211E] uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#68716E] leading-relaxed">
                      "{step.description}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-200/80 text-[11px] text-[#123D35] font-semibold flex items-center gap-1">
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (visible on screens < lg) */}
        <div className="lg:hidden relative space-y-6 pl-4 border-l-2 border-[#123D35]/20 ml-2 mb-12">
          {METHOD_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={step.number} className="relative pl-6 text-left">
                {/* Timeline Node Point */}
                <div className="absolute -left-[25px] top-1.5 w-6 h-6 rounded-full bg-[#123D35] border-2 border-white flex items-center justify-center text-white text-[10px] font-mono font-bold">
                  {step.number}
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#123D35]/15 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#B5A276]">
                      ETAPA {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#123D35]" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#10211E] uppercase mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#68716E] leading-relaxed mb-3">
                    "{step.description}"
                  </p>

                  <div className="text-[11px] text-[#123D35] font-semibold pt-2 border-t border-neutral-100">
                    Entregável: {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Method Conclusion Callout */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#123D35] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5A276] block mb-1">
              Compromisso Prático
            </span>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#F6F5F0]">
              O objetivo é sua equipe usar a estrutura sem depender de ninguém de fora.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#B5A276] text-[#10211E] font-semibold text-sm hover:bg-[#c9b78b] active:scale-[0.99] transition-all shadow-md"
          >
            <span>Quero estruturar minha operação</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
