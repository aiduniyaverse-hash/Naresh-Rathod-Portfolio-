export interface Project {
  id: string;
  title: string;
  category: 'Agentic AI' | 'Automation' | 'Web & Media';
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl: string;
  impactMetric: string;
  color: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: 'Google' | 'Be10x' | 'Outskill' | 'CertX';
  issuerLogoText: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  signers?: string[];
  skills: string[];
  badgeText: string;
  description: string;
  bgGradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; tags: string }[];
}

export interface AITool {
  name: string;
  category: 'LLM & Reasoning' | 'Coding & IDE' | 'Video & Media' | 'App Builders';
  description: string;
  iconType: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: 'Naresh Rathod',
  pronouns: 'He/Him',
  location: 'Mumbai, Maharashtra, India',
  email: 'nareshrathodpr@gmail.com',
  phone: '+91 98200 00000',
  headline: 'Agentic AI & Automation Specialist | Modern Web Developer (Vibe Coding) | AI Video & Commercial Ad Creator',
  tagline: 'Building Intelligent AI Solutions, Vibe-Coded Web Apps, and Cinema-Grade AI Ads.',
  alternativeTagline: 'Transforming Ideas into AI-Powered Software and High-Converting Commercial Media.',
  bio: `I am an AI engineer and creative technologist passionate about building intelligent AI solutions, rapid full-stack web applications through Vibe Coding, and cinema-grade AI commercial video ads. Dual-certified by Google (Introduction to Generative AI) and be10x (AI Tools & Claude Workshop with CertX Cryptographic Verification), alongside Outskill's Gen AI Engineering Mastermind, I bridge autonomous multi-agent workflows, lightning-fast web delivery, and high-converting commercial media production.`,
  goals: `My goal is to architect autonomous agent swarms, vibe-coded full-stack applications, and high-converting AI commercial video ads that deliver measurable business impact.`,
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/naresh-rathod-223466440?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    googleSkills: 'https://www.skills.google/public_profiles/c8e6ed05-abe9-4e33-8a38-06c42b5cf75e/badges/28622606',
    certX: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971812514',
    email: 'mailto:nareshrathodpr@gmail.com',
  },
};

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'google-genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    issuerLogoText: 'Google Cloud Skills Boost',
    issueDate: 'October 2026',
    credentialId: '28622606',
    verificationUrl: 'https://www.skills.google/public_profiles/c8e6ed05-abe9-4e33-8a38-06c42b5cf75e/badges/28622606',
    signers: ['Google Cloud Training & Certification Team'],
    skills: ['Generative AI Fundamentals', 'Large Language Models', 'Attention Mechanisms', 'Google Cloud AI Architecture', 'Responsible AI Principles'],
    badgeText: 'Official Google Badge',
    description: 'Comprehensive certification by Google validating foundational and architectural knowledge of Generative AI, LLM training mechanics, prompt parameters, and cloud-scale deployment.',
    bgGradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'be10x-certx-ai-tools',
    title: 'AI Tools & Claude Workshop',
    issuer: 'Be10x',
    issuerLogoText: 'Be10x · CertX Verified',
    issueDate: 'October 1st, 2026',
    credentialId: '0270772f-3809-4400-b29b-1e1c61cd09971812514',
    verificationUrl: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971812514',
    signers: [
      'Aditya Goenka (Co-founder, Be10x)',
      'Aditya Kachave (Co-founder, Be10x)',
      'CertX Cryptographic Ledger',
    ],
    skills: [
      'Create presentations using AI in under 5 min',
      'Analyse data using AI in under 30 min',
      'Code and Debug using AI in under 10 min',
      'Claude AI Architecture',
      'AI Productivity Engineering',
      'CertX Blockchain Verification',
    ],
    badgeText: 'CertX Cryptographically Verified',
    description: 'Intensive engineering workshop focusing on ultra-rapid AI productivity, advanced Anthropic Claude orchestration, automated data analysis, and fast-track debugging. Cryptographically verified on the CertX blockchain ledger.',
    bgGradient: 'from-purple-600/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'outskill-genai',
    title: 'Gen AI Engineering Mastermind',
    issuer: 'Outskill',
    issuerLogoText: 'Outskill Mastermind',
    issueDate: 'October 2026',
    signers: [
      'Ramanathan (Data Scientist at SLK)',
      'Vishnuvardhan BKM (AI Researcher at Silival)',
      'Vaibhav Sisinty (Founder, Outskill)',
    ],
    skills: [
      'Generative AI Engineering',
      'LLM Applications & Pipelines',
      'Prompt Engineering & Metaprompting',
      'AI Development Frameworks',
      'Autonomous Agent Architectures',
    ],
    badgeText: 'Mastermind Completion',
    description: 'Rigorous masterclass led by senior AI practitioners and data scientists, focusing on enterprise LLM applications, autonomous agents, prompt architecture, and end-to-end AI product development.',
    bgGradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'agentic-ai-platform',
    title: 'Autonomous Agentic AI Workflow Platform',
    category: 'Agentic AI',
    tagline: 'Orchestrating multi-agent collaboration with real-time tool calling',
    description: 'A cutting-edge agentic system that connects autonomous LLM agents to external APIs, automated scrapers, and operational databases. Agents decompose high-level business goals into Directed Acyclic Graphs (DAG), self-correct errors, and execute multi-step workflows without human bottlenecks.',
    technologies: ['Agentic AI', 'Claude 3.7', 'Gemini 3', 'TypeScript', 'Node.js', 'REST APIs'],
    keyFeatures: [
      'Dynamic task decomposition into executable DAG graphs',
      'Automated self-healing and reflection loops on API failure',
      'Real-time streaming agent execution trace and tool telemetry',
      'Integrated webhook triggers for Slack, CRM, and cloud notifications',
    ],
    liveUrl: '#projects',
    impactMetric: '78% reduction in manual execution time across 500+ workflow runs',
    color: '#2563EB',
  },
  {
    id: 'business-automation-engine',
    title: 'Multi-Agent Business Automation Engine',
    category: 'Automation',
    tagline: 'Zero-touch enterprise document processing & workflow automation',
    description: 'An intelligent automation engine designed to replace repetitive back-office tasks. Ingests PDF contracts, invoices, and email streams, classifies intent via LLMs, extracts structured schema data, and triggers downstream ERP/CRM integrations automatically.',
    technologies: ['DeepSeek', 'LangChain', 'Python', 'FastAPI', 'Tailwind CSS', 'Docker'],
    keyFeatures: [
      'Multi-modal document parsing with high-accuracy field extraction',
      'Automated schema validation against enterprise data models',
      'Human-in-the-loop escalation threshold for edge cases',
      'Continuous audit logging with cryptographic integrity',
    ],
    liveUrl: '#projects',
    impactMetric: 'Saved 24+ manual hours weekly per operations team',
    color: '#7C3AED',
  },
  {
    id: 'ai-resume-builder',
    title: 'ATS AI Resume Architect & Optimizer',
    category: 'Agentic AI',
    tagline: 'AI-driven resume tailoring and ATS keyword alignment',
    description: 'An AI-powered career tool that analyzes candidate experience against specific job descriptions, identifies semantic keyword gaps, optimizes phrasing for ATS scanning bots, and produces print-ready PDF resumes adhering to Fortune 500 hiring standards.',
    technologies: ['React 19', 'Gemini 3.1 Flash Lite', 'Tailwind CSS', 'PDF Engine', 'Vercel'],
    keyFeatures: [
      'Semantic ATS match score calculation against target job descriptions',
      'Bullet-point power-verb rephrasing using STAR framework',
      'Instant ATS-compliant clean typography generator',
      'One-click export to high-resolution PDF and JSON resume standards',
    ],
    liveUrl: '#resume-modal',
    impactMetric: 'Average 34% increase in interview callback rates',
    color: '#06B6D4',
  },
  {
    id: 'ai-content-ad-generator',
    title: 'Multi-Modal AI Content & Commercial Ad Generator',
    category: 'Web & Media',
    tagline: 'High-converting ad copy, viral hooks, and marketing campaigns',
    description: 'A marketing automation suite combining generative text and visual prompts to create complete commercial campaigns. Generates high-converting social media copy, SEO-optimized blog posts, email drip sequences, and synchronized visual storyboards tailored to target demographics.',
    technologies: ['ChatGPT', 'Claude', 'Canva AI', 'Next.js', 'Tailwind CSS'],
    keyFeatures: [
      'Demographic-tuned copy generation across 8 distinct brand voices',
      'Automated A/B test variant generation with predicted CTR scores',
      'Synchronized multi-channel campaign exporter (LinkedIn, X, Meta)',
      'Integrated prompt templates for midjourney & commercial imagery',
    ],
    liveUrl: '#services',
    impactMetric: 'Generated 1,200+ high-converting commercial ad variants',
    color: '#3B82F6',
  },
  {
    id: 'ai-video-creator',
    title: 'AI Commercial Video Studio',
    category: 'Web & Media',
    tagline: 'Cinema-grade AI commercial advertisements and synthetic VFX',
    description: 'A specialized video production suite combining Runway ML, Veo, ElevenLabs voice cloning, and custom prompt choreography to produce professional 15s to 60s commercial video ads for products, startups, and brands with zero filming gear required.',
    technologies: ['Runway ML', 'Veo', 'ElevenLabs', 'Canva AI', 'Premiere Pro', 'Prompt Engineering'],
    keyFeatures: [
      'Automated shot-by-shot cinematic storyboard generator',
      'Hyper-realistic AI voiceover generation with emotional modulation',
      'Seamless scene-to-scene camera motion and perspective consistency',
      'Turnkey commercial delivery in 16:9 landscape and 9:16 vertical reels',
    ],
    liveUrl: '#services',
    impactMetric: 'Over 500k cumulative organic video impressions',
    color: '#8B5CF6',
  },
  {
    id: 'personal-portfolio',
    title: 'Ultra-Modern Developer Portfolio & Copilot',
    category: 'Web & Media',
    tagline: 'Production-ready showcase with interactive AI copilot & neural mesh',
    description: 'The personal portfolio website you are experiencing right now. Built with extreme attention to aesthetic detail, zero-pill typography, an interactive neural particle canvas, full-stack Gemini 3 intelligence, and verified credential modals.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini 3.1', 'Motion'],
    keyFeatures: [
      'Interactive 60fps Neural Particle Canvas with fluid cursor physics',
      'Dual-mode Gemini Copilot: Ultra low-latency & High Thinking mode',
      'Live verified credential lightbox modals with official issuer links',
      '100% responsive, zero-pill editorial discipline, and dark obsidian aesthetic',
    ],
    liveUrl: '#',
    impactMetric: 'Sub-100ms interaction feedback and 100/100 Lighthouse performance',
    color: '#06B6D4',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Agentic AI & LLMs',
    description: 'Autonomous systems, agent orchestration, and enterprise language models.',
    skills: [
      { name: 'Agentic AI & Swarms', level: 95, tags: 'Autonomous Agents, Tool Calling, ReAct' },
      { name: 'AI Workflow Automation', level: 94, tags: 'Webhooks, Multi-step DAG, Self-healing' },
      { name: 'Generative AI & LLMs', level: 92, tags: 'Claude 3.7, Gemini 3, ChatGPT, DeepSeek' },
      { name: 'Prompt Engineering', level: 96, tags: 'Metaprompts, Few-shot, Chain-of-Thought' },
      { name: 'LLM Application Dev', level: 90, tags: 'RAG, Vector Stores, Context Windows' },
    ],
  },
  {
    title: 'Modern Web Development & Vibe Coding',
    description: 'Ultra-fast, aesthetic, responsive frontend and AI-accelerated full-stack web applications.',
    skills: [
      { name: 'Vibe Coding & Rapid Prototyping', level: 97, tags: 'AI-assisted Rapid Full-Stack Delivery, Cursor, Windsurf' },
      { name: 'React 19 & Next.js', level: 93, tags: 'App Router, Server Actions, Hooks' },
      { name: 'TypeScript & JavaScript', level: 91, tags: 'Strict Types, Async/Await, ESNext' },
      { name: 'Tailwind CSS & Glassmorphism', level: 95, tags: 'Modern UI/UX, Design Systems, Zero-Pill' },
      { name: 'HTML5 & Responsive CSS3', level: 95, tags: 'Semantic DOM, Mobile-First, Flex/Grid' },
    ],
  },
  {
    title: 'AI Video Creation & AI Ads',
    description: 'Cinema-grade commercial ads, viral social reels, motion VFX, and synthetic voiceovers.',
    skills: [
      { name: 'Commercial Video Ad Production', level: 96, tags: 'Runway Gen-3, Google Veo, 16:9 & 9:16' },
      { name: 'AI Video & Motion VFX', level: 94, tags: 'Kling AI, Luma Dream Machine, Fluid Physics' },
      { name: 'Viral Ad Storyboarding & Hooks', level: 96, tags: '0–3s Retention Hooks, High CTR, Problem-Agitate-Solve' },
      { name: 'Neural Voice & Sound Design', level: 93, tags: 'ElevenLabs Voiceover, Sound FX, Audio Mastering' },
      { name: 'Multi-Modal Creative Direction', level: 95, tags: 'Midjourney v6, Canva AI, Ad Creatives' },
    ],
  },
];

