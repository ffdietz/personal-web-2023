import { Stack } from "@chakra-ui/react";
import { BackgroundScene } from "../layout/background-scene";
import { About } from "../sections/about";
import { Contact } from "../sections/contact";
import { Hero } from "../sections/hero";
import { Technologies } from "../sections/technologies/technologies";
import { Works } from "../sections/works";

export function Home() {
  return (
    <Stack>
      <Stack w="full" h="100vh" position="fixed" zIndex={0} top={0}>
        <BackgroundScene />
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
