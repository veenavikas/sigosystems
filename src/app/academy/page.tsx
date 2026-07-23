"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BookOpen, Users, Building2, Landmark } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { CTAButton } from "@/components/ui/CTAButton";



export default function AcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-white">
        
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

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-md mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5FE0] animate-pulse"></span>
            <p className="text-slate-600 font-bold tracking-[0.2em] uppercase text-xs">SIGO ACADEMY: The driving force for tomorrow</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-slate-900 mb-6 font-heading leading-tight">
            Workforce Transformation
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light mb-10 leading-relaxed opacity-90">
            Bridge the enterprise capability gap with education programs built directly on live, corporate case studies from Sigo's deployment history.
          </p>
          <div className="flex justify-center mb-12">
            <CTAButton href="/contact" variant="primary">
              Learn more
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Offerings" 
            className="mb-16"
          />
          <CardGrid columns={4}>
            <Card icon={<BookOpen />} title="Technical Upskilling Courses" description="Deep dives into practical AI engineering, predictive modeling and geospatial data mechanics." />
            <Card icon={<Users />} title="Hire-Train-Deploy Pipelines" description="Custom-tailored talent sourcing and specialized engineering bootcamps to provide organizations with job-ready tech professionals." />
            <Card icon={<Building2 />} title="Enterprise Training Partnerships" description="Structured internal upskilling initiatives built to align legacy engineering teams with modern technological stacks." />
            <Card icon={<Landmark />} title="Government & CSR-Funded Programs" description="High-impact, scaled skilling blueprints targeted at driving broad economic opportunity and digital literacy." />
          </CardGrid>
        </div>
      </section>
    </div>
  );
}
