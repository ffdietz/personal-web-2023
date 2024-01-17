import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { BackgroundScene } from "@components/background-scene";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Works } from "@components/works";
import { AnimatePresence, motion } from "framer-motion";

export function Home() {
  return (
    <Stack>
      <AnimatePresence>
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
        >
          <BackgroundScene />
        </Stack>
      </AnimatePresence>
      <Stack gap={12} zIndex={1}>
        <Hero />
        <About />
        <Works />
        <Contact />
      </Stack>
    </Stack>
  );
}
