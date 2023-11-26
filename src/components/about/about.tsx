import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack w="full" pt={{ base: 36, md: 52 }}>
        <Text
          w={{ base: "xs", md: "xl" }}
          m="auto"
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
        >
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
