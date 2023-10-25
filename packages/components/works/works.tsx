import { Grid, Stack } from "@chakra-ui/react";
import { Section } from "@components/section";
import { experiences, sections } from "@content";
import { WorkCard } from "./work-card";

export function Works() {
  return (
    <Section id={sections[1].id}>
      <Stack id="works" justifyContent="center" alignItems="center" h="100vh">
        <Grid templateColumns="repeat(3, 1fr)" rowGap={6} columnGap={1}>
          {experiences.map((experience) => {
            return <WorkCard experience={experience} key={experience.title} />;
          })}
        </Grid>
      </Stack>
    </Section>
  );
}
