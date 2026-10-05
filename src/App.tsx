import React, { useState } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { CertificationsSection } from './components/CertificationsSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { WhyHireMe } from './components/WhyHireMe.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AICopilotModal } from './components/AICopilotModal.tsx';
import { MeetingModal } from './components/MeetingModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500/20 selection:text-cyan-300">
      {/* Background Neural Particle Canvas */}
      <NeuralCanvas />

      {/* Main Navigation */}
      <Navbar
        onOpenCopilot={() => setCopilotOpen(true)}
        onOpenMeeting={() => setMeetingOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        <Hero
          onOpenCopilot={() => setCopilotOpen(true)}
          onOpenMeeting={() => setMeetingOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        <AboutSection />

        <CertificationsSection />

        <SkillsSection />

        <WhyHireMe />

        <ServicesSection onOpenMeeting={() => setMeetingOpen(true)} />

        <ContactSection
          onOpenMeeting={() => setMeetingOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCopilot={() => setCopilotOpen(true)}
        onOpenMeeting={() => setMeetingOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Modals */}
      <AICopilotModal
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        onOpenMeeting={() => {
          setCopilotOpen(false);
          setMeetingOpen(true);
        }}
        onOpenResume={() => {
          setCopilotOpen(false);
          setResumeOpen(true);
        }}
      />

      <MeetingModal
        isOpen={meetingOpen}
        onClose={() => setMeetingOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
