"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function SparseParticles({ count = 200 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 40,
        speed: 0.005 + Math.random() * 0.01
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      particle.y += particle.speed;
      if (particle.y > 20) particle.y = -20;
      
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#1E5FE0" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function QuantumParticleField() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-transparent overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,95,224,0.1)_0,transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-transparent overflow-hidden z-0">
      <Canvas camera={{ fov: 45, position: [0, 0, 15] }}>
        <SparseParticles count={isMobile ? 100 : 300} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9f9ff] pointer-events-none" />
    </div>
  );
}
