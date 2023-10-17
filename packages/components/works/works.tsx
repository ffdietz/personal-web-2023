import { Flex, Grid, Stack } from "@chakra-ui/react";
import { WorkCard } from "./work-card";
import { experiences } from "@constants";

export function Works() {
  return (
    <Stack id="works" justifyContent="center" alignItems="center" margin="auto">
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        {experiences.map((experience) => {
          return <WorkCard experience={experience} key={experience.title} />;
        })}
      </Grid>
    </Stack>
  );
}
