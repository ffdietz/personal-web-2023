import { Center, Heading, Stack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Stack w="100vw" h="100vh">
      <Center h="full">
        <Heading as="h1" fontSize="6xl">
          Hero
        </Heading>
      </Center>
    </Stack>
  );
}
