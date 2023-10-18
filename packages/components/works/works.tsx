import { Grid, Stack } from "@chakra-ui/react";
import { experiences } from "@content";
import { WorkCard } from "./work-card";

export function Works() {
  return (
    <Stack id="works" justifyContent="center" alignItems="center" h="100vh">
      <Grid templateColumns="repeat(3, 1fr)" rowGap={6} columnGap={1}>
        {experiences.map((experience) => {
          return <WorkCard experience={experience} key={experience.title} />;
        })}
      </Grid>
    </Stack>
  );
}
