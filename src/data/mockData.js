export const PORTFOLIO_PROJECTS = [
  {
    id: "proj-1",
    title: "DevPulse AI Analytics Suite",
    category: "AI/ML",
    description: "Enterprise developer productivity dashboard powered by LLMs for automated code reviews, PR summaries, and telemetry tracking.",
    tags: ["React", "FastAPI", "OpenAI", "TailwindCSS", "PostgreSQL"],
    stats: { stars: 420, forks: 85, users: "12k+" },
    liveUrl: "https://dnyanx-tech.github.io/dnyanx-tech-platform/#portfolio",
    githubUrl: "https://github.com/dnyanx-tech",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      challenge: "Engineering teams needed real-time automated insights on pull request bottlenecks without manual code review fatigue.",
      solution: "Built an asynchronous pipeline with FastAPI and OpenAI embeddings streaming insights via WebSocket to a sleek React dashboard.",
      architecture: "React SPA -> FastAPI microservices -> Redis Queue -> Vector DB (Pinecone) -> OpenAI GPT-4 API.",
      impact: "Reduced code review cycles by 42% across 30+ enterprise teams."
    }
  },
  {
    id: "proj-2",
    title: "OmniCart Multi-Vendor E-Commerce Platform",
    category: "Full Stack",
    description: "High-concurrency e-commerce platform with real-time inventory management, Stripe Connect payouts, and headless CMS backend.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "Stripe", "Redis"],
    stats: { stars: 290, forks: 62, users: "8k+" },
    liveUrl: "https://dnyanx-tech.github.io/dnyanx-tech-platform/#portfolio",
    githubUrl: "https://github.com/dnyanx-tech",
    featured: true,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      challenge: "High traffic flash sales were causing database lockouts on traditional REST backends.",
      solution: "Migrated to Next.js App Router with optimistic UI state and Redis rate limiting.",
      architecture: "Next.js App Router -> Server Actions -> PostgreSQL (Prisma ORM) -> Redis Cache.",
      impact: "Zero downtime during 50,000 requests/minute flash sale events."
    }
  },
  {
    id: "proj-3",
    title: "FlowState Mobile Task System",
    category: "Mobile",
    description: "Offline-first cross-platform mobile application with SQLite sync, gesture control, and customizable pomodoro focus timers.",
    tags: ["React Native", "Expo", "Zustand", "SQLite"],
    stats: { stars: 180, forks: 34, users: "5k+" },
    liveUrl: "https://dnyanx-tech.github.io/dnyanx-tech-platform/#portfolio",
    githubUrl: "https://github.com/dnyanx-tech",
    featured: false,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      challenge: "Users needed seamless offline sync for mobile productivity apps across low-bandwidth environments.",
      solution: "Implemented local SQLite database with CRDT background synchronization when back online.",
      architecture: "React Native Expo -> WatermelonDB/SQLite -> Background Fetch -> GraphQL Engine.",
      impact: "Maintained 100% offline data integrity with zero data loss."
    }
  },
  {
    id: "proj-4",
    title: "CyberSentinel Cloud Monitoring",
    category: "SaaS",
    description: "Cloud infrastructure monitoring platform providing automated security compliance checks and instant Slack/Discord alerts.",
    tags: ["Go", "Vue.js", "Docker", "Kubernetes", "Prometheus"],
    stats: { stars: 510, forks: 110, users: "20k+" },
    liveUrl: "https://dnyanx-tech.github.io/dnyanx-tech-platform/#portfolio",
    githubUrl: "https://github.com/dnyanx-tech",
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      challenge: "Complex Kubernetes setups required intuitive real-time monitoring without heavy agent overhead.",
      solution: "Created lightweight eBPF Go telemetry probe paired with responsive Vue dashboard.",
      architecture: "Go eBPF Probe -> Prometheus -> Grafana Dashboard & Vue UI.",
      impact: "Detected 99.4% of vulnerability misconfigurations within 5 seconds."
    }
  }
];

