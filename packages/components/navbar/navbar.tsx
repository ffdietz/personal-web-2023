import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@content";

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
    <Stack h="100vh" position="fixed" paddingLeft={20} marginTop={72}>
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
              fontSize={active === link.id ? 34 : 20}
              textAlign="right"
            >
              {link.title}
            </Text>
          </Link>
        );
      })}
    </Stack>
  );
}
