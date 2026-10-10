import React from 'react';
import { certifications, continuousLearning } from '../../data/certifications';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8] dark:bg-ink-850/40 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-widest text-azure-700 dark:text-azure-400 font-semibold mb-1">
              <span>📜</span>
              <span>06 // Professional Credentials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-[#F4F5F2]">
              Certifications & Research
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            VERIFIED EXPERTISE & CONTINUOUS STUDY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left Column: Microsoft Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 pb-1">
              <span className="text-xl">🏆</span>
              <h3 className="font-sans font-semibold text-sm text-[#111827] dark:text-white uppercase tracking-wider">
                Microsoft Certified Credentials
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-xs hover:border-azure-400/50 hover:shadow-sm transition-all flex items-start justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-azure-50 text-azure-800 border border-azure-200 dark:bg-azure-500/10 dark:text-azure-300 dark:border-azure-500/20 font-semibold">
                        {cert.badgeLabel}
                      </span>
                      <span className="inline-flex items-center space-x-1 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>{cert.status}</span>
                      </span>
                    </div>

                    <h4 className="font-sans font-semibold text-sm sm:text-base text-[#111827] dark:text-white pt-0.5">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-[#6B7280] dark:text-[#9BA5A0] font-mono">
                      Issuer: {cert.issuer}
                    </p>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-black/[0.08] dark:border-white/10 text-[#4B5563] dark:text-[#9BA5A0] hover:text-azure-600 dark:hover:text-azure-400 hover:border-azure-400 transition-colors"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Continuous Learning & Emerging Technologies */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 pb-1">
              <span className="text-xl">🔬</span>
              <h3 className="font-sans font-semibold text-sm text-[#111827] dark:text-white uppercase tracking-wider">
                Active Research & Applied AI Labs
              </h3>
            </div>

            <div className="space-y-3">
              {continuousLearning.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-xs hover:border-amber-400/50 hover:shadow-sm transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20 font-semibold inline-flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{item.status}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#6B7280] dark:text-[#636F6A]">
                      LAB TRACK
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
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-white/5 border border-black/[0.04] dark:border-white/10 text-[#374151] dark:text-[#D1D5DB]"
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
