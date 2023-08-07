import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo/logo";

import { navLinks } from "@constants";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const section = document.getElementById(targetId);
    window.scrollTo({
      top: section?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      bg="bgColor"
      justifyContent="space-between"
      minWidth="100vw"
      minH={32}
      position="fixed"
      top={0}
      px={28}
      py={8}
    >
      <Box
        cursor="pointer"
        onClick={() => {
          setActive("");
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        <Logo />
      </Box>
      <Flex gap={8}>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.title}
              href={`#${link.id}`}
              onClick={(event) => {
                handleScroll(event);
                setActive(link.id);
              }}
            >
              <Text
                color={active === link.id ? "secondaryColor" : "textColor"}
                fontSize={20}
                textShadow="1px 1px accentColor"
              >
                {link.title}
              </Text>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
