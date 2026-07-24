import React from 'react';
import { WORLDFOLIO_DATA } from '../data/worldfolioData';
import { Zap, Trophy, ShieldCheck, Sparkles } from 'lucide-react';

export default function CompetitorVanquisher() {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Trophy size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Competitor Benchmark <Sparkles size={16} className="text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">DnyanX Tech Platform vs Standard Developer Portfolios</p>
            </div>
          </div>

          <div className="space-y-6">
            {WORLDFOLIO_DATA.competitorComparison.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>{comp.metric}</span>
                  <span className="text-emerald-400 font-mono">
                    DnyanX: {comp.dnyanx}{comp.suffix} vs Avg: {comp.average}{comp.suffix}
                  </span>
                </div>

                {/* Bars comparison */}
                <div className="space-y-1.5">
                  {/* DnyanX Bar */}
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${comp.dnyanx}%` }}
                    />
                  </div>
                  {/* Average Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-slate-700 rounded-full"
                      style={{ width: `${comp.average}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
