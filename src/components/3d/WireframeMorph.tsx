"use client";

import Spline from '@splinetool/react-spline';

export function WireframeMorph() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none"
         style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}>
      <div className="w-[600px] max-w-full aspect-square">
        <Spline
          scene="https://prod.spline.design/k9RstCn3LAJ3nq9D/scene.splinecode" 
        />
      </div>
    </div>
  );
}