export const AI_TOOLS: AITool[] = [
  { name: 'ChatGPT', category: 'LLM & Reasoning', description: 'Advanced reasoning, brainstorming, and OpenAI API integrations.', iconType: 'openai', color: '#10A37F' },
  { name: 'Claude', category: 'LLM & Reasoning', description: 'Deep analytical coding, extended thinking, and prompt architecture.', iconType: 'anthropic', color: '#D97706' },
  { name: 'Gemini', category: 'LLM & Reasoning', description: 'Google multimodal reasoning, high thinking, and flash speed.', iconType: 'google', color: '#2563EB' },
  { name: 'DeepSeek', category: 'LLM & Reasoning', description: 'Mathematical logic, code distillation, and open-weights reasoning.', iconType: 'deepseek', color: '#4F46E5' },
  { name: 'Grok', category: 'LLM & Reasoning', description: 'Real-time knowledge exploration and unconventional reasoning.', iconType: 'x', color: '#FFFFFF' },
  { name: 'Perplexity AI', category: 'LLM & Reasoning', description: 'Grounded web research and synthesized source verification.', iconType: 'search', color: '#06B6D4' },
  { name: 'Cursor AI', category: 'Coding & IDE', description: 'AI-first code editor for rapid full-stack engineering.', iconType: 'code', color: '#38BDF8' },
  { name: 'Windsurf AI', category: 'Coding & IDE', description: 'Agentic developer flow with automated file modifications.', iconType: 'windsurf', color: '#06B6D4' },
  { name: 'Lovable', category: 'App Builders', description: 'Full-stack application synthesis and rapid frontend scaffolding.', iconType: 'heart', color: '#EC4899' },
  { name: 'Bolt.new', category: 'App Builders', description: 'Browser-based full-stack Node.js development in WebContainers.', iconType: 'zap', color: '#F59E0B' },
  { name: 'v0.dev', category: 'App Builders', description: 'Generative UI component generation and Tailwind layout design.', iconType: 'layout', color: '#8B5CF6' },
  { name: 'Replit AI', category: 'App Builders', description: 'Instant cloud computing, agentic coding, and cloud deployments.', iconType: 'terminal', color: '#F97316' },
  { name: 'Canva AI', category: 'Video & Media', description: 'Brand assets, graphic synthesis, and presentation visual layouts.', iconType: 'image', color: '#00C4CC' },
  { name: 'Runway ML (Gen-3)', category: 'Video & Media', description: 'Generative video generation, commercial ads, and motion brush VFX.', iconType: 'film', color: '#6366F1' },
  { name: 'Google Veo', category: 'Video & Media', description: 'High-definition 1080p generative video with cinematic camera choreography.', iconType: 'film', color: '#3B82F6' },
  { name: 'Kling AI', category: 'Video & Media', description: 'Complex physics simulation and photorealistic dynamic motion shots.', iconType: 'film', color: '#8B5CF6' },
  { name: 'Luma Dream Machine', category: 'Video & Media', description: 'Ultra-fast fluid camera tracking and macro cinematic commercial renders.', iconType: 'film', color: '#EC4899' },
  { name: 'Midjourney v6', category: 'Video & Media', description: 'Photorealistic commercial visual assets, storyboards, and rim lighting.', iconType: 'image', color: '#F59E0B' },
  { name: 'ElevenLabs', category: 'Video & Media', description: 'Hyper-realistic voice synthesis and commercial voiceovers.', iconType: 'mic', color: '#10B981' },
];

