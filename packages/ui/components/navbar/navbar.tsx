import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo/Logo";


export function Navbar() {
  return (
    <Flex bg="bgColor" minWidth="100vw" minHeight={38} padding={8}>
      <Logo />
      <Flex gap={8} >
        <Link href="">About</Link>
        <Link href="">Works</Link>
        <Link href="">Contact</Link>
      </Flex>
    </Flex>
  );
}
