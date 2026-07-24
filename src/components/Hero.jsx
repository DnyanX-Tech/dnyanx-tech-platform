import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles, Timer } from 'lucide-react';

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
    { name: 'React 19', color: 'border-zinc-800 text-zinc-300 bg-zinc-900/60' },
    { name: 'Next.js 14', color: 'border-zinc-800 text-white bg-zinc-900/60' },
    { name: 'FastAPI / Python', color: 'border-emerald-900/40 text-emerald-400 bg-emerald-950/20' },
    { name: 'OpenAI GPT-4o', color: 'border-purple-900/40 text-purple-400 bg-purple-950/20' },
    { name: 'React Native', color: 'border-sky-900/40 text-sky-400 bg-sky-950/20' },
    { name: 'Docker / K8s', color: 'border-blue-900/40 text-blue-400 bg-blue-950/20' }
  ];

  const stats = [
    { label: 'Starter Kits & Solutions Built', value: '50+' },
    { label: 'Developer Satisfaction Rating', value: '4.9 ★' },
    { label: 'Custom Freelance Delivery Rate', value: '99.8%' },
    { label: 'Code Review SLA', value: '< 24 Hours' }
  ];

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Vercel Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Apple Logo Emblem */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-0.5 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 shadow-2xl hover:scale-105 transition-transform duration-200">
            <img 
              src="./dnyanx-logo.svg" 
              alt="DnyanX Tech Universal Emblem" 
              className="w-full h-full object-contain rounded-[14px] bg-black p-1"
            />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 shadow-xl">
            <Timer size={13} className="animate-spin text-emerald-400" />
            <span>⚡ Built & Deployed in 01h : 48m</span>
          </div>
        </div>

        {/* Vercel Typography Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          DnyanX Tech: One Human. <br className="hidden sm:inline" />
          <span className="text-gradient min-h-[70px] inline-block">
            {typedText}<span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed font-normal">
          Official All-in-One Platform for DnyanX Tech Portfolio, DevDash Code Store & Freelancing Services. Discover premium SaaS code templates, hire expert full-stack & AI developers, or request custom quotes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreStore}
            className="w-full sm:w-auto vercel-white-btn px-8 py-3.5 text-sm font-bold flex items-center justify-center gap-2 group shadow-xl"
          >
            <Code size={16} />
            <span>Explore DevDash Store</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onHireClick}
            className="w-full sm:w-auto vercel-dark-btn px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Sparkles size={16} className="text-emerald-400" />
            <span>Hire Freelance Devs</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-3 font-semibold">POWERED BY MODERN STACK</p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {techPills.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${tech.color} backdrop-blur-sm transition-all hover:border-zinc-600`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 border-zinc-800 text-center hover:border-zinc-700">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
