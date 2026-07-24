import React, { useState } from 'react';
import { FREELANCE_SERVICES } from '../data/mockData';
import { Calculator, CheckCircle2, Clock, Sparkles, Send, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import { formatPrice } from '../utils/currencyEngine';

export default function ServicesHub({ t, currency, onSelectService, onRequestEstimate }) {
  const [projectType, setProjectType] = useState('starter');
  const [scale, setScale] = useState('mvp');
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'ai']);

  const projectTypes = [
    { id: 'starter', name: 'Starter / Basic Web', baseInr: 15000, baseDays: 5 },
    { id: 'standard', name: 'Standard E-Commerce', baseInr: 35000, baseDays: 10 },
    { id: 'ai', name: 'AI LLM Agent System', baseInr: 45000, baseDays: 12 },
    { id: 'enterprise', name: 'Custom SaaS Platform', baseInr: 75000, baseDays: 21 },
    { id: 'redesign', name: 'UI/UX Modernization', baseInr: 20000, baseDays: 7 }
  ];

  const scales = [
    { id: 'mvp', name: 'Starter / MVP', multiplier: 1.0, label: 'Fast 3-7 day release for small business' },
    { id: 'business', name: 'Standard Business', multiplier: 1.5, label: 'Full features, payments & dashboard' },
    { id: 'enterprise', name: 'Advanced Enterprise', multiplier: 2.2, label: 'Custom AI agents, SLAs & microservices' }
  ];

  const addonsList = [
    { id: 'auth', name: 'User Auth & Payments (Razorpay/Stripe)', inrPrice: 5000, days: 2 },
    { id: 'ai', name: 'Custom AI Chatbot & RAG Workflow', inrPrice: 12000, days: 4 },
    { id: 'seo', name: 'SEO & Speed Performance Audit', inrPrice: 3000, days: 1 },
    { id: 'docker', name: 'CI/CD Pipeline & Docker setup', inrPrice: 8000, days: 2 },
    { id: 'support', name: '30 Days Post-Launch SLA Support', inrPrice: 5000, days: 0 }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentType = projectTypes.find((t) => t.id === projectType);
  const currentScale = scales.find((s) => s.id === scale);

  const baseCalculatedInr = currentType.baseInr * currentScale.multiplier;
  const addonsInr = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find((a) => a.id === currId);
    return acc + (item ? item.inrPrice : 0);
  }, 0);

  const totalInr = baseCalculatedInr + addonsInr;
  const displayFormattedPrice = formatPrice(totalInr, currency);

  const baseCalculatedDays = currentType.baseDays * (scale === 'enterprise' ? 1.5 : scale === 'business' ? 1.2 : 1.0);
  const addonsDays = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find((a) => a.id === currId);
    return acc + (item ? item.days : 0);
  }, 0);

  const totalDays = Math.round(baseCalculatedDays + addonsDays);

  const handleApplyEstimate = () => {
    onRequestEstimate({
      projectType: currentType.name,
      scale: currentScale.name,
      estimatedPrice: `${displayFormattedPrice} (${currency})`,
      estimatedTimeline: `${totalDays} Days`,
      addons: selectedAddons.map(id => addonsList.find(a => a.id === id).name)
    });
  };

  return (
    <section id="services" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag-badge mb-3">
            <Sparkles size={12} /> Flexible Pricing Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Services & <span className="text-gradient">Flexible Cost Estimator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-4">
            Transparent, budget-friendly packages designed for small businesses, growing startups, and enterprise platforms.
          </p>

          {/* External Freelance Agency Profiles */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://fiverr.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 hover:border-emerald-500/40 flex items-center gap-1.5 transition-all"
            >
              <span>Fiverr Profile</span> <ExternalLink size={12} />
            </a>
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 hover:border-cyan-500/40 flex items-center gap-1.5 transition-all"
            >
              <span>Upwork Agency Profile</span> <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Services Cards - Revised Budget Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {FREELANCE_SERVICES.map((srv) => {
            const displayPrice = formatPrice(srv.startingPriceInr, currency);

            return (
              <div
                key={srv.id}
                className={`glass-panel p-6 border-slate-800 flex flex-col justify-between relative transition-all duration-300 ${
                  srv.popular ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10' : 'hover:border-slate-700'
                }`}
              >
                {srv.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{srv.title}</h3>
                    <p className="text-xs text-slate-400">{srv.subtitle}</p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6 font-mono">
                    <span className="text-3xl font-extrabold text-white">{displayPrice}</span>
                    <span className="text-xs text-slate-400 font-sans">starting quote</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 mb-6">
                    <Clock size={14} className="text-emerald-400" />
                    <span>Est. Delivery: <strong>{srv.delivery}</strong></span>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(srv)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                    srv.popular ? 'emerald-glow-btn' : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  {t ? t.bookPackage || "Book Package" : "Book Package"}
                </button>

              </div>
            );
          })}
        </div>

        {/* Interactive Estimator Tool */}
        <div className="glass-panel p-6 sm:p-10 border-slate-800 bg-slate-900/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">Interactive Project Cost Estimator</h3>
              <p className="text-xs text-slate-400 font-mono">Starter Base Price: {formatPrice(15000, currency)} (Flexible Addons)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-6">
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  1. Select Project Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id)}
                      className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                        projectType === pt.id
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {pt.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  2. Select Project Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {scales.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        scale === s.id
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1">{s.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{s.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  3. Select Additional Modules & Addons
                </label>
                <div className="space-y-2">
                  {addonsList.map((a) => {
                    const isChecked = selectedAddons.includes(a.id);
                    const addonDisplayPrice = formatPrice(a.inrPrice, currency);
                    return (
                      <div
                        key={a.id}
                        onClick={() => toggleAddon(a.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-slate-900 border-emerald-500/60 text-slate-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3 text-xs">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="rounded accent-emerald-500"
                          />
                          <span>{a.name}</span>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 font-bold">+{addonDisplayPrice}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            <div className="glass-panel p-6 border-slate-800 bg-slate-950 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Zap size={16} className="text-emerald-400" /> Instant Estimate Summary
                </h4>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Scope:</span>
                    <span className="text-white font-semibold">{currentType.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Project Scale:</span>
                    <span className="text-cyan-400 font-semibold">{currentScale.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Addons:</span>
                    <span className="text-emerald-400 font-semibold">{selectedAddons.length} Modules</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6">
                  <div className="text-xs text-slate-400 mb-1">Estimated Investment</div>
                  <div className="text-3xl font-extrabold font-mono text-white text-emerald-glow mb-2">
                    {displayFormattedPrice}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <Clock size={13} className="text-cyan-400" />
                    <span>Estimated Completion: <strong>~{totalDays} Days</strong></span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleApplyEstimate}
                className="w-full emerald-glow-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <Send size={14} /> {t ? t.requestEstimate || "Request Custom Quote" : "Request Custom Quote"}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
