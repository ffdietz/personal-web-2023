import { AnimatePresence, motion } from "framer-motion";
import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="100vw" h="90vh" m="auto" position="relative">
        <AnimatePresence>
          <Text
            as={motion.p}
            initial={{
              opacity: 0,
              filter: "blur(30px)"
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              transition:{
                type: "spring", duration: 3, delay: 1
              }
            }}
            position="absolute"
            top={96}
            right={56}
            fontSize="4xl"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {heroText}
          </Text>
        </AnimatePresence>
      </Stack>
    </Section>
  );
}
