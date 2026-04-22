import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Microscope, 
  CheckCircle2, 
  HeartPulse, 
  AlertCircle, 
  ArrowRight,
  Brain,
  Activity,
  UserCheck
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

export default function MedicalAdvisoryPage({ onOpenScan, onOpenEnterprise }: { onOpenScan: () => void; onOpenEnterprise: () => void }) {
  const advisors = [
    {
      name: "Dr. John Smith",
      role: "Cardiologist, MD",
      experience: "20+ years in cardiovascular health",
      expertise: "Expert in preventive cardiology",
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Dr. Sarah Lee",
      role: "Internal Medicine Specialist",
      experience: "Focus on chronic disease management",
      expertise: "Clinical research background",
      image: "https://i.pravatar.cc/300?img=5"
    },
    {
      name: "Dr. Michael Chen",
      role: "Digital Health & AI Researcher",
      experience: "Specialist in AI-driven diagnostics",
      expertise: "Advisor on clinical validation",
      image: "https://i.pravatar.cc/300?img=33"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-8">
            <Stethoscope className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Clinical Oversight</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-10 font-display leading-tight">
            Guided by <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-400">Medical Expertise</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Our Medical Advisory Board brings together leading clinicians and researchers to ensure our technology is accurate, ethical, and evidence-based.
          </p>
        </div>
      </RevealSection>

      {/* Why Medical Oversight Matters */}
      <RevealSection className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <HeartPulse className="w-12 h-12 text-blue-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6 font-display">Why Medical Oversight Matters</h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Health insights should be grounded in science. Our advisory board helps validate our approach, refine our algorithms, and ensure the responsible use of AI in healthcare.
          </p>
        </div>
      </RevealSection>

      {/* Meet the Advisory Board */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-950 mb-4 font-display">Medical Advisory Board</h2>
            <p className="text-slate-500 font-light">Leading experts guiding the future of digital health.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {advisors.map((advisor, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-blue-50 transition-colors">
                  <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-1 font-display">{advisor.name}</h3>
                <div className="text-blue-600 font-medium mb-4 text-sm">{advisor.role}</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-600 text-sm font-light">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    {advisor.experience}
                  </li>
                  <li className="flex items-start gap-2 text-slate-600 text-sm font-light">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    {advisor.expertise}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Contributions array */}
      <RevealSection className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">How Our Advisors Contribute</h2>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
              Our board is actively involved in the development and validation lifecycle of all FaceVital features.
            </p>
            <ul className="space-y-6">
              {[
                "Clinical validation of algorithms",
                "Guidance on health metrics and interpretation",
                "Ethical use of AI in healthcare",
                "Continuous improvement of accuracy"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-lg text-white/90 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-sm">
            <Microscope className="w-14 h-14 text-emerald-400 mb-8" />
            <h3 className="text-2xl font-bold mb-4 font-display">Built on Evidence-Based Science</h3>
            <p className="text-white/60 leading-relaxed font-light mb-8">
              Our approach is strictly informed by rigorous research in remote photoplethysmography (rPPG) and advanced computer vision, comprehensively reviewed by medical experts before reaching the consumer.
            </p>
            <div className="h-[1px] w-full bg-white/10 mb-8" />
            <div className="flex gap-6 opacity-50 grayscale">
               {/* Clinical mock stamps */}
               <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> <span className="text-xs font-bold tracking-widest uppercase">Verified</span></div>
               <div className="flex items-center gap-2"><Activity className="w-5 h-5" /> <span className="text-xs font-bold tracking-widest uppercase">Validated</span></div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Trust & Safety */}
      <RevealSection className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-950 mb-4 font-display">Trust & Safety</h2>
            <p className="text-slate-500 font-light">Anchored in clinical realities, built for public well-being.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
              <h4 className="font-bold text-slate-950 mb-2">Clinically Informed</h4>
              <p className="text-slate-500 text-sm font-light">Development guided directly by practicing medical professionals.</p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <UserCheck className="w-10 h-10 text-blue-500 mb-6" />
              <h4 className="font-bold text-slate-950 mb-2">Diverse Populations</h4>
              <p className="text-slate-500 text-sm font-light">Designed and tested to work accurately across all demographics and skin tones.</p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <Brain className="w-10 h-10 text-purple-500 mb-6" />
              <h4 className="font-bold text-slate-950 mb-2">Global Standards</h4>
              <p className="text-slate-500 text-sm font-light">Aligned with strict international health and data privacy regulations.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Important Note (Disclaimer) */}
      <RevealSection className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="text-amber-900 font-bold mb-2 uppercase tracking-wider text-sm">Important Note</h4>
              <p className="text-amber-700 font-light leading-relaxed text-sm">
                FaceVitals provides health insights for informational purposes only. The metrics and guidance provided are <strong>not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of a physician or other qualified health provider with any questions regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Complete CTA */}
      <RevealSection className="py-32 px-6 text-center">
        <h2 className="text-5xl font-bold text-slate-950 mb-10 font-display">Experience the Future of<br/>Preventive Health</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onOpenScan}
            className="bg-brand-primary text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:scale-105 active:scale-95 transition-all text-lg flex items-center justify-center gap-3"
          >
            Start Your Health Scan <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenEnterprise}
            className="bg-white border border-slate-200 text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-lg flex items-center justify-center gap-3"
          >
            Contact Our Team
          </button>
        </div>
      </RevealSection>

    </div>
  );
}
