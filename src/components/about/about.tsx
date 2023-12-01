import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Stack w="full" pt={{ base: 44, md: 52 }}>
        <Text
          w={{ base: "xs", md: "xl" }}
          m="auto"
          fontSize="2xl"
          textAlign="left"
          fontWeight="bold"
          whiteSpace="pre-line"
          lineHeight={1.4}
        >
          {aboutText}
        </Text>
      </Stack>
    </Section>
  );
}
