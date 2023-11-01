import { Grid, Stack } from "@chakra-ui/react";
import { Section } from "@components/section";
import { WorkCard } from "./work-card";
import { experiences, sections } from "@content";

export function Works() {
  const { id } = sections[1];

  return (
    <Section id={id}>
      <Stack justifyContent="center" alignItems="center" h="100vh">
        <Grid templateColumns="repeat(3, 1fr)" rowGap={6} columnGap={1}>
          {experiences.map((experience) => (
            <WorkCard experience={experience} key={experience.title} />
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
