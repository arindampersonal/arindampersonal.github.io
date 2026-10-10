import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ArchitectureModal } from '../modals/ArchitectureModal';

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Flagship',
    'Cloud & IaC',
    'CI/CD & DevSecOps',
    'Virtualization',
    'Applied AI Lab'
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Flagship') return project.isFlagship;
    if (selectedCategory === 'Cloud & IaC') return project.category.includes('Infrastructure') || project.category.includes('Code');
    if (selectedCategory === 'CI/CD & DevSecOps') return project.category.includes('CI/CD');
    if (selectedCategory === 'Virtualization') return project.category.includes('Virtualization');
    if (selectedCategory === 'Applied AI Lab') return project.category.includes('AI') || project.category.includes('Lab');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-800 dark:text-sage-400 font-semibold">
              03 // Featured Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-1 text-[#111827] dark:text-[#F4F5F2]">
              Engineering Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            AUTHENTIC IMPLEMENTATIONS & LABS
          </span>
        </div>

        {/* Filter Pills with Counts */}
        <div className="py-6 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = projects.filter((p) => {
              if (cat === 'All') return true;
              if (cat === 'Flagship') return p.isFlagship;
              if (cat === 'Cloud & IaC') return p.category.includes('Infrastructure') || p.category.includes('Code');
              if (cat === 'CI/CD & DevSecOps') return p.category.includes('CI/CD');
              if (cat === 'Virtualization') return p.category.includes('Virtualization');
              if (cat === 'Applied AI Lab') return p.category.includes('AI') || p.category.includes('Lab');
              return true;
            }).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? 'bg-[#18181B] text-white dark:bg-white dark:text-ink-950 font-medium shadow-sm'
                    : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.07] dark:border-white/10 hover:border-black/[0.15]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${selectedCategory === cat ? 'opacity-80' : 'text-[#9CA3AF] dark:text-[#6B7280]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Listing with High Visual Variety */}
        <div className="space-y-10 pt-4">
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship;

            // Flagship Dedicated Spotlight Layout
            if (isFlagship) {
              return (
                <div
                  key={project.id}
                  className="group relative p-7 sm:p-10 rounded-2xl border border-black/[0.12] dark:border-white/15 bg-white dark:bg-ink-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-card hover:border-sage-600/50 dark:hover:border-sage-400/50 transition-all duration-300"
                >
                  {/* Flagship Banner Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-azure-50 text-azure-700 border border-azure-200 dark:bg-azure-500/10 dark:text-azure-400 dark:border-azure-500/20 font-medium inline-flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Flagship Engineering Project</span>
                      </span>

                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-medium">
                        {project.status}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
                      Full-Stack Architecture & Cloud Footprint
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
                    {/* Left Details (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-sage-800 dark:text-sage-400 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Problem Statement Box */}
                      {project.problemStatement && (
                        <div className="p-4 rounded-xl bg-[#FAFAF8] dark:bg-ink-850 border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 font-semibold flex items-center space-x-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>The Problem Solved</span>
                          </span>
                          <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                            {project.problemStatement}
                          </p>
                        </div>
                      )}

                      {/* What Arindam Implemented */}
                      <div className="pt-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] mb-2 font-medium">
                          Personal Engineering Implementation
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#374151] dark:text-[#D1D5DB]">
                          {(project.personalImplementation || project.highlights).map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400 shrink-0 mt-0.5 select-none" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-[#F4F4F2] text-[#27272A] border border-black/[0.06] dark:bg-white/5 dark:text-white dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Architectural Topology Diagram (5 cols) */}
                    <div className="lg:col-span-5 p-6 rounded-xl border border-black/[0.07] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-850 space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#111827] dark:text-white font-semibold">
                          Topology & Delivery Flow
                        </span>
                        <span className="font-mono text-[10px] text-azure-700 dark:text-azure-400">
                          LIVE
                        </span>
                      </div>

                      {/* Visual Architecture Flow schematic */}
                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-white dark:bg-ink-800 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                          <span className="font-medium text-[#111827] dark:text-white">1. Edge Client Tier</span>
                          <span className="text-[11px] text-sage-800 dark:text-sage-400">Azure SWA + Custom DNS</span>
                        </div>
                        <div className="flex justify-center text-[#9CA3AF] dark:text-[#6B7280]">
                          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                        </div>
                        <div className="p-3 rounded-lg bg-white dark:bg-ink-800 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                          <span className="font-medium text-[#111827] dark:text-white">2. Backend Runtime</span>
                          <span className="text-[11px] text-azure-700 dark:text-azure-400">FastAPI / Python (Docker)</span>
                        </div>
                        <div className="flex justify-center text-[#9CA3AF] dark:text-[#6B7280]">
                          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                        </div>
                        <div className="p-3 rounded-lg bg-white dark:bg-ink-800 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                          <span className="font-medium text-[#111827] dark:text-white">3. Data & CI/CD Core</span>
                          <span className="text-[11px] text-[#6B7280] dark:text-[#9BA5A0]">SQLAlchemy / GitLab CI / Ruff</span>
                        </div>
                      </div>

                      {/* Action Buttons for Flagship */}
                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="flex-1 py-2.5 px-4 rounded-lg border border-black/[0.1] dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 text-xs font-mono text-[#18181B] dark:text-white inline-flex items-center justify-center space-x-2 transition-colors shadow-sm"
                        >
                          <Layers className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                          <span>Inspect Full Architecture</span>
                        </button>

                        {project.links.liveUrl && (
                          <a
                            href={project.links.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-4 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-medium inline-flex items-center justify-center space-x-2 transition-colors shadow-sm"
                          >
                            <span>Visit Live Platform</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Enterprise and Lab Project Cards (Distinct Domain Styling)
            const isAVD = project.id.includes('avd');
            const isDevOps = project.id.includes('devsecops');
            const isTerraform = project.id.includes('terraform');
            const isLab = project.status === 'Engineering Lab';

            const cardBorderColor = isAVD
              ? 'border-l-4 border-l-azure-500'
              : isDevOps
              ? 'border-l-4 border-l-emerald-500'
              : isTerraform
              ? 'border-l-4 border-l-amber-600'
              : 'border-l-4 border-l-indigo-500';

            const DomainIcon = isAVD ? Server : isDevOps ? ShieldCheck : isTerraform ? Terminal : Cpu;

            return (
              <div
                key={project.id}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:border-black/[0.18] dark:hover:border-white/20 transition-all duration-300 ${cardBorderColor}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  {/* Left Column: Details */}
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`font-mono text-xs px-2.5 py-0.5 rounded font-medium border ${
                        isLab
                          ? 'bg-amber-50 text-amber-800 border-amber-200/90 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200/90 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'
                      }`}>
                        {project.status}
                      </span>

                      <span className="font-mono text-xs text-sage-800 dark:text-sage-400 font-medium inline-flex items-center space-x-1">
                        <DomainIcon className="w-3 h-3 text-sage-700 dark:text-sage-400" />
                        <span>{project.category}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-sage-800 dark:text-sage-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Problem Statement snippet */}
                    {project.problemStatement && (
                      <div className="p-3.5 rounded-lg bg-[#FAFAF8] dark:bg-ink-850 border border-black/[0.04] dark:border-white/[0.04] text-xs text-[#4B5563] dark:text-[#9BA5A0]">
                        <span className="font-mono font-semibold text-[#111827] dark:text-white">Challenge Addressed: </span>
                        <span>{project.problemStatement}</span>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="pt-1">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] mb-2 font-medium">
                        Key Architectural Deliverables
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#374151] dark:text-[#D1D5DB]">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-sage-700 dark:text-sage-400 font-bold select-none">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-[#F4F4F2] text-[#27272A] border border-black/[0.06] dark:bg-white/5 dark:text-white dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-start gap-3 shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2.5 rounded-lg border border-black/[0.1] dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/5 text-xs font-mono text-[#18181B] dark:text-white inline-flex items-center space-x-2 transition-colors shadow-sm"
                    >
                      <Layers className="w-3.5 h-3.5 text-sage-700 dark:text-sage-400" />
                      <span>Inspect Architecture</span>
                    </button>

                    {project.links.liveUrl ? (
                      <a
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-medium inline-flex items-center space-x-2 transition-colors shadow-sm"
                      >
                        <span>Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Architecture Inspection Modal */}
      <ArchitectureModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
