import React from "react";
import { ArrowDown, Check, X, ShieldCheck } from "lucide-react";
import { COMPARISON_DATA } from "../data/conexaData";

export const DifferentialSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#EDECE6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#123D35] uppercase mb-3">
            Diferencial Operacional
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-4">
            A Conexa não fica apenas no diagnóstico.
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            Compreendemos que consultorias tradicionais muitas vezes entregam relatórios densos que
            acabam engavetados. Nosso modelo é desenhado para entrar na rotina e fazer acontecer.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Traditional Model */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-white/70 border border-[#10211E]/10 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#10211E]/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#68716E]">
                    Modelo Tradicional
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#10211E] uppercase">
                    {COMPARISON_DATA.traditional.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <X className="w-4 h-4" />
                </div>
              </div>

              {/* Steps Flow */}
              <div className="space-y-4">
                {COMPARISON_DATA.traditional.steps.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <div className="text-xs font-bold text-[#10211E] uppercase tracking-wide">
                        {item.step}
                      </div>
                      <div className="text-xs text-[#68716E] mt-0.5">
                        {item.detail}
                      </div>
                    </div>
                    {idx < COMPARISON_DATA.traditional.steps.length - 1 && (
                      <div className="flex justify-center text-neutral-300">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 text-xs text-[#68716E] italic">
              Resultado comum: "{COMPARISON_DATA.traditional.outcome}"
            </div>
          </div>

          {/* Right: CONEXA Model */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#123D35] text-white border-2 border-[#B5A276]/40 shadow-xl flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5A276]/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5A276]">
                    Atuação Prática Conexa
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#F6F5F0] uppercase tracking-tight">
                    {COMPARISON_DATA.conexa.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#B5A276] flex items-center justify-center text-[#10211E] shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* 6 Steps Grid / Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {COMPARISON_DATA.conexa.steps.map((item, idx) => (
                  <div
                    key={item.step}
                    className="p-3.5 rounded-lg bg-[#10211E]/70 border border-[#B5A276]/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono font-bold text-[#B5A276]">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-emerald-400">
                          Operacional
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white uppercase tracking-wide">
                        {item.step}
                      </div>
                      <div className="text-xs text-[#F6F5F0]/70 mt-1">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-medium text-[#B5A276]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{COMPARISON_DATA.conexa.outcome}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
