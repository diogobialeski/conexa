import React from "react";
import { ArrowRight, ArrowDown, CheckCircle2, XCircle } from "lucide-react";

export const TransformationSection: React.FC = () => {
  const beforePoints = [
    { title: "Processos soltos", desc: "Cada colaborador atua por intuição sem roteiro padronizado" },
    { title: "Informações dispersas", desc: "Contatos perdidos em conversas privadas e blocos de notas" },
    { title: "Rotinas manuais", desc: "Tempo gasto com tarefas operacionais repetitivas e desnecessárias" },
    { title: "Dependência de pessoas", desc: "Operação estagna ou perde qualidade se o gestor se ausenta" },
  ];

  const afterPoints = [
    { title: "Processos organizados", desc: "Etapas lineares, critérios de passagem e funções bem delimitadas" },
    { title: "CRM centralizado", desc: "Visibilidade total do funil comercial e histórico de cada oportunidade" },
    { title: "Automação onde faz sentido", desc: "Lembretes pontuais, triagens ágeis e menos atrito diário" },
    { title: "Rotinas claras", desc: "Equipe segura, autônoma e com foco no atendimento e fechamento" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#123D35] text-white relative overflow-hidden">
      {/* Subtle radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1D5146]/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#B5A276] uppercase mb-4">
            A Transformação
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F6F5F0] tracking-tight leading-[1.15]">
            Menos improviso.
            <br />
            Mais estrutura.
          </h2>
        </div>

        {/* Side-by-Side Operational Evolution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ANTES Block */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#10211E]/90 border border-white/10 backdrop-blur-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-heading text-xl font-bold tracking-wider text-rose-300 uppercase">
                Antes da Conexa
              </span>
              <span className="text-xs font-mono text-rose-300/80 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900/60">
                Improviso & Sobrecarga
              </span>
            </div>

            <div className="space-y-4">
              {beforePoints.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#F6F5F0]/70 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Transition Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-[#B5A276] py-2">
            <div className="hidden lg:flex flex-col items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase">Evolução</span>
              <div className="w-12 h-12 rounded-full bg-[#10211E] border border-[#B5A276] flex items-center justify-center shadow-md">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#10211E] border border-[#B5A276] flex items-center justify-center">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* DEPOIS Block */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#1D5146]/70 border-2 border-[#B5A276]/50 shadow-xl backdrop-blur-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B5A276]/30">
              <span className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                Depois da Conexa
              </span>
              <span className="text-xs font-mono text-[#B5A276] bg-[#123D35] px-2 py-0.5 rounded border border-[#B5A276]/30">
                Estrutura & Clareza
              </span>
            </div>

            <div className="space-y-4">
              {afterPoints.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A276] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#F6F5F0]/85 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethical commitment notice as requested */}
        <div className="mt-12 p-4 rounded-lg bg-[#10211E]/60 border border-white/10 text-xs text-[#F6F5F0]/65 text-center max-w-3xl mx-auto">
          Nota de integridade: A comparação reflete a organização dos processos operacionais e a
          rotina de trabalho. Não fazemos promessas mágicas de faturamento: o crescimento sustentável
          decorre da execução consistente da sua equipe.
        </div>
      </div>
    </section>
  );
};
