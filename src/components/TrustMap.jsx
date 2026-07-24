import React from 'react';
import { WORLDFOLIO_DATA } from '../data/worldfolioData';
import { MapPin, ShieldCheck, Globe } from 'lucide-react';

export default function TrustMap() {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Local & Global Client Trust Map</h3>
              <p className="text-xs text-slate-400 font-mono">Shrigonda / Ahilyanagar Regional Hub & Global Enterprise Deliveries</p>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative h-64 w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-6">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Glowing Map Pins */}
            {WORLDFOLIO_DATA.trustDots.map((dot, idx) => (
              <div
                key={idx}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{ top: `${dot.y}%`, left: `${dot.x}%` }}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping absolute" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-white shadow-lg relative z-10" />
                
                <div className="hidden group-hover:block absolute bottom-5 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-mono text-white whitespace-nowrap shadow-xl z-20">
                  <div className="font-bold text-emerald-400">{dot.name}</div>
                  <div className="text-slate-300">{dot.clients} Delivered</div>
                </div>
              </div>
            ))}

            <div className="text-center z-10">
              <span className="tag-badge mb-2">Regional Hub: Ahilyanagar / Shrigonda 🌿</span>
              <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                Serving 50+ enterprise SaaS, AI, and full-stack clients across Maharashtra & Global markets.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
