import React from 'react';
import { 
  LayoutDashboard, Monitor, ShoppingBag, Cpu, Mail, Sparkles, 
  Terminal, Utensils, CreditCard, Users, Heart, Bot, ShieldCheck
} from 'lucide-react';

export default function Sidebar({ activeTab, onNavClick }) {
  const sidebarItems = [
    { id: 'hero', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'journey', label: 'Founder Journey', icon: Heart },
    { id: 'portfolio', label: 'Portfolio', icon: Monitor },
    { id: 'store', label: 'DevDash Store', icon: ShoppingBag, badge: 'Hot' },
    { id: 'cardGen', label: 'AI Card Gen', icon: Sparkles },
    { id: 'qrmenu', label: 'QR Menu Pro', icon: Utensils },
    { id: 'digicard', label: 'DigiCard Pro', icon: CreditCard },
    { id: 'sandbox', label: 'Live Sandbox', icon: Terminal },
    { id: 'services', label: 'AI Services', icon: Cpu },
    { id: 'crm', label: 'Client CRM', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <aside className="hidden lg:flex w-20 flex-col items-center py-6 border-r border-slate-800/80 bg-[#020617] fixed left-0 top-0 h-full z-50 shadow-2xl">
      
      {/* Top Logo Badge */}
      <div 
        onClick={() => onNavClick('hero')} 
        className="w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center cursor-pointer shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform mb-8"
        title="DnyanX Tech Platform"
      >
        <img 
          src="./dnyanx-logo.svg" 
          alt="X" 
          className="w-full h-full object-contain rounded-[14px] bg-[#020617] p-0.5"
        />
      </div>

      {/* Navigation Icons Stack */}
      <nav className="flex-1 flex flex-col gap-5 overflow-y-auto no-scrollbar py-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-200 group flex items-center justify-center ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900/80 border border-transparent'
              }`}
              title={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip on Hover */}
              <div className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-white text-xs font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-2xl z-50">
                {item.label}
              </div>

              {/* Active Glow Bar */}
              {isActive && (
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-r-full shadow-md shadow-cyan-400" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom AI Status */}
      <div className="mt-auto pt-4 flex flex-col items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400" title="DeepSeek AI Engine Active">
          <Bot size={18} className="animate-pulse" />
        </div>
      </div>

    </aside>
  );
}
