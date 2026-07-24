import React, { useState, useEffect } from 'react';
import LiveTimerBanner from './components/LiveTimerBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import DevDashStore from './components/DevDashStore';
import DigitalCardGenerator from './components/DigitalCardGenerator';
import CodeSandbox from './components/CodeSandbox';
import ServicesHub from './components/ServicesHub';
import ClientFlowCRM from './components/ClientFlowCRM';
import StatusTracker from './components/StatusTracker';
import ContactForm from './components/ContactForm';
import CartModal from './components/CartModal';
import UpiPaymentModal from './components/UpiPaymentModal';
import Footer from './components/Footer';

// Master Inventory Modules (DevDash 120, WorldFolio X, ClientFlow, QRMenu Pro, DigiCard Pro)
import AiChatbot from './components/AiChatbot';
import VoiceController from './components/VoiceController';
import GithubStatsWidget from './components/GithubStatsWidget';
import TimeTravelSlider from './components/TimeTravelSlider';
import CompetitorVanquisher from './components/CompetitorVanquisher';
import TrustMap from './components/TrustMap';
import RpgPowerMeter from './components/RpgPowerMeter';
import AutoBragReel from './components/AutoBragReel';
import Ar3dCard from './components/Ar3dCard';
import PersonalJourney from './components/PersonalJourney';
import QrMenuProTool from './components/QrMenuProTool';
import DigiCardProTool from './components/DigiCardProTool';

import { TRANSLATIONS } from './data/translations';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState('en');
  const [currency, setCurrency] = useState('USD');
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [xpScore, setXpScore] = useState(480);

  const [activeTab, setActiveTab] = useState('hero');
  const [cartOpen, setCartOpen] = useState(false);
  const [upiOpen, setUpiOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('dnyanx_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [prefilledContactData, setPrefilledContactData] = useState(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // BroadcastChannel Quantum Entanglement Cross-Tab Listener
  useEffect(() => {
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('dnyanx_quantum_channel');
      channel.onmessage = (event) => {
        alert(`⚛️ QUANTUM ENTANGLEMENT: Spooky Action At A Distance detected from Tab #${event.data.tabId}! Action: ${event.data.action}`);
      };
      return () => channel.close();
    }
  }, []);

  const triggerQuantumSync = (actionName) => {
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('dnyanx_quantum_channel');
      channel.postMessage({ tabId: Math.floor(Math.random() * 1000), action: actionName });
    }
  };

  // Konami Code Easter Egg (Up Up Down Down Left Right Left Right B A)
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
          alert("🎉 KONAMI CODE UNLOCKED! Activated Quantum Cyberpunk Mode 🌿⚡");
          setTheme('quantum');
          triggerQuantumSync("Konami Quantum Mode Unlocked");
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('dnyanx_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const addXp = (amount) => {
    setXpScore((prev) => prev + amount);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    addXp(50);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectServicePackage = (service) => {
    setPrefilledContactData({
      projectType: service.title,
      scale: 'Custom Package',
      estimatedPrice: service.startingPrice,
      estimatedTimeline: service.delivery,
      addons: service.features
    });
    setActiveTab('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    addXp(30);
  };

  const handleRequestEstimate = (estimateData) => {
    setPrefilledContactData(estimateData);
    setActiveTab('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    addXp(40);
  };

  const handleNavSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${theme === 'quantum' ? 'bg-slate-950 ring-2 ring-emerald-500' : 'bg-slate-950'} text-slate-100 flex flex-col font-sans relative selection:bg-emerald-500 selection:text-slate-950`}>
      
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-yellow-400 to-cyan-400 z-50 transition-all duration-150 shadow-lg shadow-emerald-500/50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* RPG Developer Power Meter Badge */}
      <RpgPowerMeter xpScore={xpScore} />

      {/* Top Countdown Offer Banner */}
      <LiveTimerBanner t={t} />

      {/* Top Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        <Hero
          t={t}
          onExploreStore={() => handleNavSection('store')}
          onHireClick={() => handleNavSection('services')}
        />

        <PersonalJourney />

        <GithubStatsWidget />

        <Portfolio t={t} />

        <DevDashStore
          t={t}
          currency={currency}
          onAddToCart={handleAddToCart}
        />

        <DigitalCardGenerator t={t} />

        <Ar3dCard />

        <QrMenuProTool />

        <DigiCardProTool />

        <CodeSandbox t={t} />

        <TimeTravelSlider />

        <CompetitorVanquisher />

        <TrustMap />

        <ServicesHub
          t={t}
          currency={currency}
          onSelectService={handleSelectServicePackage}
          onRequestEstimate={handleRequestEstimate}
        />

        <ClientFlowCRM t={t} />

        <StatusTracker t={t} />

        <AutoBragReel />

        <ContactForm t={t} prefilledData={prefilledContactData} />

      </main>

      {/* Cart Modal Drawer */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenUpi={() => {
          setCartOpen(false);
          setUpiOpen(true);
        }}
      />

      {/* UPI Payment Modal */}
      <UpiPaymentModal
        isOpen={upiOpen}
        onClose={() => setUpiOpen(false)}
        totalInr={cartItems.reduce((acc, i) => acc + i.price, 0) * 83.5}
        items={cartItems}
      />

      {/* AI Assistant Chatbot */}
      <AiChatbot onTriggerAction={handleNavSection} />

      {/* Voice Control Navigation */}
      <VoiceController
        onNavigate={handleNavSection}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'quantum' : 'dark')}
      />

      {/* Footer */}
      <Footer t={t} />

    </div>
  );
}
