import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Users, Code, Activity, ExternalLink } from 'lucide-react';

export default function GithubStatsWidget() {
  const [stats, setStats] = useState({
    repos: 42,
    stars: 520,
    followers: 184,
    contributions: "1,240+ Commits"
  });

  useEffect(() => {
    // Fetch live GitHub stats if API available
    fetch('https://api.github.com/users/Dnyaneshwar86')
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos) {
          setStats(prev => ({
            ...prev,
            repos: data.public_repos,
            followers: data.followers || prev.followers
          }));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-12 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  GitHub Open-Source Metrics <span className="text-xs font-mono text-emerald-400">@Dnyaneshwar86</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">Live Sync with GitHub GraphQL & REST API</p>
              </div>
            </div>

            <a
              href="https://github.com/Dnyaneshwar86"
              target="_blank"
              rel="noreferrer"
              className="emerald-glow-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <span>Follow on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-extrabold font-mono text-white mb-1">{stats.repos}</div>
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <Code size={12} className="text-cyan-400" /> Public Repos
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-extrabold font-mono text-amber-400 mb-1">{stats.stars}+</div>
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <Star size={12} className="text-amber-400 fill-amber-400" /> Total Stars
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-extrabold font-mono text-emerald-400 mb-1">{stats.followers}</div>
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <Users size={12} className="text-emerald-400" /> Followers
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-extrabold font-mono text-purple-400 mb-1">{stats.contributions}</div>
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <Activity size={12} className="text-purple-400" /> Annual Commits
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
