import React from 'react';
import { motion } from 'motion/react';
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
    <section id="services" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Contract &amp; Consulting Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
              Specialized Services
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Turnkey AI solutions and rapid full-stack engineering tailored for startups, enterprise operations, and brands.
            </p>
          </div>

          <button
            onClick={onOpenMeeting}
            className="btn-primary-gradient self-start md:self-auto px-5 py-2.5 rounded-xl text-white text-xs font-semibold flex items-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all group"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel-interactive p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6 group shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-sm">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {srv.turnaround}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-blue-300 transition-colors tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={onOpenMeeting}
                  className="w-full py-1 text-xs font-medium text-slate-400 group-hover:text-blue-300 flex items-center justify-between transition-colors"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
