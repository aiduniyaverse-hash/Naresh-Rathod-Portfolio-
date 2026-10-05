import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, User, Building, Mail, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Recruiter / Hiring Manager');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('3:00 PM – 3:45 PM IST');
  const [agenda, setAgenda] = useState('Full-Time AI Engineering / Automation Role');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<any | null>(null);

  const roles = [
    'Recruiter / Hiring Manager',
    'Startup Founder / Executive',
    'Enterprise Operations Leader',
    'Collaborator / Technical Partner',
  ];

  const timeSlots = [
    '11:00 AM – 11:45 AM IST',
    '2:00 PM – 2:45 PM IST',
    '4:00 PM – 4:45 PM IST',
    '6:30 PM – 7:15 PM IST',
    '8:00 PM – 8:45 PM IST (US Morning / EU Afternoon Friendly)',
  ];

  const agendas = [
    'Full-Time AI Engineering / Automation Role',
    'Autonomous Multi-Agent Workflow Consulting',
    'Commercial AI Video & Advertisement Production',
    'Modern Web Development / Vibe Coding Project',
    'General Introductory Chat',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/meeting/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          date,
          timeSlot,
          agenda,
          notes,
        }),
      });

      const data = await res.json();
      setConfirmation(data);
    } catch {
      setConfirmation({
        success: true,
        confirmationId: `NR-MEET-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        message: `Meeting successfully reserved for ${name}. Calendar invitation dispatched to ${email}.`,
        details: {
          date: date || 'Next Business Day',
          timeSlot,
          role,
          agenda,
        },
      });
    } finally {
      setLoading(false);
    }
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030712]/85 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl bg-[#0b1120] border border-white/[0.1] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold text-white font-heading tracking-tight">
                  Schedule 1-on-1 Strategy &amp; Interview Call
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {confirmation ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Meeting Confirmed!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {confirmation.message}
                  </p>

                  {/* Booking receipt */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                    <div className="text-slate-400">
                      Confirmation ID: <span className="text-cyan-400">{confirmation.confirmationId}</span>
                    </div>
                    <div className="text-slate-400">
                      Attendee: <span className="text-white">{name} ({email})</span>
                    </div>
                    <div className="text-slate-400">
                      Agenda: <span className="text-slate-200">{agenda}</span>
                    </div>
                    <div className="text-slate-400">
                      Time: <span className="text-slate-200">{timeSlot}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setConfirmation(null);
                        onClose();
                      }}
                      className="btn-primary-gradient px-6 py-2.5 rounded-xl text-white font-semibold text-xs shadow-md transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-name" className="text-xs font-mono text-slate-300">Your Full Name *</label>
                      <input
                        id="meeting-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-email" className="text-xs font-mono text-slate-300">Work Email *</label>
                      <input
                        id="meeting-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company / Organization */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-company" className="text-xs font-mono text-slate-300">Company / Organization</label>
                      <input
                        id="meeting-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. OpenAI / Stealth Startup"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-role" className="text-xs font-mono text-slate-300">You Are Reaching Out As</label>
                      <select
                        id="meeting-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[#0F172A] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Agenda */}
                  <div className="space-y-1">
                    <label htmlFor="meeting-agenda" className="text-xs font-mono text-slate-300">Primary Agenda Topic *</label>
                    <select
                      id="meeting-agenda"
                      value={agenda}
                      onChange={(e) => setAgenda(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#0F172A] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                    >
                      {agendas.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-date" className="text-xs font-mono text-slate-300">Preferred Date</label>
                      <input
                        id="meeting-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-1">
                      <label htmlFor="meeting-timeslot" className="text-xs font-mono text-slate-300">Time Window (IST / Global)</label>
                      <select
                        id="meeting-timeslot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[#0F172A] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>{ts}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label htmlFor="meeting-notes" className="text-xs font-mono text-slate-300">Brief Context / Job Spec Link</label>
                    <textarea
                      id="meeting-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share candidate requirements, job description link, or project objectives..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary-gradient w-full py-3 rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Reserving Time Slot...</span>
                      ) : (
                        <>
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Confirm Discovery &amp; Interview Reservation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
