<<<<<<< Updated upstream
import React from 'react'

export function About() {
  return (
    <div>About</div>
=======
import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { biography } from "@constants";

export function About() {
  return (
    <Stack id="about" w="100vw" h="100vh" border="1px" paddingTop={32}>
      <Heading>About</Heading>
      <Center>
        <Text as="h1" w="lg">{biography}</Text>
      </Center>
    </Stack>
>>>>>>> Stashed changes
  )
}
