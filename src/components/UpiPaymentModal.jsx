import React, { useState } from 'react';
import { X, Check, QrCode, ShieldCheck, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function UpiPaymentModal({ isOpen, onClose, totalInr, items }) {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [paid, setPaid] = useState(false);

  if (!isOpen) return null;

  const upiId = "dnyanxtech@upi";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleConfirmUpi = () => {
    confetti({ particleCount: 100, spread: 75, origin: { y: 0.6 } });
    setPaid(true);
    setTimeout(() => {
      setPaid(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-md bg-slate-900 border-slate-700 p-6 rounded-2xl shadow-2xl relative animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {paid ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Check size={36} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">UPI Payment Verified! 🚩🌿</h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Your instant order confirmation and code license keys have been issued!
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <QrCode size={20} className="text-emerald-400" />
              <h3 className="text-lg font-bold text-white">UPI Payment (GPay / PhonePe / Paytm)</h3>
            </div>

            {/* Total INR display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-center">
              <div className="text-xs text-slate-400 mb-1">Total Payable Amount</div>
              <div className="text-3xl font-extrabold font-mono text-emerald-400">
                ₹{totalInr.toFixed(2)} INR
              </div>
            </div>

            {/* Simulated QR Code display */}
            <div className="bg-white p-4 rounded-xl max-w-[200px] mx-auto mb-6 flex flex-col items-center justify-center shadow-lg border border-slate-300">
              <div className="w-36 h-36 border-4 border-slate-900 rounded-lg flex items-center justify-center p-2 text-center bg-slate-950 text-white font-mono text-[10px] flex-col gap-1">
                <span className="text-emerald-400 font-bold text-xs">🌿 DnyanX UPI QR</span>
                <span className="text-slate-400">Scan via any UPI App</span>
                <span className="text-cyan-400 text-[9px]">GPay | PhonePe | Paytm</span>
              </div>
            </div>

            {/* UPI ID Copy row */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 mb-6">
              <div>
                <div className="text-[10px] text-slate-500 font-mono uppercase">Official UPI ID</div>
                <div className="text-xs font-mono font-bold text-white">{upiId}</div>
              </div>
              <button
                onClick={handleCopyUpi}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-mono flex items-center gap-1 transition-colors"
              >
                {copiedUpi ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedUpi ? 'Copied' : 'Copy ID'}</span>
              </button>
            </div>

            <button
              onClick={handleConfirmUpi}
              className="w-full emerald-glow-btn py-3.5 rounded-xl text-xs font-bold shadow-xl"
            >
              I Have Paid ₹{totalInr.toFixed(2)} via UPI
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
