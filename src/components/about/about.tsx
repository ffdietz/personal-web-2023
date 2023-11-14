import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/ui/section";
import { aboutText, sections } from "@content";
import { motion } from "framer-motion";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack as={motion.div} w="auto" m="auto" pt={56}>
        <Text
          w="3xl"
          fontSize="2xl"
          textAlign="center"
          backgroundColor="#000000AA"
          backdropFilter="auto"
          backdropBlur="20px"
        >
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
