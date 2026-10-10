import React, { useState, useEffect } from 'react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-ink-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-card">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-azure-200 bg-azure-50 text-azure-800 dark:border-azure-500/20 dark:bg-azure-500/10 dark:text-azure-300 text-xs font-mono font-medium">
              <span className="text-sm">📬</span>
              <span>Let's Connect & Collaborate</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#111827] dark:text-[#F4F5F2] leading-[1.15]">
              Let’s architect something <span className="italic font-normal text-azure-700 dark:text-azure-400">clean, elegant & reliable</span>.
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#9BA5A0] leading-relaxed max-w-xl">
              Whether you are looking to review cloud architectures, automate zero-trust CI/CD pipelines, optimize enterprise Azure Virtual Desktop workloads, or explore new opportunities, I'd love to chat.
            </p>

            {/* Email Action Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="px-6 py-3 rounded-xl bg-azure-600 hover:bg-azure-700 text-white text-sm font-medium shadow-sm transition-all inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Directly</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl border border-black/[0.1] dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/5 text-[#18181B] dark:text-white text-xs font-mono transition-colors inline-flex items-center justify-center space-x-2 shadow-2xs"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied: {profile.contact.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-azure-600 dark:text-azure-400" />
                    <span>Copy: {profile.contact.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Channels Grid */}
            <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.filter(l => l.id !== 'email').map((link) => {
                const Icon = link.iconName === 'Github' ? Github : link.iconName === 'Linkedin' ? Linkedin : ExternalLink;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-850 hover:border-azure-400 dark:hover:border-azure-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] dark:text-[#636F6A]">
                      <span>{link.name}</span>
                      <Icon className="w-3.5 h-3.5 text-azure-600 dark:text-azure-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-xs font-mono font-medium text-[#111827] dark:text-white pt-1">
                      {link.handle}
                    </div>
                  </a>
                );
              })}

              {/* Timezone pill */}
              <div className="p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#FAFAF8] dark:bg-ink-850 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] dark:text-[#636F6A]">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-azure-600" />
                    <span>Location</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{currentTime || 'IST'}</span>
                  </span>
                </div>
                <div className="text-xs font-mono font-medium text-[#111827] dark:text-white pt-1">
                  Kolkata, India (UTC+5:30)
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
