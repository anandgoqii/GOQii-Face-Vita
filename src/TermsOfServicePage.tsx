import React from 'react';
import { motion } from 'motion/react';
import { 
  Scale, 
  FileText, 
  Mail,
  AlertCircle,
  Gavel,
  ShieldAlert
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

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <RevealSection className="px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8">
            <Gavel className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 font-display leading-tight">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-light mb-8">
            Last updated: {currentDate}
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Welcome to GOQii FaceVitals. These Terms of Service (“Terms”) govern your access to and use of our platform, services, and website. By using our services, you agree to these Terms.
          </p>
        </div>
      </RevealSection>

      {/* Content Section */}
      <RevealSection className="border-t border-slate-100 pt-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-emerald prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed prose-li:text-slate-600">
          
          <h2>1. Use of Services</h2>
          <p>You agree to use FaceVitals only for lawful purposes and in accordance with these Terms.</p>
          <p>You must not:</p>
          <ul>
            <li>Misuse or attempt to disrupt the platform</li>
            <li>Use the service for unlawful or harmful activities</li>
            <li>Attempt to reverse engineer or exploit the system</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>2. Eligibility</h2>
          <p>You must be at least 18 years old to use this service.</p>
          <p>By using the platform, you confirm that you meet this requirement.</p>

          <hr className="my-10 border-slate-100" />

          <h2>3. Description of Service</h2>
          <p>FaceVitals provides AI-based health insights using facial scanning technology.</p>
          <p>The service:</p>
          <ul>
            <li>Uses camera-based analysis</li>
            <li>Provides estimated health metrics</li>
            <li>Is intended for informational and wellness purposes only</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 my-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-amber-600" />
              <h2 className="!my-0 !text-amber-900">4. Medical Disclaimer</h2>
            </div>
            <p className="!text-amber-700 !mb-4 text-sm font-medium">
              FaceVitals is <strong>not a medical device</strong> and does not provide medical advice, diagnosis, or treatment.
            </p>
            <p className="!text-amber-700 !mb-0 text-sm">
              You should always consult a qualified healthcare professional for medical concerns.
            </p>
          </div>

          <hr className="my-10 border-slate-100" />

          <h2>5. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information (if required)</li>
            <li>Follow scan instructions properly</li>
            <li>Use the platform responsibly</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>6. Privacy</h2>
          <p>Your use of the service is also governed by our Privacy Policy.</p>
          <p>Please review it to understand how we handle your data.</p>

          <hr className="my-10 border-slate-100" />

          <h2>7. Intellectual Property</h2>
          <p>All content, technology, and materials on this platform are owned by GOQii or its licensors.</p>
          <p>You may not:</p>
          <ul>
            <li>Copy, modify, or distribute content</li>
            <li>Use our technology without permission</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law:</p>
          <ul>
            <li>We do not guarantee accuracy of results</li>
            <li>We are not liable for decisions made based on insights</li>
            <li>The service is provided “as is”</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>9. Service Availability</h2>
          <p>We may:</p>
          <ul>
            <li>Modify or discontinue services</li>
            <li>Update features</li>
            <li>Restrict access if necessary</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>10. Termination</h2>
          <p>We reserve the right to suspend or terminate access if:</p>
          <ul>
            <li>Terms are violated</li>
            <li>Misuse is detected</li>
          </ul>

          <hr className="my-10 border-slate-100" />

          <h2>11. Third-Party Services</h2>
          <p>Our platform may include integrations or links to third-party services.</p>
          <p>We are not responsible for their content or practices.</p>

          <hr className="my-10 border-slate-100" />

          <h2>12. Changes to Terms</h2>
          <p>We may update these Terms from time to time.</p>
          <p>Continued use of the service means you accept the updated Terms.</p>

          <hr className="my-10 border-slate-100" />

          <h2>13. Governing Law</h2>
          <p>These Terms are governed by the laws of [Insert Jurisdiction].</p>

          <hr className="my-10 border-slate-100" />

          <h2>14. Contact Us</h2>
          <p>If you have questions about these Terms:</p>
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
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-left">
              <h4 className="text-amber-900 font-bold mb-2 uppercase tracking-wider text-sm">Important Notice</h4>
              <p className="text-amber-700 font-light leading-relaxed text-sm">
                FaceVitals provides health insights for informational purposes only and is not a substitute for professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
