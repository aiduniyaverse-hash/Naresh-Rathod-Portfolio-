import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Wrench, Sparkles, Bot, Code2, Video, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, AI_TOOLS } from '../data/portfolioData.ts';

export const SkillsSection: React.FC = () => {
  const [toolCategory, setToolCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toolCategories = ['All', 'LLM & Reasoning', 'Coding & IDE', 'App Builders', 'Video & Media'];

  const filteredTools = AI_TOOLS.filter((tool) => {
    const matchesCat = toolCategory === 'All' || tool.category === toolCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getCategoryIcon = (index: number) => {
    if (index === 0) return <Bot className="w-5 h-5 text-blue-400" />;
    if (index === 1) return <Code2 className="w-5 h-5 text-indigo-400" />;
    return <Video className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Technical Competence &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
            Skills &amp; AI Tools Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive matrix of technical capabilities spanning autonomous multi-agent engineering, rapid full-stack delivery through Vibe Coding, cinema-grade AI video creation &amp; commercial ads, and 15+ specialized AI foundation tools.
          </p>
        </div>

        {/* 1. Core Engineering Competencies Grid - Replaced Simple Progress Bars with Premium Interactive Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-white/[0.14] transition-all"
            >
              <div className="space-y-3 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-sm">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{category.description}</p>
              </div>

              {/* Premium Interactive Skill Cards instead of basic flat progress bars */}
              <div className="space-y-3.5 pt-1 flex-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2 group/skill"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200 group-hover/skill:text-blue-300 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-cyan-400 text-[11px]">
                        <span className="text-[10px] text-slate-500 uppercase">Mastery</span>
                        <span className="font-bold tabular-nums">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Segmented High-Precision Level Visualizer */}
                    <div className="grid grid-cols-10 gap-1 h-1.5 w-full">
                      {Array.from({ length: 10 }).map((_, segIdx) => {
                        const filled = (segIdx + 1) * 10 <= skill.level;
                        return (
                          <div
                            key={segIdx}
                            className={`h-full rounded-sm transition-all duration-300 ${
                              filled
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_6px_rgba(59,130,246,0.3)]'
                                : 'bg-white/[0.06]'
                            }`}
                          />
                        );
                      })}
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono tracking-tight pt-0.5">
                      {skill.tags}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. 15+ AI Foundation Tools Grid */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 font-medium">
                <Wrench className="w-3.5 h-3.5" />
                <span>Modern AI Toolkit</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
                15+ Mastered AI Platforms &amp; Engines
              </h3>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg text-xs bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-x-auto">
                {toolCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setToolCategory(cat)}
                    className={`px-3 py-1 text-xs rounded-lg font-medium whitespace-nowrap transition-all ${
                      toolCategory === cat
                        ? 'bg-white/[0.1] text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-4.5 rounded-xl glass-panel-interactive border border-white/[0.06] space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm"
                    style={{ backgroundColor: `${tool.color}15`, color: tool.color, border: `1px solid ${tool.color}35` }}
                  >
                    {tool.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {tool.category.split(' ')[0]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