export const EXPERIENCE_TIMELINE = [
  {
    period: '2026 – Present',
    role: 'Agentic AI & Automation Specialist',
    company: 'Independent AI Consulting & Solutions',
    location: 'Mumbai, India',
    type: 'Professional Journey',
    highlights: [
      'Architecting autonomous multi-agent systems for enterprise client workflows using Claude, Gemini 3, and DeepSeek.',
      'Deploying zero-touch automation engines that eliminate repetitive operational overhead.',
      'Producing cinematic commercial video advertisements and marketing collateral using Runway ML and ElevenLabs.',
    ],
  },
  {
    period: '2025 – 2026',
    role: 'Vibe Coding & Full-Stack AI Web Engineering',
    company: 'Next-Gen Digital Ventures',
    location: 'Mumbai, India',
    type: 'Modern Web Development',
    highlights: [
      'Spearheaded rapid full-stack delivery using Vibe Coding methodologies with Cursor AI, Bolt.new, and Next.js.',
      'Constructed responsive, glassmorphic web applications adhering to modern UX design principles.',
      'Integrated real-time streaming LLM APIs and structured data pipelines into production interfaces.',
    ],
  },
  {
    period: '2025 – 2026',
    role: 'Gen AI Engineering Mastermind Cohort',
    company: 'Outskill & Be10x',
    location: 'Bangalore / Remote',
    type: 'Learning & Mastery',
    highlights: [
      'Completed comprehensive masterminds under data scientists from SLK, Silival, and Be10x.',
      'Mastered advanced prompt metaprompting, Claude tool use, automated data extraction, and LLM debugging.',
      'Earned official Google Introduction to Generative AI certification and CertX verification.',
    ],
  },
  {
    period: 'Future Vision',
    role: 'Lead Autonomous Systems Architect',
    company: 'Global AI Frontiers',
    location: 'Global',
    type: 'Vision & Goals',
    highlights: [
      'Pioneering self-directed AI agent swarms capable of managing end-to-end software lifecycles.',
      'Advancing multi-modal agent capabilities combining video perception, real-time voice, and autonomic decision-making.',
      'Mentoring the next generation of engineers in AI automation and Vibe Coding.',
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'Higher Secondary & Technical Foundations',
    degree: 'Science & Computer Applications',
    duration: 'Mumbai, Maharashtra, India',
    achievements: [
      'Top-percentile performance in Computer Applications, Mathematics, and Analytical Problem Solving.',
      'Lead participant in regional tech exhibitions and algorithmic coding competitions.',
      'Self-driven specialization in Generative AI architectures, LLM foundations, and modern web frameworks.',
    ],
  },
];

export const WHY_HIRE_ME = [
  { title: 'Agentic AI Mastery', description: 'Deep expertise in autonomous agents, multi-agent swarms, DAG decomposition, and self-healing tool calling.', icon: 'bot' },
  { title: 'End-to-End Automation', description: 'Eliminates repetitive manual business workflows with zero-touch LLM extraction and API pipelines.', icon: 'cog' },
  { title: 'Vibe Coding Velocity', description: 'Deploys production-grade web applications 5x to 10x faster using modern AI-assisted engineering.', icon: 'zap' },
  { title: 'Commercial Media Creation', description: 'Creates professional AI video ads, synthetic VFX, and voiceovers that captivate audiences.', icon: 'video' },
  { title: 'Certified Competence', description: 'Dual-certified by Google and Be10x with cryptographic CertX verification and Outskill Mastermind.', icon: 'badge-check' },
  { title: 'Business ROI Focus', description: 'Designs solutions driven by quantifiable metrics: lower operational costs, higher conversion, and speed.', icon: 'trending-up' },
  { title: 'Prompt Architecture', description: 'Expertise in few-shot metaprompts, system instructions, and deterministic JSON schemas.', icon: 'terminal' },
  { title: 'Fast Adaptive Learning', description: 'Rapidly absorbs emerging model architectures (Claude 3.7, Gemini 3, DeepSeek) upon release.', icon: 'sparkles' },
  { title: 'Obsession with Polish', description: 'Apple/Linear-tier visual refinement, zero broken flows, and WCAG AA accessibility standards.', icon: 'palette' },
  { title: 'Reliable Communication', description: 'Prompt updates, transparent documentation, proactive problem solving, and ownership mindset.', icon: 'message-square' },
];

export const SERVICES = [
  { title: 'Agentic AI Systems', description: 'Custom autonomous agents capable of research, decision-making, and multi-step tool execution.', icon: 'cpu', turnaround: '2–3 weeks' },
  { title: 'Workflow Automation', description: 'Automating back-office operations, CRM updates, PDF parsing, and multi-app data synchronization.', icon: 'workflow', turnaround: '1–2 weeks' },
  { title: 'AI Commercial Videos', description: 'High-impact 15s to 60s promotional video ads with synthetic VFX, custom voiceover, and sound design.', icon: 'film', turnaround: '3–5 days' },
  { title: 'Custom AI Chatbots', description: 'Domain-specific enterprise chatbots with semantic RAG retrieval, guardrails, and analytics.', icon: 'message-circle', turnaround: '1–2 weeks' },
  { title: 'Portfolio & Landing Websites', description: 'Futuristic, ultra-fast websites designed with Vercel/Linear polish and 100/100 performance.', icon: 'globe', turnaround: '3–7 days' },
  { title: 'Vibe Coding & MVP Delivery', description: 'Rapid full-stack prototyping turning product concepts into working software in record time.', icon: 'rocket', turnaround: '1 week' },
  { title: 'AI Consulting & Strategy', description: 'Strategic roadmaps for businesses looking to integrate Generative AI and save hundreds of operational hours.', icon: 'compass', turnaround: 'Flexible' },
  { title: 'Prompt Engineering', description: 'Designing deterministic, production-grade system prompts and automated evaluation harnesses.', icon: 'sliders', turnaround: '3–5 days' },
  { title: 'Commercial Ad Creation', description: 'End-to-end ad creatives combining copywriting, visual generation, and targeted messaging.', icon: 'sparkles', turnaround: '2–4 days' },
  { title: 'AI Video Social Reels', description: 'Short-form vertical video reels for Instagram, YouTube Shorts, and TikTok with viral hooks.', icon: 'smartphone', turnaround: '2–3 days' },
  { title: 'Modern Web Engineering', description: 'Production React, Next.js, and TypeScript applications with clean architecture and responsive layouts.', icon: 'code', turnaround: '2–4 weeks' },
];

export const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'The Shift from Passive LLMs to Autonomous Agentic Swarms',
    category: 'Agentic AI',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    excerpt: 'Why standard chatbots are being replaced by goal-oriented autonomous agents with dynamic tool execution, memory graphs, and self-correction loops.',
    keyTakeaway: 'Agents that act independently on business objectives generate 10x higher ROI than conversational search boxes.',
  },
  {
    id: 'post-2',
    title: 'Vibe Coding: The Next Frontier of 10x Software Engineering',
    category: 'Web Development',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    excerpt: 'How leveraging AI-first editors like Cursor, Bolt, and generative UI transforms developer velocity from writing syntax to directing architectural symphonies.',
    keyTakeaway: 'Engineers who master intent direction and iterative steering will outbuild traditional teams by an order of magnitude.',
  },
  {
    id: 'post-3',
    title: 'Architecting Enterprise-Grade Prompt Pipelines with Gemini 3 & Claude',
    category: 'Prompt Engineering',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    excerpt: 'Practical strategies for ensuring deterministic JSON outputs, handling edge-case reasoning, and managing context window costs at enterprise scale.',
    keyTakeaway: 'Prompt architecture requires the same rigor as API contracts: schemas, fallback defaults, and automated evaluation tests.',
  },
];
