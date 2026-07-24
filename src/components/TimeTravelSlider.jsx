import React, { useState } from 'react';
import { WORLDFOLIO_DATA } from '../data/worldfolioData';
import { Clock, Play, Code, CheckCircle } from 'lucide-react';

export default function TimeTravelSlider() {
  const [stageIndex, setStageIndex] = useState(4); // Default 120 min

  const currentStage = WORLDFOLIO_DATA.timeTravelStages[stageIndex];

  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Time-Travel Build History</h3>
              <p className="text-xs text-slate-400 font-mono">Slide across the timeline to inspect build progress milestones</p>
            </div>
          </div>

          {/* Slider input */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>0 Min</span>
              <span>30 Min</span>
              <span>60 Min</span>
              <span>90 Min</span>
              <span className="text-emerald-400 font-bold">120 Min (Complete)</span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={stageIndex}
              onChange={(e) => setStageIndex(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Active Stage Card */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div>
              <span className="tag-badge mb-2">{currentStage.title}</span>
              <p className="text-sm text-slate-300 mb-3">{currentStage.desc}</p>
              <code className="text-xs font-mono text-cyan-300 bg-slate-900 px-3 py-1.5 rounded border border-slate-800 inline-block">
                {currentStage.code}
              </code>
            </div>

            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs font-bold shrink-0">
              Verified Snapshot 🟢
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
