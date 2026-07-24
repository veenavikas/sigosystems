import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-8 pb-8 mt-auto relative z-10 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden text-slate-800">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-5 lg:col-span-4 pr-8">
              <Link href="/" className="flex items-center group inline-flex mb-6">
                 <img 
                    src="/logo.png" 
                    alt="SIGO SYSTEMS" 
                    className="w-40 md:w-56 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
              </Link>
              <p className="text-[#1E5FE0] font-bold tracking-wide uppercase text-xs mb-4">
                Human · Deep Tech · Decision
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
                We build the intelligence layer that lets organizations sense problems before they escalate and be able to act while it still matters.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/sigo-systems/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#0B2559] hover:text-white hover:border-[#0B2559] transition-all duration-300 shadow-sm" 
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://x.com/SIGOSYS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#0B2559] hover:text-white hover:border-[#0B2559] transition-all duration-300 shadow-sm" 
                  aria-label="X (Twitter)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Spacing for Desktop */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Links Columns */}
            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-xs">Verticals</h4>
              <ul className="space-y-4">
                {['AIQU', 'GIS', 'ACADEMY', 'LABS'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-[#1E5FE0] transition-colors duration-300 flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#1E5FE0]"><ArrowRight size={14} /></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                {['Contact Us', 'Careers', 'News'].map((item) => (
                  <li key={item}>
                    <Link href={item === 'Contact Us' ? '/contact' : '#'} className="text-sm font-medium text-slate-600 hover:text-[#1E5FE0] transition-colors duration-300 flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#1E5FE0]"><ArrowRight size={14} /></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2 lg:col-span-3">
              <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-xs">Stay Informed</h4>
              <p className="text-slate-600 text-sm mb-4">Subscribe to our technical briefing and intelligence reports.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E5FE0] focus:ring-1 focus:ring-[#1E5FE0] transition-all"
                />
                <button className="absolute right-1.5 top-1.5 bg-[#0B2559] hover:bg-[#1E5FE0] text-white p-2 rounded-lg transition-colors shadow-md">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-100 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} SIGO Systems. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="hover:text-[#0B2559] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#0B2559] transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
