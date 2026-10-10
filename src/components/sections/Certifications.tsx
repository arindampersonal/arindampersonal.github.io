import React from 'react';
import { certifications, continuousLearning } from '../../data/certifications';
import { Award, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F8F8F6] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              06 // Professional Qualifications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Certifications & Continuous Study
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            VERIFIED MICROSOFT TRACKS & LABS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
          {/* Left Column: Microsoft Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 pb-2">
              <Award className="w-4 h-4 text-azure-700 dark:text-azure-400" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] dark:text-white font-semibold">
                Microsoft Azure Certifications
              </h3>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_1px_4px_rgba(0,0,0,0.03)] space-y-2 group hover:border-azure-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-azure-50 text-azure-700 border border-azure-200 dark:bg-azure-500/10 dark:text-azure-400 dark:border-azure-500/20 font-medium">
                          {cert.badgeLabel}
                        </span>
                        <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400">
                          {cert.status}
                        </span>
                      </div>
                      <h4 className="font-sans font-semibold text-sm text-[#111827] dark:text-white pt-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-[#6B7280] dark:text-[#9BA5A0]">
                        Issuer: {cert.issuer}
                      </p>
                    </div>

                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-black/[0.08] dark:border-white/10 text-[#4B5563] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors"
                        aria-label={`Verify ${cert.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Continuous Learning & Emerging Technologies */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 pb-2">
              <BookOpen className="w-4 h-4 text-sage-700 dark:text-sage-400" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] dark:text-white font-semibold">
                Continuous Learning & Applied AI Labs
              </h3>
            </div>

            <div className="space-y-3.5">
              {continuousLearning.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_1px_4px_rgba(0,0,0,0.03)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20 font-medium inline-flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.status}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#6B7280] dark:text-[#636F6A]">
                      RESEARCH TRACK
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#111827] dark:text-white">
                      {item.domain}
                    </h4>
                    <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] mt-1 leading-relaxed">
                      {item.note}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F5F5F3] dark:bg-white/5 border border-black/[0.06] dark:border-white/10 text-[#374151] dark:text-[#D1D5DB]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
