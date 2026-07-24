export const WORLDFOLIO_DATA = {
  avatars: {
    indian: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    modern: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  timeTravelStages: [
    { minute: 0, title: "0 Min - Project Initialization", desc: "Repository setup, Vite + React configuration, base design tokens.", code: "npx create-vite dnyanx-tech-platform" },
    { minute: 30, title: "30 Min - Component Architecture", desc: "Navbar, Hero, Portfolio & DevDash Store components built.", code: "npm i lucide-react canvas-confetti" },
    { minute: 60, title: "60 Min - i18n & Geo-Personalization", desc: "English, Marathi, Hindi i18n dictionaries & ₹/ $ currency switcher.", code: "setLang('mr'); setCurrency('INR');" },
    { minute: 90, title: "90 Min - AI Sandbox & ClientFlow CRM", desc: "Live code sandbox editor & client portal status system.", code: "runAiOptimizer(code);" },
    { minute: 120, title: "120 Min - WorldFolio X Full Audit", desc: "All 26 hyper-adaptive features deployed & verified live!", code: "git push origin main --force" }
  ],
  competitorComparison: [
    { metric: "Build Speed & Delivery", average: 35, dnyanx: 98, suffix: "%" },
    { metric: "AI Feature Integration", average: 20, dnyanx: 99, suffix: "%" },
    { metric: "Geo & i18n Personalization", average: 15, dnyanx: 100, suffix: "%" },
    { metric: "Lighthouse Performance", average: 70, dnyanx: 99, suffix: " Score" }
  ],
  leaderboard: [
    { rank: 1, dev: "DnyanX Tech Platform", time: "118 Min", score: "9,950 XP", badge: "🥇 World Record" },
    { rank: 2, dev: "CyberPulse SaaS Builder", time: "142 Min", score: "8,400 XP", badge: "🥈 Top 1%" },
    { rank: 3, dev: "DevStack Enterprise", time: "185 Min", score: "7,100 XP", badge: "🥉 Verified" }
  ],
  trustDots: [
    { name: "Ahilyanagar Tech Hub", x: 48, y: 52, clients: "12+ Projects" },
    { name: "Shrigonda Digital Center", x: 45, y: 55, clients: "8+ Projects" },
    { name: "Pune Software Cluster", x: 40, y: 60, clients: "25+ Projects" },
    { name: "Mumbai Financial District", x: 35, y: 58, clients: "30+ Projects" }
  ],
  blockchainProof: {
    txHash: "0x7f8a92b3c4d5e6f1a8b9c0d1e2f3a4b5c6d7e8f9",
    blockNumber: "19,842,105",
    timestamp: "2026-07-23T20:00:00 IST",
    certifiedBy: "Ethereum Sepolia / DnyanX Proof-of-Build"
  },
  ipfsHash: "QmX8b9c2d1e0f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7"
};
