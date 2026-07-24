import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { MapPin, Calendar, Heart, Globe, Award, Sparkles, QrCode } from 'lucide-react';

export default function PersonalJourney() {
  const [ageYears, setAgeYears] = useState(0);
  const [ageDays, setAgeDays] = useState(0);
  const [ageSecs, setAgeSecs] = useState(0);

  useEffect(() => {
    const dob = new Date('2005-01-29T00:00:00');
    const updateAge = () => {
      const now = new Date();
      const diffMs = now - dob;
      const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
      setAgeYears(years);
      setAgeDays(days);
      setAgeSecs(seconds);
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag-badge mb-3">
            <Globe size={12} /> From Loni to the World 🌿⚡
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Founder Journey & <span className="text-gradient">Personal Bio</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-6">
            Dnyaneshwar Bhanudas Adagale — Architecting high-scale software from Shrigonda, Maharashtra to global enterprises.
          </p>

          {/* Live Age Counter */}
          <div className="inline-flex items-center gap-3 bg-slate-900 border border-emerald-500/30 px-5 py-2.5 rounded-full font-mono text-xs text-slate-200 shadow-xl">
            <Calendar size={14} className="text-emerald-400" />
            <span>Developer Age:</span>
            <span className="text-emerald-400 font-bold text-sm">
              {ageYears} Years, {ageDays} Days ({ageSecs}s)
            </span>
          </div>
        </div>

        {/* 2-Column: Timeline & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Location & Contact Info */}
          <div className="glass-panel p-6 border-slate-800 bg-slate-900/90 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <MapPin size={18} className="text-emerald-400" /> Headquarters Address
            </h3>

            <div className="space-y-3 text-xs text-slate-300 font-mono">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block uppercase">Founder</span>
                <strong className="text-white text-sm">{PERSONAL_DATA.name}</strong>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block uppercase">Native Address</span>
                <span>{PERSONAL_DATA.fullAddress}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block uppercase">Slogan / घोषवाक्य</span>
                <span className="text-emerald-400 font-semibold">{PERSONAL_DATA.slogan}</span>
              </div>
            </div>

            {/* vCard QR Code */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-center gap-1">
                <QrCode size={14} className="text-emerald-400" /> Scan vCard Contact QR
              </div>
              <div className="w-28 h-28 bg-white p-2 rounded-xl mx-auto flex items-center justify-center text-slate-950 font-mono text-[9px] font-bold border border-slate-700">
                DNYANX vCARD
              </div>
            </div>
          </div>

          {/* Parallax Timeline (2 cols) */}
          <div className="lg:col-span-2 glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles size={18} className="text-cyan-400" /> Parallax Milestone Journey
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {PERSONAL_DATA.timeline.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 group-hover:scale-125 transition-transform" />
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-emerald-500/40 transition-colors">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold text-white mt-2 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
