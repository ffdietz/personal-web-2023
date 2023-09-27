import { Flex, Heading, Stack } from "@chakra-ui/react";
import { experiences } from "@constants";
import { WorkCard } from "./work-card";

export function Works() {
  return (
    <Stack id="works" w="100vw" h="70vh" justifyContent="center" align="center">
      {/* <Heading as="h1">Works</Heading> */}
      <Flex>
        {experiences.map((experience) => {
          return <WorkCard experience={experience} />;
        })}
      </Flex>
    </Stack>
  );
}
