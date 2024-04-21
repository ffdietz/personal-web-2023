import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";
import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  return (
    <Section id="#">
      <Stack
        w="full"
        m="auto"
        py={{ base: 72, "2xl": 96 }}
        px={{ base: 12, md: 32, "2xl": 96 }}
        my={{ base: 12, "2xl": 40 }}
      >
        <AnimatePresence>
          <Text
            as={motion.p}
            initial={{
              opacity: 0,
              filter: "blur(30px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                duration: 3,
                delay: 1,
              },
            }}
            w={{ base: "auto", md: "full" }}
            fontSize={{ base: "4xl", md: "5xl", xl: "7xl" }}
            fontWeight="bold"
            textAlign="right"
            textTransform="uppercase"
          >
            {heroText}
          </Text>
        </AnimatePresence>
      </Stack>
    </Section>
  );
}
