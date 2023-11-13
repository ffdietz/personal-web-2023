import { Stack } from "@chakra-ui/react";
import { About } from "@components/sections/about";
import { Contact } from "@components/sections/contact";
import { Hero } from "@components/sections/hero";
import { Technologies } from "@components/sections/technologies";
import { Works } from "@components/sections/works";
import { BackgroundScene } from "@components/layout/background-scene";

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
