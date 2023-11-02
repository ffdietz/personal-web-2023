import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";
import { HeroBackground } from "../hero-background";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="100vw" h="150vh" position="relative" zIndex={0} top={0}>
        <HeroBackground />
      </Stack>
      <Text
        position="absolute"
        zIndex={1}
        top={96}
        right={56}
        fontSize="4xl"
        fontWeight="bold"
        textTransform="uppercase"
        blendMode="difference"
      >
        {heroText}
      </Text>
    </Section>
  );
}
