"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Map, Navigation2, LayoutTemplate, Network, Route, Mountain, Radio } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { CTAButton } from "@/components/ui/CTAButton";

const HeroParticleField = dynamic(
  () => import("@/components/3d/HeroParticleField").then((mod) => mod.HeroParticleField),
  { ssr: false }
);

export default function GISPage() {
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
            <p className="text-slate-600 font-bold tracking-[0.2em] uppercase text-xs">SIGO GIS: Embedding Intelligence in Surveillance</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight text-slate-900 mb-6 font-heading leading-tight max-w-5xl mx-auto">
            Geospatial intelligence for <br className="hidden md:block"/> Spatial Clarity and Intelligent Action.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-light mb-8 leading-relaxed opacity-90">
            Turn location data into a distinct competitive advantage. SIGO GIS applies consolidated analytics to geographical datasets to map out risk, optimize networks, and streamline global logistics.
          </p>
        </div>
      </section>

      {/* Products & Platforms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Products & Platforms" 
            className="mb-16"
          />
          <CardGrid columns={3}>
            <Card icon={<Map />} title="Spatial Analytics & Risk-Mapping Platforms" description="Intelligently visualize vulnerabilities, demographic overlays, and environmental hazards on a unified canvas." />
            <Card icon={<Navigation2 />} title="Fleet & Route Optimization Tools" description="Algorithmic pathfinding engines built to shave hours off transit times and drastically reduce fuel expenditures." />
            <Card icon={<LayoutTemplate />} title="Real-Time Geo-Dashboards" description="Live mapping telemetry tracking mobile assets, changing borders, and field metrics as they happen." />
          </CardGrid>
        </div>
      </section>

      {/* Services Portfolio */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Services Portfolio" 
            className="mb-16"
          />
          <CardGrid columns={4}>
            <Card icon={<Network />} title="Custom Mapping & Spatial Analytics" description="Tailored geographic deep-dives built around your unique asset networks and target regions." />
            <Card icon={<Route />} title="Route & Logistics Planning" description="Custom network designs to handle highly unpredictable regional logistics and transit constraints." />
            <Card icon={<Mountain />} title="Infrastructure & Land-Use Mapping" description="High-resolution structural mapping engineered for development, resource allocation, and utility tracking." />
            <Card icon={<Radio />} title="Rural Access & Connectivity Mapping" description="Identifying infrastructure gaps to design critical access routes, vital utilities, and connective corridors." />
          </CardGrid>
          
          <div className="mt-20 text-center">
            <CTAButton href="/contact" variant="primary">
              Learn more
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
