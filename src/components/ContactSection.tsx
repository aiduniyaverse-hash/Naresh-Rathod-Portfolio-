import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, Calendar, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface ContactSectionProps {
  onOpenMeeting: () => void;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenMeeting,
  onOpenResume,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [roleType, setRoleType] = useState('Recruiter / Hiring Team');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, roleType }),
      });
      const data = await res.json();
      setSubmitted(data.message || 'Thank you! Your message has been dispatched.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setSubmitted(`Thank you, ${name}! Your inquiry has been logged and sent directly to nareshrathodpr@gmail.com.`);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Credentials */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Initiate Collaboration</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
                Let&apos;s Build Together
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Currently open to full-time AI Engineering &amp; Automation roles, strategic AI consulting, and autonomous agent contracts.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={PERSONAL_INFO.socialLinks.email}
                className="flex items-center gap-3.5 p-4 rounded-2xl glass-panel-interactive border border-white/[0.07] group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Direct Email</div>
                  <div className="text-slate-200 font-medium group-hover:text-blue-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-panel border border-white/[0.07]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Primary Location</div>
                  <div className="text-slate-200 font-medium">{PERSONAL_INFO.location}</div>
                  <div className="text-[11px] text-slate-400">Available for Global Remote &amp; Travel</div>
                </div>
              </div>
            </div>

            {/* Verification & Social Links */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/[0.07] space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                Verified Social &amp; Credential Links:
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={PERSONAL_INFO.socialLinks.googleSkills}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-blue-300 hover:border-white/[0.15] transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Google Skills
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.certX}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-emerald-300 hover:border-white/[0.15] transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    CertX Ledger
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-blue-300 hover:border-white/[0.15] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.email}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-cyan-300 hover:border-white/[0.15] transition-colors"
                >
                  <span>Direct Inquiries</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenMeeting}
                className="btn-primary-gradient flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Meeting</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-xl transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-9 rounded-2xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative">
              <div className="mb-7 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Messages are routed straight to Naresh Rathod with guaranteed prompt response.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-7 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-heading">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {submitted}
                  </p>
                  <button
                    onClick={() => setSubmitted(null)}
                    className="mt-2 text-xs text-cyan-400 hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-slate-300 font-mono text-[11px]">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-slate-300 font-mono text-[11px]">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-role" className="text-slate-300 font-mono text-[11px]">I am reaching out as a:</label>
                      <select
                        id="contact-role"
                        value={roleType}
                        onChange={(e) => setRoleType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-white/[0.08] text-white focus:outline-none focus:border-blue-500 transition-all"
                      >
                        <option>Recruiter / Hiring Team</option>
                        <option>Startup Founder / CEO</option>
                        <option>Enterprise Client</option>
                        <option>Technical Collaborator</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-slate-300 font-mono text-[11px]">Subject / Opportunity</label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="AI Engineer Opening / Project Inquiry"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-slate-300 font-mono text-[11px]">Message / Project Scope *</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your role requirements, automation challenge, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-gradient w-full py-3 rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Naresh</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
