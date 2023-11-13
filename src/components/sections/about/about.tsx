import { motion } from "framer-motion";
import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/layout/section";
import { sections, aboutText } from "@content";


export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack as={motion.div} w="auto" m="auto" pt={0}>
        <Text
          w="3xl"
          fontSize="2xl"
          textAlign="center"
          backdropFilter="auto"
          backdropBlur="6px"
        >
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
