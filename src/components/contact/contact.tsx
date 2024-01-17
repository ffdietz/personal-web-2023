import { Box, Flex, Icon, Text, useBreakpoint } from "@chakra-ui/react";
import { Section } from "@components/section";
import { contact, sections } from "@content";

export function Contact() {
  const { id } = sections["contact"];

  return (
    <Section id={id}>
      <Box
        display="flex"
        flexDir={{base: "column", md: "row"}}
        gap={{ base:20, md:18 }}
        py={{ base:28, md:72 }}
        mx="auto"
      >
        {contact.map((item) => {
          return (
            <a href={item.link} key={item.title}>
              <Flex
                w="3xs"
                justifyContent={{base:"space-between", md:"center"}}
                alignItems="center"
                gap={12}
              >
                <Icon as={item.icon} boxSize={{base: 20, md: 32}} m="auto"/>
              </Flex>
            </a>
          );
        })}
      </Box>
    </Section>
  );
}
