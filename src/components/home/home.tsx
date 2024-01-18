import { Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { BackgroundScene } from "@components/background-scene";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Works } from "@components/works";

export function Home() {
  return (
    <>
      <BackgroundScene/>
      <Stack gap={12} zIndex={1}>
        <Hero />
        <About />
        <Works />
        <Contact />
      </Stack>
    </>
  );
}
