import React, { useState } from 'react';
import { WORLDFOLIO_DATA } from '../data/worldfolioData';
import { Box, ShieldCheck, Database, ExternalLink, Check, Copy } from 'lucide-react';

export default function Ar3dCard() {
  const [copiedIpfs, setCopiedIpfs] = useState(false);

  const handleCopyIpfs = () => {
    navigator.clipboard.writeText(WORLDFOLIO_DATA.ipfsHash);
    setCopiedIpfs(true);
    setTimeout(() => setCopiedIpfs(false), 2000);
  };

  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left: Blockchain & IPFS Badges */}
          <div className="glass-panel p-6 border-slate-800 bg-slate-900/90 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Box size={20} className="text-cyan-400" /> AR 3D Card & Blockchain Proof-of-Build
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every production build of DnyanX Tech Platform is cryptographically hashed and certified on-chain.
            </p>

            {/* Blockchain Certification Badge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Blockchain Certified Build #120
                </span>
                <span className="font-mono text-[10px] text-slate-500">Sepolia Testnet</span>
              </div>
              <code className="text-[11px] font-mono text-cyan-300 block bg-slate-900 p-2 rounded border border-slate-800 truncate">
                TX: {WORLDFOLIO_DATA.blockchainProof.txHash}
              </code>
            </div>

            {/* IPFS Resume Snapshot */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500 flex items-center gap-1">
                  <Database size={12} className="text-purple-400" /> IPFS Decentralized Snapshot
                </div>
                <div className="text-xs font-mono text-white truncate max-w-[200px]">
                  {WORLDFOLIO_DATA.ipfsHash}
                </div>
              </div>

              <button
                onClick={handleCopyIpfs}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-emerald-400 border border-slate-800 flex items-center gap-1 transition-colors"
              >
                {copiedIpfs ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedIpfs ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>

          </div>

          {/* Right: 3D Animated CSS Card Visual */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-64 rounded-3xl p-6 bg-gradient-to-tr from-slate-950 via-emerald-950 to-cyan-950 border border-cyan-500/40 shadow-2xl relative flex flex-col justify-between overflow-hidden group hover:rotate-2 transition-transform duration-500">
              <div className="flex justify-between items-center z-10">
                <span className="text-xs font-bold text-white">DnyanX AR 3D Card</span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  AR READY 🕶️
                </span>
              </div>

              <div className="z-10 text-center my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-2xl mx-auto mb-2 font-bold animate-bounce">
                  ⚡
                </div>
                <h4 className="text-lg font-extrabold text-white">Dnyaneshwar Adagale</h4>
                <p className="text-xs font-mono text-emerald-300">Lead Full-Stack & AI Engineer</p>
              </div>

              <div className="text-[10px] font-mono text-slate-400 text-center z-10">
                Rotate on mobile to trigger AR View mode
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
