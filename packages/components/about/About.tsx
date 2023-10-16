import { Stack, Text } from "@chakra-ui/react";
import { biography } from "@constants";

export function About() {
  return (
    <Stack
      id="about"
      w="100vw"
      h="100vh"
      justifyContent="center"
      align="center"
      border="1px"
      borderColor={"red"}
    >
      <Text w="2xl" fontSize="2xl">
        {biography}
      </Text>
    </Stack>
  );
}
