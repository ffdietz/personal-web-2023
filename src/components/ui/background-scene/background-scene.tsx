import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import ThreeScene from "./three-scene";

export const BackgroundScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <ScrollControls pages={1}>
        <ThreeScene />
      </ScrollControls>
    </Canvas>
  );
};