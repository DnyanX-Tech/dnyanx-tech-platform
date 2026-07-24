import React from 'react';
import { Mail, MapPin, ExternalLink, Heart, Shield, Terminal } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-400 to-amber-500 shadow-lg shadow-emerald-500/20">
                <img 
                  src="./dnyanx-logo.svg" 
                  alt="DnyanX Tech Logo" 
                  className="w-full h-full object-contain rounded-full bg-slate-950 p-0.5"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white">DnyanX <span className="text-gradient">Tech</span></span>
                <p className="text-[10px] text-amber-400 font-mono tracking-widest uppercase font-bold">ECO-FRIENDLY & FUTURE-READY</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Official Web Platform for DnyanX Tech Portfolio, DevDash Code Store & Freelancing Services. Building eco-smart, high-performance web applications and AI systems.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-emerald-400" /> Ahilyanagar, Maharashtra, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-cyan-400" /> dnyanx.tech.official@gmail.com
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 font-bold">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#journey" className="hover:text-emerald-400 transition-colors">Founder Journey</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio Showcase</a></li>
              <li><a href="#store" className="hover:text-emerald-400 transition-colors">DevDash Store</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Freelance Services</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Verification */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 font-bold">Verification</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1">
                <Shield size={12} className="text-emerald-400" /> On-Chain Verified #120
              </li>
              <li><a href="https://github.com/DnyanX-Tech/dnyanx-tech-platform" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">GitHub Repository <ExternalLink size={10} /></a></li>
              <li><a href="https://dnyanx-tech-platform.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">Vercel Live Status <ExternalLink size={10} /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 DnyanX Tech. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> by Dnyaneshwar Adagale (Parwatwadi, Loni Vyanknath)
          </p>
        </div>

      </div>
    </footer>
  );
}
