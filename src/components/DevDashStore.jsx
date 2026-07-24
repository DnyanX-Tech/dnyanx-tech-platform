import React, { useState } from 'react';
import { DEVDASH_ITEMS } from '../data/mockData';
import CodePreviewModal from './CodePreviewModal';
import { ShoppingBag, Search, Eye, Star, Check, Tag } from 'lucide-react';
import { formatPrice, CURRENCY_MAP } from '../utils/currencyEngine';

export default function DevDashStore({ t, currency, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewItem, setPreviewItem] = useState(null);
  const [addedItems, setAddedItems] = useState({});

  const categories = ['All', 'SaaS Boilerplates', 'Full Stack', 'UI Kits', 'Mobile Kits'];

  const filteredItems = DEVDASH_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tech.some(tk => tk.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <section id="store" className="py-20 relative border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-badge-cyan mb-3">
            <ShoppingBag size={12} /> Digital Code Store ({currency || 'USD'})
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            DevDash <span className="text-gradient">Code Marketplace</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Skip months of setup. Purchase modular, clean-architected starter kits, UI libraries, and full-stack boilerplates built for speed and security.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder={t.searchPlaceholder || "Search templates or code..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const baseInr = item.price * 83.5;
            const originalInr = item.originalPrice * 83.5;
            const displayPrice = formatPrice(baseInr, currency);
            const displayOriginal = formatPrice(originalInr, currency);

            return (
              <div 
                key={item.id}
                className="glass-panel p-6 border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="tag-badge-cyan">
                      <Tag size={10} /> {item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {item.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                        <Star size={12} className="fill-amber-400" />
                        <span>{item.rating}</span>
                        <span className="text-slate-500">({item.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tech.map((tk, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                        {tk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2 font-mono">
                    <span className="text-2xl font-extrabold text-white">{displayPrice}</span>
                    <span className="text-xs text-slate-500 line-through">{displayOriginal}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewItem(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-all"
                    >
                      <Eye size={14} className="text-cyan-400" />
                      <span>{t.previewSnippet || "Preview"}</span>
                    </button>

                    <button
                      onClick={() => handleAdd(item)}
                      disabled={addedItems[item.id]}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        addedItems[item.id]
                          ? 'bg-emerald-500 text-slate-950'
                          : 'emerald-glow-btn'
                      }`}
                    >
                      {addedItems[item.id] ? (
                        <>
                          <Check size={14} /> {t.added || "Added"}
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} /> {t.addToCart || "Add to Cart"}
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {previewItem && (
        <CodePreviewModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
        />
      )}
    </section>
  );
}
