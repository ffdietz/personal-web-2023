import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo/logo";

import { navLinks } from "@constants";

export function Navbar() {

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()
  const targetId = e.currentTarget.href.replace(/.*\#/, "");
  const section = document.getElementById(targetId);
  window.scrollTo({
    top: section?.getBoundingClientRect().top,
    behavior: "smooth",
  });
};

  return (
    <Flex bg="bgColor" minWidth="100vw" minHeight={38} padding={8}>
      <Logo />
      <Flex gap={8}>
        {navLinks.map((link) => (
          <Link key={link.title} href={`#${link.id}`} onClick={handleScroll}>
            {link.title}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
