import React from 'react';
import {
  Workflow,
  Bot,
  Globe,
  Layout,
  Code2,
  Compass,
  Sliders,
  MessageSquare,
  Sparkles,
  Video,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData.ts';

interface ServicesSectionProps {
  onOpenMeeting: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenMeeting }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'cpu':
        return <Bot className="w-5 h-5 text-purple-400" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'sliders':
        return <Sliders className="w-5 h-5 text-teal-400" />;
      case 'message-circle':
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'film':
      case 'smartphone':
        return <Video className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Contract &amp; Consulting Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
              Specialized Services
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Turnkey AI solutions and rapid full-stack engineering tailored for startups, enterprise operations, and brands.
            </p>
          </div>

          <button
            onClick={onOpenMeeting}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.title}
              className="glass-panel-interactive p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {srv.turnaround}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <button
                  onClick={onOpenMeeting}
                  className="w-full py-2 text-xs font-medium text-slate-400 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
