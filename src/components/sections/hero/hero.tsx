import { Stack, Text } from "@chakra-ui/react";
import { heroText } from "../../../content";
import { Section } from "../../layout/section";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="100vw" h="100vh" m="auto" position="relative" bg="transparent">
        <Text
          position="absolute"
          top={96}
          right={56}
          fontSize="4xl"
          fontWeight="bold"
          textTransform="uppercase"
          blendMode="difference"
        >
          {heroText}
        </Text>
      </Stack>
    </Section>
  );
}