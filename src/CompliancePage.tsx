import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Globe, 
  Brain, 
  Stethoscope, 
  Eye, 
  FileText, 
  AlertCircle,
  Database,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function CompliancePage({ onOpenEnterprise }: { onOpenEnterprise: () => void }) {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Compliance & Safety</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 font-display leading-tight">
            Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">Compliance</span> <br className="hidden md:block" /> and Trust
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Our platform is designed to meet global standards for privacy, security, and responsible use of AI in healthcare.
          </p>
        </div>
      </RevealSection>

      {/* Compliance Approach & Data Protection */}
      <RevealSection className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Compliance Approach */}
          <div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm mb-6">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-6 font-display">Our Compliance Approach</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
              We integrate privacy, security, and ethical considerations into every layer of our technology — from data collection to processing and delivery.
            </p>
            <div className="space-y-4">
              {[
                { title: "Designed for Global Standards", items: ["GDPR-ready (aligned with EU/UK data protection principles)", "HIPAA-aligned practices (where applicable)", "Follows international data security best practices"] }
              ].map((group, i) => (
                <div key={i}>
                   <h3 className="font-bold text-slate-900 mb-4">{group.title}</h3>
                   <ul className="space-y-3">
                     {group.items.map((item, j) => (
                       <li key={j} className="flex items-start gap-3">
                         <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-emerald-500" />
                         </div>
                         <span className="text-slate-600 font-light text-sm">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6">
              <Database className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-8 font-display">Data Protection</h2>
            <ul className="space-y-6">
              {[
                { icon: Lock, text: "Encryption in transit and at rest" },
                { icon: ShieldCheck, text: "Secure data handling practices" },
                { icon: Eye, text: "Minimal data collection principles" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <item.icon className="w-6 h-6 text-slate-500" />
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </RevealSection>

      {/* 3 Pillar Grid: Responsible AI, Clinically Informed, Security First */}
      <RevealSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
             
             {/* Responsible AI */}
             <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-blue-200 transition-colors">
                <Brain className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-950 mb-4 font-display">Responsible AI</h3>
                <ul className="space-y-3">
                  {[
                    "Bias-aware model development",
                    "Designed for diverse populations",
                    "Transparent data usage"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 font-light text-sm">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-300 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Clinically Informed */}
             <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-purple-200 transition-colors">
                <Stethoscope className="w-10 h-10 text-purple-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-950 mb-4 font-display">Clinically Informed</h3>
                <ul className="space-y-3">
                  {[
                    "Based on established scientific methods",
                    "Reviewed with medical experts",
                    "Continuous validation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 font-light text-sm">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-purple-300 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Security First */}
             <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-200 transition-colors">
                <Lock className="w-10 h-10 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-950 mb-4 font-display">Security First</h3>
                <ul className="space-y-3">
                  {[
                    "Strict access controls",
                    "Highly secure infrastructure",
                    "Ongoing monitoring and audits"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 font-light text-sm">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-300 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
             </div>

          </div>
        </div>
      </RevealSection>

      {/* Transparency & Limitations / Policies */}
      <RevealSection className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
           
           <div>
             <AlertCircle className="w-10 h-10 text-amber-500 mb-6" />
             <h2 className="text-3xl font-bold mb-6 font-display">Transparency & Limitations</h2>
             <ul className="space-y-6">
                {[
                  "Not a diagnostic medical device",
                  "Results are indicative, not definitive",
                  "Performance depends on environment conditions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                     <span className="text-white/80 font-light">{item}</span>
                  </li>
                ))}
             </ul>
           </div>

           <div>
             <FileText className="w-10 h-10 text-brand-primary mb-6" />
             <h2 className="text-3xl font-bold mb-6 font-display">Linked Policies</h2>
             <p className="text-white/50 font-light mb-8">Review our explicit standing legally binding policies below.</p>
             <div className="flex flex-col gap-4">
                {[
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Terms of Service", href: "/terms-of-service" },
                  { name: "Safety & Privacy", href: "/safety-privacy" }
                ].map((policy, i) => (
                  <Link key={i} to={policy.href} className="flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                    <span className="font-medium text-white/90">{policy.name}</span>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
             </div>
           </div>

        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-10 font-display">
          Ready for <br/>Enterprise Integration
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onOpenEnterprise}
            className="bg-brand-primary text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:scale-105 active:scale-95 transition-all text-lg flex items-center justify-center gap-3"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenEnterprise}
            className="bg-white border border-slate-200 text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-lg flex items-center justify-center gap-3"
          >
            Book Demo
          </button>
        </div>
      </RevealSection>

    </div>
  );
}
