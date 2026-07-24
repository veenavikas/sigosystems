import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SIGO Systems",
  description: "Learn how SIGO Systems collects, uses, and safeguards enterprise data and user privacy.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-4 h-4 text-[#1E5FE0]" />
            <span className="text-[#b2c5ff] font-bold tracking-[0.2em] uppercase text-xs">Legal & Data Governance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-heading">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-[#9bcbff] font-light max-w-2xl leading-relaxed">
            How SIGO Systems protects your data, governs AI model interactions, and ensures enterprise security.
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
            
            {/* Quick Summary Cards */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Zero Unverified Sharing</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We never sell or monetize client telemetry, model training sets, or personal data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Granular Control</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enterprise customers maintain complete data sovereignty and access audit logs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E5FE0] flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B2559] mb-2">Global Compliance</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered in compliance with ISO 27001, SOC 2, and international data standards.
                </p>
              </div>
            </div>

            {/* Detailed Document Body */}
            <div className="lg:col-span-12 bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-slate-200 space-y-10 text-slate-700 leading-relaxed">
              
              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">1. Introduction</h2>
                <p>
                  SIGO Systems ("we," "our," or "us") is dedicated to providing high-fidelity intelligence, quantum-inspired optimization, geospatial decision layers, and deep tech solutions. This Privacy Policy details the types of information we collect, how we process and safeguard that information, and your rights regarding your data when accessing our website, platform services, or APIs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                  We collect information to provide robust services to our enterprise partners and site visitors:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, professional email address, company name, phone number, and inquiry messages provided via contact forms.</li>
                  <li><strong>Technical & Telemetry Data:</strong> IP address, browser specification, operating system, timestamped session metrics, and security logs collected to ensure network integrity.</li>
                  <li><strong>Enterprise Platform Data:</strong> Operational datasets uploaded by authorized users under formal Master Service Agreements (MSAs) or Non-Disclosure Agreements (NDAs).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">3. How We Use Your Data</h2>
                <p className="mb-4">
                  Your data is used strictly for legitimate business operations and service delivery:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responding to enterprise inquiries, scheduling product demonstrations, and initiating technical briefing sessions.</li>
                  <li>Monitoring system security, detecting malicious activities, and protecting infrastructure integrity.</li>
                  <li>Delivering requested services under contractual agreements.</li>
                  <li>Improving our algorithmic accuracy without retaining or cross-contaminating private enterprise datasets.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">4. AI & Model Training Governance</h2>
                <p>
                  At SIGO Systems, we strictly enforce proprietary isolation for deep tech and AI models. Customer telemetry, query logs, and submitted documents are <strong>never used to train public foundation models</strong>. Private enterprise deployments utilize isolated tenants with strict encryption at rest (AES-256) and in transit (TLS 1.3).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">5. Data Sharing and Third Parties</h2>
                <p>
                  SIGO Systems does not sell, rent, or trade personal or organizational data. We only share information with verified infrastructure subprocessors (such as cloud hosting providers and encrypted email service providers like EmailJS) strictly required to operate our digital presence and services under confidential terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">6. Data Security & Retention</h2>
                <p>
                  We deploy industry-standard administrative, physical, and technical safeguards. We retain personal inquiry information only for as long as necessary to fulfill the operational purpose for which it was gathered or to comply with statutory legal requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B2559] mb-4">7. Your Rights</h2>
                <p>
                  Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal data held by SIGO Systems. To exercise these rights, please contact our Data Governance Officer at <a href="mailto:contact@sigosys.com" className="text-[#1E5FE0] font-semibold hover:underline">contact@sigosys.com</a>.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#0B2559] mb-2">Contact Governance Team</h2>
                <p className="text-sm text-slate-600">
                  If you have questions regarding this Privacy Policy or data security at SIGO Systems:<br />
                  <strong>SIGO Systems Data Governance</strong><br />
                  6th Floor, T Hub, Knowledge City, Serilingampally, Hyderabad, Telangana 500081<br />
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
