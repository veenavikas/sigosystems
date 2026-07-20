"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const HeroParticleField = dynamic(
  () => import("@/components/3d/HeroParticleField").then((mod) => mod.HeroParticleField),
  { ssr: false }
);

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
    <main className="pb-[80px] min-h-[max(884px,100dvh)]">
      {/* Cinematic Hero Section */}
      <section className="relative h-[850px] flex flex-col items-center justify-center px-6 md:px-12 text-center overflow-hidden bg-[#000a1f]">
        {/* Three.js Visual Centerpiece */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen">
          <HeroParticleField />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E5FE0] rounded-full blur-[200px] opacity-[0.15] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-[#f9f9ff] pointer-events-none z-10"></div>

        <div className="relative z-20 w-full max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(30,95,224,0.2)] reveal-text" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 rounded-full bg-[#1E5FE0] shadow-[0_0_10px_#1E5FE0] animate-pulse"></div>
            <span className="font-label-sm text-xs font-bold text-white uppercase tracking-[0.25em]">HUMAN · DEEP TECH · DECISION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white mb-8 reveal-text leading-[1.1]" style={{ animationDelay: '0.3s' }}>
            SIGO turns raw data <br className="hidden md:block" /> into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5FE0] to-[#b2c5ff]">decisions.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#b2c5ff] max-w-2xl mx-auto mb-12 reveal-text font-light leading-relaxed opacity-90" style={{ animationDelay: '0.5s' }}>
            We build the intelligence layer that lets organizations sense problems before they escalate and be able to act while it still matters.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 reveal-text" style={{ animationDelay: '0.7s' }}>
            <button className="bg-gradient-to-r from-[#0B2559] to-[#1E5FE0] text-white font-semibold tracking-wide uppercase text-sm px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(30,95,224,0.4)] hover:shadow-[0_12px_40px_rgba(30,95,224,0.6)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
              Explore Our Ecosystem
            </button>
            <button className="bg-white/5 border border-white/20 backdrop-blur-sm text-white font-semibold tracking-wide uppercase text-sm px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full md:w-auto">
              Watch Technical Showcase
            </button>
          </div>
        </div>
      </section>

      {/* Impact Horizons (Bento Grid Style) */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-[#f9f9ff]">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Impact Horizons</h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-unit-sm rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* AIQU - Large Feature Card */}
          <div className="md:col-span-8 bg-[#0B2559] p-10 md:p-12 rounded-[32px] shadow-lg group flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FE0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-white text-3xl">auto_awesome</span>
              </div>
              <h3 className="font-heading text-4xl font-bold tracking-tight text-white mb-4">AIQU</h3>
              <p className="text-[17px] leading-relaxed text-[#b2c5ff] mb-8">
                Deep tech software and hardware bridging classical learning systems with quantum-inspired potential. Engineered for the unsolvable.
              </p>
              <a href="/aiqu" className="text-white font-semibold text-sm uppercase tracking-widest flex items-center gap-2 group/link">
                Explore AIQU 
                <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </a>
            </div>
            <div className="hidden md:block w-1/3 h-full min-h-[200px] rounded-2xl overflow-hidden relative grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
              <img 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Advanced silicon circuitry" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiGzaVmZICcRMm6f9_1j9P3Xu3kndIjHm_eEBVB0UOGkhGfvYuzV2kuQzcc8idJV0ivEZP8eVE1QZKEYcDhfNAiSx7lgHnfOGyyZQeEhH7ZI9CBQfsIIsw87yNCemwcPBe-Jl2NXfXFozgxs7UIqTNY8mkkJ1ekZCz54H57TgtC2JqNCPBcXrWgVK3Zrdzl8HfamajaX7IYP84lHDysP2DVtqUH2pACSoV5aCw4T4CIxdzouSzxixsOOYHoxDTBknrW4ahfxM0K_ph" 
              />
              <div className="absolute inset-0 bg-[#0B2559]/30 mix-blend-overlay"></div>
            </div>
          </div>

          {/* GIS - Tall/Square Card */}
          <div className="md:col-span-4 bg-white p-10 rounded-[32px] border border-[#EDF2FA] shadow-[0_8px_30px_rgba(20,60,150,0.04)] hover:shadow-[0_20px_50px_rgba(30,95,224,0.08)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-16 h-16 bg-[#f4f7fc] border border-[#e7eeff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E5FE0] group-hover:border-[#1E5FE0] transition-colors duration-500 shadow-sm relative z-10">
              <span className="material-symbols-outlined text-[#1E5FE0] text-3xl group-hover:text-white transition-colors duration-500">public</span>
            </div>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-[#0B2559] mb-4 relative z-10">GIS</h3>
            <p className="text-[17px] leading-relaxed text-[#5B6B85] mb-8 flex-grow relative z-10">
              Hyper-accurate Geospatial intelligence, analytics and real-time risk-mapping.
            </p>
            <a href="/gis" className="text-[#1E5FE0] font-semibold text-sm uppercase tracking-widest flex items-center gap-2 group/link relative z-10">
              Explore GIS 
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </a>
          </div>

          {/* ACADEMY - Medium Card */}
          <div className="md:col-span-5 bg-white p-10 rounded-[32px] border border-[#EDF2FA] shadow-[0_8px_30px_rgba(20,60,150,0.04)] hover:shadow-[0_20px_50px_rgba(30,95,224,0.08)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="w-16 h-16 bg-[#f4f7fc] border border-[#e7eeff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E5FE0] group-hover:border-[#1E5FE0] transition-colors duration-500 shadow-sm relative z-10">
              <span className="material-symbols-outlined text-[#1E5FE0] text-3xl group-hover:text-white transition-colors duration-500">school</span>
            </div>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-[#0B2559] mb-4 relative z-10">ACADEMY</h3>
            <p className="text-[17px] leading-relaxed text-[#5B6B85] mb-8 flex-grow relative z-10">
              High-fidelity technical upskilling and workforce training engineered from real-world enterprise case studies.
            </p>
            <a href="/academy" className="text-[#1E5FE0] font-semibold text-sm uppercase tracking-widest flex items-center gap-2 group/link relative z-10">
              Explore Academy 
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </a>
          </div>

          {/* LABS - Wide Accent Card */}
          <div className="md:col-span-7 bg-[#f0f5ff] p-10 rounded-[32px] border border-[#dbe6ff] shadow-sm hover:shadow-[0_20px_50px_rgba(30,95,224,0.08)] hover:-translate-y-1 transition-all duration-500 group flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-bl-full opacity-50 pointer-events-none"></div>
            <div className="w-16 h-16 bg-white border border-[#dbe6ff] rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10">
              <span className="material-symbols-outlined text-[#1E5FE0] text-3xl">science</span>
            </div>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-[#0B2559] mb-4 relative z-10">LABS</h3>
            <p className="text-[17px] leading-relaxed text-[#5B6B85] mb-8 flex-grow max-w-xl relative z-10">
              Exploratory R&D wing focused on prototypes, patent generation and cross-vertical tech reuse for next-generation intelligence.
            </p>
            <a href="/labs" className="text-[#1E5FE0] font-semibold text-sm uppercase tracking-widest flex items-center gap-2 group/link relative z-10">
              Explore Labs 
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* High-Stakes Decisiveness (Detail Section) */}
      <section className="bg-[#001848] py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAApiWH81yQzP8R4J5z4IkHxCL6gRYihDrXU6JptnUoRJ1UgiDVgTxWWbEhkhx0xSDoBbCvyA11ianOCQW2WUcaQk7BmL2-iOpXViWKTzJ7Cqu7XDNnyBOu3-IXH8MNJsbTmV6d6xAYG-YK8j7749tZI5rRVUvEst60RlDBtnIrJtJjulr9Vd8ZMTcwNLoO5VqOA5rDzGcr7mF21vqb0m3UkbLEtWIVZR57PgmdufWmQLHYlWQKEu-WdzqBJFa93GFfS5wycbV4hgwZ')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001848] via-transparent to-[#001848] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#1E5FE0] animate-pulse"></span>
                <span className="text-[#b2c5ff] font-bold tracking-[0.2em] uppercase text-xs">Performance Metrics</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                High-Stakes <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5FE0] to-[#b2c5ff]">Decisiveness.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#9bcbff] font-light leading-relaxed opacity-90 mb-10">
                Quantifiable edge in the most demanding mission-critical sectors. When every millisecond counts, our intelligence core delivers absolute certainty.
              </p>
              
              <ul className="space-y-4">
                 <li className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#1E5FE0]/20 flex items-center justify-center shrink-0 border border-[#1E5FE0]/30">
                     <span className="material-symbols-outlined text-[#b2c5ff] text-[18px]">done</span>
                   </div>
                   <span className="text-[#b2c5ff] pt-1">Zero-latency threat detection</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#1E5FE0]/20 flex items-center justify-center shrink-0 border border-[#1E5FE0]/30">
                     <span className="material-symbols-outlined text-[#b2c5ff] text-[18px]">done</span>
                   </div>
                   <span className="text-[#b2c5ff] pt-1">Sovereign air-gapped deployment</span>
                 </li>
              </ul>
            </div>

            {/* Right side floating metrics */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1E5FE0]/20 to-transparent rounded-3xl blur-3xl"></div>
              
              <div className="relative rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Inner image accent to give texture */}
                <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAApiWH81yQzP8R4J5z4IkHxCL6gRYihDrXU6JptnUoRJ1UgiDVgTxWWbEhkhx0xSDoBbCvyA11ianOCQW2WUcaQk7BmL2-iOpXViWKTzJ7Cqu7XDNnyBOu3-IXH8MNJsbTmV6d6xAYG-YK8j7749tZI5rRVUvEst60RlDBtnIrJtJjulr9Vd8ZMTcwNLoO5VqOA5rDzGcr7mF21vqb0m3UkbLEtWIVZR57PgmdufWmQLHYlWQKEu-WdzqBJFa93GFfS5wycbV4hgwZ" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2559]/80 to-[#001848]/90 z-10"></div>
                
                <div className="relative z-20 space-y-10">
                  {/* Metric 1 */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#b2c5ff] text-sm uppercase tracking-widest font-semibold">Response Latency</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <span className="material-symbols-outlined text-white text-[20px]">bolt</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">0.02</span>
                      <span className="text-2xl text-[#b2c5ff] font-light mb-1">ms</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-[#1E5FE0] to-[#b2c5ff] w-[95%] rounded-full shadow-[0_0_10px_#1E5FE0]"></div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Metric 2 */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#b2c5ff] text-sm uppercase tracking-widest font-semibold">Decision Accuracy</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <span className="material-symbols-outlined text-white text-[20px]">my_location</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">99.9</span>
                      <span className="text-2xl text-[#b2c5ff] font-light mb-1">%</span>
                    </div>
                     <div className="w-full h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-[#1E5FE0] to-[#b2c5ff] w-[99.9%] rounded-full shadow-[0_0_10px_#1E5FE0]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-[80px] text-center max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-unit-md">Ready to Define the Future?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-unit-xl">
          Join the architects of tomorrow. Deploy SIGO SYSTEMS core today.
        </p>
        <button className="w-full md:w-auto md:px-unit-xl bg-primary text-on-primary font-headline-md py-unit-lg rounded-2xl shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform">
          Initiate Consultation
        </button>
        <p className="mt-unit-lg font-label-sm text-label-sm text-on-surface-variant flex items-center justify-center gap-unit-xs">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          Typical response within 12 hours
        </p>
      </section>
    </main>
  );
}
