import React, { useState } from 'react';
import { engineeringPhases } from '../../data/engineeringApproach';
import { Terminal, ShieldAlert, Cpu, GitMerge, Activity, ArrowRight, CheckCircle2, GitBranch } from 'lucide-react';

const phaseIcons = [Terminal, ShieldAlert, Cpu, GitMerge, Activity];

export const EngineeringApproach: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = engineeringPhases[activePhaseIndex];

  return (
    <section id="approach" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F8F8F6] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              04 // Methodology & Lifecycle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Engineering Approach
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            AUTOMATION · SHIFT-LEFT · RESILIENCE
          </span>
        </div>

        {/* Visual Pipeline Track */}
        <div className="py-8">
          <div className="relative">
            {/* Horizontal Track Line behind buttons (desktop only) */}
            <div className="hidden sm:block absolute top-1/2 left-6 right-6 h-0.5 bg-black/[0.08] dark:border-white/10 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
              {engineeringPhases.map((phase, idx) => {
                const Icon = phaseIcons[idx] || Terminal;
                const isActive = activePhaseIndex === idx;

                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'border-black/[0.25] dark:border-white/30 bg-white dark:bg-ink-800 shadow-md ring-2 ring-black/[0.06] dark:ring-white/10'
                        : 'border-black/[0.07] dark:border-white/10 bg-white/80 dark:bg-ink-800/60 hover:bg-white dark:hover:bg-ink-800 hover:border-black/[0.18]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-azure-700 dark:text-azure-400' : 'text-sage-800 dark:text-sage-400'}`}>
                        {phase.stepNumber}
                      </span>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-azure-600 dark:text-azure-400' : 'text-[#9CA3AF] dark:text-[#6B7280]'}`} />
                    </div>
                    <h4 className="font-sans font-semibold text-xs text-[#111827] dark:text-white line-clamp-1">
                      {phase.name}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-7 sm:p-10 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Narrative & Standard */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-azure-700 dark:text-azure-400 bg-azure-50 dark:bg-azure-500/10 px-3 py-1 rounded-md border border-azure-200 dark:border-azure-500/20">
                <span>PHASE {activePhase.stepNumber}</span>
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
              <div className="p-4 rounded-xl bg-sage-50/70 dark:bg-sage-950/20 border border-sage-200/80 dark:border-sage-800/40 flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="font-bold text-sage-900 dark:text-sage-200">Enforced Production Standard: </span>
                  <span className="text-[#374151] dark:text-[#D1D5DB]">{activePhase.deliverable}</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Tooling & Progression Link */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-850 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#111827] dark:text-white font-semibold">
                  Standard Tooling & Engine
                </h4>
                <GitBranch className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {activePhase.tooling.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-ink-800 border border-black/[0.08] dark:border-white/10 text-[#18181B] dark:text-white shadow-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2">
                <span className="font-mono text-[11px] text-[#6B7280] dark:text-[#636F6A]">
                  Pipeline Continuity Flow:
                </span>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#374151] dark:text-[#D1D5DB]">
                  <span>Step {activePhase.stepNumber} of 05</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                  <span className="text-sage-800 dark:text-sage-300 font-medium">
                    {activePhaseIndex < 4 ? engineeringPhases[activePhaseIndex + 1].name : 'Continuous Operational Loop'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
