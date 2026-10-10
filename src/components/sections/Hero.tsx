import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { 
  Cloud, 
  MapPin, 
  ArrowUpRight, 
  Terminal,
  Server,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const coreProductionTags = [
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Azure DevOps Pipelines', category: 'CI/CD' },
  { name: 'GitLab CI/CD', category: 'CI/CD' },
  { name: 'Azure Virtual Desktop', category: 'VDI' },
  { name: 'FSLogix', category: 'Storage' },
  { name: 'Docker', category: 'Containers' },
  { name: 'Python', category: 'Backend' },
  { name: 'PowerShell', category: 'Scripting' },
  { name: 'SonarQube', category: 'Security' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 sm:pt-18 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Editorial Headline & Positioning */}
          <div className="lg:col-span-7 space-y-7">
            {/* Identity & Location Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-sage-300/80 bg-sage-50/90 text-sage-800 dark:border-sage-500/20 dark:bg-sage-500/5 dark:text-sage-300 text-xs font-mono"
            >
              <span className="flex items-center space-x-1.5 font-medium">
                <Cloud className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                <span>{profile.title}</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                <span>{profile.location.city}, {profile.location.country}</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="text-sage-700 dark:text-sage-400 font-medium">
                {profile.currentEmployer}
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#111827] dark:text-[#F4F5F2]"
            >
              Architecting <span className="italic font-normal text-sage-700 dark:text-sage-400">resilient cloud platforms</span> and zero-trust delivery engines.
            </motion.h1>

            {/* Subheadline & Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed font-sans max-w-2xl"
            >
              Senior Azure DevOps & Cloud Engineer with ~6+ years of enterprise production experience. Specializing in immutable Terraform architectures, automated CI/CD quality gates, large-scale AVD virtualization, and independent product engineering.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-[#18181B] hover:bg-[#09090B] text-white dark:bg-white dark:text-ink-950 dark:hover:bg-neutral-100 text-sm font-medium shadow-sm transition-all inline-flex items-center space-x-2 group"
              >
                <span>Explore Featured Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#approach"
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-transparent border border-black/[0.12] dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/5 text-[#18181B] dark:text-white text-sm font-medium transition-colors shadow-sm inline-flex items-center space-x-2"
              >
                <Terminal className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                <span>Engineering Approach</span>
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                className="px-3.5 py-2 text-xs font-mono text-[#4B5563] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors"
              >
                {profile.contact.email}
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Platform Architecture Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-card overflow-hidden">
              {/* Card Window Titlebar */}
              <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-850 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="font-mono text-xs text-[#111827] dark:text-white font-medium">
                    azure-platform-spec.tf
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-medium">
                  STATE::VERIFIED
                </span>
              </div>

              {/* Architecture Primitives List */}
              <div className="p-5 sm:p-6 space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-[#6B7280] dark:text-[#636F6A] font-semibold tracking-wider">
                    Cloud Infrastructure Core
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-ink-900/50 border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                    <span className="text-[#111827] dark:text-[#E4E4E7] font-medium flex items-center space-x-2">
                      <Server className="w-3.5 h-3.5 text-azure-600 dark:text-azure-400" />
                      <span>Microsoft Azure</span>
                    </span>
                    <span className="text-[#6B7280] dark:text-[#9BA5A0] text-[11px]">Hub-and-Spoke / VNet</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-[#6B7280] dark:text-[#636F6A] font-semibold tracking-wider">
                    Infrastructure as Code
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-ink-900/50 border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                    <span className="text-[#111827] dark:text-[#E4E4E7] font-medium flex items-center space-x-2">
                      <Terminal className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                      <span>Terraform IaC</span>
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">100% Declarative</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-[#6B7280] dark:text-[#636F6A] font-semibold tracking-wider">
                    CI/CD & Security Gates
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-ink-900/50 border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                    <span className="text-[#111827] dark:text-[#E4E4E7] font-medium flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>SonarQube + Key Vault</span>
                    </span>
                    <span className="text-[#6B7280] dark:text-[#9BA5A0] text-[11px]">Zero-Trust Secretless</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-[#6B7280] dark:text-[#636F6A] font-semibold tracking-wider">
                    Flagship Personal Platform
                  </div>
                  <div className="p-2.5 rounded-lg bg-azure-50/60 dark:bg-azure-500/10 border border-azure-200/80 dark:border-azure-500/20 flex items-center justify-between">
                    <span className="text-azure-900 dark:text-azure-300 font-semibold flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-azure-600 dark:text-azure-400" />
                      <span>LifeOps Platform</span>
                    </span>
                    <span className="text-azure-700 dark:text-azure-400 text-[11px]">FastAPI + Docker + SWA</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry Bar */}
              <div className="px-5 py-3 border-t border-black/[0.06] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-850 flex items-center justify-between text-[11px] font-mono text-[#6B7280] dark:text-[#636F6A]">
                <span className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>Operational Status: Healthy</span>
                </span>
                <span>Drift: 0.0%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Telemetry Strip: Verified Production Technologies Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-8 border-t border-black/[0.08] dark:border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold">
                Core Production Stack
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sage-50 text-sage-800 border border-sage-200/90 dark:bg-white/5 dark:border-white/10 dark:text-sage-400">
                VERIFIED ~6+ YRS
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#6B7280] dark:text-[#636F6A]">
              Enterprise Cloud & Platform Engineering
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreProductionTags.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-ink-800 border border-black/[0.07] dark:border-white/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-[#27272A] dark:text-[#E4E4E7]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-500"></span>
                <span>{tech.name}</span>
                <span className="text-[10px] text-[#9CA3AF] dark:text-[#6B7280]">
                  ({tech.category})
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
