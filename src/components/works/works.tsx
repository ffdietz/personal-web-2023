import { Grid } from "@chakra-ui/react";
import { experiences, sections } from "../../content";
import { WorkCard } from "./work-card";
import { Section } from "@components/section";

export function Works() {
  const { id } = sections[1];

  return (
    <Section id={id}>
      <Grid
        templateColumns={{ base:"1fr", md:"repeat(3, 1fr)" }}
        rowGap={6}
        columnGap={4}
        py={{ base:0, md:16 }}
        // pl={{ base:0, md:20 }}
        mx="auto"
      >
        {experiences.map((experience) => (
          <WorkCard experience={experience} key={experience.title} />
        ))}
      </Grid>
    </Section>
  );
}
