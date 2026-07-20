import React from "react";
import Link from "next/link";

export function MobileTopNav() {
  return (
    <nav className="bg-surface-container-lowest fixed top-0 left-0 right-0 z-50 px-margin-mobile py-unit-md flex justify-between items-center shadow-sm">
      <span className="text-headline-md font-bold text-primary tracking-tight">SIGO SYSTEMS</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-primary active:scale-95 transition-transform">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}

export function MobileBottomNav() {
  return (
    <>
      {/* Floating Action Button (FAB) Contextual */}
      <button className="fixed bottom-24 right-margin-mobile z-40 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
        <span className="material-symbols-outlined">chat_bubble</span>
      </button>

      {/* Bottom Navigation Shell (Mobile Anchor) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/90 backdrop-blur-md px-margin-mobile py-unit-sm flex justify-between items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <Link href="/" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label-sm text-[10px]">Home</span>
        </Link>
        <Link href="/gis" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[24px]">explore</span>
          <span className="font-label-sm text-[10px]">GEO</span>
        </Link>
        <Link href="/aiqu" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[24px]">hub</span>
          <span className="font-label-sm text-[10px]">AIQU</span>
        </Link>
        <Link href="/labs" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[24px]">science</span>
          <span className="font-label-sm text-[10px]">Labs</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[24px]">info</span>
          <span className="font-label-sm text-[10px]">About</span>
        </Link>
      </nav>
    </>
  );
}
