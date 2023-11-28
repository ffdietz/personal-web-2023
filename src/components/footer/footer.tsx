import { Center, Text } from "@chakra-ui/react";
import { Section } from "@components/section";

export function Footer() {
  return (
    <Section>
      <Center py={4} backgroundBlendMode="difference" fontWeight="extrabold">
        <Text color="white">[ Felipe Fierro Dietz 2024 ]</Text>
      </Center>
    </Section>
  );
}
