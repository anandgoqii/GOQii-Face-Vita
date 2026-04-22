import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  Mail,
  CheckCircle2,
  AlertCircle
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

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <Scale className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 font-display leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-light mb-8">
            Last updated: {currentDate}
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            GOQii FaceVitals (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>
        </div>
      </RevealSection>

      {/* Content Section */}
      <RevealSection className="border-t border-slate-100 pt-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-emerald prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed prose-li:text-slate-600">
          
          <h2>1. Information We Collect</h2>
          <p>We collect only the information necessary to provide our services:</p>
          
          <h3>a. Face Scan Data</h3>
          <ul>
            <li>Video or image data captured during the scan</li>
            <li>Used solely to generate health insights</li>
          </ul>

          <h3>b. Personal Information (Optional)</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Age or gender (if provided)</li>
          </ul>

          <h3>c. Device & Usage Data</h3>
          <ul>
            <li>Device type</li>
            <li>Browser information</li>
            <li>Interaction data</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and improve health insights</li>
            <li>Enhance user experience</li>
            <li>Ensure platform security</li>
            <li>Support customer service</li>
          </ul>
          <p className="font-medium text-slate-900 border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50 rounded-r-lg">
            We do <strong>not sell your personal data</strong>.
          </p>

          <hr className="my-10 border-slate-100" />

          <h2>3. How Your Data is Processed</h2>
          <p>Your data follows this process:</p>
          <div className="flex flex-wrap items-center gap-3 my-6 font-mono text-sm text-slate-500 bg-slate-50 p-6 rounded-2xl border border-slate-100">
             <span className="text-emerald-600 font-bold">Capture</span> → <span>Analyze</span> → <span>Generate insights</span> → <span className="text-blue-600 font-bold">Secure handling</span>
          </div>
          <p>Wherever possible, processing is done securely and efficiently to minimize exposure.</p>

          <hr className="my-10 border-slate-100" />

          <h2>4. Data Storage & Security</h2>
          <p>We implement strong security measures, including:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure infrastructure and access controls</li>
            <li>Regular security reviews</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>5. Data Retention</h2>
          <ul>
            <li>Data is retained only as long as necessary to provide services</li>
            <li>Users may request deletion of their data at any time</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request correction</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
          </ul>
          <p>To exercise these rights, contact us at: <a href="mailto:support@goqii.com" className="text-emerald-600 font-medium hover:underline">support@goqii.com</a></p>

          <hr className="my-10 border-slate-100" />

          <h2>7. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data only with:</p>
          <ul>
            <li>Trusted service providers (for infrastructure or analytics)</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>8. Cookies & Tracking</h2>
          <p>We may use cookies to:</p>
          <ul>
            <li>Improve functionality</li>
            <li>Analyze usage</li>
            <li>Enhance user experience</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>

          <hr className="my-10 border-slate-100" />

          <h2>9. Children’s Privacy</h2>
          <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.</p>

          <hr className="my-10 border-slate-100" />

          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 my-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              <h2 className="!my-0 !text-amber-900">10. Medical Disclaimer</h2>
            </div>
            <p className="!text-amber-700 !mb-0 text-sm">
              FaceVitals provides health insights for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <hr className="my-10 border-slate-100" />

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last updated” date.</p>

          <hr className="my-10 border-slate-100" />

          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
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
      <RevealSection className="py-24 mt-16 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-slate-950 mb-4 font-display">Your Privacy Matters</h3>
          <p className="text-slate-500 font-light mb-8">We are committed to keeping your data safe, secure, and always in your control.</p>
        </div>
      </RevealSection>
    </div>
  );
}
