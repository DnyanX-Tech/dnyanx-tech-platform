import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, Mail, User, DollarSign, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm({ t, prefilledData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledData.projectType,
        message: `Hello DnyanX Tech Team,\n\nI generated an estimated quote using your online calculator:\n- Scale: ${prefilledData.scale}\n- Addons: ${prefilledData.addons.join(', ')}\n- Estimated Investment: ${prefilledData.estimatedPrice}\n- Estimated Timeline: ${prefilledData.estimatedTimeline}\n\nI would like to discuss next steps!`
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web App',
        budget: '$1,000 - $3,000',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="tag-badge mb-3">
            <MessageSquare size={12} /> Contact Engineering Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Have a custom freelance requirement, enterprise contract, or inquiry about DevDash code kits? Drop us a message below.
          </p>
        </div>

        {/* Form Panel */}
        <div className="glass-panel p-6 sm:p-10 border-slate-800 bg-slate-900/90 relative">
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Inquiry Received! 🌿⚡</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                Thank you for reaching out to DnyanX Tech. A lead solution architect will review your project details and respond within 12 hours.
              </p>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                Ticket #DNY-{Math.floor(100000 + Math.random() * 900000)} Created
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center gap-1.5">
                    <User size={13} className="text-emerald-400" /> Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center gap-1.5">
                    <Mail size={13} className="text-emerald-400" /> Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Service / Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web Application</option>
                    <option value="AI LLM Integration">AI & LLM Integration</option>
                    <option value="Mobile App Development">Mobile App (Expo / React Native)</option>
                    <option value="UI/UX Modernization">UI/UX Modernization & Redesign</option>
                    <option value="DevDash Code Inquiry">DevDash Code Kit Licensing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center gap-1.5">
                    <DollarSign size={13} className="text-emerald-400" /> Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="<$1,000">Under $1,000 USD</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000 USD</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000 USD</option>
                    <option value="$5,000+">$5,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Project Brief & Requirements *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your vision, target tech stack, or specific features needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full emerald-glow-btn py-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <Send size={16} /> {t ? t.submitInquiry : "Submit Project Inquiry"}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
