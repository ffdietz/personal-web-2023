import { Flex, Image, Stack } from "@chakra-ui/react";
import { technologies } from "../../../content";

export function Technologies() {
  return (
    <Stack w="auto" p={32}>
      <Flex
        w="xl"
        wrap="wrap"
        mx="auto"
        columnGap={8}
        rowGap={6}
        justifyContent="center"
      >
        {technologies.map((tech) => (
          <Image src={tech.icon} alt={tech.name} boxSize={10} key={tech.name} />
        ))}
      </Flex>
    </Stack>
  );
}
