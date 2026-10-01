import React from "react";
import { GitCommit, Layers, Database, Cpu, Users, Briefcase } from "lucide-react";

export const ConexaPresentation: React.FC = () => {
  const nodes = [
    {
      id: "processos",
      label: "PROCESSOS",
      detail: "Mapeamento, rotinas e padrões claros",
      icon: Layers,
    },
    {
      id: "crm",
      label: "CRM",
      detail: "Pipeline visual e gestão de oportunidades",
      icon: Database,
    },
    {
      id: "ia",
      label: "IA",
      detail: "Produtividade aplicada e automações",
      icon: Cpu,
    },
    {
      id: "equipe",
      label: "EQUIPE",
      detail: "Treinamento presencial e engajamento",
      icon: Users,
    },
    {
      id: "operacao",
      label: "OPERAÇÃO",
      detail: "Estrutura pronta para sustentar crescimento",
      icon: Briefcase,
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#123D35] text-white relative overflow-hidden">
      {/* Subtle background architectural lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-8 border-x border-white">
          <div className="col-span-1 border-r border-white h-full" />
          <div className="col-span-1 border-r border-white h-full" />
          <div className="col-span-1 border-r border-white h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#B5A276] uppercase mb-3">
            O Posicionamento
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F6F5F0] tracking-tight leading-[1.15] mb-4">
            É aqui que a Conexa entra.
          </h2>

          <p className="font-heading text-xl sm:text-2xl font-bold text-[#B5A276] mb-6">
            Não entregamos apenas um diagnóstico.
            <br />
            Entramos na operação.
          </p>

          <p className="text-base sm:text-lg text-[#F6F5F0]/80 leading-relaxed font-normal">
            A Conexa entende como o negócio funciona hoje, identifica gargalos e ajuda a construir
            uma estrutura mais organizada para processos, equipe e tecnologia trabalharem juntos.
          </p>
        </div>

        {/* Visual Architecture Diagram: CONEXA central connecting hub */}
        <div className="bg-[#10211E]/80 border border-[#B5A276]/30 rounded-2xl p-6 sm:p-10 md:p-12 relative backdrop-blur-xs">
          {/* Subtle node connect grid */}
          <div className="flex flex-col items-center">
            {/* Center Core Brand Hub: Logo oficial grande centralizada e bem estruturada */}
            <div className="relative mb-12 sm:mb-16 flex items-center justify-center">
              <img
                src="https://i.ibb.co/1tkccxHr/IMG-6950.png"
                alt="CONEXA Gestão Estratégica"
                className="h-44 sm:h-60 w-auto max-w-[92%] object-contain rounded-2xl drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Decorative connector point below */}
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#B5A276] to-transparent mx-auto mt-2 absolute -bottom-10" />
            </div>

            {/* Connecting Hub Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
              {nodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <div
                    key={node.id}
                    className="p-5 rounded-xl bg-[#123D35]/90 border border-[#B5A276]/25 hover:border-[#B5A276]/80 hover:bg-[#1D5146] transition-all group flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[#10211E] flex items-center justify-center border border-[#B5A276]/30 group-hover:border-[#B5A276] transition-colors">
                          <IconComponent className="w-4 h-4 text-[#B5A276]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#B5A276]/80">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-heading text-sm font-bold tracking-wider text-white uppercase mb-1.5">
                        {node.label}
                      </h3>

                      <p className="text-xs text-[#F6F5F0]/70 leading-relaxed">
                        {node.detail}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#B5A276]">
                      <GitCommit className="w-3 h-3" />
                      <span>Conectado à operação</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom summary note */}
            <div className="mt-10 pt-6 border-t border-white/10 text-center max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm text-[#F6F5F0]/70">
                A tecnologia não é o objetivo final — ela é o meio estruturado para dar previsibilidade,
                escala e autonomia ao time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
