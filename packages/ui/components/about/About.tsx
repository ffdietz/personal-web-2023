import { Heading, Stack, Text } from "@chakra-ui/react";
import { biography } from "@constants";

export function About() {
  return (
    <Stack
      id="about"
      w="100vw"
      h="100vh"
    >
      <Heading>About</Heading>
      <Text w="lg" fontSize="4xl">
        {biography}
      </Text>
    </Stack>
  );
}
