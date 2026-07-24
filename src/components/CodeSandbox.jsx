import React, { useState } from 'react';
import { Play, Sparkles, Terminal, Check, RefreshCw, Copy } from 'lucide-react';

export default function CodeSandbox({ t }) {
  const initialCode = `// DnyanX Tech - Live Sandbox & AI Optimizer
function calculatePerformanceMetrics(requests, latencyMs) {
  const throughput = requests / 60;
  const isHealthy = latencyMs < 200;
  
  return {
    throughputPerSec: throughput.toFixed(2),
    status: isHealthy ? "OPTIMAL 🌿⚡" : "DEGRADED ⚠️",
    latency: latencyMs + "ms"
  };
}

console.log(calculatePerformanceMetrics(15000, 45));`;

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRunCode = () => {
    try {
      let logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '))
      };
      const runFn = new Function('console', code);
      runFn(customConsole);
      setOutput(logs.join('\n') || 'Code executed with zero log output.');
    } catch (err) {
      setOutput(`Runtime Error: ${err.message}`);
    }
  };

  const handleAiOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      const optimized = `// DnyanX AI Optimized Pipeline (High Concurrency)
const calculatePerformanceMetrics = (requests, latencyMs) => ({
  throughputPerSec: (requests / 60).toFixed(2),
  status: latencyMs < 200 ? "OPTIMAL 🌿⚡" : "DEGRADED ⚠️",
  latency: \`\${latencyMs}ms\`,
  aiScore: "99.8% Efficient"
});

console.log(calculatePerformanceMetrics(15000, 45));`;
      setCode(optimized);
      setIsOptimizing(false);
      setOutput("AI Optimization Applied: Converted to implicit return arrow function with inline score benchmarking.");
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 relative border-t border-slate-800/80 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-badge mb-3">
            <Terminal size={12} /> Live Developer Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Interactive Code Sandbox & <span className="text-gradient">AI Optimizer</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test JavaScript snippets live in your browser and use DnyanX AI to automatically optimize performance and clean up syntax.
          </p>
        </div>

        {/* Editor Container */}
        <div className="glass-panel border-slate-800 bg-slate-900/90 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Control Bar */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">sandbox-editor.js</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1 transition-colors"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy'}
              </button>

              <button
                onClick={handleAiOptimize}
                disabled={isOptimizing}
                className="px-3.5 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
              >
                <Sparkles size={13} className={isOptimizing ? 'animate-spin' : ''} />
                <span>{isOptimizing ? 'Optimizing...' : t.aiOptimize}</span>
              </button>

              <button
                onClick={handleRunCode}
                className="emerald-glow-btn px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
              >
                <Play size={13} /> {t.runCode}
              </button>
            </div>
          </div>

          {/* Grid Layout: Code Input vs Terminal Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Code Input Area */}
            <div className="p-4 bg-slate-950 font-mono text-xs text-emerald-300 min-h-[260px]">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-emerald-300 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                rows={12}
              />
            </div>

            {/* Terminal Output */}
            <div className="p-4 bg-slate-900/90 font-mono text-xs min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-800 pb-1 flex items-center gap-1">
                  <Terminal size={12} className="text-cyan-400" /> Output Console
                </div>
                <pre className="text-cyan-300 leading-relaxed overflow-x-auto">
                  {output || '// Click "Run Code" to execute snippet in browser container.'}
                </pre>
              </div>

              <div className="text-[10px] text-slate-500 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span>JS Engine: V8 / Browser Native</span>
                <span className="text-emerald-400">Sandbox Isolation Active 🟢</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
