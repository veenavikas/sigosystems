"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedComparison() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-16">
      {/* Traditional IMU */}
      <div className="flex-1 text-center">
        <h4 className="font-bold text-lg mb-4 text-on-background">Traditional IMU</h4>
        <p className="text-sm text-on-surface-variant mb-6 h-10">Compounding drift over time requiring GPS correction</p>
        <div className="relative h-48 w-full bg-surface-container rounded-xl overflow-hidden flex items-center border border-outline-variant">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              d="M0,50 Q25,30 50,60 T100,20"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      {/* VS Badge */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 shadow-lg">
        VS
      </div>

      {/* Quantum Sensing */}
      <div className="flex-1 text-center">
        <h4 className="font-bold text-lg mb-4 text-tertiary">Quantum Sensing</h4>
        <p className="text-sm text-on-surface-variant mb-6 h-10">Zero-drift stability enabling infinite autonomy without GPS</p>
        <div className="relative h-48 w-full bg-inverse-surface rounded-xl overflow-hidden flex items-center border border-outline">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              d="M0,50 L100,50"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
            />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
