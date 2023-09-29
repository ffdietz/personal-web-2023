import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { contact } from "@constants"


export function Contact() {
  return (
    <Flex
      id="contact"
      w="100vw"
      h="100vh"
      justifyContent="center"
      align="center"
      gap={16}
    >
        {contact.map((item) => {
          return (
            <Box key={item.title}>
              {/* <Text>{item.title}</Text> */}
              <Icon as={item.icon} boxSize={64} />
            </Box>
          );
        })}
    </Flex>
  );
}
