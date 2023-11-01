import { Flex, Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { HeroBackground } from "@components/hero/hero-background";
import { Navbar } from "@components/navbar";
import { Technologies } from "@components/technologies/Technologies";
import { Works } from "@components/works";

export function Home() {
  return (
    <Flex>
      <Navbar />
      <Stack gap={0}>
        <Hero />
        <About />
        <Technologies />
        <Works />
        <Contact />
      </Stack>
    </Flex>
  );
}
