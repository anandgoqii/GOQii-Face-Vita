import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  BookOpen, 
  PlayCircle, 
  Camera, 
  Activity, 
  Terminal, 
  Layers, 
  AlertCircle, 
  ShieldCheck,
  ChevronRight,
  Mail,
  Heart,
  Zap,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RevealSection = ({ children, className = "", id, key }: { children: React.ReactNode; className?: string; id?: string; key?: React.Key }) => (
  <motion.section
    key={key}
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: PlayCircle,
      color: "text-blue-500",
      bg: "bg-blue-50",
      content: [
        { subtitle: "What is FaceVitals?", text: "FaceVitals allows users to measure key health signals using a simple face scan." },
        { subtitle: "How it Works", text: "1. Capture a 30-second face scan\n2. AI analyzes subtle signals\n3. Receive health insights instantly" },
        { subtitle: "Requirements", text: "- Smartphone or camera-enabled device\n- Good lighting\n- Stable face position" }
      ]
    },
    {
      id: "face-scan-guide",
      title: "Face Scan Guide",
      icon: Camera,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      content: [
        { subtitle: "Best Practices", text: "- Ensure proper lighting\n- Keep your face steady\n- Position your face within the frame" },
        { subtitle: "Common Issues", text: "- Face not detected → adjust position\n- Poor lighting → move to brighter area" }
      ]
    },
    {
      id: "understanding-results",
      title: "Understanding Results",
      icon: Activity,
      color: "text-purple-500",
      bg: "bg-purple-50",
      content: [
        { subtitle: "Health Score", text: "A combined score representing your overall health status." },
        { subtitle: "Stress Level", text: "Indicates your current stress condition (Low / Medium / High)" },
        { subtitle: "Heart Rate", text: "Estimated beats per minute." },
        { subtitle: "Recovery", text: "Indicates how well your body is recovering." }
      ]
    },
    {
      id: "integration",
      title: "Integration",
      icon: Terminal,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      content: [
        { subtitle: "API", text: "Use our API to integrate face scanning into your platform.", link: { text: "See: API Reference", url: "/api" } },
        { subtitle: "SDKs", text: "- JavaScript\n- Android\n- iOS" }
      ]
    },
    {
      id: "use-cases",
      title: "Use Cases",
      icon: Layers,
      color: "text-amber-500",
      bg: "bg-amber-50",
      content: [
        { subtitle: "Applications", text: "- Telehealth platforms\n- Insurance onboarding\n- Corporate wellness\n- Fitness applications" }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-50",
      content: [
        { subtitle: "Scan Failed", text: "- Check lighting\n- Keep face steady" },
        { subtitle: "Face Not Detected", text: "- Adjust position\n- Remove obstructions" }
      ]
    },
    {
      id: "compliance-safety",
      title: "Compliance & Safety",
      icon: ShieldCheck,
      color: "text-teal-500",
      bg: "bg-teal-50",
      content: [
        { subtitle: "Guidelines", text: "- Data privacy and security\n- Ethical AI usage\n- Medical disclaimer" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      {/* Hero / Search Section */}
      <RevealSection className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-200 text-slate-600 mb-8">
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Developer Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-8 font-display leading-tight">
            Documentation
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12">
            Everything you need to understand, integrate, and use FaceVitals.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..." 
              className="w-full pl-16 pr-6 py-5 text-lg bg-white border-2 border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-slate-950 placeholder:text-slate-400"
            />
          </div>
        </div>
      </RevealSection>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Contents</h3>
            <ul className="space-y-2">
              {sections.map(section => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-950 transition-colors text-sm font-medium"
                  >
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Documentation Content */}
        <div className="lg:col-span-9 space-y-12">
          {sections.map((section, index) => (
            <RevealSection key={section.id} id={section.id} className="scroll-mt-32">
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <div className="border-b border-slate-100 p-8 flex items-center gap-4 bg-slate-50/50">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${section.bg}`}>
                    <section.icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-slate-950">{section.title}</h2>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.content.map((block, i) => (
                      <div key={i} className="flex flex-col">
                        <h3 className="text-lg font-bold text-slate-950 mb-3">{block.subtitle}</h3>
                        <div className="text-slate-600 font-light whitespace-pre-line leading-relaxed text-sm">
                          {block.text}
                        </div>
                        {block.link && (
                          <Link 
                            to={block.link.url}
                            className="inline-flex items-center gap-2 mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                          >
                            {block.link.text}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}

          {/* Need Help CTA */}
          <RevealSection className="py-8">
            <div className="bg-slate-950 rounded-[32px] p-12 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none" />
               <div className="relative z-10 flex flex-col items-center">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                   <Mail className="w-8 h-8 text-white" />
                 </div>
                 <h2 className="text-3xl font-bold font-display mb-4">Need Help?</h2>
                 <p className="text-slate-400 font-light mb-8 max-w-md mx-auto">
                   Can't find what you're looking for? Our support team is here to assist you with installation and integration.
                 </p>
                 <a 
                   href="mailto:support@goqii.com"
                   className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                 >
                   Contact Support
                 </a>
               </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </div>
  );
}
