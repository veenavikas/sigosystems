"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function EyeOrbit() {
  const particleRef = useRef<THREE.Mesh>(null);
  
  const { path, geometry } = useMemo(() => {
    const topCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-3.5, 0, 0),
      new THREE.Vector3(0, 2.5, 0),
      new THREE.Vector3(3.5, 0, 0)
    );
    const bottomCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(3.5, 0, 0),
      new THREE.Vector3(0, -2.5, 0),
      new THREE.Vector3(-3.5, 0, 0)
    );
    const curvePath = new THREE.CurvePath<THREE.Vector3>();
    curvePath.add(topCurve);
    curvePath.add(bottomCurve);
    
    const pts = curvePath.getPoints(100);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    return { path: curvePath, geometry: geo };
  }, []);

  useFrame((state) => {
    if (particleRef.current) {
      const t = (state.clock.elapsedTime * 0.15) % 1; // Orbit speed
      const pos = path.getPointAt(t);
      particleRef.current.position.copy(pos);
    }
  });

  return (
    <group>
      {/* 1px Thin line for the orbit path */}
      <line geometry={geometry}>
        <lineBasicMaterial color="#1E5FE0" transparent opacity={0.25} />
      </line>
      
      {/* Orbiting Particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
    </group>
  );
}

function InnerOrbit() {
  const particleRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const pts = [];
    const radius = 1.8;
    for(let i=0; i<=64; i++) {
      const angle = (i/64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle)*radius, Math.sin(angle)*radius, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state) => {
    if (particleRef.current) {
      const angle = state.clock.elapsedTime * -1.2; // Fast inner orbit, opposite direction
      particleRef.current.position.x = Math.cos(angle) * 1.8;
      particleRef.current.position.y = Math.sin(angle) * 1.8;
    }
  });

  return (
    // Tilted ring to match the logo's inner swoosh orientation
    <group rotation={[1.0, 0.4, 0]}>
      <line geometry={geometry}>
        <lineBasicMaterial color="#1E5FE0" transparent opacity={0.25} />
      </line>
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
    </group>
  );
}

function ThinLine({ start, end, color = "#94a3b8" }: any) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.6} />
    </line>
  );
}

function TheSunMolecule() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Spin the entire molecule like a central sun/core
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center Main Node */}
      <mesh position={[-0.3, -0.2, 0.2]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color="#64748b" wireframe transparent opacity={0.6} />
      </mesh>
      
      {/* Top Left Node */}
      <mesh position={[-1.1, 0.7, 0.0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.6} />
      </mesh>
      
      {/* Top Right Node */}
      <mesh position={[0.9, 0.9, 0.4]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Graph Connections (1px thin lines) */}
      <ThinLine start={[-0.3, -0.2, 0.2]} end={[-1.1, 0.7, 0.0]} color="#64748b" />
      <ThinLine start={[-0.3, -0.2, 0.2]} end={[0.9, 0.9, 0.4]} color="#64748b" />
    </group>
  );
}

function AnimatedLogoScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Mouse tracking and gentle float for the whole system
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1 + (pointer.x * 0.05);
      groupRef.current.rotation.x = Math.cos(time * 0.2) * 0.1 - (pointer.y * 0.05);
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      <TheSunMolecule />
      <InnerOrbit />
      <EyeOrbit />
    </group>
  );
}

export function HeroParticleField() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-transparent z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,95,224,0.1)_0,transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent z-0 flex items-center justify-center">
      <div className="w-full max-w-4xl h-[600px] md:h-[800px] absolute opacity-80 md:opacity-100 mix-blend-multiply">
         <Canvas camera={{ fov: 45, position: [0, 0, 8] }}>
          <AnimatedLogoScene />
        </Canvas>
      </div>
    </div>
  );
}
