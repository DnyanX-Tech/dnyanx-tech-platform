import React, { useState, useEffect } from 'react';
import { ShoppingBag, Terminal, ChevronDown, Sparkles, Code, Calculator, MessageSquare, Globe, Heart, Utensils, CreditCard, Users, Activity } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-b border-zinc-800/80 shadow-2xl' : 'bg-black/70 backdrop-blur-xl py-4 border-b border-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Apple/Vercel Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 shadow-md group-hover:scale-105 transition-transform duration-200">
            <img 
              src="./dnyanx-logo.svg" 
              alt="DnyanX Tech Logo" 
              className="w-full h-full object-contain rounded-[10px] bg-black p-0.5"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-black text-lg tracking-tight text-white">
              <span>DnyanX</span>
              <span className="text-zinc-400 font-normal">Tech</span>
            </div>
            <p className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase font-semibold">ONE HUMAN. GREEN FUTURE.</p>
          </div>
        </div>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950 p-1.5 rounded-full border border-zinc-800 shadow-xl">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Icon size={13} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-black text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
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
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 flex items-center gap-1 transition-all"
            >
              <Sparkles size={13} className="text-emerald-400" />
              <span>Tools & Apps</span>
              <ChevronDown size={12} className={`transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 glass-panel p-2 border border-zinc-800 bg-zinc-950/95 shadow-2xl animate-modal flex flex-col gap-1 z-50">
                {toolsNavItems.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleNavClick(tool.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 flex items-center gap-2.5 transition-colors"
                    >
                      <ToolIcon size={14} className="text-emerald-400" />
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
          <div className="relative flex items-center bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 py-1.5 text-xs font-mono text-zinc-300">
            <Globe size={13} className="text-zinc-400 mr-1.5" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer font-bold"
            >
              <option value="en" className="bg-zinc-950">EN 🌐</option>
              <option value="mr" className="bg-zinc-950">MR 🚩</option>
              <option value="hi" className="bg-zinc-950">HI 🇮🇳</option>
            </select>
          </div>

          {/* Currency Switcher */}
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-emerald-400 hover:border-zinc-700 transition-all"
            title="Toggle Currency ($ USD vs ₹ INR)"
          >
            <span>{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative px-3.5 py-1.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
            title="View Shopping Cart"
          >
            <ShoppingBag size={14} />
            <span className="hidden sm:inline">{t.cart}</span>
            {cartCount > 0 && (
              <span className="bg-black text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
