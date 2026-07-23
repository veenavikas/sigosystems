"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function EyeOrbit() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Perfect symmetrical outer eye
    s.moveTo(-3.5, 0); // Left sharp tip
    s.quadraticCurveTo(0, 2.5, 3.5, 0); // Top arc to right sharp tip
    s.quadraticCurveTo(0, -2.5, -3.5, 0); // Bottom arc to left sharp tip

    const hole = new THREE.Path();
    // Inner hole to create variable stroke thickness (thicker in middle, sharp at ends)
    hole.moveTo(-3.45, 0); // Left inner tip (almost touching outer)
    hole.quadraticCurveTo(0, -1.9, 3.45, 0); // Bottom inner arc
    hole.quadraticCurveTo(0, 1.9, -3.45, 0); // Top inner arc
    s.holes.push(hole);
    
    return s;
  }, []);

  return (
    <mesh>
      <shapeGeometry args={[shape, 128]} />
      <meshBasicMaterial color="#0052FF" side={THREE.DoubleSide} />
    </mesh>
  );
}

function InnerOrbitSwoosh() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Outer ellipse
    s.absellipse(0, 0, 1.8, 0.75, 0, Math.PI * 2, false, 0);

    const hole = new THREE.Path();
    // Inner ellipse offset slightly to create a tapering swoosh
    hole.absellipse(-0.03, 0.03, 1.7, 0.68, 0, Math.PI * 2, true, 0);
    s.holes.push(hole);

    return s;
  }, []);

  return (
    <group rotation={[0.8, 0.3, 0]}>
      <mesh>
        <shapeGeometry args={[shape, 128]} />
        <meshBasicMaterial color="#0052FF" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Blue dot on the swoosh */}
      <mesh position={[1.75, -0.02, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#0052FF" />
      </mesh>
    </group>
  );
}

function Connection({ start, end, color = "#333333", thickness = 0.05 }: any) {
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const distance = startVec.distanceTo(endVec);
  
  const position = startVec.clone().lerp(endVec, 0.5);
  
  const direction = new THREE.Vector3().subVectors(endVec, startVec).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[thickness, thickness, distance, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function TheSunMolecule({ moleculeRef }: { moleculeRef: React.RefObject<THREE.Group> }) {
  return (
    <group ref={moleculeRef}>
      {/* Center Main Node */}
      <mesh position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
      
      {/* Top Left Node */}
      <mesh position={[-1.1, 0.6, 0.0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
      
      {/* Top Right Node */}
      <mesh position={[0.9, 0.5, 0.4]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshBasicMaterial color="#888888" />
      </mesh>

      {/* Solid connections */}
      <Connection start={[0, 0, 0.2]} end={[-1.1, 0.6, 0.0]} color="#333333" thickness={0.06} />
      <Connection start={[0, 0, 0.2]} end={[0.9, 0.5, 0.4]} color="#333333" thickness={0.06} />
    </group>
  );
}

function AnimatedLogoScene() {
  const groupRef = useRef<THREE.Group>(null);
  const moleculeRef = useRef<THREE.Group>(null);
  const swooshRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Gentle overall float
      groupRef.current.rotation.y = Math.sin(time * 0.6) * 0.1 + (pointer.x * 0.1);
      groupRef.current.rotation.x = Math.cos(time * 0.6) * 0.1 - (pointer.y * 0.1);
      
      // Continuous 3D rotation for the center molecule
      if (moleculeRef.current) {
        moleculeRef.current.rotation.y = time * 0.8;
      }
      // Continuous 3D rotation for the inner swoosh to make the dot travel
      if (swooshRef.current) {
        swooshRef.current.rotation.y = time * 0.6;
      }
    }
  });

  return (
    <group ref={groupRef} scale={0.85}>
      <group scale={0.65}>
        <TheSunMolecule moleculeRef={moleculeRef} />
        <group ref={swooshRef}>
          <InnerOrbitSwoosh />
        </group>
      </group>
      <EyeOrbit />
    </group>
  );
}

export function HeroParticleField() {
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
