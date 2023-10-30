import { Center, Stack, Text } from "@chakra-ui/react";
import { Section } from "@components/section";
import { heroText } from "@content";

export function Hero() {
  return (
    <Section id="#">
      <Stack w="100vw" h="100vh">
        <Center h="full">
          <Text w="sm" fontSize="4xl">
            {heroText}
          </Text>
        </Center>
      </Stack>
    </Section>
  );
}
