import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { technologies } from "@content";

export function Technologies() {
  return (
    <Stack h="50vh" align="center">
      <Flex
        w="50vw"
        h="30vh"
        wrap="wrap"
        justifyContent="center"
        align="center"
        gap={8}
      >
        {technologies.map((tech) => 
          <Image src={tech.icon} boxSize={16} key={tech.name} />
        )}
      </Flex>
    </Stack>
  );
}
