import React from "react";

export const ImpactStatement: React.FC = () => {
  const pillars = [
    "PROCESSOS",
    "PESSOAS",
    "CRM",
    "FOLLOW-UP",
    "OPERAÇÃO"
  ];

  return (
    <section className="bg-[#123D35] text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1D5146]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Core statement */}
        <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F6F5F0] tracking-tight leading-[1.25] max-w-4xl mx-auto text-balance">
          O problema nem sempre é{" "}
          <span className="text-[#B5A276] font-semibold italic">vender</span>.
          <br className="hidden sm:inline" />{" "}
          É organizar tudo o que acontece depois.
        </p>

        {/* Minimalist divider */}
        <div className="w-16 h-px bg-[#B5A276]/50 mx-auto my-10 sm:my-12" />

        {/* Clean editorial labels with subtle typographic separator */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-3 sm:gap-x-6 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#F6F5F0]/70 uppercase">
          {pillars.map((pillar, idx) => (
            <React.Fragment key={pillar}>
              <span className="hover:text-white transition-colors">{pillar}</span>
              {idx < pillars.length - 1 && (
                <span className="text-[#B5A276] opacity-60" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
