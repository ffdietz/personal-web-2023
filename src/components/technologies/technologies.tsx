import { Flex, Image, Stack } from "@chakra-ui/react";
import { technologies } from "@content";


export function Technologies() {
  return (
    <Stack
      w="full"
      p={{ base: 0, md: 36 }}
      py={{ base: 28, md: 0 }}
    >
      <Flex
        w={{ base: "2xs", md: "xl" }}
        wrap="wrap"
        mx="auto"
        columnGap={4}
        rowGap={6}
        justifyContent="center"
        align="center"
      >
        {technologies.map((tech) => (
          <Image src={tech.icon} alt={tech.name} boxSize={14} key={tech.name} />
        ))}
      </Flex>
    </Stack>
  );
}
