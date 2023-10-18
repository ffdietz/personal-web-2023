import { Box, Flex, Icon } from "@chakra-ui/react";
import { contact } from "@content";

export function Contact() {
  return (
    <Flex
      id="contact"
      w="100vw"
      h="100vh"
      justifyContent="center"
      align="center"
      gap={24}
    >
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
  );
}
