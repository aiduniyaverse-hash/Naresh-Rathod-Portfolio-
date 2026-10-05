import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Bot, Zap, Brain, Calendar, RefreshCw, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  modelUsed?: string;
  mode?: 'fast' | 'thinking' | 'general';
}

interface AICopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMeeting: () => void;
  onOpenResume: () => void;
}

export const AICopilotModal: React.FC<AICopilotModalProps> = ({
  isOpen,
  onClose,
  onOpenMeeting,
  onOpenResume,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'model',
      content: `Hello! I am Naresh Rathod's AI Technical Copilot. I can answer questions about his verified credentials (Google, Be10x, Outskill), autonomous agentic architectures, commercial AI video projects, and modern Vibe Coding stack. What would you like to explore?`,
      modelUsed: 'gemini-3.1-flash-lite',
      mode: 'fast',
    },
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'fast' | 'thinking' | 'general'>('fast');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    'Why hire Naresh for Agentic AI?',
    'Explain Naresh’s Google & Be10x certifications',
    'How does Naresh implement multi-agent swarms?',
    'What is Naresh’s Vibe Coding velocity?',
    'Tell me about his commercial AI video ads',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          mode,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error generating response');
      }

      const data = await res.json();
      const modelMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: data.text || 'I am ready to assist with further inquiries.',
        modelUsed: data.model,
        mode: data.mode,
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch {
      const fallbackResponse = `Naresh Rathod is an Agentic AI & Automation Specialist located in Mumbai, India. He holds verified certifications in Introduction to Generative AI from Google (ID: 28622606) and the AI Tools & Claude Workshop from Be10x (CertX Verified, ID: 0270772f-3809-4400-b29b-1e1c61cd09971812514), along with Outskill's Gen AI Engineering Mastermind.\n\nHe specializes in building autonomous multi-agent swarms, self-healing business automation workflows, commercial AI video advertisements (Runway ML + ElevenLabs), and ultra-fast web applications using Vibe Coding. Feel free to schedule a 1-on-1 interview call using the button below!`;

      setMessages((prev) => [
        ...prev,
        {
          id: `model-fallback-${Date.now()}`,
          role: 'model',
          content: fallbackResponse,
          modelUsed: 'gemini-3.1-flash-lite',
          mode: 'fast',
        },
      ]);
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#030712]/85 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl h-[90vh] sm:h-[85vh] bg-[#0b1120] border border-white/[0.1] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative"
          >
            {/* Top Header */}
            <div className="px-5 py-4 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white font-heading tracking-tight">
                      Naresh&apos;s AI Digital Twin &amp; Copilot
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Powered by Google Gemini 3 · Real-time recruiter Q&amp;A
                  </p>
                </div>
              </div>

              {/* Close & Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenMeeting}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/50 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Meeting</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Model Mode Selector Bar */}
            <div className="px-5 py-2.5 bg-slate-950/60 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  Gemini Engine Mode:
                </span>
                <div className="inline-flex rounded-lg p-0.5 bg-slate-900 border border-white/[0.08]">
                  <button
                    onClick={() => setMode('fast')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                      mode === 'fast'
                        ? 'bg-blue-600 text-white font-medium shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3 h-3 text-yellow-300" />
                    <span>Low-Latency Flash</span>
                  </button>

                  <button
                    onClick={() => setMode('thinking')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                      mode === 'thinking'
                        ? 'bg-purple-600 text-white font-medium shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Deep reasoning & architecture analysis with Gemini 3.1 Pro"
                  >
                    <Brain className="w-3 h-3 text-purple-300" />
                    <span>High Thinking Mode</span>
                  </button>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                {mode === 'fast' ? 'gemini-3.1-flash-lite (<100ms)' : 'gemini-3.1-pro-preview (Deep Reasoning)'}
              </div>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.map((msg) => {
                const isModel = msg.role === 'model';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 max-w-3xl ${
                      isModel ? 'mr-auto' : 'ml-auto flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-semibold ${
                        isModel
                          ? 'bg-cyan-950 border border-cyan-500/40 text-cyan-300'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {isModel ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div className="space-y-1">
                      <div
                        className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                          isModel
                            ? 'bg-white/[0.04] text-slate-200 border border-white/[0.08] shadow-md'
                            : 'btn-primary-gradient text-white shadow-md'
                        }`}
                      >
                        {msg.content}
                      </div>

                      {isModel && (
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 px-1">
                          <span>Model: {msg.modelUsed || 'gemini-3.1-flash-lite'}</span>
                          {msg.mode === 'thinking' && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-purple-400 flex items-center gap-1">
                                <Brain className="w-2.5 h-2.5" /> High Thinking Active
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex gap-3 max-w-xl mr-auto">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate-400 flex items-center gap-2">
                    <span>
                      {mode === 'thinking'
                        ? 'Gemini 3.1 Pro is executing high-depth reasoning chains...'
                        : 'Synthesizing response with Gemini Flash-Lite...'}
                    </span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-5 py-2.5 bg-slate-950/50 border-t border-white/[0.06] overflow-x-auto scrollbar-none flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
                Recruiter queries:
              </span>
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={loading}
                  className="text-xs px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-slate-900/90 border-t border-white/[0.08] flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about agentic architectures, certifications, projects, or hire terms..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-cyan-950 shrink-0"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
