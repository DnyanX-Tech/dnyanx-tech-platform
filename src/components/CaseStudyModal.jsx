import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers, TrendingUp } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto border-slate-700 bg-slate-900/95 p-6 sm:p-8 rounded-2xl shadow-2xl relative animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="tag-badge mb-3">{project.category}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{project.title}</h2>
          <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Image banner */}
        <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 border border-slate-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu size={14} className="text-emerald-400" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-emerald-300 border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Breakdown Sections */}
        {project.caseStudy && (
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-amber-400 mb-1 flex items-center gap-2">
                <Layers size={16} /> Engineering Challenge
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudy.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-emerald-400 mb-1 flex items-center gap-2">
                <CheckCircle size={16} /> Architected Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudy.solution}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-cyan-400 mb-1 flex items-center gap-2">
                <Cpu size={16} /> Tech Pipeline
              </h4>
              <code className="text-xs text-cyan-300 font-mono block bg-slate-900 p-2 rounded border border-slate-800">
                {project.caseStudy.architecture}
              </code>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="text-sm font-bold text-emerald-300 mb-1 flex items-center gap-2">
                <TrendingUp size={16} /> Business Impact
              </h4>
              <p className="text-xs text-emerald-200">{project.caseStudy.impact}</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>⭐ {project.stats.stars} Stars</span>
            <span>🍴 {project.stats.forks} Forks</span>
            <span>🚀 {project.stats.users} Active Users</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
            >
              <Github size={14} /> GitHub Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="emerald-glow-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
