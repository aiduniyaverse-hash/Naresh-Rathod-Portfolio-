import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Bot,
  ShieldCheck,
  MapPin,
  FileText,
  ChevronDown,
  ExternalLink,
  Award,
  Linkedin,
  Mail,
  Zap,
} from 'lucide-react';
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
    const typingSpeed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 2400);
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
      {/* Subtle ambient light gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter availability status badge & location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/30 text-emerald-300 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Open to AI Engineering &amp; Automation Roles</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs text-slate-400 font-normal">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{PERSONAL_INFO.location}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Global Remote Friendly</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-mono text-cyan-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Autonomous AI Systems · Vibe Coding · Commercial Media</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading text-balance leading-[1.05]">
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Dynamic typing role switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-9 sm:h-11 flex items-center"
            >
              <p className="text-lg sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-cyan-300 font-heading">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 h-5 sm:h-7 bg-blue-400 ml-1 animate-pulse align-middle" />
              </p>
            </motion.div>

            {/* Professional Tagline */}
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-blue-500/80 pl-4 py-0.5"
            >
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed"
            >
              Dual-certified by <strong className="text-white font-medium">Google</strong> and{' '}
              <strong className="text-white font-medium">be10x</strong> with cryptographic CertX verification, alongside Outskill&apos;s Gen AI Engineering Mastermind. Architecting autonomous multi-agent swarms, self-healing automation pipelines, and high-converting commercial media experiences.
            </motion.p>

            {/* Social & Credential Quick Links Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 pt-1 text-slate-400 text-xs"
            >
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.googleSkills}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-all"
                title="Google Cloud Skills Boost"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Badge</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.certX}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-all"
                title="CertX Cryptographic Ledger"
              >
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>CertX Ledger</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.email}
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-all"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-3.5"
            >
              <button
                onClick={onOpenCopilot}
                className="btn-primary-gradient flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm group"
              >
                <Sparkles className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
                <span>Interact with AI Copilot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#certifications"
                className="flex items-center gap-2 px-4.5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-xs sm:text-sm border border-white/[0.08] hover:border-white/[0.2] transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Certifications</span>
              </a>

              <button
                onClick={onOpenMeeting}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white font-medium text-xs sm:text-sm border border-white/[0.06] transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Schedule 1-on-1 Call</span>
                <span className="sm:hidden">Book Call</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-3 rounded-xl text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium transition-colors"
                title="Download ATS Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Recruiter HUD & Visual Identity */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-7 rounded-2xl relative border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-6"
            >
              {/* Top Bar with Live Indicator */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-mono text-slate-200 uppercase tracking-wider font-semibold">
                    Recruiter Snapshot
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  Full-Stack Ready
                </span>
              </div>

              {/* Handcrafted Visual Portrait / Architect Avatar */}
              <div className="relative flex items-center justify-center py-4">
                {/* Concentric Ambient Glow Rings */}
                <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-2xl pointer-events-none" />

                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0b1120] to-[#030712] border border-white/[0.1] flex flex-col items-center justify-center relative overflow-hidden group">
                    {/* Futuristic Grid Pattern in Avatar Box */}
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 font-heading tracking-tight">
                        NR
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                        AI Engineer
                      </span>
                    </div>

                    <div className="absolute bottom-1.5 flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge Left */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-0 top-2 px-2.5 py-1 rounded-lg bg-[#0b1120]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Google Gen AI</span>
                </motion.div>

                {/* Floating Micro Badge Right */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-0 bottom-4 px-2.5 py-1 rounded-lg bg-[#0b1120]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Vibe Coder</span>
                </motion.div>
              </div>

              {/* Verified Credentials Highlight */}
              <div className="space-y-2.5">
                <div className="text-xs text-slate-400 font-medium">Verified Accreditations:</div>
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
                    <span className="flex items-center gap-2 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Google Gen AI Certified
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">ID: 28622606</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
                    <span className="flex items-center gap-2 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                      Be10x AI Tools &amp; Claude
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">CertX Verified</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
                    <span className="flex items-center gap-2 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Outskill Mastermind
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Autonomous Swarms</span>
                  </div>
                </div>
              </div>

              {/* Key Technical Focus Areas */}
              <div className="pt-2 border-t border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-2">
                  Specialized Architectures
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">Vibe Coding</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">AI Video &amp; Ads</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">Autonomous Swarms</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">Runway &amp; Veo VFX</span>
                </div>
              </div>

              {/* Interactive prompt preview button */}
              <button
                onClick={onOpenCopilot}
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Test Naresh&apos;s AI Agent Digital Twin</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Quantified Impact Metrics Bar (Tabular figures) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
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
              10<span className="text-emerald-400">x</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Developer Velocity via Vibe Coding</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              &lt; 100<span className="text-purple-400">ms</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Flash-Lite AI Response Latency</div>
          </div>
        </motion.div>

        {/* Animated subtle scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors group"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
