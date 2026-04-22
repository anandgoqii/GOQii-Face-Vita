import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  FileText, 
  Mail,
  AlertCircle,
  HeartPulse
} from 'lucide-react';

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

export default function DisclaimerPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 font-display leading-tight">
            Disclaimer
          </h1>
          <p className="text-slate-500 font-light mb-8">
            Last updated: {currentDate}
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            GOQii FaceVitals provides health insights using AI-based facial analysis. By using this service, you acknowledge and agree to the following:
          </p>
        </div>
      </RevealSection>

      {/* Content Section */}
      <RevealSection className="border-t border-slate-100 pt-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-emerald prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed prose-li:text-slate-600">
          
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 my-10 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="w-6 h-6 text-amber-600" />
              <h2 className="text-xl font-bold text-amber-900 m-0">Not Medical Advice</h2>
            </div>
            <p className="text-amber-800 font-medium mb-4">
              FaceVitals is <strong>not a medical device</strong> and does not provide medical advice, diagnosis, or treatment.
            </p>
            <p className="text-amber-700 font-light mb-4">
              All insights are for informational and wellness purposes only.
            </p>
            <p className="text-amber-700 font-light mb-0">
              Always consult a qualified healthcare professional for any medical concerns.
            </p>
          </div>

          <h2>Accuracy of Results</h2>
          <p>While our technology is based on scientific research and advanced algorithms:</p>
          <ul>
            <li>Results are estimates, not exact measurements</li>
            <li>Accuracy may vary depending on lighting, device quality, and user conditions</li>
            <li>Results should not be used for medical decision-making</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>User Responsibility</h2>
          <p>By using this platform, you agree:</p>
          <ul>
            <li>To use the service responsibly</li>
            <li>Not to rely solely on the results for health decisions</li>
            <li>To follow instructions during the scan for best results</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>No Guarantee</h2>
          <p>We do not guarantee:</p>
          <ul>
            <li>Medical accuracy</li>
            <li>Continuous availability of the service</li>
            <li>Error-free performance</li>
          </ul>
          <p>The service is provided “as is”.</p>

          <hr className="my-10 border-slate-100" />

          <h2>Limitation of Liability</h2>
          <p>GOQii shall not be held responsible for:</p>
          <ul>
            <li>Any decisions made based on the results</li>
            <li>Any health outcomes related to use of the platform</li>
            <li>Any indirect or consequential damages</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>External Factors</h2>
          <p>Results may be affected by:</p>
          <ul>
            <li>Poor lighting</li>
            <li>Movement during scan</li>
            <li>Device limitations</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>Changes to This Disclaimer</h2>
          <p>We may update this Disclaimer from time to time. Continued use of the service means you accept any updates.</p>

          <hr className="my-10 border-slate-100" />

          <h2>Contact Us</h2>
          <p>If you have questions:</p>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-3 not-prose">
            <a href="mailto:support@goqii.com" className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              <Mail className="w-5 h-5 text-slate-400" /> support@goqii.com
            </a>
            <a href="https://goqii.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
               <FileText className="w-5 h-5 text-slate-400" /> https://goqii.com
            </a>
          </div>

        </div>
      </RevealSection>

      {/* Footer Assurance */}
      <RevealSection className="pt-24 pb-12 mt-16 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-left">
              <h4 className="text-emerald-900 font-bold mb-2 uppercase tracking-wider text-sm">Important Note</h4>
              <p className="text-emerald-700 font-light leading-relaxed text-sm">
                FaceVitals is designed to support preventive health awareness, not replace professional medical care.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
