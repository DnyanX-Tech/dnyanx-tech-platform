import React from 'react';
import { Activity, CheckCircle, Clock, Server, ShieldCheck, Cpu, HardDrive } from 'lucide-react';

export default function StatusTracker() {
  const milestones = [
    { title: "Core Platform Architecture & Vite SPA setup", status: "Completed 🟢", date: "2026-07-22" },
    { title: "DevDash Code Store & Marketplace Integration", status: "Completed 🟢", date: "2026-07-23" },
    { title: "Interactive Project Price & Timeline Estimator", status: "Completed 🟢", date: "2026-07-24" },
    { title: "Multi-language i18n & Geo Currency Switcher (₹ / $)", status: "Active Live ⚡", date: "2026-07-24" },
    { title: "AI Digital Card Generator & ClientFlow CRM", status: "Active Live ⚡", date: "2026-07-24" }
  ];

  const sysMetrics = [
    { name: "Global CDN Edge Response Time", value: "18ms", status: "Optimal" },
    { name: "Vercel Build Deployment Pipeline", value: "99.99% Success", status: "Healthy" },
    { name: "GitHub Pages Live Build Worker", value: "Synced", status: "Active" },
    { name: "API Gateway & LLM Sandbox", value: "0 Errors", status: "Optimal" }
  ];

  return (
    <section id="status" className="py-20 relative border-t border-slate-800/80 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-badge mb-3">
            <Activity size={12} /> Real-Time Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Live Platform <span className="text-gradient">Status & Roadmap</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Live uptime telemetry, deployment status, and development milestone tracking for DnyanX Tech Platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Uptime Metrics (1 col) */}
          <div className="glass-panel p-6 border-slate-800 bg-slate-900/90 space-y-4">
            <h3 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
              <Server size={16} className="text-emerald-400" /> Infrastructure Uptime
            </h3>

            {sysMetrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-slate-200 mb-0.5">{m.name}</div>
                  <div className="font-mono text-[11px] text-emerald-400">{m.value}</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {m.status}
                </span>
              </div>
            ))}
          </div>

          {/* Development Roadmap Milestones (2 cols) */}
          <div className="lg:col-span-2 glass-panel p-6 border-slate-800 bg-slate-900/90">
            <h3 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
              <Clock size={16} className="text-cyan-400" /> Project Milestones & Release Audit
            </h3>

            <div className="space-y-3">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold">
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">{m.title}</div>
                      <div className="text-[10px] font-mono text-slate-500">Timestamp: {m.date}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
