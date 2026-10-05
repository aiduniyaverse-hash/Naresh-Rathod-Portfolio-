import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Sparkles,
  Code2,
  Video,
  ShieldCheck,
  MapPin,
  Target,
  Clock,
  Briefcase,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_TIMELINE } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'journey'>('overview');

  const pillars = [
    {
      icon: Bot,
      title: 'Agentic AI & Automation',
      desc: 'Architecting autonomous multi-agent systems, tool calling, reflection loops, and zero-touch enterprise workflows.',
      accent: 'from-blue-500/10 via-transparent to-transparent',
      iconColor: 'text-blue-400',
    },
    {
      icon: Code2,
      title: 'Modern Web & Vibe Coding',
      desc: 'Rapid full-stack delivery with React 19, Next.js, and TypeScript powered by modern AI dev flow (Cursor, Windsurf, Claude).',
      accent: 'from-indigo-500/10 via-transparent to-transparent',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Video,
      title: 'AI Video Creation & Ads',
      desc: 'Producing cinema-grade 15s–60s commercial ads and viral 9:16 reels with Runway Gen-3, Google Veo, and ElevenLabs.',
      accent: 'from-purple-500/10 via-transparent to-transparent',
      iconColor: 'text-purple-400',
    },
    {
      icon: Sparkles,
      title: 'High-Converting Creative Direction',
      desc: 'Engineering 0–3s retention hooks, synthetic VFX, and multi-modal ad campaigns that maximize CTR and brand ROI.',
      accent: 'from-cyan-500/10 via-transparent to-transparent',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Core Specialization &amp; Vision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
              About Naresh Rathod
            </h2>
          </div>

          {/* Segmented Control: Overview vs AI Journey Timeline */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'bg-white/[0.1] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview &amp; Pillars
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'journey'
                  ? 'bg-white/[0.1] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>AI Journey &amp; Timeline</span>
            </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
          /* Tab 1: Overview Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Personal Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I am an AI engineer and creative technologist at the intersection of{' '}
                <strong className="text-white font-semibold">Agentic AI</strong>, modern web development through{' '}
                <strong className="text-blue-300 font-semibold">Vibe Coding</strong>, and{' '}
                <strong className="text-purple-300 font-semibold">AI Video Creation with Commercial Ads</strong>. Dual-certified by{' '}
                <strong className="text-white font-semibold">Google</strong> (Introduction to Generative AI) and{' '}
                <strong className="text-white font-semibold">be10x</strong> (AI Tools &amp; Claude Workshop with CertX Verification), alongside Outskill&apos;s Gen AI Engineering Mastermind.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Through <strong className="text-slate-200">Vibe Coding</strong>, I build and ship production-ready web applications at 10x developer velocity using Cursor, Next.js, and modern AI scaffolds. Simultaneously, I spearhead <strong className="text-slate-200">AI Video Creation &amp; AI Ads</strong>, directing synthetic 15s–60s commercials, viral 9:16 vertical reels, and high-retention social ads using Runway Gen-3, Google Veo, and ElevenLabs voice acting.
              </p>

              {/* Strategic Mission Goal Card */}
              <div className="p-6 rounded-2xl glass-panel relative border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Strategic Engineering &amp; Creative Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.goals}
                </p>
              </div>

              {/* Trust Markers */}
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Based in {PERSONAL_INFO.location}</span>
                </div>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dual-Certified by Google &amp; Be10x</span>
                </div>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Continuous Experimenter</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Core Pillars Bento Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 sm:p-6 rounded-2xl glass-panel-interactive relative overflow-hidden flex flex-col justify-between space-y-4 group"
                  >
                    {/* Subtle corner gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none`}
                    />

                    <div className="relative z-10 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-semibold text-white font-heading tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Tab 2: AI Journey Timeline */
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
                Milestones &amp; Evolution
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                Chronological AI &amp; Engineering Journey
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-8">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.role + item.period}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-blue-500 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300" />
                  </div>

                  {/* Timeline Card */}
                  <div className="p-6 rounded-2xl glass-panel-interactive border border-white/[0.08] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
                          {item.type}
                        </span>
                        <h4 className="text-lg font-bold text-white font-heading tracking-tight mt-0.5">
                          {item.role}
                        </h4>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.company}</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
