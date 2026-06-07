import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Building({ position, height, color }: { position: [number, number, number]; height: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
      <mesh ref={ref} position={[position[0], height / 2, position[2]]} castShadow receiveShadow>
        <boxGeometry args={[0.8, height, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} emissive={color} emissiveIntensity={0.05} />
      </mesh>
    </Float>
  );
}

function City() {
  const group = useRef<THREE.Group>(null);
  const buildings = useMemo(() => {
    const arr: { pos: [number, number, number]; h: number; c: string }[] = [];
    const palette = ["#0f172a", "#1e293b", "#334155", "#475569", "#d4af37"];
    for (let x = -5; x <= 5; x++) {
      for (let z = -5; z <= 5; z++) {
        if (Math.abs(x) < 1 && Math.abs(z) < 1) continue;
        const h = 1 + Math.random() * 5 + (5 - Math.hypot(x, z)) * 0.3;
        arr.push({ pos: [x * 1.1, 0, z * 1.1], h: Math.max(0.8, h), c: palette[Math.floor(Math.random() * palette.length)] });
      }
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      {buildings.map((b, i) => (
        <Building key={i} position={b.pos} height={b.h} color={b.c} />
      ))}
      {/* central tower */}
      <mesh position={[0, 4, 0]} castShadow>
        <boxGeometry args={[1.2, 8, 1.2]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.15} emissive="#d4af37" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 8.4, 0]} castShadow>
        <coneGeometry args={[0.7, 1.4, 4]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#0a0f1c" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

export function CityScene({ interactive = true }: { interactive?: boolean }) {
  return (
    <Canvas shadows camera={{ position: [10, 9, 12], fov: 45 }} dpr={[1, 2]}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#0a0f1c", 18, 40]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 15, 5]} intensity={1.2} castShadow color="#fff5e0" />
      <pointLight position={[0, 10, 0]} intensity={1} color="#d4af37" />
      <City />
      <Environment preset="city" />
      {interactive && <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 4} />}
    </Canvas>
  );
}
