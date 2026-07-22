"use client";

import React from "react";
import dynamic from "next/dynamic";
import { CheckCircle2, FileText, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { CTAButton } from "@/components/ui/CTAButton";

const HeroParticleField = dynamic(
  () => import("@/components/3d/HeroParticleField").then((mod) => mod.HeroParticleField),
  { ssr: false }
);

export default function LabsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-multiply">
          <HeroParticleField />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-md mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5FE0] animate-pulse"></span>
            <p className="text-slate-600 font-bold tracking-[0.2em] uppercase text-xs">R&D LABS: The Innovation Engine</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-slate-900 mb-6 font-heading leading-tight">
            Where Future Tech is Proven
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-light mb-10 leading-relaxed opacity-90">
            The shared collaborative core of Sigo Systems—powering rapid prototyping, cross-vertical technology reuse, and foundational intellectual property generation.
          </p>
          <div className="flex justify-center">
            <CTAButton href="/contact" variant="primary">
              Learn More
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Outcome" 
            className="mb-16"
          />
          <CardGrid columns={3}>
            <Card icon={<CheckCircle2 />} title="Validated Prototypes" description="Fast-tracking wild concepts into stable, testable technology frameworks." />
            <Card icon={<Lightbulb />} title="IP & Patent Generation" description="Building defensible, high-value technological moats for grant acquisition and ecosystem validation." />
            <Card icon={<FileText />} title="Whitepapers & Industry Benchmarks" description="Publishing rigorous technical data to anchor innovation credibility within the deep-tech ecosystem." />
          </CardGrid>
        </div>
      </section>
    </div>
  );
}
