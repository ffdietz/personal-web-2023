import { Stack } from "@chakra-ui/react";
import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Works } from "./works";


export default function Home() {
  return (
    <Stack gap={64}>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Stack>
  );
}
