import React from 'react';
import { profile } from '../../data/profile';
import { Terminal, GitBranch, Layers, Activity, User, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  GitBranch,
  Layers,
  Activity,
  User,
  ShieldCheck,
};

const productionMetrics = [
  { value: '6+ Yrs', label: 'Enterprise Experience' },
  { value: '100%', label: 'Declarative IaC Practice' },
  { value: 'Zero-Trust', label: 'Secretless Pipelines' },
  { value: 'Enterprise', label: 'AVD & NetApp Scale' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              01 // Background & Direction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Engineering Journey
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            TATA CONSULTANCY SERVICES · 2018 — PRESENT
          </span>
        </div>

        {/* Narrative & Monogram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
          {/* Left Column (4 cols): Architectural Monogram or Photo Slot */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] space-y-6">
              {profile.photoConfig.showPhoto && profile.photoConfig.url ? (
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={profile.photoConfig.url}
                    alt={profile.photoConfig.altText}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* Bespoke Architectural Monogram Card */
                <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#F4F4F2] via-[#EAEBE7] to-[#DFE2DC] dark:from-ink-850 dark:via-ink-800 dark:to-ink-750 flex flex-col items-center justify-center p-6 border border-black/[0.06] dark:border-white/[0.06] shadow-sm">
                  {/* Subtle technical crosshairs */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-sage-700/60 dark:text-sage-400/50">
                    + 22.5726° N
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-sage-700/60 dark:text-sage-400/50">
                    88.3639° E +
                  </div>

                  <span className="font-serif text-5xl sm:text-6xl text-[#18181B] dark:text-white font-medium tracking-tighter select-none">
                    AD
                  </span>
                  <span className="font-mono text-[11px] text-sage-800 dark:text-sage-300 tracking-wider uppercase mt-3 font-semibold">
                    Arindam Dutta
                  </span>
                  <span className="font-mono text-[10px] text-[#6B7280] dark:text-[#9BA5A0] mt-0.5">
                    Cloud & DevOps Architecture
                  </span>
                </div>
              )}

              {/* Verified Identity Spec Sheet */}
              <div className="space-y-2.5 pt-2 text-xs font-mono border-t border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-[#6B7280] dark:text-[#636F6A]">Position:</span>
                  <span className="text-[#111827] dark:text-white font-medium text-right">Senior Azure DevOps</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-[#6B7280] dark:text-[#636F6A]">Enterprise:</span>
                  <span className="text-[#111827] dark:text-white font-medium text-right">{profile.currentEmployer}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-[#6B7280] dark:text-[#636F6A]">Tenure:</span>
                  <span className="text-emerald-800 dark:text-emerald-400 font-medium">~6+ Years Active</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B7280] dark:text-[#636F6A]">Focus:</span>
                  <span className="text-sage-800 dark:text-sage-300 font-medium text-right">Azure / IaC / Pipelines</span>
                </div>
              </div>
            </div>

            {/* Production Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {productionMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-ink-800 text-center space-y-0.5 shadow-sm"
                >
                  <div className="font-serif text-lg sm:text-xl font-medium text-[#111827] dark:text-white">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#6B7280] dark:text-[#636F6A] uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (8 cols): Narrative Journey & Engineering Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
              <p className="font-normal">
                {profile.bio.introduction}
              </p>
              {profile.bio.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Architectural Pillars */}
            <div className="pt-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] font-semibold mb-4">
                Core Architectural Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.bio.corePillars.map((pillar) => {
                  const Icon = iconMap[pillar.icon] || Terminal;
                  return (
                    <div
                      key={pillar.title}
                      className="p-5 rounded-xl border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-ink-800 shadow-[0_1px_3px_rgba(0,0,0,0.03)] space-y-2 group hover:border-black/[0.18] dark:hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="p-2 rounded-lg bg-sage-50 dark:bg-white/5 border border-sage-200/80 dark:border-white/10 text-sage-800 dark:text-sage-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-sans font-semibold text-sm text-[#111827] dark:text-white">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed pt-1">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
