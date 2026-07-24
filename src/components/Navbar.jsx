import React, { useState, useEffect } from 'react';
import { ShoppingBag, Terminal, ChevronDown, Sparkles, Code, Calculator, MessageSquare, Globe, Heart, Utensils, CreditCard, Users, Activity, Cpu } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  activeTab, 
  setActiveTab,
  lang,
  setLang,
  currency,
  setCurrency,
  theme,
  setTheme,
  t 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { id: 'hero', label: t.home || 'Home', icon: Terminal },
    { id: 'portfolio', label: t.portfolio || 'Portfolio', icon: Code },
    { id: 'store', label: t.store || 'DevDash Store', icon: ShoppingBag, badge: 'Hot' },
    { id: 'services', label: t.services || 'Services', icon: Calculator },
    { id: 'contact', label: t.contact || 'Contact', icon: MessageSquare }
  ];

  const toolsNavItems = [
    { id: 'journey', label: 'Founder Journey', icon: Heart },
    { id: 'cardGen', label: 'AI Card Generator', icon: Sparkles },
    { id: 'qrmenu', label: 'QR Menu Pro', icon: Utensils },
    { id: 'digicard', label: 'DigiCard Pro', icon: CreditCard },
    { id: 'sandbox', label: 'Live Sandbox', icon: Terminal },
    { id: 'crm', label: 'ClientFlow CRM', icon: Users },
    { id: 'status', label: 'System Status', icon: Activity }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-slate-950/80 backdrop-blur-xl py-4 border-b border-cyan-500/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* DeepSeek Style Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-400 shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <img 
              src="./dnyanx-logo.svg" 
              alt="DnyanX Tech Official Emblem" 
              className="w-full h-full object-contain rounded-[14px] bg-[#050811] p-1"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-black text-lg sm:text-xl tracking-tight text-white">
              <span>DnyanX</span>
              <span className="text-gradient">Tech</span>
              <span className="text-xs bg-blue-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-mono">DeepSeek AI ⚡</span>
            </div>
            <p className="text-[9px] text-cyan-400/90 font-mono tracking-widest uppercase font-bold">ECO-FRIENDLY & FUTURE-READY</p>
          </div>
        </div>

        {/* Desktop Primary Nav Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-cyan-500/20 shadow-xl">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon size={13} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-slate-950 text-cyan-300' : 'bg-blue-500/20 text-cyan-300'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Tools & Apps Dropdown */}
          <div className="relative">
            <button
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/60 flex items-center gap-1 transition-all"
            >
              <Cpu size={13} className="text-cyan-400" />
              <span>Tools & Apps</span>
              <ChevronDown size={12} className={`transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 glass-panel p-2 border border-cyan-500/30 bg-[#050811]/95 shadow-2xl animate-modal flex flex-col gap-1 z-50">
                {toolsNavItems.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleNavClick(tool.id)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-blue-950/60 flex items-center gap-2.5 transition-colors border border-transparent hover:border-cyan-500/30"
                    >
                      <ToolIcon size={14} className="text-cyan-400" />
                      <span>{tool.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Controls: Language, Currency & Cart */}
        <div className="flex items-center gap-2">
          
          {/* Language Selector */}
          <div className="relative flex items-center bg-slate-900 border border-cyan-500/20 rounded-xl px-2.5 py-1 text-xs font-mono text-slate-300">
            <Globe size={13} className="text-cyan-400 mr-1" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer font-bold"
            >
              <option value="en" className="bg-slate-900">EN 🌐</option>
              <option value="mr" className="bg-slate-900">MR 🚩</option>
              <option value="hi" className="bg-slate-900">HI 🇮🇳</option>
            </select>
          </div>

          {/* Currency Switcher */}
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className="px-2.5 py-1 rounded-xl bg-slate-900 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-400 hover:border-cyan-400/40 transition-all flex items-center gap-1"
            title="Toggle Currency ($ USD vs ₹ INR)"
          >
            <span>{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl deepseek-cyan-btn text-xs font-extrabold transition-all flex items-center gap-1.5 group shadow-lg"
            title="View Shopping Cart"
          >
            <ShoppingBag size={15} />
            <span className="hidden sm:inline">{t.cart}</span>
            {cartCount > 0 && (
              <span className="bg-slate-950 text-cyan-400 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
