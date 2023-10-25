import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TLink } from '@types';

export function NavLink({ link, isActive }:{ link: TLink, isActive: boolean }) {

  return (
    <Link
      key={link.title}
      href={`#${link.id}`}
      scroll={false}
      passHref
      onClick={(event) => {
        event.preventDefault();
        document
          .getElementById(link.id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <Text
        as={motion.span}
        color={isActive ? "secondaryColor" : "textColor"}
        fontSize={isActive ? 34 : 20}
        textAlign="right"
      >
        {link.title}
      </Text>
    </Link>
  );
}