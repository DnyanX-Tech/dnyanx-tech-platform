import React, { useState } from 'react';
import { QrCode, Plus, Trash2, ExternalLink, Utensils, Check } from 'lucide-react';

export default function QrMenuProTool() {
  const [hotelName, setHotelName] = useState('Green leaf Garden Cafe');
  const [menuItems, setMenuItems] = useState([
    { name: 'Special Misal Pav', price: '₹120', category: 'Breakfast' },
    { name: 'Cold Coffee with Ice Cream', price: '₹90', category: 'Beverages' },
    { name: 'Paneer Butter Masala Thali', price: '₹220', category: 'Main Course' }
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '', category: 'Main Course' });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: '', price: '', category: 'Main Course' });
  };

  const handleRemoveItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  return (
    <section id="qrmenu" className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-8 border-slate-800 bg-slate-900/90">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  QR Menu Pro <span className="text-xs font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Micro-SaaS Tool Demo</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">Create instant digital menus for hotels, cafes & restaurants</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Menu Builder Form */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Hotel / Restaurant Name</label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500 font-bold"
                />
              </div>

              {/* Add item form */}
              <form onSubmit={handleAddItem} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono text-slate-300 uppercase">Add Menu Dish</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Dish Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Price (e.g. ₹150)"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center justify-center gap-1"
                  >
                    <Plus size={14} /> Add Item
                  </button>
                </div>
              </form>

              {/* Menu items list */}
              <div className="space-y-2">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-white">{item.name}</div>
                      <span className="text-[10px] font-mono text-amber-400">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-white">{item.price}</span>
                      <button
                        onClick={() => handleRemoveItem(idx)}
                        className="p-1 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live QR Menu Card Preview */}
            <div className="glass-panel p-6 border-slate-800 bg-slate-950 text-center flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-2">{hotelName || 'Your Restaurant'}</h4>
                <p className="text-[10px] font-mono text-slate-400 mb-4">Digital QR Menu Active</p>

                <div className="bg-white p-4 rounded-xl w-36 h-36 mx-auto mb-4 border border-slate-300 flex items-center justify-center text-slate-950 font-mono text-[9px] flex-col gap-1">
                  <QrCode size={40} className="text-slate-900" />
                  <span className="text-[8px]">Scan for Digital Menu</span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-bold">
                  {menuItems.length} Dishes Published
                </div>
              </div>

              <button
                onClick={() => alert(`QR Menu Pro deployed for ${hotelName}! WhatsApp ordering link generated.`)}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg mt-4"
              >
                Publish Hotel QR Menu
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
