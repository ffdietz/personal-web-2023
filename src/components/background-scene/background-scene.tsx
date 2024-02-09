import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "./three-scene";
import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const BackgroundScene = () => {
  return (
    <Stack
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 4,
        },
      }}
      w="full"
      h="full"
      position="fixed"
      top={0}
      zIndex={-1}
      >
      <Canvas camera={{ position: [0, 0, 15] }}>
        <OrbitControls autoRotate enableZoom={false}/>
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <ThreeScene />
      </Canvas>
    </Stack>
  );
};
