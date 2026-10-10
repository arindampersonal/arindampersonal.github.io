import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  AlertCircle, 
  UserCheck, 
  Workflow, 
  Sparkles 
} from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-ink-800 border border-black/[0.08] dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Top Header (shrink-0) */}
        <div className="shrink-0 flex items-start justify-between p-5 sm:p-6 border-b border-black/[0.08] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-850 z-10">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-medium">
                {project.status}
              </span>
              <span className="font-mono text-xs text-sage-800 dark:text-sage-400 font-medium">
                {project.category}
              </span>
            </div>

            <h3 
              id="modal-title" 
              className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-[#111827] dark:text-white leading-tight pt-0.5"
            >
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close architecture modal"
            className="p-2 rounded-lg border border-black/[0.08] dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors text-[#4B5563] dark:text-[#9BA5A0] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Smooth internal scroll */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 overscroll-contain">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-900/40 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-semibold flex items-center space-x-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Challenge & Objectives</span>
              </span>
              <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                {project.problemStatement || project.architecture.challenge}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-900/40 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-semibold flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Architectural Solution</span>
              </span>
              <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                {project.architecture.solution}
              </p>
            </div>
          </div>

          {/* What Arindam Personally Implemented */}
          {project.personalImplementation && project.personalImplementation.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold flex items-center space-x-1.5">
                <UserCheck className="w-4 h-4 text-sage-700 dark:text-sage-400" />
                <span>What I Personally Implemented</span>
              </h4>
              <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-900/30 space-y-2">
                <ul className="space-y-2 text-xs text-[#374151] dark:text-[#D1D5DB]">
                  {project.personalImplementation.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-sage-700 dark:text-sage-400 font-bold select-none mt-0.5">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Delivery & Automation Pipeline */}
          {project.deliveryAutomation && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold flex items-center space-x-1.5">
                <Workflow className="w-4 h-4 text-sage-700 dark:text-sage-400" />
                <span>Automated Build & Delivery Mechanism</span>
              </h4>
              <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-900/30 text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed">
                {project.deliveryAutomation}
              </div>
            </div>
          )}

          {/* Infrastructure Topology Components */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-sage-700 dark:text-sage-400" />
              <span>Infrastructure Topology Layers</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.infrastructure.map((infra, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-ink-750 text-xs font-mono text-[#27272A] dark:text-[#E4E4E7] flex items-center space-x-2"
                >
                  <span className="text-sage-700 dark:text-sage-400 font-bold">›</span>
                  <span>{infra}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Pipeline Stages */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold flex items-center space-x-1.5">
              <GitBranch className="w-4 h-4 text-sage-700 dark:text-sage-400" />
              <span>Gated Pipeline Stages</span>
            </h4>
            <div className="space-y-2">
              {project.architecture.pipeline.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-ink-750 text-xs font-mono text-[#27272A] dark:text-[#E4E4E7] flex items-start space-x-2.5"
                >
                  <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[10px] text-sage-800 dark:text-sage-300 font-medium">
                    STAGE {idx + 1}
                  </span>
                  <span className="leading-relaxed">{stage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Roadmap / Potential Extensions */}
          {project.futureRoadmap && project.futureRoadmap.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-sage-800 dark:text-sage-400 font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-sage-700 dark:text-sage-400" />
                <span>Planned Extensions & Future Work</span>
              </h4>
              <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-900/30 space-y-2">
                <ul className="space-y-1.5 text-xs text-[#4B5563] dark:text-[#9BA5A0]">
                  {project.futureRoadmap.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-sage-700 dark:text-sage-400 select-none">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Verified Production Note */}
          {project.architecture.verificationNote && (
            <div className="p-3.5 rounded-lg bg-sage-50/80 dark:bg-sage-950/20 border border-sage-200/90 dark:border-sage-800/40 text-xs font-mono text-sage-900 dark:text-sage-300">
              <span className="font-semibold">Integrity Note: </span>
              <span>{project.architecture.verificationNote}</span>
            </div>
          )}

          {/* Declared Tech Stack */}
          <div className="pt-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] mb-2 font-medium">
              Declared Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
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
        </div>

        {/* Pinned Bottom Footer (shrink-0) */}
        <div className="shrink-0 p-4 sm:p-5 border-t border-black/[0.08] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-850 flex items-center justify-between z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-black/[0.1] dark:border-white/10 text-xs font-mono text-[#374151] dark:text-[#D1D5DB] hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
          >
            Close Breakdown
          </button>

          {project.links.liveUrl && (
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-medium inline-flex items-center space-x-2 transition-colors shadow-sm"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
