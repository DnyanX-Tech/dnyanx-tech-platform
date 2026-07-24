import React, { useState } from 'react';
import { Film, Play, Download, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AutoBragReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayReel = () => {
    setIsPlaying(true);
    setTimeout(() => {
      confetti({ particleCount: 70, spread: 60 });
      setIsPlaying(false);
      alert("Auto-Brag Reel Demo exported successfully! 🌿⚡");
    }, 3000);
  };

  return (
    <section className="py-12 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Film size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Auto-Brag Reel Generator <Sparkles size={14} className="text-purple-400" />
              </h4>
              <p className="text-xs text-slate-400 font-mono">Generates a 5-second video demo showcase of your platform achievements</p>
            </div>
          </div>

          <button
            onClick={handlePlayReel}
            disabled={isPlaying}
            className="emerald-glow-btn px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0"
          >
            {isPlaying ? (
              <>
                <Sparkles size={14} className="animate-spin" /> Recording Demo...
              </>
            ) : (
              <>
                <Play size={14} /> Generate & Download Brag Reel
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
