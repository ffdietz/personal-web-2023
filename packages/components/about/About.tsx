import { Stack, Text } from "@chakra-ui/react";
import { aboutText } from "@content";

export function About() {
  return (
    <Stack
      id="about"
      w="100vw"
      h="100vh"
      justifyContent="center"
      align="center"
    >
      <Text w="2xl" fontSize="2xl">
        {aboutText}
      </Text>
    </Stack>
  );
}
