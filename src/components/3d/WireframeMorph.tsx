"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function MorphingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Simulate morphing by scaling
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#1E5FE0" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

export function WireframeMorph() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-transparent z-0" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent z-0">
      <Canvas camera={{ fov: 45, position: [0, 0, 8] }}>
        <MorphingShape />
      </Canvas>
    </div>
  );
}
