import React, { useState } from 'react';
import { engineeringPhases } from '../../data/engineeringApproach';
import { CheckCircle2 } from 'lucide-react';

const phaseEmojis = ['📐', '🏗️', '🔒', '🚀', '📊'];

export const EngineeringApproach: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = engineeringPhases[activePhaseIndex];

  return (
    <section id="approach" className="py-16 sm:py-20 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-widest text-azure-700 dark:text-azure-400 font-semibold mb-1">
              <span>⚙️</span>
              <span>04 // Methodology & Lifecycle</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-[#F4F5F2]">
              Engineering Approach
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            AUTOMATION · SHIFT-LEFT · RESILIENCE
          </span>
        </div>

        {/* Visual Pipeline Track */}
        <div className="py-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {engineeringPhases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const emoji = phaseEmojis[idx] || '⚡';

              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'border-azure-500 bg-white dark:bg-ink-800 shadow-md ring-2 ring-azure-500/20'
                      : 'border-black/[0.08] dark:border-white/10 bg-white/70 dark:bg-ink-800/60 hover:bg-white dark:hover:bg-ink-800 hover:border-azure-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{emoji}</span>
                    <span className={`font-mono text-[11px] font-bold ${isActive ? 'text-azure-600 dark:text-azure-400' : 'text-[#6B7280] dark:text-[#9BA5A0]'}`}>
                      0{phase.stepNumber}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-xs text-[#111827] dark:text-white line-clamp-1">
                    {phase.name}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Narrative & Standard */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-azure-700 dark:text-azure-400 bg-azure-50 dark:bg-azure-500/10 px-3 py-1 rounded-full border border-azure-200 dark:border-azure-500/20">
                <span>{phaseEmojis[activePhaseIndex]} PHASE {activePhase.stepNumber}</span>
                <span>•</span>
                <span>{activePhase.principle}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] dark:text-white">
                {activePhase.name}
              </h3>

              <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                {activePhase.description}
              </p>

              {/* Enforced Standard Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200">Enforced Standard: </span>
                  <span className="text-[#374151] dark:text-[#D1D5DB]">{activePhase.deliverable}</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Tooling & Progression Link */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-850 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#111827] dark:text-white font-semibold flex items-center space-x-1.5">
                  <span>🛠️</span>
                  <span>Primary Tooling & Stack</span>
                </h4>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {activePhase.tooling.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-ink-800 border border-black/[0.06] dark:border-white/10 text-[#111827] dark:text-white shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs text-[#6B7280] dark:text-[#9BA5A0]">
                <span>Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">Production Standard ✓</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
