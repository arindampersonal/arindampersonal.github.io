import React from 'react';


const corePillarsWithEmojis = [
  {
    emoji: '☁️',
    title: 'Cloud Foundations & Architecture',
    description: 'Resilient Azure Landing Zones, Hub-and-Spoke networks, private endpoints, and automated routing.',
    badge: 'Azure Expert'
  },
  {
    emoji: '🏗️',
    title: 'Infrastructure as Code (IaC)',
    description: 'Reusable Terraform modules with state locking, automated fmt/validate checks, and zero configuration drift.',
    badge: 'HashiCorp Certified'
  },
  {
    emoji: '🚀',
    title: 'Zero-Trust CI/CD Pipelines',
    description: 'Multi-stage delivery in Azure DevOps & GitLab with SonarQube quality gates and secretless Key Vault integration.',
    badge: 'Automated Gates'
  },
  {
    emoji: '🖥️',
    title: 'Enterprise Virtualization (AVD)',
    description: 'Scalable Azure Virtual Desktop environments with sub-second FSLogix profile attach on Azure NetApp Files.',
    badge: '500+ Users Scale'
  },
];

const keyMetrics = [
  { emoji: '⚡', value: '6+ Years', label: 'TCS Production Experience' },
  { emoji: '🛡️', value: '100%', label: 'Declarative IaC Discipline' },
  { emoji: '🔒', value: 'Zero-Trust', label: 'Secretless Key Vault Auth' },
  { emoji: '👥', value: '500+ Users', label: 'AVD Virtualization Scale' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-widest text-azure-700 dark:text-azure-400 font-semibold mb-1">
              <span>👤</span>
              <span>01 // About & Engineering Direction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-[#F4F5F2]">
              Background & Core Pillars
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            TATA CONSULTANCY SERVICES · 2020 — PRESENT
          </span>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">

          {/* Left Column (5 cols): Story & High-Impact Metrics */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#111827] dark:text-white flex items-center space-x-2">
                <span>🎯</span>
                <span>The Engineering Philosophy</span>
              </h3>

              <p className="text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                I believe infrastructure should be <strong>invisible, predictable, and self-healing</strong>. Over 6+ years at Tata Consultancy Services, I have helped enterprise clients replace manual, fragile server configurations with reliable, code-defined cloud platforms.
              </p>

              <p className="text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                When I build systems, every commit passes automated quality gates, every resource is codified in Terraform, and secrets never touch plaintext files.
              </p>

              {/* Verified TCS Tenure Pill */}
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#6B7280] dark:text-[#636F6A]">Current Enterprise:</span>
                <span className="font-medium text-[#111827] dark:text-white">Tata Consultancy Services</span>
              </div>
            </div>

            {/* Visual Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-ink-800 text-center space-y-1 shadow-xs hover:border-azure-300 dark:hover:border-azure-500/30 transition-colors"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm">{metric.emoji}</span>
                    <span className="font-serif text-lg font-bold text-[#111827] dark:text-white">
                      {metric.value}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6B7280] dark:text-[#9BA5A0] font-sans font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (7 cols): What I Deliver (4 Visual Pillars) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] font-semibold mb-2 flex items-center space-x-1.5">
              <span>⚡</span>
              <span>Core Architectural Domains</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillarsWithEmojis.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-xs space-y-3 group hover:border-azure-500/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl p-2 rounded-xl bg-azure-50 dark:bg-azure-500/10 border border-azure-100 dark:border-azure-500/20 inline-block">
                      {pillar.emoji}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAFAF8] dark:bg-ink-850 text-[#6B7280] dark:text-[#9BA5A0] border border-black/[0.06] dark:border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="font-sans font-semibold text-base text-[#111827] dark:text-white group-hover:text-azure-600 dark:group-hover:text-azure-400 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-azure-50/80 to-teal-50/80 dark:from-ink-800 dark:to-ink-850 border border-azure-200/60 dark:border-azure-500/20 flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <div className="text-xs">
                  <span className="font-semibold text-azure-900 dark:text-azure-200">Continuous Learner:</span>
                  <span className="text-[#4B5563] dark:text-[#9BA5A0] ml-1.5">Exploring Applied AI workflows, FastAPI microservices, and modern web architectures.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
