import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import CaseStudyModal from './CaseStudyModal';
import { Code, ExternalLink, Github, Sparkles, Layers, Star, GitFork, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'SaaS', 'AI/ML', 'Full Stack', 'Mobile'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-badge mb-3">
            <Code size={12} /> Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Portfolio & Case Studies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore high-scale software solutions engineered by DnyanX Tech. Each project represents enterprise architecture, robust performance, and clean code standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-panel group overflow-hidden border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Image header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category & Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="tag-badge bg-slate-950/80 border-slate-700">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="tag-badge-purple bg-purple-950/80 border-purple-500/30 flex items-center gap-1">
                        <Sparkles size={10} /> Featured
                      </span>
                    )}
                  </div>

                  {/* Stars / Forks Counter */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-[11px] font-mono font-bold bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                    <span className="flex items-center gap-1"><Star size={12} className="text-amber-400 fill-amber-400" /> {project.stats.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} className="text-cyan-400" /> {project.stats.forks}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 py-2"
                >
                  <Layers size={14} /> Read Case Study
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/30"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
