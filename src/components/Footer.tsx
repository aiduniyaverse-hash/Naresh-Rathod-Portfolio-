import React from 'react';
import { ArrowUp, ExternalLink, Linkedin, ShieldCheck, Award, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenCopilot: () => void;
  onOpenMeeting: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCopilot,
  onOpenMeeting,
  onOpenResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#02050e] py-16 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
          {/* Brand & Subtitle */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-base font-bold text-white font-heading tracking-tight">
                Naresh Rathod
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Agentic AI &amp; Automation Specialist · Modern Web Developer · AI Commercial Video Creator
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#certifications" className="hover:text-blue-400 transition-colors">
              Certifications
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#why-hire-me" className="hover:text-blue-400 transition-colors">
              Why Hire Me
            </a>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Services
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-blue-400 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={onOpenMeeting}
              className="hover:text-blue-400 transition-colors"
            >
              Schedule Call
            </button>
            <button
              onClick={onOpenCopilot}
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              AI Copilot
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Naresh Rathod. Handcrafted with precision. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.socialLinks.googleSkills}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google Skills</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href={PERSONAL_INFO.socialLinks.certX}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>CertX Ledger</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors ml-2"
              title="Back to top"
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
