import React from "react";
import { Database, FileText, Zap, Cpu, Users2, Activity } from "lucide-react";
import { DELIVERABLES } from "../data/conexaData";

export const DeliverablesSection: React.FC = () => {
  const icons = [Database, FileText, Zap, Cpu, Users2, Activity];

  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-[#EDECE6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#123D35] uppercase mb-3">
            O Que a Conexa Entrega
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-4">
            Uma operação estruturada de ponta a ponta.
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            A tecnologia entra como parte da estratégia — nunca como fim.
          </p>
        </div>

        {/* 6 Minimalist Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.number}
                className="group p-8 rounded-xl bg-white border border-[#123D35]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-left flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#B5A276] tracking-widest">
                      {item.number}
                    </span>

                    <div className="w-10 h-10 rounded-lg bg-[#F6F5F0] flex items-center justify-center border border-[#123D35]/15 text-[#123D35] group-hover:bg-[#123D35] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#10211E] uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#68716E] leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                {/* Subtitle / Focus Benefit */}
                <div className="pt-6 mt-6 border-t border-[#123D35]/10 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#123D35]">
                    {item.highlight}
                  </span>
                  <span className="text-[11px] font-mono text-[#68716E]">
                    Entregável Conexa
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
