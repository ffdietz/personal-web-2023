import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import { ScrollControls, useScroll } from "@react-three/drei"

function HeroThreeScene() {
  const ref = useRef<Mesh>(null);
  const scroll = useScroll()

  useFrame((state) => {
    if (ref && ref.current) {
      ref.current.rotation.x += 0.001
      ref.current.rotation.y += -0.0009
    }
    const offset = scroll.offset
    state.camera.position.set(
      Math.sin(offset) * 10,
      Math.atan(offset * Math.PI * 2) * -20,
      Math.cos((offset * Math.PI) / 3) * 10
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[10, 2, 200]} />
      <meshBasicMaterial
        wireframe
        color="darkgrey"
      />
    </mesh>
  );
}

export function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <ScrollControls pages={1}>
        <HeroThreeScene />
      </ScrollControls>
    </Canvas>
  );
}
