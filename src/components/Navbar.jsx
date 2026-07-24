import React, { useState, useEffect } from 'react';
import { ShoppingBag, Terminal, ExternalLink, Menu, X, Sparkles, Code, Briefcase, Calculator, MessageSquare } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Terminal },
    { id: 'portfolio', label: 'Portfolio', icon: Code },
    { id: 'store', label: 'DevDash Store', icon: ShoppingBag, badge: 'Hot' },
    { id: 'services', label: 'Services & Estimator', icon: Calculator },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-emerald-400">
              ⚡
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl tracking-tight">
              <span className="text-white">DnyanX</span>
              <span className="text-gradient">Tech</span>
              <span className="text-sm">🌿</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider">DEV PLATFORM & STORE</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon size={14} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-slate-950 text-emerald-400' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Cart & Status */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-2 group"
            title="View Shopping Cart"
          >
            <ShoppingBag size={18} className="group-hover:text-emerald-400 transition-colors" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-slate-950 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick Hire CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex emerald-glow-btn px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
          >
            <Sparkles size={14} />
            <span>Hire Devs</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mx-4 mt-3 p-4 border border-slate-800 flex flex-col gap-2 animate-modal">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                  activeTab === item.id ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <span>Status: <strong className="text-emerald-400">Deployed 🟢</strong></span>
            <a 
              href="https://dnyanx-tech-platform.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="text-cyan-400 flex items-center gap-1 hover:underline"
            >
              Vercel App <ExternalLink size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
