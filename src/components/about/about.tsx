import { Flex, Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { Technologies } from "@components/technologies";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections[0];

  return (
    <Section id={id}>
      <Flex w="full" 
        pb={{base: 44, md:20 }} 
        px={{base: 0, md:72 }}>
        <Text
          w={{ base: "xs", md: "xl" }}
          m="auto"
          fontSize={30}
          textAlign="left"
          fontWeight="bold"
          whiteSpace="pre-line"
          lineHeight={1.4}
        >
          {aboutText}
        </Text>
        <Technologies />
      </Flex>
    </Section>
  );
}
