import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { HeroBackground } from "@components/hero-background";
import { Technologies } from "@components/technologies/Technologies";
import { Works } from "@components/works";

export function Home() {
  return (
    <Stack>
      <Stack w="full" h="100vh" position="fixed" zIndex={0} top={0}>
        <HeroBackground />
      </Stack>
      <Stack gap={0} zIndex={1}>
        <Hero />
        <About />
        <Technologies />
        <Works />
        <Contact />
      </Stack>
    </Stack>
  );
}
