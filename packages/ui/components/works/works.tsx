import { Heading, Stack, Text } from "@chakra-ui/react";
import { experiences } from "@constants";

export function Works() {
  return (
    <Stack id="works" w="100vw" h="100vh" border="1px">
      <Heading as="h1">Works</Heading>
      <Stack>
        {experiences.map((experience)=> {
          return (
            <>
            <Text>{experience.title}</Text>
            <Text>{experience.date}</Text>
            </>
          );
        })}
      </Stack>
    </Stack>
  );
}
