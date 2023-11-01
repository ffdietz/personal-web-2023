import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function HeroThreeContent() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref && ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += -0.001;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[10, 2, 3]} />
      <meshBasicMaterial color="green" wireframe />
    </mesh>
  );
}

export function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <HeroThreeContent />
    </Canvas>
  );
}
