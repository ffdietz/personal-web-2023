import Link from "next/link";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
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
        animate={{
          color: isActive ? "#FF0DA4" : "#C9FF00",
          fontSize: isActive ? "4rem" : "1.5rem",
        }}
        textAlign="right"
      >
        {link.title}
      </Text>
    </Link>
  );
}