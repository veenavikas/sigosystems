"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function createShapes() {
  // Top Eye Arc
  const topShape = new THREE.Shape();
  topShape.moveTo(2.8, 0); // right tip
  // Inner arc going left
  topShape.quadraticCurveTo(0.2, 1.6, -2.6, -0.3); // sharp left tip
  // Outer arc returning right
  topShape.quadraticCurveTo(0.2, 2.5, 2.8, 0);

  // Bottom Eye Arc (Tapered right, blunt left)
  const bottomShape = new THREE.Shape();
  bottomShape.moveTo(2.7, -0.1); // right tip (joins top tip)
  // Inner arc going left
  bottomShape.quadraticCurveTo(0.2, -1.6, -1.9, -0.7);
  // Blunt cut
  bottomShape.lineTo(-2.0, -1.0);
  // Outer arc returning right
  bottomShape.quadraticCurveTo(0.2, -2.2, 2.7, -0.1);

  // Orbiting Swoosh ring
  const swooshShape = new THREE.Shape();
  // Starts thick at the right
  swooshShape.moveTo(1.2, 0.3);
  // Sweeps left and tapers to a sharp point
  swooshShape.quadraticCurveTo(0, -0.6, -1.5, -0.3);
  // Sweeps back thick
  swooshShape.quadraticCurveTo(0, -1.0, 1.3, -0.1);
  
  return { topShape, bottomShape, swooshShape };
}

const extrudeSettings = {
  depth: 0.15,
  bevelEnabled: true,
  bevelSegments: 4,
  bevelSteps: 4,
  bevelSize: 0.02,
  bevelThickness: 0.02,
};

function CylinderLine({ start, end, thickness = 0.04, color = "#94a3b8" }: any) {
  const vStart = new THREE.Vector3(...start);
  const vEnd = new THREE.Vector3(...end);
  const distance = vStart.distanceTo(vEnd);
  const position = vStart.clone().lerp(vEnd, 0.5);
  
  const quaternion = new THREE.Quaternion();
  const direction = new THREE.Vector3().subVectors(vEnd, vStart).normalize();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[thickness, thickness, distance, 16]} />
      <meshPhysicalMaterial color={color} metalness={0.2} roughness={0.3} />
    </mesh>
  );
}

function AnimatedLogoScene() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  
  const { topShape, bottomShape, swooshShape } = useMemo(createShapes, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Mouse tracking and gentle float
      groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.15 + (pointer.x * 0.1);
      groupRef.current.rotation.x = Math.cos(time * 0.3) * 0.05 - (pointer.y * 0.1);
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.05;
    }
    
    if (ringRef.current) {
      // Rotate the inner swoosh and dot
      ringRef.current.rotation.z -= delta * 1.2;
    }
  });

  return (
    <group ref={groupRef} scale={1.3}>
      <ambientLight intensity={2.5} color="#ffffff" />
      <directionalLight position={[5, 10, 5]} intensity={4} />
      <directionalLight position={[-5, -10, -5]} intensity={1} />
      
      {/* Top Eye Arch */}
      <mesh position={[0, 0, -0.075]}>
        <extrudeGeometry args={[topShape, extrudeSettings]} />
        <meshPhysicalMaterial color="#1E5FE0" metalness={0.1} roughness={0.2} clearcoat={1} />
      </mesh>
      
      {/* Bottom Eye Arch */}
      <mesh position={[0, 0, -0.075]}>
        <extrudeGeometry args={[bottomShape, extrudeSettings]} />
        <meshPhysicalMaterial color="#1E5FE0" metalness={0.1} roughness={0.2} clearcoat={1} />
      </mesh>

      {/* Orbiting Swoosh */}
      <group rotation={[1.0, 0.4, 0]}>
        <group ref={ringRef}>
          {/* Sweeping Tail */}
          <mesh position={[0, 0, -0.05]}>
            <extrudeGeometry args={[swooshShape, { ...extrudeSettings, depth: 0.1 }]} />
            <meshPhysicalMaterial color="#1E5FE0" metalness={0.1} roughness={0.2} clearcoat={1} />
          </mesh>
          {/* Orbiting Dot */}
          <mesh position={[1.25, 0.1, 0]}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshPhysicalMaterial color="#1E5FE0" metalness={0.1} roughness={0.2} clearcoat={1} />
          </mesh>
        </group>
      </group>

      {/* Center Graph / Molecule */}
      <group>
        {/* Center Main Node */}
        <mesh position={[-0.3, -0.2, 0.2]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhysicalMaterial color="#64748b" metalness={0.2} roughness={0.3} />
        </mesh>
        
        {/* Top Left Node */}
        <mesh position={[-1.1, 0.7, 0.0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshPhysicalMaterial color="#94a3b8" metalness={0.2} roughness={0.3} />
        </mesh>
        
        {/* Top Right Node */}
        <mesh position={[0.9, 0.9, 0.4]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshPhysicalMaterial color="#94a3b8" metalness={0.2} roughness={0.3} />
        </mesh>

        {/* Graph Connections */}
        <CylinderLine start={[-0.3, -0.2, 0.2]} end={[-1.1, 0.7, 0.0]} thickness={0.08} color="#64748b" />
        <CylinderLine start={[-0.3, -0.2, 0.2]} end={[0.9, 0.9, 0.4]} thickness={0.08} color="#64748b" />
      </group>
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
