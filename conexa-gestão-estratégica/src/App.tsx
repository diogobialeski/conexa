/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ImpactStatement } from "./components/ImpactStatement";
import { ProblemSection } from "./components/ProblemSection";
import { ConexaPresentation } from "./components/ConexaPresentation";
import { MethodSection } from "./components/MethodSection";
import { DeliverablesSection } from "./components/DeliverablesSection";
import { StrategySection } from "./components/StrategySection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { DifferentialSection } from "./components/DifferentialSection";
import { InCompanySection } from "./components/InCompanySection";
import { TransformationSection } from "./components/TransformationSection";
import { CasesSection } from "./components/CasesSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#10211E] selection:bg-[#123D35] selection:text-[#F6F5F0] flex flex-col font-sans">
      {/* 01: Top Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Hero Section */}
        <HeroSection />

        {/* 03: Frase de Impacto */}
        <ImpactStatement />

        {/* 04: O Problema (O Ponto de Partida + Diagnóstico Interativo) */}
        <ProblemSection />

        {/* 05: Apresentação da Conexa */}
        <ConexaPresentation />

        {/* 06: Método Conexa (Do Diagnóstico à Implementação) */}
        <MethodSection />

        {/* 07: O Que a Conexa Entrega */}
        <DeliverablesSection />

        {/* 08: Estratégia Antes da Ferramenta */}
        <StrategySection />

        {/* 09: Para Quem (A Metodologia se Adapta ao Seu Negócio) */}
        <TargetAudienceSection />

        {/* 10: Diferencial da Conexa (Comparativo Operacional) */}
        <DifferentialSection />

        {/* 11: Implementação Presencial (Atuação In-Company) */}
        <InCompanySection />

        {/* 12: Transformação (Menos Improviso, Mais Estrutura) */}
        <TransformationSection />

        {/* 13: Cases (Estrutura Preparada & Rigor Ético) */}
        <CasesSection />

        {/* 14: CTA Final (Sua Operação Pode Funcionar Melhor) */}
        <FinalCtaSection />
      </main>

      {/* 15: Footer */}
      <Footer />

      {/* Mobile Floating Sticky WhatsApp CTA Bar */}
      <MobileBottomBar />
    </div>
  );
}

