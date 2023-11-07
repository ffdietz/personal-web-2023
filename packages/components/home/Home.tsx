import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Technologies } from "@components/technologies/Technologies";
import { Works } from "@components/works";

export function Home() {
  return (
    <Stack gap={0}>
      <Hero />
      <About />
      <Technologies />
      <Works />
      <Contact />
    </Stack>
  );
}
