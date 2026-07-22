"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Verticals",
      hasDropdown: true,
      dropdownItems: [
        { name: "AIQU", desc: "Quantum-inspired intelligence core bridging classical and future systems.", href: "/aiqu" },
        { name: "GIS", desc: "Hyper-accurate Geospatial intelligence and real-time risk-mapping.", href: "/gis" },
        { name: "ACADEMY", desc: "High-fidelity technical upskilling and enterprise workforce training.", href: "/academy" },
        { name: "LABS", desc: "Exploratory R&D wing focused on prototypes and patent generation.", href: "/labs" },
      ]
    },
    { name: "Company", href: "/company" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <header
        className="pointer-events-auto flex items-center justify-between w-full px-6 md:px-12 py-4 bg-white border-b border-gray-200 shadow-sm"
      >
        <Link href="/" className="flex items-center group relative z-10">
          <img 
            src="/logo.png" 
            alt="SIGO SYSTEMS" 
            className="w-28 md:w-36 h-auto object-contain group-hover:scale-105 transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 relative z-10">
          {navItems.map((link) => {
            const isActive = pathname === link.href || (link.dropdownItems && link.dropdownItems.some(item => pathname === item.href));
            
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href || "#"}
                  className={cn(
                    "flex items-center gap-1 relative text-[14px] font-semibold transition-colors duration-300 py-6",
                    isActive ? "text-[#1E5FE0]" : "text-slate-600 hover:text-[#0B2559]"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300 group-hover:-rotate-180",
                      "text-slate-400 group-hover:text-[#0B2559]"
                    )} />
                  )}
                  <span className={cn(
                    "absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 bg-[#1E5FE0]",
                    isActive && !link.hasDropdown ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="relative">
                      {/* Little triangle pointer */}
                      <div className="absolute -top-2 right-10 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100 rounded-tl-sm"></div>
                      
                      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 flex gap-8 w-[800px] relative z-10">
                         {/* Left highlight block */}
                         <div className="w-[280px] bg-gradient-to-br from-[#0B2559] to-[#1E5FE0] rounded-xl p-6 text-white flex flex-col justify-between relative overflow-hidden group/highlight">
                           <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiGzaVmZICcRMm6f9_1j9P3Xu3kndIjHm_eEBVB0UOGkhGfvYuzV2kuQzcc8idJV0ivEZP8eVE1QZKEYcDhfNAiSx7lgHnfOGyyZQeEhH7ZI9CBQfsIIsw87yNCemwcPBe-Jl2NXfXFozgxs7UIqTNY8mkkJ1ekZCz54H57TgtC2JqNCPBcXrWgVK3Zrdzl8HfamajaX7IYP84lHDysP2DVtqUH2pACSoV5aCw4T4CIxdzouSzxixsOOYHoxDTBknrW4ahfxM0K_ph')] bg-cover bg-center opacity-10 mix-blend-screen group-hover/highlight:scale-110 transition-transform duration-700"></div>
                           <div className="relative z-10">
                             <h4 className="font-bold text-lg mb-2">Discover SIGO Ecosystem</h4>
                             <p className="text-white/80 text-sm leading-relaxed">The unified intelligence layer for mission-critical enterprise operations.</p>
                           </div>
                           <Link href="/ecosystem" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform mt-8 relative z-10">
                             Explore all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                           </Link>
                         </div>
                         
                         {/* Right columns */}
                         <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                           {link.dropdownItems?.map((item) => (
                             <div key={item.name}>
                               <Link href={item.href} className="block group/item">
                                 <h5 className="text-[#0B2559] font-bold text-sm mb-1.5 group-hover/item:text-[#1E5FE0] transition-colors">{item.name}</h5>
                                 <p className="text-slate-500 text-xs leading-relaxed group-hover/item:text-slate-700 transition-colors">{item.desc}</p>
                               </Link>
                             </div>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 text-[13px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 bg-[#0B2559] text-white hover:bg-[#1E5FE0] hover:shadow-[0_8px_25px_rgba(11,37,89,0.5)]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-full transition-colors relative z-10 text-slate-800 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden lg:hidden pointer-events-auto"
          >
            <nav className="flex flex-col px-6 py-6 gap-2">
              {navItems.map((link) => (
                <div key={link.name} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={link.href || "#"}
                    onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold tracking-tight py-3 flex items-center justify-between",
                      pathname === link.href ? "text-[#1E5FE0]" : "text-slate-700 hover:text-[#0B2559]"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pb-3 space-y-3">
                      {link.dropdownItems?.map(item => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-semibold text-slate-600 hover:text-[#1E5FE0]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 text-center py-4 bg-[#0B2559] text-white rounded-xl font-bold tracking-wide uppercase text-sm shadow-[0_4px_15px_rgba(11,37,89,0.3)] hover:bg-[#1E5FE0] transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
