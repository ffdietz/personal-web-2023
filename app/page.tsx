"use client";
import { Flex, Stack } from "@chakra-ui/react";
import { About } from "@components/about";
import { Contact } from "@components/contact";
import { Hero } from "@components/hero";
import { Navbar } from "@components/navbar";
import { Works } from "@components/works";
import { useRef, useState } from "react";
import { inView } from "framer-motion"


export default function Page() {
  return (
    <Flex>
      <Navbar />
      <Stack gap={64}>
        <Hero />
        <About />
        <Works />
        <Contact />
      </Stack>
    </Flex>
  );
}
