import { Flex, Image, Stack } from "@chakra-ui/react";
import { Section } from "@components/section";
import { technologies } from "@content";

export function Technologies() {
  return (
    <Section>
      <Stack w="full" py={{ base: 32, md: 36 }}>
        <Flex
          w={{ base: "xs", md: "xl" }}
          wrap="wrap"
          mx="auto"
          columnGap={4}
          rowGap={6}
          justifyContent="center"
          align="center"
        >
          {technologies.map((tech) => (
            <Image
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              boxSize={14}
            />
          ))}
        </Flex>
      </Stack>
    </Section>
  );
}
