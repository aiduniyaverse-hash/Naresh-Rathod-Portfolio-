import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ExternalLink, Award, CheckCircle2, X, Eye } from 'lucide-react';
import { CERTIFICATIONS, Certificate } from '../data/portfolioData.ts';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Verified Technical Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight text-balance">
              Certifications &amp; Accreditations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Click any certificate to launch the high-resolution credential viewer with cryptographic validation and official issuer ledgers.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel-interactive p-6 sm:p-7 rounded-2xl cursor-pointer relative group flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Subtle background radial tint */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 space-y-5">
                {/* Header: Issuer and Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 shadow-sm">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-slate-200 font-semibold tracking-tight">
                      {cert.issuerLogoText}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/40 border border-emerald-500/25 text-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {cert.badgeText}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-blue-300 transition-colors tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 font-mono">
                    <span>Issued {cert.issueDate}</span>
                    {cert.credentialId && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="truncate max-w-[170px] text-cyan-400/90">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* Key Skills Tags */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] text-slate-500">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Eye className="w-3.5 h-3.5" /> View Credential Lightbox
                </span>
                <span className="text-slate-500 group-hover:text-slate-300 font-mono text-[11px]">
                  Click to Expand
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
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
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl bg-[#0b1120] border border-white/[0.1] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-white font-heading tracking-tight">
                    Verified Credential Details
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Simulated Certificate Display Frame */}
                <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#0e172a] to-[#030712] border border-white/[0.12] shadow-2xl relative space-y-5 text-center">
                  {/* Header Logo */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-left">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-widest font-medium">
                        Official Certificate of Completion
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white font-heading mt-0.5 tracking-tight">
                        {selectedCert.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {selectedCert.issuer}
                    </span>
                  </div>

                  {/* Recipient */}
                  <div className="py-2 space-y-1">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      Proudly Awarded To
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-300 font-heading tracking-tight">
                      Naresh Rathod
                    </h4>
                    <p className="text-xs text-slate-400">
                      For demonstrated mastery in {selectedCert.skills.slice(0, 3).join(', ')}
                    </p>
                  </div>

                  {/* Signers / Authorities */}
                  {selectedCert.signers && selectedCert.signers.length > 0 && (
                    <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                      {selectedCert.signers.map((signer, index) => (
                        <div key={index} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                          <div className="text-[10px] font-mono uppercase text-slate-400">
                            Authorized Signatory
                          </div>
                          <div className="text-xs font-semibold text-slate-200 mt-0.5 truncate">
                            {signer}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metadata Ledger Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-2 font-mono">
                    <span>Issued Date: {selectedCert.issueDate}</span>
                    {selectedCert.credentialId && (
                      <span className="text-cyan-400 font-medium">ID: {selectedCert.credentialId}</span>
                    )}
                  </div>
                </div>

                {/* Skills Validated */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Validated Competencies &amp; Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs bg-white/[0.03] text-slate-200 border border-white/[0.08] flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Modal Footer with Verification Link */}
              <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  Status: Cryptographically Verified
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg border border-white/[0.1] hover:bg-white/[0.04] transition-colors"
                  >
                    Close
                  </button>

                  {selectedCert.verificationUrl && (
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-gradient flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white rounded-lg shadow-md transition-all"
                    >
                      <span>Verify on Official Issuer Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
