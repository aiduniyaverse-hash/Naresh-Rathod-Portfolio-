import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Workflow,
  Bot,
  Terminal,
  Code2,
  Zap,
  Lightbulb,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { WHY_HIRE_ME } from '../data/portfolioData.ts';

export const WhyHireMe: React.FC = () => {
  const getIconData = (title: string) => {
    switch (title) {
      case 'Agentic AI Mastery':
        return { icon: Bot, color: 'text-blue-400', bg: 'from-blue-500/10' };
      case 'End-to-End Automation':
        return { icon: Workflow, color: 'text-purple-400', bg: 'from-purple-500/10' };
      case 'Vibe Coding Velocity':
        return { icon: Zap, color: 'text-amber-400', bg: 'from-amber-500/10' };
      case 'Commercial Media Creation':
        return { icon: Sparkles, color: 'text-rose-400', bg: 'from-rose-500/10' };
      case 'Certified Competence':
        return { icon: CheckCircle2, color: 'text-emerald-400', bg: 'from-emerald-500/10' };
      case 'Business ROI Focus':
        return { icon: TrendingUp, color: 'text-cyan-400', bg: 'from-cyan-500/10' };
      case 'Prompt Architecture':
        return { icon: Terminal, color: 'text-indigo-400', bg: 'from-indigo-500/10' };
      case 'Fast Adaptive Learning':
        return { icon: Brain, color: 'text-teal-400', bg: 'from-teal-500/10' };
      case 'Obsession with Polish':
        return { icon: Lightbulb, color: 'text-amber-300', bg: 'from-amber-500/10' };
      case 'Reliable Communication':
        return { icon: Code2, color: 'text-sky-400', bg: 'from-sky-500/10' };
      default:
        return { icon: Sparkles, color: 'text-cyan-400', bg: 'from-blue-500/10' };
    }
  };

  return (
    <section id="why-hire-me" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Strategic Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
            Why Hire Naresh Rathod
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
            Combining deep architectural knowledge in autonomous agents with the rapid shipping power of Vibe Coding and high-converting commercial media production.
          </p>
        </div>

        {/* 10 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY_HIRE_ME.map((item, index) => {
            const { icon: Icon, color, bg } = getIconData(item.title);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel-interactive p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between group space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle top corner ambient glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${bg} via-transparent to-transparent opacity-30 group-hover:opacity-70 transition-opacity pointer-events-none`}
                />

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white font-heading group-hover:text-blue-300 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
