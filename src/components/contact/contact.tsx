import { Box, Flex, Icon } from "@chakra-ui/react";
import { Section } from "@components/section";
import { contact, sections } from "@content";

export function Contact() {
  const { id } = sections["contact"];

  return (
    <Section id={id}>
      <Flex
        flexDir={{base: "column", md: "row"}}
        columnGap={32}
        rowGap={20}
        py={{ base:36, md:64 , "2xl":96}}
        mx="auto"
      >
        {contact.map((item) => {
          return (
            <a href={item.link} key={item.title}>
              <Flex
                w="3xs"
                justifyContent={{base:"space-between", md:"center"}}
                alignItems="center"
                gap={{base:12, "2xl":32}}
              >
                <Icon as={item.icon} boxSize={{base: 20, md: 32, "2xl":48}} m="auto"/>
              </Flex>
            </a>
          );
        })}
      </Flex>
    </Section>
  );
}
