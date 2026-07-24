import React from 'react';
import { Github, Globe, ExternalLink, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-lg">
              <span className="text-white">DnyanX</span>
              <span className="text-gradient">Tech</span>
              <span>🌿⚡</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Official All-in-One Platform for DnyanX Tech Portfolio, DevDash Code Store & Freelancing Services.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/dnyanx-tech"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://dnyanx-tech.github.io/dnyanx-tech-platform/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800"
                title="GitHub Pages Live Site"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono">Platform Navigation</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home & Stats</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Engineering Portfolio</a></li>
              <li><a href="#store" className="hover:text-emerald-400 transition-colors">DevDash Code Store</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services & Estimator</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Engineers</a></li>
            </ul>
          </div>

          {/* Deployments & Status */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono">Live Deployment Hubs</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://dnyanx-tech.github.io/dnyanx-tech-platform/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GitHub Pages Site</span>
                  </div>
                  <ExternalLink size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dnyanx-tech-platform.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Vercel App Site</span>
                  </div>
                  <ExternalLink size={12} className="text-slate-500 group-hover:text-cyan-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono">Developer Newsletter</h4>
            <p className="text-slate-400 text-xs mb-3">
              Get weekly discounts on DevDash code kits and new open-source releases.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="dev@domain.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button 
                onClick={() => alert("Subscribed to DnyanX Tech Developer Digest!")}
                className="px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} DnyanX Tech Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision for developers everywhere</span>
            <Sparkles size={12} className="text-emerald-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
