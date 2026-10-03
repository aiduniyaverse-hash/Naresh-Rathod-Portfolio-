import React, { useState } from 'react';
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020617]/85 backdrop-blur-xl animate-fade-in print:p-0 print:bg-white"
    >
      <div className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="px-6 py-3.5 border-b border-slate-800 bg-slate-950 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-slate-300">
              ATS-Optimized Executive Resume · Naresh Rathod
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-950/80 text-slate-100 font-sans space-y-8 print:bg-white print:text-black print:overflow-visible print:p-0">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-cyan-400 mt-1 print:text-slate-800">
              {PERSONAL_INFO.headline}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-3 font-mono print:text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
              <span aria-hidden="true">·</span>
              <span>Open to Relocation &amp; Global Remote</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.bio} Specialized in agentic systems, Vibe Coding, prompt architecture, and multi-modal commercial video production.
            </p>
          </div>

          {/* Verified Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold">
              Verified Certifications &amp; Accreditations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 print:bg-transparent print:border-slate-300"
                >
                  <div className="font-bold text-white print:text-black">{cert.title}</div>
                  <div className="text-slate-400 print:text-slate-600 mt-0.5">
                    {cert.issuer} · Issued {cert.issueDate}
                  </div>
                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-cyan-400 print:text-blue-700 mt-1">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold">
              Core Technical Competencies
            </h2>
            <div className="space-y-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <strong className="text-white print:text-black font-semibold">
                    {cat.title}:
                  </strong>{' '}
                  <span className="text-slate-300 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
              <div>
                <strong className="text-white print:text-black font-semibold">
                  AI Tools &amp; Video Suite:
                </strong>{' '}
                <span className="text-slate-300 print:text-slate-700">
                  Claude 3.7, Gemini 3, ChatGPT, DeepSeek, Cursor AI, Windsurf AI, Lovable, Bolt.new, v0.dev, Runway Gen-3 Alpha, Google Veo, Kling AI, Luma Dream Machine, ElevenLabs, Midjourney v6
                </span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold">
              Featured Production Work
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white print:text-black">
                    Autonomous Agentic AI Workflow Platform
                  </span>
                  <span className="font-mono text-slate-400 print:text-slate-600">TypeScript · Claude · Gemini</span>
                </div>
                <p className="text-slate-300 print:text-slate-700 mt-0.5">
                  Engineered multi-agent collaboration platform with tool calling, DAG sub-task decomposition, and self-healing reflection loops.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white print:text-black">
                    High-Velocity Vibe-Coded Web Platform
                  </span>
                  <span className="font-mono text-slate-400 print:text-slate-600">React 19 · Next.js · TypeScript · Tailwind</span>
                </div>
                <p className="text-slate-300 print:text-slate-700 mt-0.5">
                  Architected and shipped production web app via AI-accelerated Vibe Coding with zero-pill editorial polish, sub-100ms interaction latency, and 100/100 Lighthouse score.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white print:text-black">
                    AI Commercial Video Studio &amp; Ad Campaigns
                  </span>
                  <span className="font-mono text-slate-400 print:text-slate-600">Runway Gen-3 · Google Veo · ElevenLabs</span>
                </div>
                <p className="text-slate-300 print:text-slate-700 mt-0.5">
                  Directed cinematic 15s–60s video ads and high-converting 9:16 vertical reels with custom neural voiceovers reaching 500k+ organic impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
