import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { BackgroundScene } from "@components/background-scene";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Technologies } from "@components/technologies";
import { Works } from "@components/works";

export function Home() {
  return (
    <Stack>
      <Stack w="full" h="100vh" position="fixed" top={0}>
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
