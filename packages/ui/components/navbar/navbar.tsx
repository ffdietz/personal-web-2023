import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
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
      position="fixed"
      top={0}
      px={16}
      py={8}
    >
      <Link
        href="/"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <Logo />
      </Link>
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
