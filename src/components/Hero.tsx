import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Calendar, Bot, ShieldCheck, MapPin, Download, Film } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenCopilot: () => void;
  onOpenMeeting: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCopilot,
  onOpenMeeting,
  onOpenResume,
}) => {
  const roles = [
    'Agentic AI & Automation Specialist',
    'Modern Web Developer (Vibe Coding)',
    'AI Video Creation & AI Ads Specialist',
    'Full-Stack AI Systems Architect',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typing effect for rotating roles
  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullRole.substring(0, displayText.length - 1)
            : currentFullRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden z-10">
      {/* Ambient gradient glow backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter availability status badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open to AI Engineering &amp; Automation Roles</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-normal">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{PERSONAL_INFO.location}</span>
            <span aria-hidden="true">·</span>
            <span>Global Remote Friendly</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-mono text-cyan-400">
                Agentic Systems · Modern Full-Stack · Commercial VFX
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading text-balance leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Dynamic typing role switcher */}
            <div className="h-9 sm:h-12 flex items-center">
              <p className="text-lg sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 h-5 sm:h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>

            {/* Professional Tagline */}
            <blockquote className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl border-l-2 border-cyan-500/60 pl-4 py-1">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Dual-certified by <strong className="text-slate-200">Google</strong> and <strong className="text-slate-200">be10x</strong>, alongside Outskill Mastermind. Architecting autonomous multi-agent swarms, self-healing automation pipelines, and high-converting commercial media experiences.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenCopilot}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group"
              >
                <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Interact with AI Copilot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#certifications"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-500 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Certifications</span>
              </a>

              <button
                onClick={onOpenMeeting}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Schedule 1-on-1 Call</span>
                <span className="sm:hidden">Book Call</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
                title="Download ATS Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Recruiter HUD Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-2xl relative border border-slate-700/70 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    Recruiter Snapshot
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">Live Agent Ready</span>
              </div>

              {/* Verified Credentials highlight */}
              <div className="space-y-2.5">
                <div className="text-xs text-slate-400 font-medium">Verified Accreditations:</div>
                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Google Gen AI Certified
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">ID: 28622606</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                      Be10x AI Tools &amp; Claude
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">CertX Verified</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Outskill Mastermind
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">LLM Swarms</span>
                  </div>
                </div>
              </div>

              {/* Key Technical Focus Areas */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-2">
                  Specialized Architectures
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/50">Vibe Coding</span>
                  <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/50">AI Video &amp; Ads</span>
                  <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/50">Autonomous Swarms</span>
                  <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/50">Runway &amp; Veo VFX</span>
                </div>
              </div>

              {/* Interactive prompt preview button */}
              <button
                onClick={onOpenCopilot}
                className="w-full py-2.5 px-3 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Test Naresh&apos;s AI Agent Digital Twin</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quantified Impact Metrics Bar (Tabular figures) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              3<span className="text-cyan-400">+</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Verified AI Certifications</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              15<span className="text-blue-400">+</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">AI Tools &amp; LLMs Mastered</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              100<span className="text-emerald-400">%</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Autonomous Workflow Precision</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              &lt; 100<span className="text-purple-400">ms</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Flash-Lite AI Response Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
};
