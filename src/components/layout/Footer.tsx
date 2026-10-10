import React from 'react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { ArrowUp, Github, Linkedin, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F7F7F5] dark:bg-ink-950 py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/[0.06] dark:border-white/[0.06]">
          {/* Column 1: Identity & Positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-base text-[#111827] dark:text-white">
                {profile.name}
              </span>
              <span className="text-xs font-mono text-sage-700 dark:text-sage-400">
                · {profile.location.city}, {profile.location.country}
              </span>
            </div>
            <p className="text-xs text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed max-w-sm">
              {profile.title}. Designing immutable cloud architectures, zero-trust pipelines, and production systems on Microsoft Azure.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-sage-800 dark:text-sage-300 pt-1">
              <Clock className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
              <span>Current Timezone: IST ({profile.location.utcOffset})</span>
            </div>
          </div>

          {/* Column 2: Navigation Anchors */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] font-semibold">
              Index
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-[#4B5563] dark:text-[#9BA5A0]">
              <li><a href="#about" className="hover:text-[#111827] dark:hover:text-white transition-colors">About & Career</a></li>
              <li><a href="#expertise" className="hover:text-[#111827] dark:hover:text-white transition-colors">Technical Domains</a></li>
              <li><a href="#projects" className="hover:text-[#111827] dark:hover:text-white transition-colors">Featured Engineering</a></li>
              <li><a href="#approach" className="hover:text-[#111827] dark:hover:text-white transition-colors">Engineering Approach</a></li>
              <li><a href="#experience" className="hover:text-[#111827] dark:hover:text-white transition-colors">Experience Timeline</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#636F6A] font-semibold">
              Direct Channels
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              {socialLinks.map((link) => {
                const Icon = link.iconName === 'Github' ? Github : link.iconName === 'Linkedin' ? Linkedin : Mail;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.id !== 'email' ? "_blank" : undefined}
                    rel={link.id !== 'email' ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center space-x-2 text-[#4B5563] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400 group-hover:text-azure-600 transition-colors" />
                    <span>{link.name} ({link.handle})</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280] dark:text-[#636F6A]">
          <div>
            <span>© {new Date().getFullYear()} {profile.name}. All verified engineering content.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>Static GitHub Pages build</span>
            <span className="opacity-40">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 hover:text-[#111827] dark:hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
