import React from "react";
import { ArrowUpRight, Lock, FileSearch, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "../data/conexaData";

export const CasesSection: React.FC = () => {
  const caseStructure = [
    { title: "SEGMENTO", desc: "Tipo de negócio, volume de atendimentos e perfil da equipe." },
    { title: "DESAFIO", desc: "Gargalos reais identificados no diagnóstico inicial de campo." },
    { title: "SOLUÇÃO", desc: "Desenho customizado de processos, fluxos de qualificação e CRM." },
    { title: "IMPLEMENTAÇÃO", desc: "Configuração das automações e treinamento presencial da equipe." },
    { title: "RESULTADO", desc: "Métricas operacionais reais de fluidez, organização e tempo de resposta." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F5F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-[#123D35] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A276]" />
            <span>Casos de Estudo & Evidências</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10211E] tracking-tight leading-[1.18] mb-4">
            Estrutura metodológica para mensuração de casos.
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed">
            Priorizamos a transparência e a ética: não inventamos depoimentos nem números fictícios.
            Cada projeto é documentado com rigor metodológico.
          </p>
        </div>

        {/* Framework Architecture Box */}
        <div className="bg-white rounded-2xl border border-[#123D35]/15 p-7 sm:p-10 shadow-xs mb-10 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#123D35]/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#B5A276] uppercase tracking-widest">
                Matriz de Documentação Conexa
              </span>
              <h3 className="font-heading text-xl font-bold text-[#10211E] mt-1">
                Como avaliamos e registramos cada transformação
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F6F5F0] border border-[#123D35]/10 text-xs font-medium text-[#123D35]">
              <ShieldCheck className="w-4 h-4 text-[#B5A276]" />
              <span>Padrão de Auditoria Interna</span>
            </div>
          </div>

          {/* 5 Structural Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {caseStructure.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-[#F6F5F0] border border-[#123D35]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#B5A276] block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#10211E] tracking-wider uppercase mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#68716E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cases in preparation notice */}
          <div className="mt-8 p-6 rounded-xl bg-[#123D35]/5 border border-[#123D35]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#123D35] text-[#B5A276] flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#10211E] uppercase">
                  Casos de estudo em consolidação (Acordos de Sigilo / NDA)
                </h4>
                <p className="text-xs text-[#68716E] mt-0.5 max-w-2xl">
                  Respeitamos a confidencialidade das estratégias de cada cliente. Relatórios
                  completos com dados anonimizados e autorizados estão em fase de homologação e serão
                  disponibilizados em breve.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#123D35] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D5146] transition-all shrink-0"
            >
              <span>Seja o próximo case de sucesso</span>
              <ArrowUpRight className="w-4 h-4 text-[#B5A276]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
