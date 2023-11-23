import { AnimatePresence, motion } from "framer-motion";
import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { BackgroundScene } from "@components/background-scene";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Technologies } from "@components/technologies";
import { Works } from "@components/works";

export function Home() {
  return (
    <Stack>
      <AnimatePresence>
        <Stack
          as={motion.div}
          initial={{
            opacity: 0,
            // filter: "blur(30px)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1), transparent)",
          }}
          animate={{
            opacity: 1,
            // filter: "blur(0px)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))",
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
      <Stack gap={0} zIndex={1}>
        <Hero />
        <About />
        <Technologies />
        <Works />
        <Contact />
      </Stack>
    </Stack>
  );
}
