import React from 'react';
import { Zap, ShieldCheck, Flame, Award } from 'lucide-react';

export default function RpgPowerMeter({ xpScore }) {
  const level = Math.floor(xpScore / 100) + 1;
  const currentXp = xpScore % 100;

  return (
    <div className="fixed top-20 right-6 z-40 hidden xl:flex items-center gap-3 glass-panel px-3.5 py-2 border-slate-800 bg-slate-950/90 shadow-xl rounded-xl font-mono text-xs">
      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
        <Flame size={16} className="animate-pulse" />
        <span>LVL {level}</span>
      </div>

      <div className="w-24 h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 rounded-full transition-all duration-300"
          style={{ width: `${currentXp}%` }}
        />
      </div>

      <span className="text-[10px] text-slate-400">{xpScore} XP</span>
    </div>
  );
}
