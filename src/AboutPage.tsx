import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart,
  Activity,
  Zap,
  Globe,
  Brain,
  ShieldCheck,
  Stethoscope,
  Microscope,
  ArrowRight
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

export default function AboutPage({ onOpenScan, onOpenEnterprise }: { onOpenScan: () => void; onOpenEnterprise: () => void }) {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 mb-8">
            <Heart className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-10 font-display leading-tight">
            Redefining How the World <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">Understands Health</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            At GOQii FaceVitals, we’re building the future of non-invasive health monitoring — using AI, computer vision, and human-centric design.
          </p>
        </div>
      </RevealSection>

      {/* Mission & Vision */}
      <RevealSection className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-6 font-display">Our Mission</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              To make health monitoring effortless, accessible, and continuous — so everyone can understand and improve their health in real time.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-6 font-display">Our Vision</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              A world where checking your health is as simple as looking into your camera — enabling early detection, prevention, and better living for all.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* What Makes Us Different */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-20 font-display">What Makes Us Different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Brain, label: "AI-powered face scan technology" },
              { icon: Activity, label: "Real-time health insights" },
              { icon: Heart, label: "Behaviour change through coaching" },
              { icon: Globe, label: "Built for global accessibility" }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center">
                <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
                <h3 className="font-bold text-slate-950 text-lg">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Science & Trust */}
      <RevealSection className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 font-display">Built on Advanced Science</h2>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
              Our technology uses AI to analyze subtle signals from your face and convert them into meaningful health insights with clinical precision.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Clinically validated", icon: ShieldCheck },
                { label: "Works across all skin tones", icon: Globe },
                { label: "Built with leading researchers", icon: Microscope },
                { label: "Used by global partners", icon: Stethoscope }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-[64px] border border-white/10 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2128&auto=format&fit=crop" 
                alt="Advanced Science" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                 <h4 className="text-2xl font-bold font-display">Trusted & Proven</h4>
                 <p className="text-white/60">Delivering clinical accuracy to the consumer.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Leadership */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-6 font-display">Leadership</h2>
          <p className="text-xl text-slate-500 font-light mb-20">Meet the team driving innovation in health technology.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
             <div className="px-10 py-6 rounded-2xl bg-slate-50 border border-slate-100 text-lg font-bold text-slate-950">Leadership Team</div>
             <div className="px-10 py-6 rounded-2xl bg-slate-50 border border-slate-100 text-lg font-bold text-slate-950">Advisory Board</div>
             <div className="px-10 py-6 rounded-2xl bg-slate-50 border border-slate-100 text-lg font-bold text-slate-950">Longevity Council</div>
          </div>
        </div>
      </RevealSection>

      {/* Impact & Partners */}
      <RevealSection className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-slate-950 mb-16 font-display">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="text-5xl font-black text-emerald-500 mb-4 font-display">Millions</div>
                <div className="text-slate-600 font-medium">of health scans completed</div>
              </div>
              <div>
                <div className="text-5xl font-black text-blue-500 mb-4 font-display">Global</div>
                <div className="text-slate-600 font-medium">users across multiple countries</div>
              </div>
               <div>
                <div className="text-5xl font-black text-purple-500 mb-4 font-display">Trusted</div>
                <div className="text-slate-600 font-medium">by healthcare & insurance partners</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Our Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale">
              {/* Partner Logos placeholds */}
              <div className="text-2xl font-bold font-display">Partner 1</div>
              <div className="text-2xl font-bold font-display">Partner 2</div>
              <div className="text-2xl font-bold font-display">Partner 3</div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-40 px-6 text-center">
        <h2 className="text-5xl font-bold text-slate-950 mb-10 font-display">Join Us in Building the<br/>Future of Health</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onOpenScan}
            className="bg-brand-primary text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:scale-105 active:scale-95 transition-all text-lg flex items-center justify-center gap-3"
          >
            Start Your Health Scan <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenEnterprise}
            className="bg-white border border-slate-200 text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-lg"
          >
            Partner With Us
          </button>
        </div>
      </RevealSection>
    </div>
  );
}
