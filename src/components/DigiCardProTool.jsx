import React, { useState } from 'react';
import { CreditCard, QrCode, Download, Share2, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DigiCardProTool() {
  const [personName, setPersonName] = useState('Dnyaneshwar Adagale');
  const [company, setCompany] = useState('DnyanX Tech Platform');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [designTheme, setDesignTheme] = useState('emerald');

  const handleExportCard = () => {
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
    alert(`DigiCard Pro generated for ${personName} (${company})! Saved to mobile vCard contacts.`);
  };

  return (
    <section id="digicard" className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  DigiCard Pro <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full">Micro-SaaS Tool Demo</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">Create instant digital vCards with contactless QR & NFC sharing</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Form controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Company / Agency Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Select Card Theme</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDesignTheme('emerald')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${designTheme === 'emerald' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Neon Emerald 🌿
                  </button>
                  <button
                    onClick={() => setDesignTheme('gold')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${designTheme === 'gold' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Cyber Gold ⚡
                  </button>
                </div>
              </div>

              <button
                onClick={handleExportCard}
                className="emerald-glow-btn w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <Download size={14} /> Export DigiCard Pro vCard
              </button>
            </div>

            {/* Live DigiCard Preview */}
            <div className="flex justify-center">
              <div className={`w-full max-w-sm h-64 rounded-3xl p-6 border shadow-2xl relative flex flex-col justify-between overflow-hidden ${
                designTheme === 'gold'
                  ? 'bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/90 border-amber-500/50'
                  : 'bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/90 border-emerald-500/50'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-white">DigiCard Pro</span>
                  <span className="text-[10px] font-mono bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-slate-700 text-cyan-300">
                    NFC / QR Live
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-white mb-0.5">{personName}</h4>
                  <p className="text-xs font-mono text-cyan-400 mb-1">{company}</p>
                  <p className="text-[11px] font-mono text-slate-400">{phone}</p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400">DnyanX DigiCard Engine</span>
                  <QrCode size={20} className="text-white" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
