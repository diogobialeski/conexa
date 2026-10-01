import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, Layers, Users, Zap, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "../data/conexaData";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"organizada" | "gargalos">("organizada");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F6F5F0]">
      {/* Subtle architectural background grid / hairline */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-6 sm:grid-cols-12 border-x border-[#123D35]/10">
          <div className="col-span-1 border-r border-[#123D35]/5 h-full" />
          <div className="col-span-1 border-r border-[#123D35]/5 h-full hidden sm:block" />
          <div className="col-span-1 border-r border-[#123D35]/5 h-full hidden md:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-[#123D35] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#B5A276]" />
              <span>Gestão Estratégica</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#10211E] tracking-tight leading-[1.12] mb-6 text-balance">
              Sua empresa vende.{" "}
              <br className="hidden sm:inline" />
              Mas sua operação está{" "}
              <span className="relative inline-block text-[#123D35]">
                preparada para crescer?
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#B5A276] opacity-80"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 7 C 25 1, 75 11, 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg sm:text-xl text-[#68716E] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10">
              A Conexa organiza processos, estrutura sua operação comercial e implementa tecnologia
              para sua empresa funcionar melhor.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#123D35] text-white text-base font-semibold hover:bg-[#1D5146] active:scale-[0.99] transition-all shadow-md group"
              >
                <span>Quero estruturar minha operação</span>
                <ArrowUpRight className="w-4 h-4 text-[#B5A276] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#problema"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-transparent border border-[#123D35]/25 text-[#123D35] text-base font-semibold hover:bg-[#123D35]/5 active:scale-[0.99] transition-all"
              >
                <span>Conhecer a Conexa ↓</span>
              </a>
            </div>

            {/* Key credibility markers */}
            <div className="mt-10 pt-6 border-t border-[#123D35]/10 grid grid-cols-3 gap-6 text-left w-full max-w-lg">
              <div>
                <span className="block font-heading text-xs font-bold text-[#10211E] uppercase tracking-wider">
                  Diagnóstico Real
                </span>
                <span className="text-xs text-[#68716E]">Entramos na operação</span>
              </div>
              <div>
                <span className="block font-heading text-xs font-bold text-[#10211E] uppercase tracking-wider">
                  Estruturação
                </span>
                <span className="text-xs text-[#68716E]">CRM, fluxos & rotinas</span>
              </div>
              <div>
                <span className="block font-heading text-xs font-bold text-[#10211E] uppercase tracking-wider">
                  Treinamento
                </span>
                <span className="text-xs text-[#68716E]">Capacitação presencial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Conceptual Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#123D35]/10 via-[#B5A276]/10 to-transparent rounded-2xl filter blur-xl opacity-60 -z-10" />

            {/* Floating pill badge 1: Top Left */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-lg shadow-sm border border-[#123D35]/10 text-xs font-medium text-[#10211E] animate-bounce-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>CRM organizado</span>
            </div>

            {/* Floating pill badge 2: Bottom Right */}
            <div className="absolute -bottom-4 -right-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#123D35] text-white rounded-lg shadow-md border border-[#B5A276]/30 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A276]" />
              <span>Processos claros & rotinas</span>
            </div>

            {/* Main Conceptual Mockup Frame */}
            <div className="bg-white rounded-xl shadow-xl border border-[#123D35]/15 overflow-hidden transition-all duration-300">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#10211E] text-white flex items-center justify-between border-b border-[#123D35]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-300 tracking-wide">
                    PAINEL OPERACIONAL CONEXA
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#B5A276] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5A276] animate-pulse" />
                  <span>Fluxo Ativo</span>
                </div>
              </div>

              {/* Internal Content */}
              <div className="p-5 sm:p-6 bg-[#FAFAF8] space-y-5">
                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 bg-white rounded-lg border border-[#123D35]/10 shadow-2xs">
                    <div className="flex items-center justify-between text-xs text-[#68716E] mb-1">
                      <span className="font-medium">Oportunidades</span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        +18,4%
                      </span>
                    </div>
                    <div className="font-heading text-2xl font-bold text-[#10211E] tabular-nums">
                      128
                    </div>
                    <span className="text-[10px] text-[#68716E] block mt-0.5">
                      em acompanhamento estruturado
                    </span>
                  </div>

                  <div className="p-3.5 bg-white rounded-lg border border-[#123D35]/10 shadow-2xs">
                    <div className="flex items-center justify-between text-xs text-[#68716E] mb-1">
                      <span className="font-medium">Em Negociação</span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        +9,2%
                      </span>
                    </div>
                    <div className="font-heading text-2xl font-bold text-[#10211E] tabular-nums">
                      42
                    </div>
                    <span className="text-[10px] text-[#68716E] block mt-0.5">
                      com follow-up ativo e pontual
                    </span>
                  </div>
                </div>

                {/* Four Transformation Pillars Checklist */}
                <div className="p-4 bg-white rounded-lg border border-[#123D35]/10 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#68716E] mb-3">
                    Arquitetura da Operação
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10211E]">
                      <CheckCircle2 className="w-4 h-4 text-[#123D35]" />
                      <span>CRM ✓</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10211E]">
                      <CheckCircle2 className="w-4 h-4 text-[#123D35]" />
                      <span>PROCESSOS ✓</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10211E]">
                      <CheckCircle2 className="w-4 h-4 text-[#123D35]" />
                      <span>AUTOMAÇÃO ✓</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10211E]">
                      <CheckCircle2 className="w-4 h-4 text-[#123D35]" />
                      <span>IA APLICADA ✓</span>
                    </div>
                  </div>
                </div>

                {/* Pipeline Flow Visualization */}
                <div className="p-4 bg-white rounded-lg border border-[#123D35]/10 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#10211E]">Status dos Processos</span>
                    <span className="text-[11px] text-[#68716E]">Rotina Padronizada</span>
                  </div>

                  {/* Flow Stages */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded bg-[#F6F5F0] border-l-2 border-[#123D35]">
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#123D35]" />
                        <span className="font-medium text-[#10211E]">1. Entrada e Triagem de Lead</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-medium">Imediato</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded bg-[#F6F5F0] border-l-2 border-[#123D35]">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#123D35]" />
                        <span className="font-medium text-[#10211E]">2. Follow-up Automatizado</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-medium">Em dia</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded bg-[#F6F5F0] border-l-2 border-[#123D35]">
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#123D35]" />
                        <span className="font-medium text-[#10211E]">3. Proposta & Fechamento</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-medium">Registrado</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#68716E] pt-1 border-t border-neutral-100 italic">
                    * Interface ilustrativa representando a governança operacional integrada da metodologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
