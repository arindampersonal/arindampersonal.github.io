import React from 'react';
import { experience } from '../../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              05 // Professional Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Experience Timeline
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            EDITABLE TIMELINE MODEL
          </span>
        </div>

        {/* Timeline Items */}
        <div className="pt-8 space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative p-7 sm:p-10 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-black/[0.06] dark:border-white/[0.06]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-medium inline-flex items-center space-x-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                      <span>Current Position</span>
                    </span>
                    <span className="text-sage-800 dark:text-sage-400">
                      Enterprise Consulting
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] dark:text-white">
                    {item.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#4B5563] dark:text-[#9BA5A0] pt-1">
                    <span className="font-semibold text-[#111827] dark:text-white inline-flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                      <span>{item.company}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary & Responsibilities */}
              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                  {item.summary}
                </p>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] font-semibold">
                    Core Technical Responsibilities & Systems
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#374151] dark:text-[#D1D5DB]">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sage-700 dark:text-sage-400 shrink-0 mt-0.5 select-none" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Tech Stack in Production */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] mb-2 font-medium">
                    Applied Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#F4F4F2] text-[#27272A] border border-black/[0.06] dark:bg-white/5 dark:text-white dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
