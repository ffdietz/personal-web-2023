import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack
        w="100vw"
        h="90vh"
        justifyContent="center"
        align="center"
      >
        <Text w="2xl" fontSize="2xl">
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
