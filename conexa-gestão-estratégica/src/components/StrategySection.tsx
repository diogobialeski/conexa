import React from "react";
import { ArrowDown, ArrowRight, Layers, Users, Sliders, CheckCircle } from "lucide-react";

export const StrategySection: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "PROCESSO",
      question: "Qual o fluxo ideal?",
      desc: "Primeiro desenhamos o caminho claro que cada lead e cliente deve percorrer.",
      icon: Sliders,
    },
    {
      step: "02",
      name: "FERRAMENTA",
      question: "O que acelera o fluxo?",
      desc: "Configuramos o CRM e automações para servir exatamente ao processo desenhado.",
      icon: Layers,
    },
    {
      step: "03",
      name: "EQUIPE",
      question: "Quem executa com maestria?",
      desc: "Treinamos as pessoas no dia a dia para que a rotina se torne hábito natural.",
      icon: Users,
    },
    {
      step: "04",
      name: "OPERAÇÃO",
      question: "Como sustentar o crescimento?",
      desc: "Uma empresa que funciona com método, previsibilidade e sem sufoco para a diretoria.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#123D35] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-left">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#B5A276] uppercase mb-4">
            Princípio Fundamental
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F6F5F0] tracking-tight leading-[1.15] mb-2">
            Você não precisa de mais uma ferramenta.
          </h2>

          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#B5A276] mb-6">
            Precisa saber o que fazer com ela.
          </h3>

          <p className="text-base sm:text-lg text-[#F6F5F0]/80 leading-relaxed font-normal">
            É por isso que a Conexa começa pelo diagnóstico e não pela ferramenta. Primeiro
            entendemos o problema. Depois definimos o que realmente precisa ser implementado.
          </p>
        </div>

        {/* Visual Strategy Flow Diagram */}
        <div className="bg-[#10211E]/90 border border-[#B5A276]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xs">
          <div className="text-xs font-mono text-[#B5A276] uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B5A276]" />
            <span>A Lógica da Transformação Conexa</span>
          </div>

          {/* Desktop Connected Sequence */}
          <div className="hidden lg:grid grid-cols-4 gap-4 relative">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <div className="p-6 rounded-xl bg-[#123D35]/80 border border-[#B5A276]/20 group-hover:border-[#B5A276] transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#B5A276]">
                          PASSO {item.step}
                        </span>
                        <Icon className="w-5 h-5 text-[#B5A276]" />
                      </div>

                      <h4 className="font-heading text-lg font-bold text-white tracking-wider uppercase mb-1">
                        {item.name}
                      </h4>

                      <p className="text-xs font-medium text-[#B5A276] mb-3">
                        {item.question}
                      </p>

                      <p className="text-xs text-[#F6F5F0]/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#10211E] border border-[#B5A276] flex items-center justify-center text-[#B5A276]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Vertical Flow */}
          <div className="lg:hidden flex flex-col space-y-4">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.name}>
                  <div className="p-5 rounded-xl bg-[#123D35]/80 border border-[#B5A276]/25">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#B5A276]">
                        PASSO {item.step}
                      </span>
                      <Icon className="w-4 h-4 text-[#B5A276]" />
                    </div>

                    <h4 className="font-heading text-base font-bold text-white uppercase mb-1">
                      {item.name}
                    </h4>

                    <p className="text-xs font-medium text-[#B5A276] mb-2">
                      {item.question}
                    </p>

                    <p className="text-xs text-[#F6F5F0]/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="flex justify-center py-0.5 text-[#B5A276]">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Quote Banner */}
          <div className="mt-10 p-5 rounded-xl bg-[#123D35] border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#F6F5F0]">
              "Contratar ferramentas sem processo apenas automatiza a confusão que já existe."
            </p>
            <span className="text-xs font-semibold text-[#B5A276] uppercase tracking-wider shrink-0">
              Conexa • Visão Operacional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
