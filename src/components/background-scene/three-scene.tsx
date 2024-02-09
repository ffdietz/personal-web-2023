import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";


export default function ThreeScene() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref && ref.current) {
      ref.current.rotation.x -= 0.0003;
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[10, 2, 200]} />
      <meshBasicMaterial wireframe color="darkgrey" transparent opacity={0.35}/>
    </mesh>
  );
}
