import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Search, Layers, Zap, Wrench } from 'lucide-react';
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

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Technical Competence &amp; Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Skills &amp; AI Tools Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive matrix of technical capabilities spanning autonomous multi-agent engineering, rapid full-stack delivery through Vibe Coding, cinema-grade AI video creation &amp; commercial ads, and 15+ specialized AI foundation tools.
          </p>
        </div>

        {/* 1. Core Engineering Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-heading">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400">{category.description}</p>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4 pt-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-cyan-400 tabular-nums">{skill.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="text-[11px] text-slate-500 font-mono">
                      {skill.tags}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. 15+ AI Foundation Tools Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                <Wrench className="w-4 h-4" />
                <span>Modern AI Toolkit</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mt-1">
                15+ Mastered AI Platforms &amp; Engines
              </h3>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg text-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-900 border border-slate-800 overflow-x-auto">
                {toolCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setToolCategory(cat)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors ${
                      toolCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
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
              <div
                key={tool.name}
                className="p-4 rounded-xl glass-panel-interactive border border-slate-800/80 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                    style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                  >
                    {tool.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {tool.category.split(' ')[0]}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
