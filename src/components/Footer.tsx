import React from 'react';
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
  return (
    <footer className="border-t border-slate-900 bg-[#01040f] py-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-white font-heading">
              Naresh Rathod
            </span>
            <p className="text-xs text-slate-400">
              Agentic AI &amp; Automation Specialist · Modern Web Developer · Mumbai, India
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">
              Certifications
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={onOpenMeeting}
              className="hover:text-cyan-400 transition-colors"
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

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Naresh Rathod. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.googleSkills}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200"
            >
              Google Skills Verified
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.socialLinks.certX}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200"
            >
              CertX Ledger
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
