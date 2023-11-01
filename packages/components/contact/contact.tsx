import { Box, Flex, Icon } from "@chakra-ui/react";
import { Section } from "@components/section";
import { contact, sections } from "@content";

export function Contact() {
  const { id } = sections[2];
  
  return (
    <Section id={id}>
      <Flex w="100vw" h="100vh" justifyContent="center" align="center" gap={24}>
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
