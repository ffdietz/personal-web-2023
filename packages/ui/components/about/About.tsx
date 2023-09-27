import { Heading, Stack, Text } from "@chakra-ui/react";
import { biography } from "@constants";

export function About() {
  return (
    <Stack
      id="about"
      w="100vw"
      h="50vh"
      justifyContent="center"
      align="center"
      bg="red.900"
    >
      {/* <Heading>About</Heading> */}
      <Text w="2xl" fontSize="2xl">
        {biography}
      </Text>
    </Stack>
  );
}
