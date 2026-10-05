import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, Download, ShieldCheck, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Location: ${PERSONAL_INFO.location} | Email: ${PERSONAL_INFO.email}

## SUMMARY
${PERSONAL_INFO.bio}

## VERIFIED CERTIFICATIONS
- Google: Introduction to Generative AI (ID: 28622606)
- Be10x: AI Tools & Claude Workshop (CertX Verified, ID: 0270772f-3809-4400-b29b-1e1c61cd09971812514)
- Outskill: Gen AI Engineering Mastermind (Completed October 2026)

## CORE COMPETENCIES
- Agentic AI & Swarms, Tool Calling, DAG Decomposition, ReAct Loops
- Modern Web Development & Vibe Coding: React 19, Next.js, TypeScript, Tailwind CSS, Cursor, Windsurf
- AI Video Creation & AI Ads: Runway Gen-3 Alpha, Google Veo, Kling AI, ElevenLabs, Commercial Video Ads (16:9 & 9:16)
- Frontier LLMs & Vision: Claude 3.7, Gemini 3, DeepSeek, ChatGPT, Midjourney
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#030712]/85 backdrop-blur-2xl print:p-0 print:bg-white"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl max-h-[92vh] bg-[#0b1120] border border-white/[0.1] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black"
          >
            {/* Modal Top Control Bar (Hidden on print) */}
            <div className="px-6 py-3.5 border-b border-white/[0.08] bg-[#030712]/60 flex items-center justify-between print:hidden">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-300">
                  ATS-Optimized Executive Resume · Naresh Rathod
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-lg transition-colors"
                  title="Copy as plain Markdown for recruiters"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Markdown' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="btn-primary-gradient flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg transition-all"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors ml-1"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body (Clean white paper style on print, dark luxury in viewer) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 text-xs sm:text-sm print:p-0 print:text-black">
              {/* Header */}
              <div className="border-b border-white/[0.1] print:border-black/20 pb-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black font-heading tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                    Open to AI Engineering &amp; Automation Roles
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-300 print:text-slate-800">
                  {PERSONAL_INFO.headline}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-slate-600 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {PERSONAL_INFO.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {PERSONAL_INFO.email}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Global Remote Friendly</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1">
                  Professional Executive Summary
                </h2>
                <p className="text-slate-300 print:text-slate-800 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Verified Accreditations */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1">
                  Verified Industry Certifications &amp; Accreditations
                </h2>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <div className="font-bold text-white print:text-black flex items-center gap-1.5">
                          <span>{cert.title}</span>
                          <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                            — {cert.issuer}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                          {cert.issueDate}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 print:text-slate-700">
                        {cert.description}
                      </p>
                      {cert.credentialId && (
                        <div className="text-[11px] font-mono text-slate-500 print:text-slate-600">
                          Credential ID: {cert.credentialId} (Blockchain / Official Issuer Ledger Validated)
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technical Competencies */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1">
                  Technical Core Competencies &amp; Matrix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.title} className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-slate-300 print:bg-slate-50">
                      <div className="font-semibold text-white print:text-black text-xs">
                        {cat.title}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300 print:text-slate-700">
                        {cat.skills.map((s) => (
                          <li key={s.name} className="flex justify-between">
                            <span>{s.name}</span>
                            <span className="font-mono text-cyan-400 print:text-slate-600 text-[11px]">
                              {s.level}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialized AI Foundation Platforms */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1">
                  Frontier AI Tools &amp; Model Ecosystem
                </h2>
                <div className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                  <strong className="text-white print:text-black font-semibold">
                    AI Tools &amp; Video Suite:
                  </strong>{' '}
                  <span className="text-slate-300 print:text-slate-700">
                    Claude 3.7 / Sonnet, Gemini 3, ChatGPT (GPT-4o), DeepSeek, Perplexity AI, Cursor AI, Windsurf AI, Runway Gen-3 Alpha, Google Veo, Kling AI, Luma Dream Machine, ElevenLabs, Midjourney v6, Canva AI.
                  </span>
                </div>
              </div>

              {/* Featured Production Work */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1">
                  Selected Production Engineering Highlights
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white print:text-black">
                        Autonomous Agentic AI Workflow Platform
                      </span>
                      <span className="font-mono text-slate-400 print:text-slate-600">TypeScript · Claude 3.7 · Gemini 3</span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 mt-0.5 leading-relaxed">
                      Orchestrated autonomous LLM agent swarms with Directed Acyclic Graphs (DAG) decomposition, self-healing reflection loops, and automated tool calling across enterprise databases. Achieved 78% reduction in manual execution bottlenecks.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white print:text-black">
                        Modern Web Development Platform (Vibe Coding)
                      </span>
                      <span className="font-mono text-slate-400 print:text-slate-600">Next.js 15 · React 19 · Cursor / Windsurf</span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 mt-0.5 leading-relaxed">
                      Engineered rapid full-stack applications with modern responsive architectures, real-time streaming LLM integration, and sub-100ms UI latency, delivering MVPs at 10x velocity.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white print:text-black">
                        Cinema-Grade AI Commercial Video &amp; Ad Suite
                      </span>
                      <span className="font-mono text-slate-400 print:text-slate-600">Runway Gen-3 · Google Veo · ElevenLabs</span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 mt-0.5 leading-relaxed">
                      Directed turnkey 15s to 60s commercial video advertisements, 9:16 vertical reels, and high-retention social campaigns with synthetic camera choreography, neural voice cloning, and audio mastering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
