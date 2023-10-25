import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { aboutText, sections } from "@content";

export function About() {
  return (
    <Section id={sections[0].id} title={sections[0].title}>
      <Stack
        id="about"
        w="100vw"
        h="100vh"
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
