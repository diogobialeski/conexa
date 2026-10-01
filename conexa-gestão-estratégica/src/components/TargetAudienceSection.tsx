import React from "react";
import { SEGMENTS } from "../data/conexaData";
import { Building2, Stethoscope, Car, GraduationCap, Sparkles, UserCheck, Briefcase, TrendingUp } from "lucide-react";

export const TargetAudienceSection: React.FC = () => {
  const segmentIcons: Record<string, React.ElementType> = {
    "Autoescolas": Car,
    "Clínicas & Consultórios": Stethoscope,
    "Médicos & Especialistas": Stethoscope,
    "Escolas & Cursos": GraduationCap,
    "Clínicas Odontológicas": Sparkles,
    "Corretores & Imobiliárias": Building2,
    "Estética & Beleza": Sparkles,
    "Designers & Criativos": Briefcase,
    "Prestadores de Serviços": UserCheck,
    "Pequenas e Médias Empresas": TrendingUp,
  };

  return (
    <section id="para-empresas" className="py-24 sm:py-32 bg-[#F6F5F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#123D35] uppercase mb-3">
            Para Quem
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-4">
            A metodologia se adapta ao seu negócio.
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            Se existe uma operação comercial, existem processos que podem ser organizados.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {SEGMENTS.map((segment) => {
            const Icon = segmentIcons[segment.name] || Building2;
            return (
              <div
                key={segment.name}
                className="p-5 rounded-xl bg-white border border-[#123D35]/15 hover:border-[#123D35] hover:shadow-xs transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#F6F5F0] flex items-center justify-center text-[#123D35] group-hover:bg-[#123D35] group-hover:text-white transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-heading text-sm font-bold text-[#10211E] uppercase tracking-tight mb-2">
                    {segment.name}
                  </h3>

                  <p className="text-xs text-[#68716E] leading-relaxed">
                    {segment.context}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-semibold text-[#123D35]">
                  <span>Estruturação adaptável</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guiding Principle Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#123D35]/20 shadow-xs max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B5A276] block mb-3">
            Princípio Universal
          </span>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#10211E] leading-snug mb-4">
            "O segmento pode mudar. O princípio permanece: entender a operação, estruturar o processo
            e implementar uma solução que faça sentido para o negócio."
          </p>

          <p className="text-xs sm:text-sm text-[#68716E] max-w-xl mx-auto">
            Apresentamos esses segmentos como exemplos onde a rotina comercial se beneficia de
            processos claros. A metodologia é desenhada para a realidade específica da sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
