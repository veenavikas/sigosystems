"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Light Inner Core */}
      <mesh>
        <sphereGeometry args={[9.8, 64, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
      </mesh>
      
      {/* Primary Globe Wireframe/Grid */}
      <mesh>
        <sphereGeometry args={[10, 48, 48]} />
        <meshBasicMaterial color="#1E5FE0" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Secondary Outer Geometric Grid */}
      <mesh>
        <sphereGeometry args={[10.3, 16, 16]} />
        <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.2} />
      </mesh>
      
      {/* Orbiting points representing satellites/data nodes */}
      <mesh position={[12, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
      <mesh position={[-8, 8, 5]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
      <mesh position={[5, -10, -5]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
      <mesh position={[-2, 3, 11]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#0B2559" />
      </mesh>
    </group>
  );
}

export function GISGlobe() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-transparent overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0,transparent_60%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent z-0">
      <Canvas camera={{ fov: 45, position: [0, 0, 35] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00e5ff" />
        <Globe />
      </Canvas>
    </div>
  );
}
