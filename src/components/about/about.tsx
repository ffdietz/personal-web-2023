import { Flex, Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { Technologies } from "@components/technologies";
import { aboutText, sections } from "@content";

export function About() {
  const { id } = sections["about"];

  return (
    <Section id={id}>
      <Flex 
        w="auto" 
        pb={{base: 44, md:20 }}
        mx={{base: 0, md:72 }}
        columnGap={{base: 0, md:20 }}
      >
        <Text
          w={{ base: "xs", md: "xl" }}
          m="auto"
          fontSize={28}
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
