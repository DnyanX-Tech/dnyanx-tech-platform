import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import DevDashStore from './components/DevDashStore';
import ServicesHub from './components/ServicesHub';
import ContactForm from './components/ContactForm';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('dnyanx_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [prefilledContactData, setPrefilledContactData] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('dnyanx_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
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
  };

  const handleRequestEstimate = (estimateData) => {
    setPrefilledContactData(estimateData);
    setActiveTab('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        <Hero
          onExploreStore={() => {
            setActiveTab('store');
            document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onHireClick={() => {
            setActiveTab('services');
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <Portfolio />

        <DevDashStore onAddToCart={handleAddToCart} />

        <ServicesHub
          onSelectService={handleSelectServicePackage}
          onRequestEstimate={handleRequestEstimate}
        />

        <ContactForm prefilledData={prefilledContactData} />

      </main>

      {/* Cart Modal Drawer */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
