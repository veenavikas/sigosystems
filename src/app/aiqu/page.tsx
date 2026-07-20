"use client";

import React from "react";
import dynamic from "next/dynamic";
import { 
  ScanEye, LineChart, Cpu, LayoutDashboard, Binary, 
  Code, Atom, Settings2, Network, ShieldCheck, 
  Plane, Ship, Mountain
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedComparison } from "@/components/ui/AnimatedComparison";

// Lazy load the 3D scenes
const HeroParticleField = dynamic(
  () => import("@/components/3d/HeroParticleField").then((mod) => mod.HeroParticleField),
  { ssr: false }
);

const QuantumParticleField = dynamic(
  () => import("@/components/3d/QuantumParticleField").then((mod) => mod.QuantumParticleField),
  { ssr: false }
);

export default function AIQUPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-[#000a1f]">
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
          <HeroParticleField />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E5FE0] rounded-full blur-[150px] opacity-[0.1] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5FE0] animate-pulse"></span>
            <p className="text-[#b2c5ff] font-bold tracking-[0.2em] uppercase text-xs">SIGO AIQU: Deep tech for decision making</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-6 font-heading leading-tight">
            Engineering the science <br className="hidden md:block"/> behind AI & Quantum
          </h1>
          <h2 className="text-xl md:text-2xl text-[#1E5FE0] font-medium mb-8 tracking-wide">
            Engineering Deep Tech Networks
          </h2>
          <p className="text-lg md:text-xl text-[#9bcbff] max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            AIQU bridges the gap between classical learning (AI) and quantum potential (QU). To solve the unsolvable with mission-critical architectures built for enterprise scale.
          </p>
        </div>
      </section>

      {/* Product Ecosystem Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="AIQU Product Ecosystem" 
            subtitle="Precision-engineered modules for automation and optimization."
            className="mb-16"
          />
          <CardGrid columns={5}>
            <Card icon={<ScanEye />} title="Computer Vision Modules" description="Edge-optimized object detection, tracking, and spatial analysis for industrial automation and autonomous robotics." />
            <Card icon={<LineChart />} title="Predictive Analytics Engines" description="Proactive forecasting frameworks that anticipate market shifts and operational anomalies before they occur." />
            <Card icon={<Cpu />} title="Edge AI Inference Kits" description="Low-latency, high-efficiency model deployment specialized for resource-constrained embedded environments." />
            <Card icon={<LayoutDashboard />} title="Real-Time Dashboards" description="Immersive, high-fidelity data visualization for complex enterprise telemetry and monitoring." />
            <Card icon={<Binary />} title="Hybrid AI-Quantum Simulation Toolkits" description="Advanced simulation environments leveraging quantum-inspired algorithms to solve next-generation optimization barriers." />
          </CardGrid>
        </div>
      </section>

      {/* Integrated Services */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Integrated Services Section" 
            className="mb-16"
          />
          <CardGrid columns={5}>
            <Card icon={<Code />} title="Custom AI/ML Development" description="Bespoke model architectures designed for proprietary data environments, ensuring maximum performance and institutional security." />
            <Card icon={<Atom />} title="Quantum-Readiness Consulting" description="Prepare your current digital infrastructure for the next computational leap. We evaluate algorithms and engineer paths for future quantum compatibility." />
            <Card icon={<Settings2 />} title="Legacy Modernization" description="Seamlessly inject cognitive intelligence and analytics layers into your existing legacy technology stack without forcing a total system overhaul." />
            <Card icon={<Network />} title="Simulation & Digital Twins" description="Create highly accurate operational replicas to safely stress-test strategies, predict wear-and-tear, and model system behavior." />
            <Card icon={<ShieldCheck />} title="API/SDK Integration" description="Enterprise-ready developer kits built for friction-free integration into OEM hardware and native enterprise software platforms." />
          </CardGrid>
        </div>
      </section>

      {/* Quantum Sensing Spotlight Section */}
      <section id="quantum-sensing" className="relative py-24 text-slate-100 overflow-hidden">
        <QuantumParticleField />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-tertiary font-bold tracking-widest uppercase text-sm mb-2">NEXT-GEN NAVIGATION</h3>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
              Navigation Beyond GPS: Quantum Sensing
            </h2>
            <p className="text-inverse-on-surface max-w-4xl mx-auto text-lg mb-8">
              When satellite signals fail or are actively jammed, traditional navigation drifts. SIGO AIQU is bridging the gap between hardware and software by deploying quantum sensing technologies. By utilizing atom interferometry and quantum magnetometry, we enable absolute positioning accuracy in GPS-denied environments– allowing maritime, aerospace, and autonomous systems to navigate confidently anywhere on Earth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Dark theme specifically for these cards */}
            <div className="bg-slate-800/80 border border-outline backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-2">Quantum Inertial Measurement Units (Q-IMU)</h4>
              <p className="text-outline-variant text-sm">Next-generation navigation hardware utilizing atom interferometry for ultra-precise acceleration and rotation tracking without external reference signals.</p>
            </div>
            <div className="bg-slate-800/80 border border-outline backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-2">Geomagnetic Navigation Engines</h4>
              <p className="text-outline-variant text-sm">AI-driven mapping software that leverages high-sensitivity quantum magnetometers to navigate using Earth's unique magnetic anomalies.</p>
            </div>
            <div className="bg-slate-800/80 border border-outline backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-2">GPS-Denied Navigation Integration</h4>
              <p className="text-outline-variant text-sm">Designing fallback and primary positioning architectures for aerospace, maritime, and defense systems operating in jammed or compromised environments.</p>
            </div>
            <div className="bg-slate-800/80 border border-outline backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-2">Quantum Magnetometry Data Mapping</h4>
              <p className="text-outline-variant text-sm">High-fidelity spatial analytics mapping local magnetic fields to build secure navigation reference grids.</p>
            </div>
          </div>
          
          <div className="text-center mb-6"><h4 className="text-white font-bold text-lg">Key Capabilities</h4></div>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <span className="px-4 py-2 rounded-full bg-tertiary-container/10 text-tertiary border border-tertiary/20 text-sm font-medium">Zero-drift inertial tracking via quantum optics</span>
            <span className="px-4 py-2 rounded-full bg-tertiary-container/10 text-tertiary border border-tertiary/20 text-sm font-medium">Sub-surface and high-interference magnetic pathfinding</span>
            <span className="px-4 py-2 rounded-full bg-tertiary-container/10 text-tertiary border border-tertiary/20 text-sm font-medium">Seamless fallback software layers for existing autonomous guidance systems</span>
          </div>
        </div>
      </section>

      {/* Deep-Dive Section: How It Works */}
      <section className="py-24 bg-[#f0f5ff] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E5FE0]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionHeading 
            title="How It Works" 
            subtitle="Why Quantum Sensing?"
            className="mb-16"
          />
          <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-[0_20px_60px_rgba(20,60,150,0.06)] border border-[#EDF2FA]">
            <p className="text-[#5B6B85] text-xl leading-relaxed mb-16 text-center max-w-4xl mx-auto font-light">
              Traditional inertial navigation systems suffer from "drift"—small errors that compound over time, throwing a vehicle off course unless reset by GPS. Quantum sensors measure the behavior of atoms cooled to near absolute zero, providing an unwavering, fundamental standard of measurement.
            </p>

            <div className="space-y-6 max-w-4xl mx-auto font-mono text-sm md:text-[15px]">
              <div className="bg-[#f4f7fc] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-[#EDF2FA] hover:border-[#c3c6d7] transition-colors">
                <div className="font-bold text-[#5B6B85] bg-white border border-[#EDF2FA] px-6 py-3 rounded-xl whitespace-nowrap shadow-sm">[ Traditional IMU ]</div>
                <div className="flex-1 flex items-center justify-center w-full text-[#737686]">
                  <span className="hidden md:inline text-slate-300">──────</span>
                  <span className="mx-4 text-red-500 font-semibold tracking-wider text-xs whitespace-nowrap bg-red-50 px-3 py-1 rounded-full border border-red-100">(Compounding Drift)</span>
                  <span className="hidden md:inline text-slate-300">─────▶</span>
                  <span className="md:hidden text-2xl my-2 text-slate-300">↓</span>
                </div>
                <div className="font-bold text-red-600 bg-red-50 border border-red-100 px-6 py-3 rounded-xl text-center whitespace-nowrap shadow-sm">Requires GPS Correction</div>
              </div>

              <div className="bg-[#f0f5ff] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-[#1E5FE0]/20 shadow-[0_4px_20px_rgba(30,95,224,0.08)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FE0]/5 to-transparent pointer-events-none"></div>
                <div className="font-bold text-white bg-gradient-to-br from-[#1E5FE0] to-[#0B2559] px-6 py-3 rounded-xl whitespace-nowrap shadow-md relative z-10">[ Quantum Sensing ]</div>
                <div className="flex-1 flex items-center justify-center w-full text-[#1E5FE0] relative z-10">
                  <span className="hidden md:inline opacity-30">──────</span>
                  <span className="mx-4 text-[#1E5FE0] font-bold tracking-wider text-xs whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm">(Zero-Drift Stability)</span>
                  <span className="hidden md:inline opacity-30">─────▶</span>
                  <span className="md:hidden text-2xl my-2 opacity-50">↓</span>
                </div>
                <div className="font-bold text-[#0B2559] bg-white px-6 py-3 rounded-xl text-center shadow-md relative z-10">Infinite Autonomy Without GPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Core Applications" 
            className="mb-16"
          />
          <CardGrid columns={3}>
            <Card icon={<Plane />} title="Autonomous Aerospace & Defense" description="Safe, un-jammable guidance systems for long-range transport and unmanned aerial vehicles (UAVs)." />
            <Card icon={<Ship />} title="Subsea & Maritime Logistics" description="Precise positioning for deep-sea exploration and cargo transit where satellite signals cannot penetrate the ocean surface." />
            <Card icon={<Mountain />} title="Subterranean & Urban Canyons" description="Reliable asset tracking in deep mining operations or dense metropolitan environments where GPS signals bounce or drop out." />
          </CardGrid>
          
          <div className="mt-20 text-center">
            <CTAButton href="/contact" variant="primary">
              Request Technical Brief
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
