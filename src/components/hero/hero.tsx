import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";
import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="full" m="auto" position="relative" py={96}>
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
            position="absolute"
            w={{ base: "2xs", md: "full" }}
            top="50%"
            right={{ base: 8, md: 28 }}
            fontSize="5xl"
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
