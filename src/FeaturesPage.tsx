import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Activity, 
  Zap, 
  Brain, 
  Shield, 
  Smartphone, 
  CheckCircle2, 
  Smartphone as PhoneIcon,
  Stethoscope,
  Users,
  Globe,
  Monitor,
  User,
  Timer
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

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="glass-card p-10 rounded-[32px] group hover:border-brand-primary/20 transition-all duration-500">
    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-brand-primary group-hover:text-slate-950 group-hover:border-brand-primary transition-all duration-500">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-950 font-display">{title}</h3>
    <p className="text-slate-500 font-light leading-relaxed">{desc}</p>
  </div>
);

export default function FeaturesPage({ onOpenScan, onOpenVideo }: { onOpenScan: () => void; onOpenVideo: () => void }) {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Comprehensive Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-10 font-display leading-tight">
            Everything You Need to <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">Understand Your Health</span> — Instantly.
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            From a simple face scan to deep health insights and personalised guidance. No wires, no blood, no friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onOpenScan}
              className="bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Start Free Scan <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenVideo}
              className="bg-white border border-slate-100 text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
            >
              Book Demo
            </button>
          </div>
        </div>
      </RevealSection>

      {/* Instant Scan Capabilities */}
      <RevealSection className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-950 mb-4 font-display">Scan Your Health Using Just Your Face</h2>
            <p className="text-slate-500 font-light">The future of medical sensing is visual.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Timer className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">30-second scan</h3>
              <p className="text-slate-500 text-sm font-light">Rapid assessment that fits into your daily routine effortlessly.</p>
            </div>
            <div className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No devices needed</h3>
              <p className="text-slate-500 text-sm font-light">Eliminate the need for expensive wearables or bulky equipment.</p>
            </div>
            <div className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Works on any smartphone</h3>
              <p className="text-slate-500 text-sm font-light">Accessible technology that turns your camera into a clinical lens.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Metrics Section */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-950 mb-8 font-display">Get Instant Health Insights</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                Monitor key health metrics with laboratory precision using our proprietary rPPG and AI algorithms.
              </p>
              <ul className="space-y-6">
                {[
                  { label: "Heart Rate", val: "Continuous tracking of BPM" },
                  { label: "Blood Pressure", val: "Systolic & Diastolic estimation" },
                  { label: "Stress Levels", val: "Real-time mental fatigue analysis" },
                  { label: "HRV", val: "Heart Rate Variability for recovery" },
                  { label: "Blood Oxygen", val: "SpO2 saturation monitoring" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-950 block">{item.label}</span>
                      <span className="text-slate-500 text-sm font-light">{item.val}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[64px] border border-slate-200 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-217359f49f4c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Clinical metrics analysis" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-3xl border-white/20">
                  <div className="flex items-center gap-3 text-emerald-400 mb-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Medical Accuracy</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Understand Your Health at a Glance</h4>
                  <p className="text-white/60 text-sm font-light">Get a simple health score and easy-to-understand insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Improvement Section */}
      <RevealSection className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-mesh opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white">Don’t Just Measure — Improve</h2>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              Data is just the beginning. We provide the intelligence you need to change your life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
              <Brain className="w-12 h-12 text-emerald-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">AI-powered coaching</h3>
              <p className="text-white/40 font-light leading-relaxed">Real-time adaptive advice based on your latest bio-signals.</p>
            </div>
            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
              <Zap className="w-12 h-12 text-blue-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Personalised health plans</h3>
              <p className="text-white/40 font-light leading-relaxed">Custom daily routines optimized for your specific recovery needs.</p>
            </div>
            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
              <CheckCircle2 className="w-12 h-12 text-purple-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Daily guidance</h3>
              <p className="text-white/40 font-light leading-relaxed">Consistent support to help you stay on track and build lasting habits.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Privacy Section */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center mb-10 shadow-2xl shadow-slate-900/20">
              <Shield className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-950 mb-8 font-display">Your Data Stays Private</h2>
            <div className="grid sm:grid-cols-3 gap-8 w-full text-left sm:text-center mt-12">
              <div>
                <h4 className="font-bold text-slate-950 mb-2">Secure processing</h4>
                <p className="text-slate-500 text-sm font-light">Military-grade encryption for all data transmissions.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-2">On-device analysis</h4>
                <p className="text-slate-500 text-sm font-light">Processing happens locally to minimize data exposure.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-2">Zero trust storage</h4>
                <p className="text-slate-500 text-sm font-light">No unnecessary PII data storage on our servers.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* How It Works Flow */}
      <RevealSection className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-950 mb-4 font-display">How It Works</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            {['Scan', 'Insights', 'Coach', 'Plan', 'Better Health'].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex-1 text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-emerald-200 transition-all font-bold text-slate-950">
                  {step}
                </div>
                {i < 4 && <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Audience Section */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-950 mb-4 font-display">Built for Everyone</h2>
            <p className="text-slate-500 font-light">Scaling health intelligence across every sector.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: User, label: "Individuals" },
              { icon: Users, label: "Corporate wellness" },
              { icon: ShieldCheck, label: "Insurance" },
              { icon: Stethoscope, label: "Healthcare providers" }
            ].map((audience, i) => (
              <div key={i} className="p-10 rounded-[32px] border border-slate-100 hover:border-brand-primary/20 transition-all text-center group">
                <audience.icon className="w-10 h-10 mx-auto text-slate-400 group-hover:text-brand-primary transition-colors mb-6" />
                <h4 className="font-bold text-slate-950 group-hover:text-emerald-950 transition-colors uppercase tracking-widest text-xs">{audience.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Validation */}
      <RevealSection className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-950 mb-4 font-display">Backed by Science</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Clinically validated technology designed for accuracy and reliability. Our R&D team works with leading academic institutions.
            </p>
          </div>
          <div className="flex gap-12 grayscale opacity-40">
             <Globe className="w-12 h-12" />
             <Stethoscope className="w-12 h-12" />
             <ShieldCheck className="w-12 h-12" />
          </div>
        </div>
      </RevealSection>

      {/* Bottom CTA */}
      <RevealSection className="py-40 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 font-display">Start Your 30-Second <br />Health Check</h2>
          <button 
            onClick={onOpenScan}
            className="bg-brand-primary text-slate-950 px-12 py-6 rounded-2xl font-bold shadow-[0_20px_50px_rgba(0,245,160,0.3)] hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Start Free Scan
          </button>
        </div>
      </RevealSection>
    </div>
  );
}

// Removed duplicate import or placeholder
