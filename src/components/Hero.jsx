import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle2, ShieldCheck, Zap, Terminal, ExternalLink, Timer } from 'lucide-react';

export default function Hero({ t, onExploreStore, onHireClick }) {
  const typingPhrases = [
    "Micro-SaaS in 120 mins.",
    "Blazing Speed Dev.",
    "Your Idea → Live Code."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
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

  const techPills = [
    { name: 'React 19', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
    { name: 'Next.js 14', color: 'border-slate-400/30 text-slate-200 bg-slate-500/10' },
    { name: 'FastAPI / Python', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
    { name: 'OpenAI GPT-4o', color: 'border-purple-500/30 text-purple-400 bg-purple-500/10' },
    { name: 'React Native', color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
    { name: 'Docker / K8s', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' }
  ];

  const stats = [
    { label: 'Starter Kits & Solutions Built', value: '50+' },
    { label: 'Developer Satisfaction Rating', value: '4.9 ★' },
    { label: 'Custom Freelance Delivery Rate', value: '99.8%' },
    { label: 'Code Review SLA', value: '< 24 Hours' }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-radial">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Speed-Run Timer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-emerald-500/40 mb-6 text-xs sm:text-sm font-medium text-emerald-300 shadow-2xl">
          <Timer size={16} className="text-emerald-400 animate-spin" />
          <span>⚡ Speed-Run Dev: Built & Deployed in 01h : 48m</span>
        </div>

        {/* Dynamic Typing Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          DnyanX Tech: One Human. <br className="hidden sm:inline" />
          <span className="text-gradient min-h-[70px] inline-block">
            {typedText}<span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-normal">
          This entire SaaS platform was built, coded & deployed in record speed. Explore production-ready DevDash Code Templates, hire top-tier Full-Stack & AI Freelance Engineers, or calculate instant quotes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreStore}
            className="w-full sm:w-auto emerald-glow-btn px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-3 group"
          >
            <Code size={18} />
            <span>Explore DevDash Store</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onHireClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-3 backdrop-blur-md shadow-lg"
          >
            <Sparkles size={18} className="text-emerald-400" />
            <span>Hire Freelance Devs</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">POWERED BY MODERN STACK</p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {techPills.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${tech.color} backdrop-blur-sm transition-all hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 border-slate-800/80 text-center hover:border-emerald-500/30">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1 text-emerald-glow">
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
