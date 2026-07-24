import React, { useState } from 'react';
import { Users, Key, Search, CheckCircle, Clock, ShieldCheck, ArrowRight, Layers, FileText } from 'lucide-react';

export default function ClientFlowCRM() {
  const [viewMode, setViewMode] = useState('admin'); // 'admin' or 'client'
  const [tokenInput, setTokenInput] = useState('DNY-984210');
  const [activeClient, setActiveClient] = useState(null);

  const [inquiries, setInquiries] = useState([
    {
      id: 'DNY-984210',
      client: 'Alex Morgan (CloudOps HQ)',
      email: 'alex@cloudops.com',
      service: 'Next.js 14 AI SaaS MVP',
      budget: '$3,000 USD',
      status: 'In Progress',
      progress: 75,
      token: 'DNY-984210',
      deliverable: 'AI Analytics Pipeline & Stripe Portal',
      deliveryDate: '2026-07-28'
    },
    {
      id: 'DNY-412950',
      client: 'Sarah Jenkins (Nexus)',
      email: 'sarah@nexus.io',
      service: 'Python FastAPI Integration',
      budget: '$1,500 USD',
      status: 'Delivered',
      progress: 100,
      token: 'DNY-412950',
      deliverable: 'Vector Database & Auth JWT Backend',
      deliveryDate: '2026-07-20'
    },
    {
      id: 'DNY-883102',
      client: 'Rohan Sharma (EduTech)',
      email: 'rohan@edutech.in',
      service: 'React Native Mobile App',
      budget: '₹1,50,000 INR',
      status: 'Pending Review',
      progress: 25,
      token: 'DNY-883102',
      deliverable: 'Cross-platform Expo Shell & SQLite Sync',
      deliveryDate: '2026-08-05'
    }
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setInquiries(inquiries.map(item => item.id === id ? { ...item, status: newStatus, progress: newStatus === 'Delivered' ? 100 : newStatus === 'In Progress' ? 65 : 20 } : item));
  };

  const handleSearchToken = (e) => {
    e.preventDefault();
    const found = inquiries.find(i => i.token.toLowerCase() === tokenInput.trim().toLowerCase());
    if (found) {
      setActiveClient(found);
    } else {
      alert("Invalid client token! Try DNY-984210 or DNY-412950.");
    }
  };

  return (
    <section id="crm" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="tag-badge-cyan mb-3">
            <Users size={12} /> ClientFlow CRM & Client Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Client Portal & <span className="text-gradient">Project Pipeline</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Manage agency project deliverables, track real-time milestone progress, and issue client access tokens.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex gap-2">
            <button
              onClick={() => setViewMode('admin')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'admin' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Admin CRM View (/admin)
            </button>
            <button
              onClick={() => setViewMode('client')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'client' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Client Token Portal (/client)
            </button>
          </div>
        </div>

        {/* Mode 1: Admin CRM */}
        {viewMode === 'admin' ? (
          <div className="glass-panel p-6 border-slate-800 bg-slate-900/90 rounded-2xl overflow-x-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users size={18} className="text-emerald-400" /> Active Agency Client Inquiries
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Total Pipeline Value: $7,500+ USD
              </span>
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Project Service</th>
                  <th className="py-3 px-4">Budget</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Token ID</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {inquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-950/40">
                    <td className="py-4 px-4 font-bold text-white">
                      {item.client}
                      <div className="text-[10px] text-slate-500 font-normal font-mono">{item.email}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">{item.service}</td>
                    <td className="py-4 px-4 font-mono text-emerald-400 font-bold">{item.budget}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        item.status === 'Delivered'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : item.status === 'In Progress'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {item.status} ({item.progress}%)
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-400">{item.token}</td>
                    <td className="py-4 px-4 text-right">
                      <select
                        value={item.status}
                        onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                        className="bg-slate-950 border border-slate-800 text-[11px] text-white px-2 py-1 rounded-lg focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Mode 2: Client Token Portal */
          <div className="max-w-2xl mx-auto glass-panel p-8 border-slate-800 bg-slate-900/90 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Key size={20} className="text-cyan-400" /> Client Portal Access
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter your unique Client Token (e.g., <strong>DNY-984210</strong>) to view live project progress and download deliverables.
            </p>

            <form onSubmit={handleSearchToken} className="flex gap-2 mb-8">
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Enter token (e.g. DNY-984210)"
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Search size={14} /> Track Status
              </button>
            </form>

            {activeClient && (
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{activeClient.client}</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    Status: {activeClient.status}
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                    <span>Milestone Completion</span>
                    <span className="text-emerald-400 font-bold">{activeClient.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${activeClient.progress}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Deliverables:</span>
                    <span className="font-semibold text-white">{activeClient.deliverable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Delivery:</span>
                    <span className="font-mono text-emerald-400">{activeClient.deliveryDate}</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
