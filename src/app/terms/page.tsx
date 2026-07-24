import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, FileCheck, ShieldAlert, Cpu } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SIGO Systems",
  description: "Terms and conditions governing the access and use of SIGO Systems platforms, applications, and deep tech solutions.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Dark Hero Section */}
      <section className="relative w-full pt-40 pb-20 overflow-hidden bg-[#001848] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E5FE0]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#9bcbff] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Scale className="w-4 h-4 text-[#1E5FE0]" />
            <span className="text-[#b2c5ff] font-bold tracking-[0.2em] uppercase text-xs">Legal Framework</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-heading">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-[#9bcbff] font-light max-w-2xl leading-relaxed">
            The contractual rules, acceptable use standards, and service conditions governing SIGO Systems platforms.
          </p>
          <div className="mt-8 text-xs text-slate-400 font-mono">
            Last Updated: July 24, 2026
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Highlights Grid */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Intellectual Property</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All AIQU engines, GIS mapping layers, and Labs innovations remain protected property of SIGO Systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Service SLAs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enterprise service guarantees and uptime protocols are defined in individual Master Service Agreements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Acceptable Use</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Users agree to access platforms in compliance with global security regulations and ethical guidelines.
                </p>
              </div>
            </div>

            {/* Document Body */}
            <div className="lg:col-span-12 bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-slate-200 space-y-10 text-slate-700 leading-relaxed">
              
              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the website, software, APIs, or enterprise services provided by SIGO Systems ("SIGO Systems," "we," "us," or "our"), you agree to be legally bound by these Terms of Service. If you are entering into this agreement on behalf of an enterprise or organization, you represent that you have full legal authority to bind that entity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">2. Description of Services</h2>
                <p>
                  SIGO Systems builds intelligence layers across core technology verticals including AIQU (quantum-inspired core), GIS (Geospatial Intelligence & risk mapping), ACADEMY (workforce upskilling), and LABS (exploratory R&D). Service levels, custom deployments, and API rate limits are governed by these Terms and associated enterprise orders.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">3. Intellectual Property Rights</h2>
                <p>
                  All proprietary software algorithms, source code, neural network architecture, user interfaces, branding assets, trademarks, and documentation published or provided by SIGO Systems are the exclusive intellectual property of SIGO Systems and its licensors. No title or ownership rights are transferred to you under these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">4. Acceptable Use Policy</h2>
                <p className="mb-4">
                  When accessing SIGO Systems platforms, you agree that you will not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reverse engineer, decompile, or attempt to extract source code or model weights from SIGO Systems endpoints.</li>
                  <li>Use services to perform unauthorized vulnerability scanning, denial-of-service tests, or malicious network probing.</li>
                  <li>Attempt to bypass access control mechanisms, authentication tokens, or tenant boundaries.</li>
                  <li>Use our intelligence tools to generate illegal content or breach third-party intellectual property rights.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">5. Confidentiality & Enterprise Data</h2>
                <p>
                  Each party agrees to maintain strictly confidential all non-public information received from the other party marked as confidential. SIGO Systems processes enterprise client data strictly in accordance with our <Link href="/privacy" className="text-[#1E5FE0] hover:underline font-medium">Privacy Policy</Link> and executed Non-Disclosure Agreements (NDAs).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">6. Disclaimer of Warranties</h2>
                <p>
                  Except as explicitly specified in a formal enterprise Master Service Agreement, SIGO Systems public web applications and demonstration environments are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, SIGO Systems shall not be liable for any indirect, incidental, consequential, special, or punitive damages, or loss of profits or revenue arising out of or related to your use of our public site or uncontracted services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">8. Governing Law & Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#0B2559] mb-2">Legal Enquiries</h2>
                <p className="text-sm text-slate-600">
                  For formal legal communications or terms clarifications:<br />
                  <strong>SIGO Systems Legal Operations</strong><br />
                  Email: <a href="mailto:contact@sigosys.com" className="text-[#1E5FE0]">contact@sigosys.com</a>
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
