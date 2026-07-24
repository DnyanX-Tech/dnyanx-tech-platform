import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles, Send, Bot, Terminal, Zap, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Hero({ t, onExploreStore, onHireClick }) {
  const typingPhrases = [
    "Hi, I'm Dnyaneshwar. I build Micro-SaaS in 120 mins.",
    "Conversational AI Workspaces & DevDash Code Store.",
    "Your Idea → Production Code in Record Time."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [promptInput, setPromptInput] = useState('');

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setTypedText(
          isDeleting
            ? current.substring(0, typedText.length - 1)
            : current.substring(0, typedText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    alert(`🌿 DEEPFOLIO AI PROMPT: "${promptInput}"\nExecuting code generation in DevDash Store & Custom Workspace...`);
    onExploreStore();
  };

  const techPills = [
    { name: 'DeepSeek R1 / V3', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40' },
    { name: 'React 19', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40' },
    { name: 'Next.js 14', color: 'border-slate-500/40 text-slate-200 bg-slate-900/60' },
    { name: 'FastAPI / Python', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40' },
    { name: 'OpenAI GPT-4o', color: 'border-purple-500/40 text-purple-300 bg-purple-950/40' },
    { name: 'Docker / K8s', color: 'border-amber-500/40 text-amber-300 bg-amber-950/40' }
  ];

  const stats = [
    { label: 'Micro-SaaS Code Kits', value: '50+' },
    { label: 'DeepFolio Response SLA', value: '< 100ms' },
    { label: 'WorldFolio X Modules', value: '26 / 26' },
    { label: 'Production Uptime', value: '99.99%' }
  ];

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Background Neon Emerald Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Emblem & Status Pill */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-0.5 bg-gradient-to-tr from-emerald-400 via-amber-400 to-cyan-400 shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-transform duration-300">
            <img 
              src="./dnyanx-logo.svg" 
              alt="DnyanX Tech Universal Emblem" 
              className="w-full h-full object-contain rounded-[14px] bg-[#0a0a0a] p-1"
            />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-xl">
            <Zap size={14} className="text-emerald-400 animate-pulse" />
            <span>DeepFolio AI Hybrid Engine • Active</span>
          </div>
        </div>

        {/* Conversational Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.15]">
          DnyanX Tech X <span className="text-gradient">DeepFolio AI</span> <br className="hidden sm:inline" />
          <span className="text-gradient min-h-[70px] inline-block">
            {typedText}<span className="animate-pulse text-emerald-400">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
          The Ultimate Hybrid Fusion of DeepSeek Chat Minimalism and WorldFolio X Dark Glassmorphism. One Human. Green Future.
        </p>

        {/* Conversational Prompt Console Input Box */}
        <form onSubmit={handlePromptSubmit} className="max-w-2xl mx-auto mb-10 chat-input-box p-2.5 flex items-center gap-2">
          <div className="pl-3 text-emerald-400">
            <Bot size={22} className="animate-pulse" />
          </div>
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Ask DeepFolio AI to generate micro-saas code or request custom quote..."
            className="flex-grow bg-transparent text-white placeholder-slate-400 text-sm font-mono focus:outline-none px-2 py-2"
          />
          <button
            type="submit"
            className="emerald-btn px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-lg"
          >
            <span>Execute AI</span>
            <Send size={14} />
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreStore}
            className="w-full sm:w-auto emerald-btn px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-3 group shadow-2xl"
          >
            <Code size={18} />
            <span>Explore DevDash Store</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onHireClick}
            className="w-full sm:w-auto gold-btn px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 shadow-2xl"
          >
            <Sparkles size={18} />
            <span>Hire Freelance Devs</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">POWERED BY DEEPFOLIO STACK</p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {techPills.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono border ${tech.color} backdrop-blur-sm transition-all hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Chat Bubble Style Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="chat-bubble-card p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mb-1 text-gradient">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
