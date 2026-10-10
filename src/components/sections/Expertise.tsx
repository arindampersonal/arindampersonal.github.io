import React, { useState } from 'react';
import { skills } from '../../data/skills';


const domainMetadata: Record<string, { emoji: string; themeColor: string; roleLabel: string }> = {
  'cloud-infrastructure': {
    emoji: '☁️',
    themeColor: 'text-azure-600 dark:text-azure-400 bg-azure-50 dark:bg-azure-500/10 border-azure-200 dark:border-azure-500/20',
    roleLabel: 'Azure Backbone'
  },
  'iac-automation': {
    emoji: '🏗️',
    themeColor: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
    roleLabel: 'Terraform & Bicep'
  },
  'cicd-devops': {
    emoji: '🚀',
    themeColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
    roleLabel: 'Zero-Trust CI/CD'
  },
  'virtualization-vdi': {
    emoji: '🖥️',
    themeColor: 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
    roleLabel: 'AVD & FSLogix'
  },
  'ai-emerging': {
    emoji: '🧠',
    themeColor: 'text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20',
    roleLabel: 'Applied AI & Labs'
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
    <section id="expertise" className="py-16 sm:py-20 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-widest text-azure-700 dark:text-azure-400 font-semibold mb-1">
              <span>⚡</span>
              <span>02 // Core Competencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-[#F4F5F2]">
              Technical Skills & Tooling
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            {prodCount} PRODUCTION VERIFIED · {labCount} RESEARCH
          </span>
        </div>

        {/* Filter Controls */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'all'
                  ? 'bg-azure-600 text-white font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.08] dark:border-white/10 hover:border-azure-400'
              }`}
            >
              <span>🌟</span>
              <span>All Skills</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedFilter === 'all' ? 'bg-white/20' : 'bg-neutral-100 dark:bg-ink-900 text-[#6B7280]'}`}>
                {totalCount}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter('production')}
              className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all inline-flex items-center space-x-1.5 ${
                selectedFilter === 'production'
                  ? 'bg-azure-600 text-white font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.08] dark:border-white/10 hover:border-azure-400'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Production Verified</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedFilter === 'production' ? 'bg-white/20' : 'bg-neutral-100 dark:bg-ink-900 text-[#6B7280]'}`}>
                {prodCount}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter('applied')}
              className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'applied'
                  ? 'bg-azure-600 text-white font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.08] dark:border-white/10 hover:border-azure-400'
              }`}
            >
              <span>🚀</span>
              <span>Applied Projects</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedFilter === 'applied' ? 'bg-white/20' : 'bg-neutral-100 dark:bg-ink-900 text-[#6B7280]'}`}>
                {appliedCount}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter('exploratory')}
              className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all inline-flex items-center space-x-1.5 ${
                selectedFilter === 'exploratory'
                  ? 'bg-azure-600 text-white font-medium shadow-sm'
                  : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.08] dark:border-white/10 hover:border-azure-400'
              }`}
            >
              <span>🧪</span>
              <span>Innovation Lab</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedFilter === 'exploratory' ? 'bg-white/20' : 'bg-neutral-100 dark:bg-ink-900 text-[#6B7280]'}`}>
                {labCount}
              </span>
            </button>
          </div>
        </div>

        {/* Grid of Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {skills.map((category) => {
            const meta = domainMetadata[category.id] || {
              emoji: '⚡',
              themeColor: 'text-azure-600 bg-azure-50 border-azure-200',
              roleLabel: 'Engineering Domain'
            };

            const filteredSkills = category.skills.filter((skill) => {
              if (selectedFilter === 'all') return true;
              return skill.level === selectedFilter;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="p-6 rounded-3xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-card flex flex-col justify-between hover:border-azure-400/50 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Card Header with Thematic Emoji & Operational Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl p-2 rounded-2xl bg-neutral-100 dark:bg-ink-850 inline-block">
                      {meta.emoji}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-ink-850 text-[#6B7280] dark:text-[#9BA5A0] uppercase tracking-wider font-semibold">
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
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                            skill.highlight
                              ? 'border border-azure-200 bg-azure-50 text-azure-900 font-semibold dark:border-azure-500/30 dark:bg-azure-500/10 dark:text-azure-300'
                              : isLab
                              ? 'border border-amber-200 bg-amber-50/70 text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-300'
                              : 'border border-black/[0.05] bg-neutral-50 text-[#374151] dark:border-white/5 dark:bg-white/5 dark:text-[#A1A1AA]'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {isLab && (
                            <span className="ml-1 text-[10px] opacity-80 font-bold">[lab]</span>
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
