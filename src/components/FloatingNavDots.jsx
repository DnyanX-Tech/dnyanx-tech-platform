import React, { useState, useEffect } from 'react';

export default function FloatingNavDots({ activeSection, onNavigate }) {
  const sections = [
    { id: 'hero', title: 'Home' },
    { id: 'journey', title: 'Journey' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'store', title: 'DevDash Store' },
    { id: 'cardGen', title: 'AI Card Generator' },
    { id: 'qrmenu', title: 'QR Menu Pro' },
    { id: 'digicard', title: 'DigiCard Pro' },
    { id: 'sandbox', title: 'Live Sandbox' },
    { id: 'services', title: 'Services & Pricing' },
    { id: 'crm', title: 'ClientFlow CRM' },
    { id: 'status', title: 'Status & Roadmaps' },
    { id: 'contact', title: 'Contact' }
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <div key={sec.id} className="relative group flex items-center">
            {/* Tooltip */}
            <span className="absolute right-6 bg-slate-900 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {sec.title}
            </span>

            {/* Dot */}
            <button
              onClick={() => onNavigate(sec.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-emerald-400 scale-125 ring-4 ring-emerald-500/30'
                  : 'bg-slate-700 hover:bg-slate-500'
              }`}
              title={sec.title}
            />
          </div>
        );
      })}
    </div>
  );
}
