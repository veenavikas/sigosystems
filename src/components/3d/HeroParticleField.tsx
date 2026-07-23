"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Line } from "@react-three/drei";


function EyeOrbit() {
  const pts = useMemo(() => {
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
    
    return curvePath.getPoints(100);
  }, []);

  return (
    <group>
      {/* Thicker line for the orbit path (Eye shape) */}
      <Line points={pts} color="#1E5FE0" lineWidth={6} transparent opacity={0.9} />
    </group>
  );
}

function InnerOrbit() {
  const pts = useMemo(() => {
    const points = [];
    const radius = 1.3; // smaller so it's inside
    for(let i=0; i<=64; i++) {
      const angle = (i/64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle)*radius, Math.sin(angle)*radius, 0));
    }
    return points;
  }, []);

  // Static inner orbit with the blue dot matching the logo
  return (
    <group rotation={[1.0, 0.4, 0]}>
      <Line points={pts} color="#1E5FE0" lineWidth={4} transparent opacity={0.9} />
      {/* The blue dot on the orbit ring */}
      <mesh position={[1.3, 0, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#1E5FE0" />
      </mesh>
    </group>
  );
}

function ThinLine({ start, end, color = "#475569" }: any) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  return (
    <Line points={points} color={color} lineWidth={4} transparent opacity={0.9} />
  );
}

function TheSunMolecule() {
  return (
    <group>
      {/* Center Main Node */}
      <mesh position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshBasicMaterial color="#475569" />
      </mesh>
      
      {/* Top Left Node */}
      <mesh position={[-1.0, 0.6, 0.0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#475569" />
      </mesh>
      
      {/* Top Right Node */}
      <mesh position={[0.9, 0.5, 0.4]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#475569" />
      </mesh>

      {/* Graph Connections */}
      <ThinLine start={[0, 0, 0.2]} end={[-1.0, 0.6, 0.0]} color="#475569" />
      <ThinLine start={[0, 0, 0.2]} end={[0.9, 0.5, 0.4]} color="#475569" />
    </group>
  );
}

function AnimatedLogoScene() {
  const groupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Mouse tracking and faster float for the whole system
      groupRef.current.rotation.y = Math.sin(time * 0.6) * 0.15 + (pointer.x * 0.15);
      groupRef.current.rotation.x = Math.cos(time * 0.6) * 0.15 - (pointer.y * 0.15);
      
      // Faster continuous 3D rotation of the entire inner molecule group together
      if (innerGroupRef.current) {
        innerGroupRef.current.rotation.y = time * 0.8;
      }
    }
  });

  return (
    <group ref={groupRef} scale={0.85}>
      {/* The inner core rotates smoothly as a single solid unit */}
      <group ref={innerGroupRef} scale={0.65}>
        <TheSunMolecule />
        <InnerOrbit />
      </group>
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
    <div className="relative w-full h-[300px] flex items-center justify-center pointer-events-none mb-8 z-10">
      <Canvas camera={{ fov: 45, position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <AnimatedLogoScene />
      </Canvas>
    </div>
  );
}
