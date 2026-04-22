import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ArrowRight,
  Database,
  Cpu,
  Video,
  UserCircle,
  Activity,
  Shield
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

export default function SafetyPrivacyPage({ onOpenScan }: { onOpenScan: () => void }) {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-100">
            <Lock className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-8 font-display leading-tight">
            Your Privacy. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">Your Control.</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            We are committed to keeping your data secure, private, and always entirely within your control.
          </p>
        </div>
      </RevealSection>

      {/* What We Collect — and Why */}
      <RevealSection className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6 font-display">What We Collect — and Why</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
              We operate on a principle of data minimization. We only collect the data absolutely required to provide your health insights.
            </p>
            <ul className="space-y-6">
              {[
                { icon: Video, title: "Face scan video", desc: "Processed momentarily for rPPG analysis and instantly discarded." },
                { icon: UserCircle, title: "Basic profile data", desc: "Optional data like age or biological sex to refine algorithmic accuracy." },
                { icon: ShieldCheck, title: "No unnecessary collection", desc: "We never ask for or scrape data outside of what is strictly needed." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 mt-1">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 block text-lg mb-1">{item.title}</span>
                    <span className="text-slate-500 font-light text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-full border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,transparent_100%)]" />
               <Database className="w-32 h-32 text-slate-200" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-emerald-500" />
                 <span className="font-bold text-slate-950 text-sm">Minimal Data Footprint</span>
               </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* How Your Data is Processed (Pipeline) */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-950 mb-4 font-display">How Your Data is Processed</h2>
            <p className="text-slate-500 font-light">A transparent look at our secure data pipeline.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Capture', icon: Eye },
              { label: 'Analyze', icon: Cpu },
              { label: 'Generate Insights', icon: Activity },
              { label: 'Securely Handled', icon: Lock }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex-1 w-full text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-emerald-200 hover:shadow-md transition-all group flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-100 group-hover:text-emerald-600 transition-colors">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-950 block">{step.label}</span>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Security & Processing */}
      <RevealSection className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid md:grid-cols-2 gap-20">
              
              {/* Built for security */}
              <div>
                <h2 className="text-4xl font-bold mb-8 font-display">Built for Security</h2>
                <ul className="space-y-6 mb-10">
                  {[
                    "End-to-end encryption (TLS 1.3)",
                    "Secure cloud & edge infrastructure",
                    "Regular third-party security audits"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <Lock className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-lg text-white/90 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Processed securely */}
              <div>
                <h2 className="text-4xl font-bold mb-8 font-display">Processed Securely</h2>
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
                   <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                   <p className="text-white/70 font-light leading-relaxed text-lg">
                     Your data is handled with strict security measures to minimize exposure and ensure absolute privacy. We do not use your private scans to train our global models without explicit consent.
                   </p>
                </div>
              </div>

           </div>
        </div>
      </RevealSection>

      {/* Principles & Control */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
           
           {/* Privacy Principles */}
           <div>
             <h3 className="text-3xl font-bold text-slate-950 mb-8 font-display">Our Privacy Principles</h3>
             <div className="grid gap-4">
               {[
                 "You control your data",
                 "We do not sell your personal data",
                 "Transparent data usage",
                 "Designed for global compliance (GDPR/CCPA)"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium text-slate-700">{item}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* You're in control */}
           <div>
             <h3 className="text-3xl font-bold text-slate-950 mb-8 font-display">You’re in Control</h3>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                     <Trash2 className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-950">Delete your data anytime</h4>
                     <p className="text-slate-500 text-sm font-light mt-1">One click flushes your history from our active databases.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100">
                     <Shield className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-950">Manage permissions easily</h4>
                     <p className="text-slate-500 text-sm font-light mt-1">Granular control over camera access and notifications.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 border border-purple-100">
                     <Eye className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-950">Opt out whenever you choose</h4>
                     <p className="text-slate-500 text-sm font-light mt-1">Withdraw consent for research immediately if desired.</p>
                   </div>
                </div>
             </div>
           </div>

        </div>
      </RevealSection>

      {/* Docs / Learn More */}
      <RevealSection className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Learn More</h3>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-sm transition-all group">
                 <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" /> Privacy Policy
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-sm transition-all group">
                 <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" /> Terms of Use
              </a>
           </div>
        </div>
      </RevealSection>
      
      {/* Important Information */}
      <RevealSection className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="text-amber-900 font-bold mb-2 uppercase tracking-wider text-sm">Important Information</h4>
              <p className="text-amber-700 font-light leading-relaxed text-sm">
                This product provides health insights for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-10 font-display">
          Safe. Private.<br/>Designed for You.
        </h2>
        <button 
          onClick={onOpenScan}
          className="bg-brand-primary text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:scale-105 active:scale-95 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
        >
          Start Your Health Scan <ArrowRight className="w-5 h-5" />
        </button>
      </RevealSection>

    </div>
  );
}
