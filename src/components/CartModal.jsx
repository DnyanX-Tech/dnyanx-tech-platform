import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight, Tag, ShieldCheck, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartModal({ isOpen, onClose, cartItems, currency, onRemoveItem, onClearCart, onOpenUpi }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const rate = currency === 'INR' ? 83.5 : 1.0;
  const symbol = currency === 'INR' ? '₹' : '$';

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * rate), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'DNYANX20') {
      setDiscountPercent(20);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try using DNYANX20 for 20% off!');
    }
  };

  const handleCheckout = () => {
    if (currency === 'INR') {
      onOpenUpi();
    } else {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setCheckoutComplete(true);
      setTimeout(() => {
        onClearCart();
        setCheckoutComplete(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between p-6 shadow-2xl relative animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-emerald-400" size={20} />
              <h3 className="text-lg font-bold text-white">DevDash Shopping Cart</h3>
              <span className="text-xs bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-mono">
                {cartItems.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Item List */}
          {checkoutComplete ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Order Confirmed! 🌿⚡</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                Thank you for your purchase. Instant code download link and license key sent to your account email!
              </p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="text-slate-700 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-400 mb-1">Your cart is currently empty</p>
              <p className="text-xs text-slate-500">Explore DevDash Store to add starter kits & boilerplates.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
              {cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">{item.title}</h5>
                    <span className="text-[10px] font-mono text-cyan-400">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-white">{symbol}{Math.round(item.price * rate)}</span>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {!checkoutComplete && cartItems.length > 0 && (
          <div className="pt-6 border-t border-slate-800">
            {/* Promo input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Promo code (e.g. DNYANX20)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 uppercase font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-emerald-400 border border-slate-700 transition-colors"
              >
                Apply
              </button>
            </form>

            {promoApplied && (
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 mb-4 flex items-center justify-between">
                <span>DNYANX20 Applied (20% Off)</span>
                <span className="font-mono font-bold">-{symbol}{discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="space-y-2 text-xs mb-6 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-white">{symbol}{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Instant Digital Delivery</span>
                <span className="text-emerald-400 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                <span>Total Amount</span>
                <span className="text-emerald-glow">{symbol}{total.toFixed(2)} {currency}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mb-4 font-mono">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Instant GitHub repository access & lifetime updates</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full emerald-glow-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl"
            >
              {currency === 'INR' ? (
                <>
                  <QrCode size={16} /> Pay via UPI (GPay / PhonePe / Paytm)
                </>
              ) : (
                <>
                  <span>Complete Stripe Order</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
