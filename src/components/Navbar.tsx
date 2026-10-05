import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Calendar, Menu, X, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCopilot: () => void;
  onOpenMeeting: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCopilot,
  onOpenMeeting,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['about', 'certifications', 'skills', 'why-hire-me', 'services', 'contact'];
      const scrollPosition = window.scrollY + 240;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Why Hire Me', href: '#why-hire-me', id: 'why-hire-me' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2.5 group whitespace-nowrap"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-heading font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
            Naresh Rathod
          </span>
        </a>

        {/* Zone 2: Navigation Links with smooth underline & active indicator */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] rounded-lg bg-white/[0.02] hover:bg-white/[0.06] transition-all whitespace-nowrap shadow-sm"
            title="View ATS Resume"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 rounded-lg bg-cyan-950/30 hover:bg-cyan-950/60 transition-all shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Copilot</span>
          </button>

          <button
            onClick={onOpenMeeting}
            className="btn-primary-gradient flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white rounded-lg whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Call</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCopilot}
            className="p-2 text-cyan-400 border border-cyan-500/30 rounded-lg bg-cyan-950/40"
            aria-label="Open AI Copilot"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white border border-white/[0.08] rounded-lg bg-white/[0.03]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden bg-[#030712]/95 border-b border-white/[0.08] px-6 py-6 space-y-4 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-white bg-white/[0.06] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 border border-white/[0.1] rounded-xl bg-white/[0.03]"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>ATS Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMeeting();
                }}
                className="w-full btn-primary-gradient flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white rounded-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
