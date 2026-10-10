import React, { useState } from 'react';
import { skills } from '../../data/skills';
import { Cloud, Terminal, GitMerge, Monitor, Sparkles } from 'lucide-react';

const domainMetadata: Record<string, { icon: React.ElementType; themeColor: string; roleLabel: string }> = {
  'cloud-infrastructure': {
    icon: Cloud,
    themeColor: 'text-azure-600 dark:text-azure-400 bg-azure-50 dark:bg-azure-500/10 border-azure-200 dark:border-azure-500/20',
    roleLabel: 'Azure Enterprise Backbone'
  },
  'iac-automation': {
    icon: Terminal,
    themeColor: 'text-sage-800 dark:text-sage-300 bg-sage-50 dark:bg-sage-500/10 border-sage-200 dark:border-sage-500/20',
    roleLabel: 'Declarative State & Scripts'
  },
  'cicd-devops': {
    icon: GitMerge,
    themeColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
    roleLabel: 'Zero-Trust Delivery Gates'
  },
  'virtualization-vdi': {
    icon: Monitor,
    themeColor: 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
    roleLabel: 'AVD & FSLogix Profiles'
  },
  'ai-emerging': {
    icon: Sparkles,
    themeColor: 'text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20',
    roleLabel: 'Applied AI & RAG Research'
  }
};

export const Expertise: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'production' | 'applied' | 'exploratory'>('all');

  const allSkillsList = skills.flatMap(c => c.skills);
  const totalCount = allSkillsList.length;
  const prodCount = allSkillsList.filter(s => s.level === 'production').length;
  const appliedCount = allSkillsList.filter(s => s.level === 'applied').length;
  const labCount = allSkillsList.filter(s => s.level === 'exploratory').length;

  return (
    <section id="expertise" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F8F8F6] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              02 // Technical Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Expertise & Domains
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            HONEST TIERING · {prodCount} PRODUCTION / {labCount} RESEARCH
          </span>
        </div>

        {/* Filter Controls & Tiering Legend */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'all'
                  ? 'bg-[#18181B] text-white dark:bg-white dark:text-ink-950 font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.06] dark:border-white/10 hover:border-black/[0.15]'
              }`}
            >
              <span>All Domains</span>
              <span className="text-[10px] opacity-75">({totalCount})</span>
            </button>

            <button
              onClick={() => setSelectedFilter('production')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all inline-flex items-center space-x-1.5 ${
                selectedFilter === 'production'
                  ? 'bg-[#18181B] text-white dark:bg-white dark:text-ink-950 font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.06] dark:border-white/10 hover:border-black/[0.15]'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Production Verified</span>
              <span className="text-[10px] opacity-75">({prodCount})</span>
            </button>

            <button
              onClick={() => setSelectedFilter('applied')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'applied'
                  ? 'bg-[#18181B] text-white dark:bg-white dark:text-ink-950 font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.06] dark:border-white/10 hover:border-black/[0.15]'
              }`}
            >
              <span>Applied & Projects</span>
              <span className="text-[10px] opacity-75">({appliedCount})</span>
            </button>

            <button
              onClick={() => setSelectedFilter('exploratory')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all inline-flex items-center space-x-1.5 ${
                selectedFilter === 'exploratory'
                  ? 'bg-[#18181B] text-white dark:bg-white dark:text-ink-950 font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.06] dark:border-white/10 hover:border-black/[0.15]'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              <span>Active Exploration [Lab]</span>
              <span className="text-[10px] opacity-75">({labCount})</span>
            </button>
          </div>

          {/* Quick Legend Indicator */}
          <div className="text-[11px] font-mono text-[#6B7280] dark:text-[#636F6A] flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Enterprise Prod</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              <span>Research Lab</span>
            </span>
          </div>
        </div>

        {/* Grid of Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {skills.map((category) => {
            const meta = domainMetadata[category.id] || {
              icon: Cloud,
              themeColor: 'text-sage-800 bg-sage-50 border-sage-200',
              roleLabel: 'Engineering Domain'
            };
            const Icon = meta.icon;

            const filteredSkills = category.skills.filter((skill) => {
              if (selectedFilter === 'all') return true;
              return skill.level === selectedFilter;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_1px_4px_rgba(0,0,0,0.03)] dark:shadow-card flex flex-col justify-between hover:border-black/[0.18] dark:hover:border-white/20 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Card Header with Thematic Icon & Operational Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${meta.themeColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#6B7280] dark:text-[#636F6A] uppercase tracking-wider">
                      {meta.roleLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-base text-[#111827] dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {filteredSkills.map((skill) => {
                      const isLab = skill.level === 'exploratory';
                      return (
                        <span
                          key={skill.name}
                          className={`px-2.5 py-1 rounded text-xs font-mono border transition-colors ${
                            skill.highlight
                              ? 'border-sage-300 bg-sage-100/75 text-sage-900 font-medium dark:border-sage-400/40 dark:bg-sage-400/10 dark:text-sage-300'
                              : isLab
                              ? 'border-amber-200 bg-amber-50/70 text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-300'
                              : 'border-black/[0.06] bg-[#F5F5F3] text-[#27272A] dark:border-white/10 dark:bg-white/5 dark:text-[#9BA5A0]'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {isLab && (
                            <span className="ml-1 text-[10px] opacity-75 font-bold">[lab]</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
