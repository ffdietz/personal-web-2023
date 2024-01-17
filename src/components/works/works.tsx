import { Grid } from "@chakra-ui/react";
import { Section } from "@components/section";
import { experiences, sections } from "../../content";
import { WorkCard } from "./work-card";

export function Works() {
  const { id } = sections["works"];

  return (
    <Section id={id}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        rowGap={6}
        columnGap={4}
        py={{ base: 12, md: 16 }}
        mx="auto"
      >
        {experiences.map((experience) => (
          <WorkCard experience={experience} key={experience.title} />
        ))}
      </Grid>
    </Section>
  );
}
