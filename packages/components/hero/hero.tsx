import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="100vw" h="100vh" position="relative">
        <Stack w="full" h="full" zIndex={0} top={0}>
          <HeroBackground />
        </Stack>
        <Stack
          position="absolute"
          bg="transparent"
          zIndex={1}
          top="50vh"
          left="50vw"
        >
          <Text w="sm" fontSize="4xl">
            {heroText}
          </Text>
        </Stack>
      </Stack>
    </Section>
  );
}
