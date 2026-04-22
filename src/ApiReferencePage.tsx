import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Copy, ArrowRight, Code, Key, BookOpen, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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

export default function ApiReferencePage() {
  const [copied, setCopied] = useState(false);
  const [responseCopied, setResponseCopied] = useState(false);
  
  const curlCode = `curl -X POST https://api.goqii.com/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "video=@face_scan.mp4"`;

  const responseCode = `{
  "status": "success",
  "data": {
    "scan_id": "scn_9x8f7d6e5",
    "metrics": {
      "heart_rate": {
        "value": 72,
        "unit": "bpm",
        "confidence": 0.98
      },
      "hrv": {
        "value": 54,
        "unit": "ms",
        "confidence": 0.95
      },
      "stress_index": {
        "value": 3.2,
        "level": "Low"
      },
      "blood_pressure": {
        "systolic": 118,
        "diastolic": 76
      }
    },
    "metadata": {
      "duration": "30.1s",
      "lighting_quality": "excellent"
    }
  }
}`;

  const copyCode = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <Code className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Developers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-8 font-display leading-tight">
            Face Vitals API
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Measure health signals using just a camera — via simple API integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              <Key className="w-5 h-5" /> Get API Key
            </button>
            <button className="bg-slate-50 border border-slate-200 text-slate-950 px-10 py-5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-center gap-3">
              <BookOpen className="w-5 h-5 text-slate-400" /> View Full Docs
            </button>
          </div>
        </div>
      </RevealSection>

      {/* Quick Start Section */}
      <RevealSection className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 mb-6 font-mono text-sm tracking-widest uppercase">
              <Zap className="w-4 h-4" /> Quick Start
            </div>
            <h2 className="text-4xl font-bold text-slate-950 mb-6 font-display">Integrate in minutes</h2>
            <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
              Send a 30-second face scan video and receive health insights instantly. Our completely stateless API ensures no patient data is stored longer than required for processing.
            </p>

            <ul className="space-y-5">
              {[
                "Webhooks for asynchronous processing",
                "SDKs available for iOS, Android, and Web",
                "HIPAA and GDPR Compliant endpoints"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Request Block */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slate-400">cURL Request</span>
                  <button 
                    onClick={() => copyCode(curlCode, setCopied)} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                <pre className="text-emerald-400">
                  <code>
<span className="text-blue-400">curl</span> -X POST https://api.goqii.com/v1/scan \
  -H <span className="text-amber-300">"Authorization: Bearer YOUR_API_KEY"</span> \
  -F <span className="text-amber-300">"video=@face_scan.mp4"</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Response Block */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
                <span className="text-xs font-mono text-emerald-400">200 OK Response</span>
                <button 
                  onClick={() => copyCode(responseCode, setResponseCopied)} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {responseCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300">
                <pre>
                  <code>{responseCode}</code>
                </pre>
              </div>
            </div>
            
          </div>
        </div>
      </RevealSection>

      {/* Trust & Security */}
      <RevealSection className="py-24 max-w-5xl mx-auto px-6 text-center">
        <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
        <h3 className="text-3xl font-bold text-slate-950 mb-6 font-display">Enterprise-Grade Security</h3>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Our API is designed with a zero-trust architecture. Videos are processed in memory and immediately discarded. No biometric data is ever written to disk without explicit client consent via data retention policies.
        </p>
      </RevealSection>
    </div>
  );
}
