import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";


export default function ThreeScene() {
  const ref = useRef<Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (ref && ref.current) {
      ref.current.rotation.x -= 0.00003;
      ref.current.rotation.y += 0.00005;
    }
    const offset = scroll.offset;
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
        <meshBasicMaterial wireframe color="darkgrey"/>
      </mesh>
  );
}
