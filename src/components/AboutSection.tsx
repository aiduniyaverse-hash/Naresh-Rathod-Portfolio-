import React from 'react';
import { Bot, Sparkles, Code2, Video, Workflow, ShieldCheck, MapPin, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Bot,
      title: 'Agentic AI & Automation',
      desc: 'Architecting autonomous multi-agent systems, tool calling, reflection loops, and zero-touch enterprise workflows.',
    },
    {
      icon: Code2,
      title: 'Modern Web & Vibe Coding',
      desc: 'Rapid full-stack delivery with React 19, Next.js, and TypeScript powered by AI dev flow (Cursor, Windsurf, Claude).',
    },
    {
      icon: Video,
      title: 'AI Video Creation & Ads',
      desc: 'Producing cinema-grade 15s–60s commercial ads and viral 9:16 reels with Runway Gen-3, Google Veo, and ElevenLabs.',
    },
    {
      icon: Sparkles,
      title: 'High-Converting Creative Direction',
      desc: 'Engineering 0–3s retention hooks, synthetic VFX, and multi-modal ad campaigns that maximize CTR and brand ROI.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Core Specialization &amp; Vision
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
                About Naresh Rathod
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              I am an AI engineer and creative technologist at the intersection of <strong className="text-white">Agentic AI</strong>, modern web development through <strong className="text-cyan-300">Vibe Coding</strong>, and <strong className="text-rose-400">AI Video Creation with Commercial Ads</strong>. Dual-certified by <strong className="text-white">Google</strong> (Introduction to Generative AI) and <strong className="text-white">be10x</strong> (AI Tools &amp; Claude Workshop with CertX Verification), alongside Outskill&apos;s Gen AI Engineering Mastermind.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Through <strong className="text-slate-200">Vibe Coding</strong>, I build and ship production-ready web applications at 10x developer velocity using Cursor, Next.js, and modern AI scaffolds. Simultaneously, I spearhead <strong className="text-slate-200">AI Video Creation &amp; AI Ads</strong>, directing synthetic 15s–60s commercials, viral 9:16 vertical reels, and high-retention social ads using Runway Gen-3, Google Veo, and ElevenLabs voice acting.
            </p>

            {/* Strategic Mission Goal */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-blue-950/30 to-purple-950/30 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Strategic Engineering &amp; Creative Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.goals}
              </p>
            </div>

            {/* Trust Markers */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dual-Certified by Google &amp; Be10x</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-4 h-4 text-purple-400" />
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
                  className="p-5 rounded-2xl glass-panel border border-slate-800/90 hover:border-slate-700 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
