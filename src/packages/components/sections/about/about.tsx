import { Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { aboutText, sections } from "../../../content";
import { Section } from "../../layout/section";

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
