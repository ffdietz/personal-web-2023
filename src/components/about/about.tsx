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
        flexDir={{ base: "column", md: "row" }}
        pb={20}
        mx="auto"
        px={{base:"none", md:64 }}
        py={{base:44, md:64 }}
        columnGap={{ base: 0, md: 10 }}
        rowGap={{ base: 20, md:0 }}
      >
        <Text
          w={{ base: "2xs", md: "xl" }}
          m="auto"
          fontSize={{base:22, md:28}}
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
