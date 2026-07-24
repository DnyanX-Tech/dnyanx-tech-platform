import React, { useEffect } from 'react';

export default function AdBanner({ slot = "1234567890", format = "auto", responsive = "true" }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log('AdSense script loading fallback:', e);
    }
  }, []);

  return (
    <div className="my-8 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
      <div className="w-full glass-panel p-4 border-slate-800/60 bg-slate-900/40 text-slate-500 text-xs font-mono">
        <span className="text-[10px] tracking-widest uppercase text-slate-400 block mb-2 font-bold">ADVERTISEMENT</span>
        {/* Google AdSense Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8967842642051993"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
}
