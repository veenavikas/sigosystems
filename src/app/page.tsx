"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";





export default function Home() {
  useEffect(() => {
    // Micro-interaction for scroll reveal matching the HTML snippet
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-text');
          (entry.target as HTMLElement).style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div, section > h2, section > p').forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-[max(884px,100dvh)]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 md:px-12 text-center overflow-hidden bg-white pt-32 pb-16 mt-8">
        
        {/* Translucent Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] max-w-[800px] h-auto object-contain opacity-20 z-0 pointer-events-none"
        >
          <source src="/Animate_this_exact_logo_withou.mp4" type="video/mp4" />
        </video>


        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center">

          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50/80 border border-slate-200 backdrop-blur-md mb-8 shadow-sm reveal-text" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 rounded-full bg-[#1E5FE0] shadow-[0_0_10px_#1E5FE0] animate-pulse"></div>
            <span className="font-label-sm text-xs font-bold text-slate-800 uppercase tracking-[0.25em]">HUMAN · DEEP TECH · DECISION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#1E5FE0] mb-8 reveal-text leading-[1.1]" style={{ animationDelay: '0.3s' }}>
            SIGO turns raw data <br className="hidden md:block" /> into decisions.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 reveal-text font-light leading-relaxed opacity-90" style={{ animationDelay: '0.5s' }}>
            We build the intelligence layer that lets organizations sense problems before they escalate and be able to act while it still matters.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 reveal-text mb-6" style={{ animationDelay: '0.7s' }}>
            <Link href="/aiqu" className="bg-[#1E5FE0] text-white font-semibold tracking-wide uppercase text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(30,95,224,0.3)] hover:shadow-[0_12px_35px_rgba(30,95,224,0.4)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto flex items-center justify-center gap-2 group">
              Explore Our Ecosystem
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Horizons (4-column grid) */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-[#0B2559]">Impact Horizons</h2>
          <div className="h-1 w-12 bg-[#1E5FE0] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* AIQU */}
          <div className="bg-white p-8 rounded-[32px] shadow-[12px_12px_36px_rgba(0,0,0,0.04),-12px_-12px_36px_rgba(255,255,255,1)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.06),-12px_-12px_24px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] flex items-center justify-center mb-6 text-[#1E5FE0] group-hover:scale-110 transition-transform duration-500 border border-gray-50">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2559] mb-3">AIQU</h3>
            <p className="text-[15px] leading-relaxed text-slate-600 mb-8 flex-grow">
              Deep tech bridging classical learning systems with quantum-inspired potential. Engineered for the unsolvable.
            </p>
            <Link href="/aiqu" className="text-[#1E5FE0] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link">
              Explore
              <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>

          {/* GIS */}
          <div className="bg-white p-8 rounded-[32px] shadow-[12px_12px_36px_rgba(0,0,0,0.04),-12px_-12px_36px_rgba(255,255,255,1)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.06),-12px_-12px_24px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] flex items-center justify-center mb-6 text-[#1E5FE0] group-hover:scale-110 transition-transform duration-500 border border-gray-50">
              <span className="material-symbols-outlined text-2xl">public</span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2559] mb-3">GIS</h3>
            <p className="text-[15px] leading-relaxed text-slate-600 mb-8 flex-grow">
              Hyper-accurate Geospatial intelligence, analytics and real-time risk-mapping.
            </p>
            <Link href="/gis" className="text-[#1E5FE0] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link">
              Explore
              <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>

          {/* ACADEMY */}
          <div className="bg-white p-8 rounded-[32px] shadow-[12px_12px_36px_rgba(0,0,0,0.04),-12px_-12px_36px_rgba(255,255,255,1)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.06),-12px_-12px_24px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] flex items-center justify-center mb-6 text-[#1E5FE0] group-hover:scale-110 transition-transform duration-500 border border-gray-50">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2559] mb-3">ACADEMY</h3>
            <p className="text-[15px] leading-relaxed text-slate-600 mb-8 flex-grow">
              High-fidelity technical upskilling engineered from real-world enterprise case studies.
            </p>
            <Link href="/academy" className="text-[#1E5FE0] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link">
              Explore
              <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>

          {/* LABS */}
          <div className="bg-white p-8 rounded-[32px] shadow-[12px_12px_36px_rgba(0,0,0,0.04),-12px_-12px_36px_rgba(255,255,255,1)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.06),-12px_-12px_24px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] flex items-center justify-center mb-6 text-[#1E5FE0] group-hover:scale-110 transition-transform duration-500 border border-gray-50">
              <span className="material-symbols-outlined text-2xl">science</span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2559] mb-3">LABS</h3>
            <p className="text-[15px] leading-relaxed text-slate-600 mb-8 flex-grow">
              Exploratory R&D wing focused on prototypes and cross-vertical tech reuse.
            </p>
            <Link href="/labs" className="text-[#1E5FE0] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link">
              Explore
              <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative px-6 md:px-12 pt-[80px] pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E5FE0]/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2559] tracking-tight mb-6">
            Ready to define the future?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Partner with SIGO Systems to transform your most complex operational challenges into decisive, automated intelligence.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1E5FE0] text-white font-semibold tracking-wide uppercase text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(30,95,224,0.3)] hover:shadow-[0_12px_35px_rgba(30,95,224,0.4)] hover:-translate-y-1 transition-all duration-300">
            Contact Our Team
          </Link>
          <p className="mt-8 text-slate-400 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            Typical response within 12 hours
          </p>
        </div>
      </section>
    </main>
  );
}
