"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function EyeCurve({ start, control, end, thickness = 0.08, color = "#1E5FE0" }: any) {
  const curve = useMemo(() => {
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(...control),
      new THREE.Vector3(...end)
    );
  }, [start, control, end]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, thickness, 16, false]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

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
      <cylinderGeometry args={[thickness, thickness, distance, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function AnimatedLogoScene() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating and rotation based on time and mouse
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2 + (pointer.x * 0.2);
      groupRef.current.rotation.x = Math.cos(time * 0.3) * 0.1 - (pointer.y * 0.2);
      groupRef.current.position.y = Math.sin(time) * 0.1;
    }
    
    if (ringRef.current) {
      // Spin the inner ring rapidly
      ringRef.current.rotation.z -= delta * 1.5;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Top Eye Curve */}
      <EyeCurve start={[-3.0, 0, 0]} control={[0, 2.5, 0]} end={[3.0, 0, 0]} thickness={0.15} color="#1E5FE0" />
      
      {/* Bottom Eye Curve */}
      <EyeCurve start={[-2.2, -1.0, 0]} control={[0.3, -2.8, 0]} end={[2.8, -1.0, 0]} thickness={0.12} color="#1E5FE0" />

      {/* Inner Rotating Ring */}
      <group rotation={[1.2, 0.2, 0]}>
        <group ref={ringRef}>
          <mesh>
            <torusGeometry args={[1.5, 0.06, 16, 64]} />
            <meshBasicMaterial color="#1E5FE0" />
          </mesh>
          <mesh position={[1.5, 0, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshBasicMaterial color="#1E5FE0" />
          </mesh>
        </group>
      </group>

      {/* Center Graph / Molecule */}
      <group>
        {/* Center Node */}
        <mesh position={[-0.2, -0.4, 0.2]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial color="#475569" />
        </mesh>
        
        {/* Left Node */}
        <mesh position={[-1.2, 0.6, -0.2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>
        
        {/* Right Node */}
        <mesh position={[1.0, 0.6, 0.2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>

        {/* Connections */}
        <CylinderLine start={[-0.2, -0.4, 0.2]} end={[-1.2, 0.6, -0.2]} thickness={0.06} color="#cbd5e1" />
        <CylinderLine start={[-0.2, -0.4, 0.2]} end={[1.0, 0.6, 0.2]} thickness={0.06} color="#cbd5e1" />
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
