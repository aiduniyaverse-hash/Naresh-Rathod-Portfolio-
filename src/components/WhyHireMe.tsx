import React from 'react';
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
  const getIcon = (title: string) => {
    switch (title) {
      case 'Agentic AI Mastery':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'End-to-End Automation':
        return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'Vibe Coding Velocity':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Commercial Media Creation':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Certified Competence':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Business ROI Focus':
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'Prompt Architecture':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Fast Adaptive Learning':
        return <Brain className="w-5 h-5 text-teal-400" />;
      case 'Obsession with Polish':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Reliable Communication':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-hire-me" className="py-20 sm:py-28 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Strategic Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Why Hire Naresh Rathod
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Combining deep architectural knowledge in autonomous agents with the rapid shipping power of Vibe Coding and high-converting commercial media production.
          </p>
        </div>

        {/* 10 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY_HIRE_ME.map((item) => (
            <div
              key={item.title}
              className="glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.title)}
                </div>
                <h3 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
