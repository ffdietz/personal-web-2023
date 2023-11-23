import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import ThreeScene from "./three-scene";

export const BackgroundScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <OrbitControls autoRotate/>
      <ambientLight/>
      <pointLight position={[0, 0, 10]} />
      <ScrollControls pages={1}>
        <ThreeScene />
      </ScrollControls>
    </Canvas>
  );
};
