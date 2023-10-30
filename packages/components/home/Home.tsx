import { Flex, Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Navbar } from "@components/navbar";
import { Works } from "@components/works";

export function Home() {
  return (
    <Flex>
      <Navbar />
      <Stack gap={0}>
        <Hero />
        <About />
        <Works />
        <Contact />
      </Stack>
    </Flex>
  );
}
