import { Stack } from "@chakra-ui/react";
import { WorkCard } from "./work-card";
import { experiences } from "@constants";

export function Works() {
  return (
    <Stack
      id="works"
      w="50vw"
      h="90vh"
      justifyContent="center"
      alignItems="center"
      margin="auto"
    >
        {experiences.map((experience) => {
          return <WorkCard experience={experience} key={experience.title}/>;
        })}
    </Stack>
  );
}
