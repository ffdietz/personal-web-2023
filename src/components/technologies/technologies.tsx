import { Flex, Image, Stack } from "@chakra-ui/react";
import { Section } from "@components/section";
import { technologies } from "@content";

export function Technologies() {
  return (
    <Section>
      <Stack w="full" h="full">
        <Flex
          w="xs"
          h="full"
          wrap="wrap"
          columnGap={6}
          rowGap={8}
          justifyContent="center"
          align="center"
        >
          {technologies.map((tech) => (
            <Image
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              boxSize={16}
            />
          ))}
        </Flex>
      </Stack>
    </Section>
  );
}
