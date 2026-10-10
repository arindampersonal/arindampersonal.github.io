import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { 
  ExternalLink, 
  Terminal,
  ArrowRight
} from 'lucide-react';
import { ArchitectureModal } from '../modals/ArchitectureModal';

const categoryTabs = [
  { id: 'All', label: 'All Projects', emoji: '🌟' },
  { id: 'Flagship', label: 'Flagship Product', emoji: '🚀' },
  { id: 'Cloud & IaC', label: 'Cloud & IaC', emoji: '🏗️' },
  { id: 'CI/CD & DevSecOps', label: 'CI/CD & Security', emoji: '🔒' },
  { id: 'Virtualization', label: 'Virtualization', emoji: '🖥️' },
];

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Flagship') return project.isFlagship;
    if (selectedCategory === 'Cloud & IaC') return project.category.includes('Infrastructure') || project.category.includes('Code');
    if (selectedCategory === 'CI/CD & DevSecOps') return project.category.includes('CI/CD');
    if (selectedCategory === 'Virtualization') return project.category.includes('Virtualization');
    return true;
  });

  const flagshipProject = filteredProjects.find(p => p.isFlagship);
  const otherProjects = filteredProjects.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-widest text-azure-700 dark:text-azure-400 font-semibold mb-1">
              <span>🚀</span>
              <span>03 // Case Studies & Architectures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#111827] dark:text-[#F4F5F2]">
              Engineering Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6B7280] dark:text-[#636F6A]">
            PRODUCTION SYSTEMS & ENTERPRISE ARCHITECTURES
          </span>
        </div>

        {/* Filter Pills with Emojis */}
        <div className="py-6 flex flex-wrap gap-2">
          {categoryTabs.map((cat) => {
            const count = projects.filter((p) => {
              if (cat.id === 'All') return true;
              if (cat.id === 'Flagship') return p.isFlagship;
              if (cat.id === 'Cloud & IaC') return p.category.includes('Infrastructure') || p.category.includes('Code');
              if (cat.id === 'CI/CD & DevSecOps') return p.category.includes('CI/CD');
              if (cat.id === 'Virtualization') return p.category.includes('Virtualization');
              return true;
            }).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all flex items-center space-x-2 ${
                  selectedCategory === cat.id
                    ? 'bg-azure-600 text-white font-medium shadow-sm'
                    : 'bg-white dark:bg-ink-800 text-[#4B5563] dark:text-[#9BA5A0] border border-black/[0.08] dark:border-white/10 hover:border-azure-400'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-neutral-100 dark:bg-ink-900 text-[#6B7280]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-8 pt-2">
          
          {/* Flagship Dedicated Card (LifeOps) */}
          {flagshipProject && (
            <div className="rounded-3xl border border-black/[0.1] dark:border-white/15 bg-white dark:bg-ink-800 shadow-[0_8px_30px_rgb(0,0,0,0.05)] dark:shadow-card overflow-hidden hover:border-azure-500/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left: Project Visual Preview */}
                <div className="lg:col-span-5 relative bg-[#0D1117] overflow-hidden group">
                  <img
                    src={flagshipProject.imageUrl || "./images/project-lifeops.jpg"}
                    alt={flagshipProject.title}
                    className="w-full h-full object-cover min-h-[260px] lg:min-h-full group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-ink-900/90 text-azure-800 dark:text-azure-300 text-xs font-semibold backdrop-blur-md shadow-sm inline-flex items-center space-x-1.5">
                      <span>✨</span>
                      <span>Flagship Product</span>
                    </span>
                  </div>

                  {/* Bottom Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center space-x-1.5 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span>{flagshipProject.status}</span>
                    </span>
                    <span className="text-[11px] text-white/80 font-mono">
                      Python • FastAPI • Azure
                    </span>
                  </div>
                </div>

                {/* Right: Project Highlights & Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-mono text-azure-700 dark:text-azure-400 font-semibold uppercase tracking-wider mb-1">
                        {flagshipProject.category}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] dark:text-white">
                        {flagshipProject.title}
                      </h3>
                      <p className="text-sm font-sans text-azure-800 dark:text-azure-300 font-medium mt-1">
                        {flagshipProject.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                      {flagshipProject.summary}
                    </p>

                    {/* Visual High-Impact Highlights with Emojis */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-start space-x-2.5 text-xs text-[#374151] dark:text-[#D1D5DB]">
                        <span className="text-sm mt-0.5">⚡</span>
                        <span><strong>FastAPI REST Backend:</strong> High-throughput Python API with strict SQLAlchemy ORM models.</span>
                      </div>
                      <div className="flex items-start space-x-2.5 text-xs text-[#374151] dark:text-[#D1D5DB]">
                        <span className="text-sm mt-0.5">🐳</span>
                        <span><strong>GitLab CI/CD Automation:</strong> Automated Ruff linting, pytest suites, and Docker image packaging.</span>
                      </div>
                      <div className="flex items-start space-x-2.5 text-xs text-[#374151] dark:text-[#D1D5DB]">
                        <span className="text-sm mt-0.5">☁️</span>
                        <span><strong>Azure Cloud Deployment:</strong> Edge-distributed via Azure Static Web Apps with custom DNS on Azure.</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {flagshipProject.techStack.slice(0, 8).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-ink-850 text-[#374151] dark:text-[#D1D5DB] border border-black/[0.05] dark:border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                    {flagshipProject.links.liveUrl && (
                      <a
                        href={flagshipProject.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-azure-600 hover:bg-azure-700 text-white text-xs font-medium shadow-sm transition-all inline-flex items-center space-x-1.5"
                      >
                        <span>🌐 Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalProject(flagshipProject)}
                      className="px-4 py-2 rounded-xl bg-white dark:bg-ink-900 border border-black/[0.1] dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-white/5 text-[#18181B] dark:text-white text-xs font-medium transition-colors shadow-2xs inline-flex items-center space-x-2"
                    >
                      <Terminal className="w-3.5 h-3.5 text-azure-600 dark:text-azure-400" />
                      <span>View Architecture & Pipeline</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* 3-Column Responsive Grid for Other Projects */}
          {otherProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-card overflow-hidden hover:border-azure-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Header Image */}
                    {project.imageUrl && (
                      <div className="relative aspect-16/9 bg-[#0F172A] overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none"></div>
                        
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                            {project.status}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-4">
                          <span className="text-white text-xs font-semibold drop-shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-lg font-medium text-[#111827] dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs font-sans text-azure-700 dark:text-azure-400 font-medium line-clamp-1">
                        {project.tagline}
                      </p>
                      <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>

                      {/* Concise Highlights */}
                      <div className="space-y-1 pt-1">
                        {project.highlights.slice(0, 2).map((hl, idx) => (
                          <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-[#374151] dark:text-[#D1D5DB]">
                            <span className="text-emerald-500 mt-0.5">✓</span>
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-ink-850 text-[#374151] dark:text-[#D1D5DB] border border-black/[0.04] dark:border-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#6B7280] dark:text-[#636F6A]">
                        TCS Architecture
                      </span>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-3 py-1.5 rounded-lg bg-azure-50 dark:bg-azure-900/30 hover:bg-azure-600 hover:text-white text-azure-700 dark:text-azure-300 text-xs font-medium transition-colors inline-flex items-center space-x-1"
                      >
                        <span>📐 Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Interactive Modal dialog */}
      <ArchitectureModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
