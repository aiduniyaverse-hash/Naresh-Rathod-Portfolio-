import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Award, CheckCircle2, X, Eye } from 'lucide-react';
import { CERTIFICATIONS, Certificate } from '../data/portfolioData.ts';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Verified Technical Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
              Certifications &amp; Accreditations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Click any certificate to open the high-resolution lightbox with official verification links and ledger IDs.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel-interactive p-6 rounded-2xl cursor-pointer relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Background gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                {/* Header: Issuer and Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      {cert.issuerLogoText}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {cert.badgeText}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 font-mono">
                    <span>Issued {cert.issueDate}</span>
                    {cert.credentialId && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate max-w-[180px]">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* Key Skills Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[11px] text-slate-400">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 group-hover:text-cyan-300">
                <span className="flex items-center gap-1 font-medium">
                  <Eye className="w-3.5 h-3.5" /> View Certificate Lightbox
                </span>
                <span className="text-slate-500 group-hover:text-slate-300 font-mono text-[11px]">
                  Click to Expand
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020617]/85 backdrop-blur-xl animate-fade-in"
        >
          <div className="w-full max-w-3xl bg-[#090D1F] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-white font-heading">
                  Verified Credential Details
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Simulated Certificate Display Frame */}
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-slate-900 to-[#020617] border-2 border-slate-700/80 shadow-2xl relative space-y-5 text-center">
                {/* Header Logo */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-left">
                  <div>
                    <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest">
                      Official Certificate of Completion
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white font-heading mt-0.5">
                      {selectedCert.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {selectedCert.issuer}
                  </span>
                </div>

                {/* Recipient */}
                <div className="py-2 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                    Proudly Awarded To
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 font-heading">
                    Naresh Rathod
                  </h4>
                  <p className="text-xs text-slate-400">
                    For demonstrated mastery in {selectedCert.skills.slice(0, 3).join(', ')}
                  </p>
                </div>

                {/* Signers / Authorities */}
                {selectedCert.signers && selectedCert.signers.length > 0 && (
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                    {selectedCert.signers.map((signer, index) => (
                      <div key={index} className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
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
                    <span className="text-cyan-400">ID: {selectedCert.credentialId}</span>
                  )}
                </div>
              </div>

              {/* Skills Validated */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Validated Competencies &amp; Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs bg-slate-900 text-slate-200 border border-slate-800 flex items-center gap-1.5"
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
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Status: Cryptographically Verified
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg border border-slate-700 transition-colors"
                >
                  Close
                </button>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-900/40 transition-all"
                  >
                    <span>Verify on Official Issuer Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
