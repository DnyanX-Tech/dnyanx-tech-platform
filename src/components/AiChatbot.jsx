import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User } from 'lucide-react';

export default function AiChatbot({ onTriggerAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am DnyanX AI Assistant. Ask me anything about Dnyaneshwar Adagale, DevDash code templates, pricing, or custom engineering services! 🌿⚡'
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let botResponse = "DnyanX Tech provides enterprise full-stack development, AI agent integration, and digital code starter kits. How can we help your project today?";
      const lower = userMsg.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        botResponse = "Starter kits begin at $29-$49 USD (₹2,400+ INR). Custom freelance projects start at $799 USD with our interactive price estimator! 🌿";
      } else if (lower.includes('who') || lower.includes('developer') || lower.includes('dnyaneshwar')) {
        botResponse = "Dnyaneshwar Adagale is a Lead Full-Stack & AI Engineer specializing in Next.js 14, Python FastAPI, React Native, and enterprise LLM pipelines.";
      } else if (lower.includes('code') || lower.includes('store') || lower.includes('template')) {
        botResponse = "Explore our DevDash Code Store for production-ready Next.js AI SaaS kits, FastAPI backends, and React Native mobile starter kits!";
        onTriggerAction('store');
      } else if (lower.includes('hire') || lower.includes('freelance') || lower.includes('contact')) {
        botResponse = "You can book a custom service package or send a project inquiry via our Contact form!";
        onTriggerAction('contact');
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform p-0.5 group"
          title="Open DnyanX AI Assistant"
        >
          <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-transparent group-hover:text-slate-950 transition-colors">
            <Bot size={24} />
          </div>
        </button>
      ) : (
        <div className="glass-panel w-80 sm:w-96 h-96 bg-slate-900/95 border-slate-700 flex flex-col justify-between shadow-2xl rounded-2xl overflow-hidden animate-modal">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  DnyanX AI Assistant <Sparkles size={12} className="text-emerald-400" />
                </h4>
                <span className="text-[9px] font-mono text-emerald-400">Online 🟢</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs font-sans">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    🤖
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-semibold rounded-tr-none'
                      : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="Ask DnyanX AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors font-bold"
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
