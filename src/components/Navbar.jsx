import React, { useState, useEffect } from 'react';
import { ShoppingBag, Terminal, ExternalLink, Menu, X, Sparkles, Code, Briefcase, Calculator, MessageSquare, Globe, DollarSign, Download, Users, Activity } from 'lucide-react';

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
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPwa = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
    } else {
      alert("PWA Web App can be installed via browser menu: 'Add to Home Screen'!");
    }
  };

  const navItems = [
    { id: 'hero', label: t.home, icon: Terminal },
    { id: 'portfolio', label: t.portfolio, icon: Code },
    { id: 'store', label: t.store, icon: ShoppingBag, badge: 'Hot' },
    { id: 'cardGen', label: t.cardGen, icon: Sparkles },
    { id: 'sandbox', label: t.sandbox, icon: Terminal },
    { id: 'services', label: t.services, icon: Calculator },
    { id: 'crm', label: t.crm, icon: Users },
    { id: 'status', label: t.status, icon: Activity },
    { id: 'contact', label: t.contact, icon: MessageSquare }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2.5 shadow-2xl' : 'bg-slate-950/80 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-emerald-400 text-xs">
              ⚡
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 font-extrabold text-base sm:text-lg tracking-tight">
              <span className="text-white">DnyanX</span>
              <span className="text-gradient">Tech</span>
              <span className="text-xs">🌿</span>
            </div>
            <p className="text-[9px] text-slate-400 font-mono tracking-wider">DEV PLATFORM</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-slate-900/80 p-1 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon size={12} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1 py-0.2 rounded-full font-bold ${isActive ? 'bg-slate-950 text-emerald-400' : 'bg-emerald-500/20 text-emerald-300'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls: Language, Currency, Theme & Cart */}
        <div className="flex items-center gap-2">
          
          {/* Language Selector */}
          <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl px-2 py-1 text-[11px] font-mono text-slate-300">
            <Globe size={12} className="text-emerald-400 mr-1" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-slate-900">EN 🌐</option>
              <option value="mr" className="bg-slate-900">MR 🚩</option>
              <option value="hi" className="bg-slate-900">HI 🇮🇳</option>
            </select>
          </div>

          {/* Currency Switcher */}
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono font-bold text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1"
            title="Toggle Currency ($ USD vs ₹ INR)"
          >
            <span>{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-1.5 group"
            title="View Shopping Cart"
          >
            <ShoppingBag size={16} className="group-hover:text-emerald-400 transition-colors" />
            <span className="hidden sm:inline text-xs font-semibold">{t.cart}</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-slate-950 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* PWA Install button */}
          <button
            onClick={handleInstallPwa}
            className="hidden sm:flex p-2 rounded-xl bg-slate-900 text-emerald-400 border border-slate-800 hover:border-emerald-500/50 transition-all"
            title="Install PWA Web App"
          >
            <Download size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel mx-4 mt-2 p-3 border border-slate-800 flex flex-col gap-1.5 animate-modal">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                  activeTab === item.id ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
