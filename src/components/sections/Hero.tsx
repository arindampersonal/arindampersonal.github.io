import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { 
  ArrowUpRight, 
  Mail
} from 'lucide-react';

const coreHighlights = [
  { emoji: '⚡', label: '6+ Years', sublabel: 'Enterprise Experience' },
  { emoji: '🚀', label: '50+', sublabel: 'Pipelines Automated' },
  { emoji: '☁️', label: '3x Certified', sublabel: 'Azure & Terraform' },
  { emoji: '🛡️', label: '99.9%', sublabel: 'Zero-Drift SLA' },
];

const techPills = [
  { emoji: '☁️', name: 'Microsoft Azure' },
  { emoji: '🏗️', name: 'Terraform IaC' },
  { emoji: '🚀', name: 'Azure Pipelines & GitLab' },
  { emoji: '🖥️', name: 'Azure Virtual Desktop' },
  { emoji: '🛡️', name: 'DevSecOps & SonarQube' },
  { emoji: '🐳', name: 'Docker Containers' },
  { emoji: '🐍', name: 'Python & FastAPI' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Greeting, Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Friendly Greeting & Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-azure-200/90 bg-azure-50/80 text-azure-900 dark:border-azure-500/20 dark:bg-azure-500/10 dark:text-azure-300 text-xs font-mono shadow-xs"
            >
              <span className="flex items-center space-x-1.5 font-medium">
                <span className="text-sm">👋</span>
                <span>Hello, I'm {profile.preferredName || profile.name}</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for high-impact roles</span>
              </span>
            </motion.div>

            {/* Elegant Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.12] text-[#111827] dark:text-[#F4F5F2]">
                Architecting <span className="italic font-normal text-azure-700 dark:text-azure-400">clean, reliable cloud platforms</span> & automated delivery engines.
              </h1>
            </motion.div>

            {/* Punchy, Non-bloated Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed font-sans max-w-xl"
            >
              Senior Azure DevOps & Cloud Engineer at <strong>Tata Consultancy Services</strong> with 6+ years of production experience. I specialize in turning complex infrastructure into simple, automated, and secure cloud products.
            </motion.p>

            {/* Quick Skill Emoji Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {techPills.map((pill) => (
                <span
                  key={pill.name}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-ink-800 text-[#374151] dark:text-[#E4E4E7] border border-black/[0.08] dark:border-white/10 shadow-xs hover:border-azure-400 transition-colors"
                >
                  <span className="text-sm">{pill.emoji}</span>
                  <span>{pill.name}</span>
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-azure-600 hover:bg-azure-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all inline-flex items-center space-x-2 group"
              >
                <span>🚀 View Featured Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-ink-800 border border-black/[0.1] dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-white/5 text-[#18181B] dark:text-white text-sm font-medium transition-colors shadow-xs inline-flex items-center space-x-2"
              >
                <Mail className="w-4 h-4 text-azure-600 dark:text-azure-400" />
                <span>Let's Connect</span>
              </a>

              <a
                href="#certifications"
                className="px-3.5 py-2 text-xs font-mono text-[#6B7280] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors"
              >
                📜 Certifications (AZ-400 / AZ-104)
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Photo & Interactive Stat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Visual Portrait & Badge Wrapper */}
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-azure-500/20 via-teal-500/20 to-indigo-500/20 blur-xl opacity-75 dark:opacity-40"></div>
              
              <div className="relative rounded-3xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-card">
                
                {/* Photo Frame */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-br from-azure-100 to-indigo-100 dark:from-ink-900 dark:to-ink-850 border border-black/[0.06] dark:border-white/[0.06]">
                  <img
                    src="./images/avatar.jpg"
                    alt="Arindam Dutta — Senior Azure DevOps & Cloud Engineer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Badge (Top Right) */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 dark:bg-ink-900/90 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-sm text-[11px] font-semibold text-azure-800 dark:text-azure-300 flex items-center space-x-1.5">
                    <span>☁️</span>
                    <span>Azure & Terraform</span>
                  </div>

                  {/* Floating Badge (Bottom Left) */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-ink-900/90 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-sm text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>TCS Senior Engineer</span>
                  </div>
                </div>

                {/* Stat Grid below Photo */}
                <div className="grid grid-cols-2 gap-2.5 pt-4">
                  {coreHighlights.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-xl bg-[#FAFAF8] dark:bg-ink-850 border border-black/[0.04] dark:border-white/[0.06] text-center"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-sm">{stat.emoji}</span>
                        <span className="font-serif text-lg font-bold text-[#111827] dark:text-white">
                          {stat.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#6B7280] dark:text-[#9BA5A0] font-sans font-medium mt-0.5">
                        {stat.sublabel}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
