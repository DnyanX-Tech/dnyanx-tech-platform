import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FileCode } from 'lucide-react';

export default function CodePreviewModal({ item, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(item.previewSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto border-slate-700 bg-slate-900/95 p-6 rounded-2xl shadow-2xl relative animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileCode size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 font-mono">Live Snippet & Architecture Sample</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Code Container */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mb-6">
          {/* Top Mac-style bar */}
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Terminal size={12} className="text-emerald-400" /> preview-code.ts
            </span>
            <button
              onClick={handleCopy}
              className="text-xs text-slate-300 hover:text-emerald-400 flex items-center gap-1 font-mono transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{item.previewSnippet}</code>
          </pre>
        </div>

        {/* Features list */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technical Features Included</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.tech.map((t, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{t} Stack Modules</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <span className="text-xl font-extrabold font-mono text-white">${item.price} USD</span>
          <button
            onClick={onClose}
            className="emerald-glow-btn px-5 py-2 rounded-xl text-xs font-bold"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
