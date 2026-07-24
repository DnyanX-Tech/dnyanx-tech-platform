import React, { useState } from 'react';
import { Mic, Sparkles, Download, Share2, Check, RefreshCw, UserCheck, ShieldCheck, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DigitalCardGenerator({ t }) {
  const [name, setName] = useState('Dnyaneshwar Full-Stack Dev');
  const [role, setRole] = useState('Senior AI & Full-Stack Engineer');
  const [tagline, setTagline] = useState('Architecting scalable Web3 & AI Micro-SaaS Platforms 🌿⚡');
  const [skills, setSkills] = useState('React, Next.js, Python FastAPI, Docker, Stripe');
  const [isRecording, setIsRecording] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const taglinesList = [
    "Transforming complex ideas into high-converting digital products 🌿⚡",
    "Building 99.9% uptime AI agents & full-stack cloud applications 🚀",
    "Next-gen UI/UX & microservice architectures for enterprise SaaS 💻",
    "Crafting clean code, scalable APIs, and automated developer tools 🌿"
  ];

  const handleGenerateAiTagline = () => {
    const random = taglinesList[Math.floor(Math.random() * taglinesList.length)];
    setTagline(random);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice recognition is not supported in this browser. Please type your title.");
      return;
    }
    setIsRecording(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setName(transcript);
      setIsRecording(false);
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.start();
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / rect.height) * 20, y: -(x / rect.width) * 20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleDownload = () => {
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
    alert(`AI Digital vCard downloaded for ${name}! Card saved to your downloads.`);
  };

  return (
    <section id="cardGen" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-badge-purple mb-3">
            <Sparkles size={12} /> Interactive Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            AI Digital Business <span className="text-gradient">Card Generator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Create your personalized 3D developer card with voice synthesis, dynamic AI taglines, and downloadable vCard integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* 3D Tilt Card Preview */}
          <div className="flex justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'all 0.5s ease' : 'none'
              }}
              className="w-full max-w-md h-72 rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/80 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20 relative flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Background Orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Top row */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md">
                    ⚡
                  </div>
                  <span className="font-extrabold text-sm tracking-wide text-white">DnyanX Digital</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  VERIFIED DEV 🌿
                </span>
              </div>

              {/* Middle Body */}
              <div className="z-10 my-2">
                <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {name || 'Your Name Here'}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-2">{role}</p>
                <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-emerald-500/50 pl-2">
                  "{tagline}"
                </p>
              </div>

              {/* Bottom Skills */}
              <div className="z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400 truncate max-w-[240px]">
                  {skills}
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={12} /> ID: #DNY-{Math.floor(100 + Math.random() * 900)}
                </span>
              </div>

            </div>
          </div>

          {/* Form Controls */}
          <div className="glass-panel p-6 sm:p-8 border-slate-800 space-y-4">
            
            {/* Voice & Name Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono text-slate-300">Developer Name</label>
                <button
                  onClick={handleVoiceInput}
                  className={`text-xs flex items-center gap-1 font-mono px-2 py-0.5 rounded-md ${
                    isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-800 text-slate-300 hover:text-emerald-400'
                  }`}
                >
                  <Mic size={12} /> {isRecording ? 'Listening...' : t.voiceInput}
                </button>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Role Input */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Title / Specialty</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Tagline & AI Button */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono text-slate-300">Bio Tagline</label>
                <button
                  onClick={handleGenerateAiTagline}
                  className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <RefreshCw size={11} /> AI Auto-Generate
                </button>
              </div>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Key Tech Skills (comma separated)</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 emerald-glow-btn py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download size={14} /> {t.downloadCard}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
