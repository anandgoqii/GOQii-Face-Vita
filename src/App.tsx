import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Heart, 
  Droplet, 
  Zap, 
  Brain,
  Shield,
  Smartphone,
  Cpu,
  CheckCircle2,
  Globe,
  Users,
  Stethoscope,
  Microscope,
  Monitor,
  X,
  Loader2,
  User,
  Mail,
  Phone
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-slate-950 font-bold shadow-[0_10px_30px_rgba(0,245,160,0.2)] hover:shadow-[0_15px_40px_rgba(0,245,160,0.3)]',
    secondary: 'bg-white border border-slate-100 text-slate-900 font-bold shadow-sm hover:shadow-md hover:border-slate-200',
    outline: 'border border-slate-200 text-slate-900 font-medium hover:bg-slate-50',
    ghost: 'text-slate-600 hover:text-slate-950 transition-colors font-medium'
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`px-10 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer btn-premium ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6 text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase"
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-3xl md:text-5xl font-bold text-slate-950 leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const RevealSection = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const ScanPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            <div className="flex flex-col lg:flex-row min-h-[500px]">
              <div className="w-full p-8 lg:p-12">
                {step === 1 ? (
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                       <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                        <User className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-950 mb-2 font-display">Create Account</h3>
                      <p className="text-slate-500 font-light">Register to start your clinical-grade health scan.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="tel" 
                          placeholder="Phone Number" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full py-4 relative" disabled={loading}>
                          {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                          ) : (
                            <span className="flex items-center gap-2">Initialize Scan <ArrowRight className="w-4 h-4" /></span>
                          )}
                        </Button>
                      </div>
                    </form>

                    <p className="mt-8 text-[10px] text-slate-400 text-center uppercase tracking-widest leading-loose">
                      By proceeding, you agree to our <br />
                      <span className="text-slate-900 cursor-pointer hover:underline">Privacy Policy</span> & <span className="text-slate-900 cursor-pointer hover:underline">Medical Terms</span>
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20"
                    >
                      <Camera className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-3 font-display">Ready for Capture</h3>
                    <p className="text-slate-500 font-light mb-8 max-w-xs">
                      Please position your face within the frame and ensure you are in a well-lit environment.
                    </p>
                    <div className="w-full aspect-video bg-slate-950 rounded-2xl relative overflow-hidden mb-8 border border-slate-800">
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-32 h-32 border-2 border-emerald-500/40 rounded-full animate-ping" />
                         <Camera className="w-8 h-8 text-white/20" />
                       </div>
                    </div>
                    <Button className="w-full" onClick={onClose}>
                      Start 30s Scan
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const VideoPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <video 
              src="https://appcdn.goqii.com/storeimg/38627_1776842244.mp4" 
              autoPlay 
              controls
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const EnterprisePopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(true);
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            <div className="p-8 lg:p-12">
              {!submitted ? (
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                     <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-950 mb-2 font-display">Enterprise Inquiry</h3>
                    <p className="text-slate-500 font-light">Scale transdermal health assessment across your organization.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input required type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm" />
                      </div>
                      <div className="relative">
                        <input required type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input required type="email" placeholder="Work Email" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm" />
                    </div>

                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input required type="text" placeholder="Company Name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm" />
                    </div>

                    <div className="relative">
                      <Users className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                      <select required className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm appearance-none">
                        <option value="">Expected Volume (Scans/Mo)</option>
                        <option value="<1000">&lt; 1,000</option>
                        <option value="1000-10000">1,000 - 10,000</option>
                        <option value="10000+">10,000+</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full py-4 bg-blue-600 hover:bg-blue-700" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Request Partnership"}
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-8 mx-auto shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-950 mb-3 font-display">Inquiry Received</h3>
                  <p className="text-slate-500 font-light mb-8 max-w-sm mx-auto">
                    An enterprise specialist will reach out within 24 hours to discuss your organizational health strategy.
                  </p>
                  <Button className="w-full" onClick={onClose}>Close</Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Sections ---

const Navbar = ({ onOpenScan }: { onOpenScan: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://appcdn.goqii.com/storeimg/72957_1776847348.png" 
            alt="FaceVital AI" 
            className="h-9 w-auto" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
          <a href="#technology" className="hover:text-emerald-600 transition-colors">Technology</a>
          <a href="#metrics" className="hover:text-emerald-600 transition-colors">Metrics</a>
          <a href="#science" className="hover:text-emerald-600 transition-colors">Science</a>
          <a href="#solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
        </div>

        <Button className="hidden md:flex py-2 px-6 text-sm" onClick={onOpenScan}>
          Start Scan
        </Button>
      </div>
    </motion.nav>
  );
};

const Hero = ({ onOpenScan, onOpenVideo }: { onOpenScan: () => void; onOpenVideo: () => void }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-28 pb-20 bg-mesh">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="bg-slate-950 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 shadow-lg shadow-emerald-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NOW IN PREVIEW
            </div>
            <span className="text-slate-400 text-xs font-medium tracking-wide">Clinically validated · 30s scan</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-[1.1] mb-8 text-slate-950"
          >
            Your face is your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] bg-[length:200%_auto] animate-gradient-slow">
              health dashboard.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl font-light leading-relaxed"
          >
            Scan. Understand. Improve — in 30 seconds. Face Vitals turns 
            your phone camera into a non-invasive clinical-grade health lens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-16"
          >
            <Button className="w-full sm:w-auto group" onClick={onOpenScan}>
              Start Scan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto group" onClick={onOpenVideo}>
              <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-slate-950 stroke-none ml-1" />
              </div>
              Watch Demo
            </Button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-8"
          >
            {[
              { val: "30s", label: "Scan time" },
              { val: "12+", label: "Biomarkers" },
              { val: "99.1%", label: "Signal quality" },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-slate-900 mb-1">{m.val}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Camera Frame / Scanning Graphic */}
            <div className="relative rounded-[48px] overflow-hidden bg-slate-950 border-[12px] border-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] aspect-[4/5] max-w-[480px] mx-auto group">
              {/* Corner Brackets */}
              <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-brand-primary/40 rounded-tl-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-brand-primary/40 rounded-tr-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-brand-primary/40 rounded-bl-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-brand-primary/40 rounded-br-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              {/* Scanning Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-sm z-30 animate-scan opacity-60" />

              <video 
                src="https://appcdn.goqii.com/storeimg/38627_1776842244.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
              />
              
              {/* Overlays matching the image */}
              <div className="absolute top-10 left-8 right-8 flex justify-between items-start">
                <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">LIVE · RPPG SIGNAL</span>
                </div>

                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Monitor className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Facial Mesh Simulation Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
                <div className="w-full h-full border border-emerald-400/20 rounded-full animate-ping [animation-duration:4s]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <Activity className="w-32 h-32 text-emerald-400/30" />
                </div>
              </div>

              {/* Metric Overlays on Scan */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Heart className="w-3 h-3 fill-emerald-400" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">Pulse Detection</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono">72 <span className="text-[10px] opacity-60">bpm</span></div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 min-w-[120px]">
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      <Zap className="w-3 h-3" />
                      <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Blood Flow Insights</span>
                    </div>
                    <div className="text-sm font-bold text-white font-mono">Nominal</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 min-w-[120px]">
                     <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <Activity className="w-3 h-3" />
                      <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Heart Signal Tracking</span>
                    </div>
                    <div className="text-sm font-bold text-white font-mono">Active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backglow for the scan area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Floating UI Elements from image surroundings? No, image is self-contained. */}
        </div>
      </div>
    </section>
  );
};

const ScienceFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Sensing Engine",
      desc: "Our AI captures subtle signals from your face using your camera — turning them into accurate health insights."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Backed by Science",
      desc: "Built on clinically validated research and continuously improved with real-world data."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Trained on Diverse Data",
      desc: "Designed to work accurately across all skin tones, ages, and environments."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Processing",
      desc: "All analysis happens instantly on your device — no delays, no cloud dependency."
    }
  ];

  return (
    <RevealSection className="py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SectionHeading 
            title="Built on Science. Designed for Real Life." 
            subtitle="Foundation" 
            centered={true} 
          />
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed -mt-8">
            Advanced AI meets real-world health — giving you accurate, reliable insights in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-8 rounded-[32px] flex flex-col gap-8 group hover:border-brand-primary/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-brand-primary group-hover:text-slate-950 group-hover:border-brand-primary transition-all duration-500 shadow-sm">
                {f.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-950 font-display tracking-tight group-hover:text-emerald-950">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

const HowItWorks = ({ onOpenScan }: { onOpenScan: () => void }) => {
  const steps = [
    {
      icon: <Heart className="w-8 h-8 text-emerald-500" />,
      title: "Detects Invisible Pulse Signals",
      desc: "Your blood flow creates tiny color changes in your skin. We capture these using your camera.",
      bg: "bg-emerald-50"
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: "Tracks Micro-Movements",
      desc: "Every heartbeat creates subtle movements in your face. Our AI detects what the human eye cannot.",
      bg: "bg-blue-50"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Converts Signals into Insights",
      desc: "These signals are transformed into simple, actionable health metrics in seconds.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <RevealSection id="technology" className="py-32 px-6 max-w-7xl mx-auto bg-mesh">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <SectionHeading title="How Your Face Reveals Your Health" subtitle="Technology" />
        <p className="text-slate-500 text-lg font-light leading-relaxed -mt-8">
          Your face carries tiny signals from your heartbeat and blood flow. 
          Our AI reads these signals to give you instant, easy-to-understand health insights — in seconds.
        </p>
        <div className="flex justify-center mt-12">
          <Button className="group px-8 py-4" onClick={onOpenScan}>
            Start Live Scan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-[15%] left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 -z-10" />
        
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group relative"
          >
            <div className="glass-card p-6 md:p-8 rounded-[24px] h-full transition-all duration-500 hover:border-brand-primary/30">
              <div className={`w-14 h-14 rounded-xl ${step.bg} mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform`}>
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-950 font-display">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
              
              <div className="mt-6 text-brand-primary font-mono text-[9px] font-bold tracking-widest flex items-center gap-2 opacity-100">
                STAGE 0{i+1} <div className="h-[1px] w-8 bg-slate-100" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
};

const MetricsGrid = ({ onOpenScan }: { onOpenScan: () => void }) => {
  const metrics = [
    { name: "Heart Rate", val: "72", unit: "BPM", icon: <Heart className="w-6 h-6" />, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Blood Pressure", val: "118/79", unit: "mmHg", icon: <Droplet className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "HRV (Stress)", val: "64", unit: "ms", icon: <Zap className="w-6 h-6" />, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Oxygen Saturation", val: "98", unit: "%", icon: <Activity className="w-6 h-6" />, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Respiratory Rate", val: "16", unit: "bpm", icon: <Brain className="w-6 h-6" />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Health Score", val: "94", unit: "/100", icon: <ShieldCheck className="w-6 h-6" />, color: "text-brand-primary", bg: "bg-emerald-50" },
  ];

  return (
    <RevealSection id="metrics" className="py-24 bg-white bg-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Real-time clinical biomarkers." subtitle="Metrics" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-5 rounded-[20px] flex flex-col items-center text-center group transition-all duration-300 hover:border-brand-primary/20"
            >
              <div className={`mb-4 p-3 rounded-xl ${m.bg} ${m.color} transition-transform group-hover:scale-110 shadow-sm`}>
                {m.icon}
              </div>
              <span className="text-[9px] text-slate-400 uppercase tracking-[0.1em] font-bold mb-2">{m.name}</span>
              <div className="text-xl font-bold text-slate-950 font-display flex flex-col items-center">
                {m.val}
                <span className="text-[9px] text-slate-300 mt-0.5 uppercase">{m.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button variant="secondary" className="group" onClick={onOpenScan}>
            Check Your Vitals <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </RevealSection>
  );
};

const AIVisualization = ({ onOpenScan }: { onOpenScan: () => void }) => {
  const visualizations = [
    { 
      url: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545bc2_Image.webp",
      label: "What you see"
    },
    { 
      url: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545da2_Tracking%20the%20puls.webp",
      label: "What AI detects"
    },
    { 
      url: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545da4_Precise%20measurement.webp",
      label: "Precise measurement"
    },
    { 
      url: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545da3_Detailed%20facial%20data.webp",
      label: "Micro-movement detection"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visualizations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [visualizations.length]);

  return (
    <RevealSection id="science" className="py-32 px-6 max-w-7xl mx-auto bg-mesh">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading title="What You See vs What AI Sees" subtitle="Science" centered={false} />
          <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
            Your eyes see a face. Our AI sees health signals flowing beneath your skin.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {[
              { t: "🔍 What you see", d: "A normal face — nothing unusual." },
              { t: "🤖 What AI detects", d: "Hidden signals from blood flow and micro-movements." },
              { t: "🧠 Precise measurement", d: "Creates a detailed facial model for accurate health insights." },
              { t: "✨ Micro-movement detection", d: "Detects subtle facial movements invisible to the human eye." },
              { t: "❤️ Pulse tracking", d: "Tracks blood flow and pulse signals beneath your skin." },
              { t: "🔒 Privacy core", d: "All processing is secure and on-device." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-sm font-bold text-slate-900">{item.t}</div>
                <div className="text-xs text-slate-400 font-light leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Button variant="secondary" className="group" onClick={onOpenScan}>
              Start Free Scan <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="relative group">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[40px] overflow-hidden bg-slate-950 border border-slate-200/20 aspect-square shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <div className="absolute inset-0 z-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <img 
                    src={visualizations[currentIndex].url} 
                    alt={visualizations[currentIndex].label} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute top-8 left-8 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="bg-brand-primary/20 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] border border-brand-primary/20"
                  >
                    {visualizations[currentIndex].label}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center">
                <div className="flex gap-2">
                  {visualizations.map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        width: i === currentIndex ? 32 : 8,
                        backgroundColor: i === currentIndex ? "var(--color-brand-primary)" : "rgba(255,255,255,0.4)"
                      }}
                      className="h-1.5 rounded-full shadow-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-primary shadow-[0_0_20px_rgba(0,245,160,0.8)] animate-scan z-30 opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </RevealSection>
  );
};

const Journey = () => {
  const steps = [
    { title: "Digital Twin", desc: "30-second multi-spectral scan" },
    { title: "Analysis", desc: "Deep neural decoding of rPPG" },
    { title: "Coaching", desc: "AI-driven wellness interventions" },
    { title: "Medical", desc: "Telehealth escalation routes" },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
       {/* Accents */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
       
       <SectionHeading title="From Data to Action" subtitle="The Journey" />
       
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mt-20">
          {steps.map((step, i) => (
           <motion.div 
             key={i} 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.15, duration: 0.8 }}
             className="flex flex-col items-start relative group flex-1"
           >
             <div className="w-12 h-12 rounded-xl bg-white mb-6 flex items-center justify-center relative z-10 border border-slate-200 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-slate-950 transition-all duration-500 shadow-sm font-bold text-sm">
                {i+1}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-1/2 w-full h-[1px] bg-slate-200 -translate-y-1/2 ml-6" />
                )}
             </div>
             <h3 className="text-lg font-bold mb-2 text-slate-950 font-display">{step.title}</h3>
             <p className="text-slate-500 text-xs leading-relaxed font-light">{step.desc}</p>
           </motion.div>
         ))}
       </div>
       
       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mt-24 max-w-5xl mx-auto glass-card p-12 rounded-[40px] grid lg:grid-cols-2 gap-16 items-center"
       >
         <div>
           <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100">
             <ShieldCheck className="w-7 h-7 text-emerald-600" />
           </div>
           <h3 className="text-3xl font-bold mb-6 text-slate-950 font-display">Built for Accuracy & Privacy</h3>
           <p className="text-slate-500 font-light leading-relaxed mb-8">
             From just a 30-second face scan, FaceVital provides clear, clinically validated insights into heart health, stress levels, and overall recovery status.
           </p>
           <div className="flex flex-wrap gap-3">
              {["Clinically Validated", "Works across all tones", "Processed on-device"].map((b, i) => (
                <div key={i} className="px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-bold tracking-widest uppercase text-slate-500 border border-slate-200 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" /> {b}
                </div>
              ))}
           </div>
         </div>
         <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Brain, label: "Neural Net" },
              { icon: Activity, label: "Vitality" },
              { icon: Cpu, label: "Edge Logic" },
              { icon: Shield, label: "Privacy" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-primary/20 transition-all text-center">
                <item.icon className="w-10 h-10 mx-auto text-slate-400 group-hover:text-brand-primary transition-colors mb-4" />
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-widest transition-colors">{item.label}</div>
              </div>
            ))}
         </div>
       </motion.div>
    </section>
  );
};

const ResultsSummary = ({ onOpenScan }: { onOpenScan: () => void }) => {
  const results = [
    { icon: <Heart />, label: "Heart Health", desc: "Arrythmia detection and pulse quality." },
    { icon: <Zap />, label: "Stress Levels", desc: "Real-time HRV and mental fatigue analysis." },
    { icon: <Activity />, label: "Recovery Status", desc: "Autonomic nervous system balance." },
    { icon: <Brain />, label: "Health Score", desc: "Unified metric of your overall vitality." },
  ];

  return (
    <RevealSection className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-mesh opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
          The Result
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          From just a 30-second face scan
        </h2>
        <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-10">
          Get clear, actionable insights into your biology without a single drop of blood or expensive wearable.
        </p>
        <Button className="group mx-auto bg-brand-primary text-slate-950 hover:bg-white transition-colors border-none py-6 px-10" onClick={onOpenScan}>
          Capture First Scan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors"
          >
            <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               {r.icon}
            </div>
            <div className="text-white font-bold mb-1 text-sm">{r.label}</div>
            <div className="text-[10px] text-white/40 leading-tight">{r.desc}</div>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
};

const UseCases = ({ onOpenScan, onOpenEnterprise }: { onOpenScan: () => void; onOpenEnterprise: () => void }) => {
  const cases = [
    { icon: <Globe />, title: "Insurance", desc: "Real-time risk assessment for precision underwriting." },
    { icon: <Users />, title: "Corporate Wellness", desc: "Empower employees with zero-friction health tools." },
    { icon: <Stethoscope />, title: "Telehealth", desc: "Enable remote diagnostic capabilities for every doctor." },
    { icon: <Heart />, title: "Public Health", desc: "Screen populations instantly at scale without logistics." },
  ];

  return (
    <RevealSection id="solutions" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="A Multi-Industry Platform" subtitle="Solutions" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {cases.map((c, i) => (
          <div 
            key={i} 
            onClick={onOpenEnterprise}
            className="group bg-white p-6 rounded-xl hover:border-emerald-200 transition-all cursor-pointer border border-slate-100 hover:shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 mb-5 grid place-items-center text-emerald-600 group-hover:scale-110 transition-transform">
              <div className="scale-75">{c.icon}</div>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">{c.title}</h3>
            <p className="text-slate-500 text-xs font-light leading-normal">{c.desc}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
};

const FinalCTA = ({ onOpenScan, onOpenEnterprise }: { onOpenScan: () => void; onOpenEnterprise: () => void }) => {
  return (
    <RevealSection className="py-40 px-6 relative overflow-hidden bg-slate-950">
       {/* Background Sophistication */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-400/20 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase">
            Start your journey
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.05] font-display">
            The future of health is in <br /> 
            <span className="text-brand-primary text-glow-primary">your reflection.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-14 font-light max-w-2xl mx-auto leading-relaxed">
            Join the medical revolution today. Precision health metrics, zero frictional cost, total privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="w-full sm:w-auto group" onClick={onOpenScan}>
               Register First Scan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" onClick={onOpenEnterprise}>
              Enterprise Inquiry
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
             <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden shadow-xl">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
             </div>
             <p className="text-white/30 text-[10px] tracking-[0.2em] font-bold uppercase">
                Trusted by 50,000+ medical leaders
             </p>
          </div>
        </motion.div>
      </div>
    </RevealSection>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-mono text-slate-400 tracking-widest">
          © 2026 FaceVital AI Technologies. All rights reserved. 
        </p>
        <div className="flex gap-8 text-[10px] uppercase font-mono text-slate-400 tracking-widest">
          <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900">Terms of Service</a>
          <a href="#" className="hover:text-slate-900">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isScanOpen, setIsScanOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);

  return (
    <div className="font-sans selection:bg-brand-primary/30 selection:text-slate-950">
      <Navbar onOpenScan={() => setIsScanOpen(true)} />
      <main>
        <Hero onOpenScan={() => setIsScanOpen(true)} onOpenVideo={() => setIsVideoOpen(true)} />
        <ScienceFeatures />
        <HowItWorks onOpenScan={() => setIsScanOpen(true)} />
        <MetricsGrid onOpenScan={() => setIsScanOpen(true)} />
        <AIVisualization onOpenScan={() => setIsScanOpen(true)} />
        <Journey />
        <ResultsSummary onOpenScan={() => setIsScanOpen(true)} />
        <UseCases 
          onOpenScan={() => setIsScanOpen(true)} 
          onOpenEnterprise={() => setIsEnterpriseOpen(true)} 
        />
        <FinalCTA 
          onOpenScan={() => setIsScanOpen(true)} 
          onOpenEnterprise={() => setIsEnterpriseOpen(true)} 
        />
      </main>
      <Footer />
      
      <ScanPopup isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <EnterprisePopup isOpen={isEnterpriseOpen} onClose={() => setIsEnterpriseOpen(false)} />
      
      {/* Global Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-white">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-secondary/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
