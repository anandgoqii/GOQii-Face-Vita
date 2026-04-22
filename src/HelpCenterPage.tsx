import React from 'react';
import { motion } from 'motion/react';
import { 
  Search,
  Book,
  Camera,
  Activity,
  Shield,
  User,
  ChevronRight,
  AlertCircle,
  Mail,
  ArrowRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function HelpCenterPage({ onOpenScan }: { onOpenScan: () => void }) {
  const topics = [
    {
      title: "Getting Started",
      icon: Book,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      links: ["How to start a scan", "Device requirements", "Setup guide"]
    },
    {
      title: "Face Scan Issues",
      icon: Camera,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "group-hover:border-amber-200",
      links: ["Face not detected", "Lighting issues", "Scan failed"]
    },
    {
      title: "Results & Insights",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200",
      links: ["What is health score?", "How accurate is it?", "What do results mean?"]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "group-hover:border-purple-200",
      links: ["Is my data safe?", "Where is data stored?", "Do you share data?"]
    },
    {
      title: "Account & Access",
      icon: User,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-200",
      links: ["Login issues", "Reset password", "Account setup"]
    }
  ];

  const faqs = [
    {
      q: "How does the face scan work?",
      a: "Our technology detects subtle signals from your face to estimate key health metrics."
    },
    {
      q: "How long does the scan take?",
      a: "The scan takes around 30 seconds."
    },
    {
      q: "Is this medically accurate?",
      a: "It is based on clinically validated methods but is not a diagnostic tool."
    },
    {
      q: "Do I need any device?",
      a: "No, just your smartphone camera."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      {/* Hero / Search Section */}
      <RevealSection className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <HelpCircle className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-8 font-display leading-tight">
            How can we <span className="text-emerald-500">help you?</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12">
            Search for answers or browse topics below.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full pl-16 pr-6 py-5 text-lg bg-white border-2 border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-950 placeholder:text-slate-400"
            />
            <div className="absolute inset-y-2 right-2">
              <button className="bg-slate-950 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Popular Topics Box Grid */}
      <RevealSection className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 font-display">Popular Topics</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {topics.map((topic, i) => (
              <div key={i} className={`p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group ${topic.border}`}>
                <div className={`w-14 h-14 rounded-2xl ${topic.bg} flex items-center justify-center mb-6`}>
                  <topic.icon className={`w-7 h-7 ${topic.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-6 font-display">{topic.title}</h3>
                <ul className="space-y-4">
                  {topic.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="flex items-center text-slate-600 hover:text-slate-950 group/link transition-colors">
                        <span className="font-light">{link}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-emerald-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* FAQs */}
      <RevealSection className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-950 mb-4 font-display">Frequently Asked Questions</h2>
          <p className="text-slate-500 font-light">Quick answers to common questions about our technology.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-950 mb-3">{faq.q}</h4>
              <p className="text-slate-600 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Troubleshooting & Contact section */}
      <RevealSection className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Troubleshooting */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 rounded-xl">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-950">Troubleshooting</h3>
            </div>
            <p className="text-slate-600 font-light mb-8">Having trouble scanning? Try these quick fixes:</p>
            <ul className="space-y-4">
              {[
                "Ensure good lighting",
                "Keep your face steady",
                "Position your face within the frame"
              ].map((fix, i) => (
                <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Lightbulb className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700">{fix}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <Mail className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-950">Need More Help?</h3>
            </div>
            <p className="text-slate-600 font-light mb-8">Can't find what you're looking for? Reach out to our support team.</p>
            
            <a href="mailto:support@goqii.com" className="group block p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Email Support</div>
                  <div className="text-white text-lg font-medium group-hover:text-emerald-400 transition-colors">support@goqii.com</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-32 px-6 text-center bg-slate-50">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-10 font-display">Start Your Health Check</h2>
        <button 
          onClick={onOpenScan}
          className="bg-brand-primary text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:scale-105 active:scale-95 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
        >
          Start Scan <ArrowRight className="w-5 h-5" />
        </button>
      </RevealSection>
    </div>
  );
}
