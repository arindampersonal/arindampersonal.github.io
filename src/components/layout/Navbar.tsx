import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { profile } from '../../data/profile';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAFAF8]/95 dark:bg-ink-900/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-black/[0.08] dark:border-white/[0.08]' 
          : 'bg-[#FAFAF8]/80 dark:bg-ink-900/80 backdrop-blur-sm border-b border-black/[0.05] dark:border-white/[0.05]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-2.5 group shrink-0"
          aria-label="Arindam Dutta Home"
        >
          <span className="font-semibold text-base sm:text-lg tracking-tight text-[#111827] dark:text-[#F4F5F2] group-hover:text-sage-800 dark:group-hover:text-white transition-colors whitespace-nowrap">
            {profile.name}
          </span>
          <span className="text-xs font-mono text-sage-700 dark:text-sage-400 font-normal hidden sm:inline select-none">
            · Cloud & DevOps
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-wide" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#4B5563] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Telemetry + Theme + Contact CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Status Telemetry Pill */}
          <div className="hidden lg:flex items-center space-x-2 text-xs font-mono px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/90 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800/40 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] font-medium">{profile.statusBadge.text}</span>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to optional dark mode"}
            title={theme === 'dark' ? "Switch to light mode" : "Switch to optional dark mode"}
            className="p-2 rounded-lg border border-black/[0.08] dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors text-[#374151] dark:text-[#E5E7EB]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#374151]" />
            )}
          </button>

          {/* Quick Get in Touch Button (Desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#18181B] hover:bg-[#09090B] text-white dark:bg-white dark:text-ink-950 dark:hover:bg-neutral-100 text-xs font-mono font-medium shadow-sm transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg border border-black/[0.08] dark:border-white/10 text-[#374151] dark:text-[#E5E7EB] hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] dark:border-white/10 bg-[#FAFAF8] dark:bg-ink-900 px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-sm font-mono" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-[#374151] dark:text-[#9BA5A0] hover:text-[#111827] dark:hover:text-white transition-colors py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-sage-600 dark:text-sage-400">›</span>
              </a>
            ))}
            <div className="pt-3 border-t border-black/[0.06] dark:border-white/10 flex flex-col gap-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                <span>{profile.statusBadge.text}</span>
              </div>
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full text-center py-2.5 rounded-lg bg-[#18181B] text-white dark:bg-white dark:text-ink-950 text-xs font-mono font-medium shadow-sm"
              >
                Initiate Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
