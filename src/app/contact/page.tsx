import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Header */}
      <section className="relative w-full pt-40 pb-20 overflow-hidden bg-[#001848]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E5FE0]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1E5FE0] animate-pulse"></span>
            <span className="text-[#b2c5ff] font-bold tracking-[0.2em] uppercase text-xs">Reach Out</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-heading">
            Let's design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5FE0] to-[#b2c5ff]">the future.</span>
          </h1>
          <p className="text-xl text-[#9bcbff] font-light max-w-2xl leading-relaxed">
            Partner with SIGO Systems to deploy quantum-inspired intelligence into your most mission-critical operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-[#0B2559] mb-4 font-heading">Global Headquarters</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our core engineering and leadership teams are based in India's premier tech ecosystem.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7fc] border border-[#e7eeff] flex items-center justify-center shrink-0 shadow-sm text-[#1E5FE0]">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2559] text-lg mb-2">Hyderabad Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      6th Floor, T Hub<br />
                      Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha<br />
                      Hyderabad Knowledge City, Serilingampally<br />
                      Hyderabad, Telangana 500081
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7fc] border border-[#e7eeff] flex items-center justify-center shrink-0 shadow-sm text-[#1E5FE0]">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2559] text-lg mb-2">Email</h4>
                    <p className="text-slate-600 leading-relaxed">
                      <a href="mailto:contact@sigosys.com" className="hover:text-[#1E5FE0] transition-colors">contact@sigosys.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7fc] border border-[#e7eeff] flex items-center justify-center shrink-0 shadow-sm text-[#1E5FE0]">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2559] text-lg mb-2">Phone</h4>
                    <p className="text-slate-600 leading-relaxed">
                      <a href="tel:+919700144794" className="hover:text-[#1E5FE0] transition-colors">+91 9700144794</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7fc] border border-[#e7eeff] flex items-center justify-center shrink-0 shadow-sm text-[#1E5FE0]">
                    <span className="material-symbols-outlined text-2xl">share</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2559] text-lg mb-2">Social Channels</h4>
                    <div className="flex gap-4 items-center mt-2">
                      <a 
                        href="https://www.linkedin.com/company/sigo-systems/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-[#0B2559] hover:text-white hover:border-[#0B2559] transition-all text-sm font-semibold shadow-sm"
                        aria-label="LinkedIn Profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href="https://x.com/SIGOSYS" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-[#0B2559] hover:text-white hover:border-[#0B2559] transition-all text-sm font-semibold shadow-sm"
                        aria-label="X Profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>X (Twitter)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(20,60,150,0.08)] border border-[#EDF2FA]">
                <h3 className="text-2xl font-bold text-[#0B2559] mb-8 font-heading">Send a Message</h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
