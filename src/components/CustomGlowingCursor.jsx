import React, { useState, useEffect } from 'react';

export default function CustomGlowingCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/60 blur-[1px] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-lg shadow-emerald-500/40"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
}
