import React, { useState, useEffect } from 'react';
import { Trophy, Zap, ShieldCheck, Clock, Users, ArrowUpRight, Award, Sparkles } from 'lucide-react';

export default function SpeedLeaderboard() {
  const [liveVisitors, setLiveVisitors] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const leaderboardData = [
    { rank: 1, name: 'DnyanX Tech Platform', buildTime: '120 Mins', tech: 'Next.js 14 + DeepFolio AI', score: '99.9/100', badge: '🏆 Global Champion' },
    { rank: 2, name: 'Vercel Edge Suite', buildTime: '180 Mins', tech: 'Edge Functions + Turbopack', score: '98.5/100', badge: '⚡ High Speed' },
    { rank: 3, name: 'Silicon Valley Agency', buildTime: '3 Weeks', tech: 'Custom React & Node.js', score: '84.0/100', badge: 'Traditional' },
    { rank: 4, name: 'Standard IT Consultancy', buildTime: '6 Weeks', tech: 'Legacy Monolith Architecture', score: '72.0/100', badge: 'Standard' }
  ];

  return (
    <section id="leaderboard" className="py-16 relative border-t border-slate-800/80 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Live Visitor Counter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-2">
              <Trophy size={14} /> Global Build Speed Benchmark
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Fastest <span className="text-gradient">Micro-SaaS Delivery Leaderboard</span>
            </h2>
          </div>

          {/* Live Visitor Counter Widget */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/30 font-mono text-xs shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-bold">
              <Users size={14} className="inline mr-1 text-cyan-400" />
              <strong className="text-emerald-400 text-sm">{liveVisitors}</strong> Live Visitors Online Now
            </span>
          </div>
        </div>

        {/* Leaderboard Table Grid */}
        <div className="glass-panel overflow-hidden border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/90 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Platform / Entity</th>
                  <th className="px-6 py-4">Build SLA Time</th>
                  <th className="px-6 py-4">Tech Architecture</th>
                  <th className="px-6 py-4 text-right">Lighthouse Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200 font-medium">
                {leaderboardData.map((row) => (
                  <tr key={row.rank} className={`hover:bg-slate-900/50 transition-colors ${row.rank === 1 ? 'bg-emerald-950/20 font-bold border-l-4 border-l-emerald-500' : ''}`}>
                    <td className="px-6 py-4 font-extrabold text-sm text-cyan-400">
                      #{row.rank}
                    </td>
                    <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                      <span>{row.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-amber-400 border border-amber-500/30">
                        {row.badge}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-extrabold">
                      <Clock size={12} className="inline mr-1" />
                      {row.buildTime}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      {row.tech}
                    </td>
                    <td className="px-6 py-4 text-right font-extrabold text-amber-400 text-sm">
                      {row.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
