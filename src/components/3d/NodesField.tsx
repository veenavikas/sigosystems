"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Nodes() {
  const group = useRef<THREE.Group>(null);
  
  const nodeCount = 50;
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodeCount; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ));
    }
    return temp;
  }, [nodeCount]);

  // Create lines connecting close nodes
  const linesGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 6) {
          points.push(nodes[i]);
          points.push(nodes[j]);
        }
      }
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodes]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#00e5ff" transparent opacity={0.15} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshBasicMaterial color="#4f46e5" />
        </mesh>
      ))}
    </group>
  );
}

export function NodesField() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-transparent z-0" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent z-0">
      <Canvas camera={{ fov: 45, position: [0, 0, 15] }}>
        <Nodes />
      </Canvas>
      <div className="absolute inset-0 bg-transparent pointer-events-none" />
    </div>
  );
}
