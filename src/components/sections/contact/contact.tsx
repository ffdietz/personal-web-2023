import { Box, Flex, Icon } from "@chakra-ui/react";
import { contact, sections } from "../../../content";
import { Section } from "../../layout/section";

export function Contact() {
  const { id } = sections[2];

  return (
    <Section id={id}>
      <Flex gap={24} py={72} mx="auto">
        {contact.map((item) => {
          return (
            <Box key={item.title}>
              <a href={item.link}>
                <Icon as={item.icon} boxSize={32} />
              </a>
            </Box>
          );
        })}
      </Flex>
    </Section>
  );
}
