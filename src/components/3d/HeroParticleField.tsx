"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const techBlue = new THREE.Color(0x1E5FE0);
const lightCyan = new THREE.Color(0x6FB8FF);
const deepNavy = new THREE.Color(0x0B2559);

function Ring({ radius, color, rotationSpeed }: { radius: number; color: THREE.Color; rotationSpeed: { x: number; y: number; z: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const ringGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  const nodes = useMemo(() => {
    const temp = [];
    for (let j = 0; j < 4; j++) {
      const nodeAngle = (j / 4) * Math.PI * 2;
      temp.push(new THREE.Vector3(Math.cos(nodeAngle) * radius, Math.sin(nodeAngle) * radius, 0));
    }
    return temp;
  }, [radius]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += rotationSpeed.x;
      groupRef.current.rotation.y += rotationSpeed.y;
      groupRef.current.rotation.z += rotationSpeed.z;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={new THREE.Line(
          ringGeometry, 
          new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.4 })
        )} 
      />
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function SigoCoreScene() {
  const mainGroup = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { clock, pointer } = useThree();

  useFrame(() => {
    const time = clock.elapsedTime;
    
    if (mainGroup.current) {
      // Cinematic entry/floating rotation
      mainGroup.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      mainGroup.current.rotation.x = Math.cos(time * 0.3) * 0.1;

      // React to mouse
      mainGroup.current.position.x += (pointer.x * 0.5 - mainGroup.current.position.x) * 0.02;
      mainGroup.current.position.y += (pointer.y * 0.5 - mainGroup.current.position.y) * 0.02;
    }

    if (coreRef.current) {
      // Rotate core
      coreRef.current.rotation.y += 0.01;
      coreRef.current.rotation.z += 0.005;
      const s = 1 + Math.sin(time * 2) * 0.05;
      coreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <pointLight position={[5, 5, 5]} intensity={2} distance={20} color={techBlue} />
      <pointLight position={[-5, -5, 5]} intensity={1} distance={20} color={lightCyan} />

      <group ref={mainGroup}>
        {/* Inner Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 2]} />
          <meshPhongMaterial 
            color={techBlue}
            emissive={techBlue}
            emissiveIntensity={0.5}
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Outer Rings */}
        <group>
          <Ring radius={2.2} color={techBlue} rotationSpeed={{ x: 0.01, y: 0.02, z: 0.005 }} />
          <Ring radius={2.8} color={lightCyan} rotationSpeed={{ x: 0.015, y: -0.01, z: 0.01 }} />
          <Ring radius={3.5} color={techBlue} rotationSpeed={{ x: -0.005, y: 0.015, z: -0.015 }} />
        </group>
      </group>
    </>
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
          <SigoCoreScene />
        </Canvas>
      </div>
    </div>
  );
}
