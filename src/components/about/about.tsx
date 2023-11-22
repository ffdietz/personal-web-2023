import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack w="auto" m="auto" pt={56}>
        <Text
          w="3xl"
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
          backdropFilter="auto"
          backdropBlur="5px"
        >
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
