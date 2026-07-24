import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles } from 'lucide-react';

export default function VoiceController({ onNavigate, onToggleTheme }) {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('');

  const startVoiceControl = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice control is not supported on this browser.");
      return;
    }

    setIsListening(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setLastCommand(transcript);
      setIsListening(false);

      if (transcript.includes('card') || transcript.includes('generator')) {
        onNavigate('cardGen');
      } else if (transcript.includes('stats') || transcript.includes('status')) {
        onNavigate('status');
      } else if (transcript.includes('hire') || transcript.includes('freelance') || transcript.includes('service')) {
        onNavigate('services');
      } else if (transcript.includes('sandbox') || transcript.includes('code')) {
        onNavigate('sandbox');
      } else if (transcript.includes('store') || transcript.includes('buy')) {
        onNavigate('store');
      } else if (transcript.includes('theme') || transcript.includes('mode') || transcript.includes('dark')) {
        onToggleTheme();
      }
    };

    recognition.onerror = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={startVoiceControl}
        className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-xl ${
          isListening
            ? 'bg-red-500 text-white animate-pulse border border-red-400'
            : 'bg-slate-900/90 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 backdrop-blur-md'
        }`}
        title="Activate Voice Navigation Commands"
      >
        {isListening ? <MicOff size={14} /> : <Mic size={14} />}
        <span>{isListening ? 'Listening...' : '🎙️ Voice Control'}</span>
        {lastCommand && <span className="text-[10px] text-cyan-300">("{lastCommand}")</span>}
      </button>
    </div>
  );
}
