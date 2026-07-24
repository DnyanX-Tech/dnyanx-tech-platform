import React, { useState, useEffect } from 'react';
import { Timer, Sparkles, Copy, Check, ShieldAlert } from 'lucide-react';

export default function LiveTimerBanner({ t }) {
  const [elapsed, setElapsed] = useState({ hours: 48, minutes: 12, seconds: 35 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Start count up from 2026-07-22T09:47:00 IST
    const start = new Date('2026-07-22T09:47:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = Math.max(0, now - start);

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setElapsed({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyCoupon = () => {
    navigator.clipboard.writeText('DNYANX20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 border-b border-emerald-500/30 py-2.5 px-4 text-xs font-semibold text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Offer Message */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles size={14} className="text-emerald-400" />
          <span>{t ? t.liveOffer : "SPECIAL RELEASE OFFER: 20% OFF CODE KITS WITH CODE DNYANX20!"}</span>
        </div>

        {/* Center: Live Timer counting up from 2026-07-22T09:47:00 IST */}
        <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-1 rounded-full border border-emerald-500/30 font-mono text-[11px] shadow-lg">
          <Timer size={13} className="text-emerald-400 animate-spin" />
          <span>⚡ Built & Deployed:</span>
          <span className="text-emerald-400 font-bold">
            {String(elapsed.hours).padStart(2, '0')}h : {String(elapsed.minutes).padStart(2, '0')}m : {String(elapsed.seconds).padStart(2, '0')}s
          </span>
        </div>

        {/* Right: Coupon Copy button */}
        <button
          onClick={copyCoupon}
          className="flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/40 transition-all font-mono text-[11px]"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          <span>{copied ? 'Copied Code!' : 'Code: DNYANX20'}</span>
        </button>

      </div>
    </div>
  );
}