export const DEVDASH_ITEMS = [
  {
    id: "dev-1",
    title: "Next.js 14 AI SaaS Starter Kit",
    category: "SaaS Boilerplates",
    price: 49,
    originalPrice: 99,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    description: "Production-ready SaaS template with Stripe Subscriptions, NextAuth v5, OpenAI API integration, and Tailwind Dashboard.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Stripe", "Prisma"],
    previewSnippet: `// Next.js 14 App Router AI Generation Route
import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });
  return NextResponse.json({ result: completion.choices[0].message });
}`
  },
  {
    id: "dev-2",
    title: "Full-Stack Micro-SaaS Boilerplate",
    category: "Full Stack",
    price: 39,
    originalPrice: 79,
    rating: 4.8,
    reviews: 94,
    badge: "Popular",
    description: "React + Python FastAPI setup with Docker Compose, JWT authentication, PostgreSQL, and pre-built billing UI.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    previewSnippet: `# FastAPI Auth & User Dependency
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async function get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return username`
  },
  {
    id: "dev-3",
    title: "DevDash Glass UI Component Library",
    category: "UI Kits",
    price: 29,
    originalPrice: 59,
    rating: 5.0,
    reviews: 64,
    badge: "New",
    description: "50+ customizable glassmorphism React & Tailwind components including charts, pricing grids, and modal dialogs.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Lucide Icons"],
    previewSnippet: `// Glass Card Component
export const GlassCard = ({ title, children, className = '' }) => (
  <div className={\`p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 \${className}\`}>
    <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
    {children}
  </div>
);`
  },
  {
    id: "dev-4",
    title: "React Native Cross-Platform Expo Template",
    category: "Mobile Kits",
    price: 45,
    originalPrice: 89,
    rating: 4.7,
    reviews: 52,
    badge: "Top Rated",
    description: "Complete iOS & Android app shell featuring authentication, dark mode support, push notifications, and SQLite cache.",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    previewSnippet: `// Expo Navigation Header Component
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

export default function Header({ title, onBack }) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
      <TouchableOpacity onPress={onBack} className="p-2 rounded-lg bg-slate-900">
        <ArrowLeft color="#10b981" size={20} />
      </TouchableOpacity>
      <Text className="text-lg font-bold text-white">{title}</Text>
    </View>
  );
}`
  }
];

export const FREELANCE_SERVICES = [
  {
    id: "srv-1",
    title: "Starter / Basic Package",
    subtitle: "Ideal for small businesses, personal portfolios & MVPs.",
    delivery: "3-7 Days",
    startingPriceInr: 10000,
    startingPrice: "$120",
    features: [
      "1 to 3 Speed-Optimized Pages (Next.js / React)",
      "Mobile-Friendly & Modern UI/UX Design",
      "Basic Contact Form & WhatsApp / Direct Call Button",
      "Basic SEO Setup & Google Indexing"
    ],
    popular: false
  },
  {
    id: "srv-2",
    title: "Standard / Professional Package",
    subtitle: "Recommended for growing startups & medium businesses.",
    delivery: "1-2 Weeks",
    startingPriceInr: 30000,
    startingPrice: "$360",
    features: [
      "All-in-One Dynamic Website or E-Commerce Storefront",
      "Payment Gateway Integration (Razorpay / Stripe)",
      "User Authentication & Signup System",
      "Basic AI Chatbot & Automation Workflow",
      "Admin Dashboard for Data Management"
    ],
    popular: true
  },
  {
    id: "srv-3",
    title: "Enterprise / Advanced Package",
    subtitle: "For large agencies, custom AI systems & SaaS platforms.",
    delivery: "3-5 Weeks",
    startingPriceInr: 70000,
    startingPrice: "$840",
    features: [
      "Custom SaaS Platform or Full-Stack AI Agent System",
      "High Security Micro-services & DB Architecture",
      "Custom RAG & Vector Database Pipeline",
      "30 Days Post-Launch SLA Support & 99.9% Uptime Guarantee"
    ],
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    quote: "DnyanX Tech delivered our SaaS MVP two weeks ahead of schedule. The code quality in the DevDash kit is exceptionally clean and easy to scale.",
    author: "Alex Morgan",
    role: "Founder, CloudOps HQ",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t-2",
    quote: "The AI Integration service completely automated our customer support triage. Professional communication, high speed, and fantastic execution!",
    author: "Sarah Jenkins",
    role: "CTO, Nexus Financial",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
